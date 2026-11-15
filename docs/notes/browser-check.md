# Browser check (screenshots, overflow, console errors)

Use `scripts/shoot.ts` for every browser check. Do not write your own CDP driver and do not call `chromium` by hand.

```
node --import tsx scripts/shoot.ts [--widths 390,1280] [--out DIR] [--timeout MS] [--settle MS] [--stub-api] [--no-warmup] URL...
```

- Each URL is shot at every width (default 390 and 1280) as a full-page PNG in `--out` (default `shots/`), plus `report.json`.
- A page FAILS if it times out (default 60 s per page), has `scrollWidth > clientWidth`, or logs a console error, an exception or a failed request. The exit code is 1 if any page fails, 2 for bad arguments.
- `--wait-for 'main h1'` waits until that selector exists before measuring (for pages that render after a fetch); it counts against the per-page timeout.
- `--stub-api` answers `/api/*` with empty JSON so lessons render without a database. `localhost` is rewritten to `127.0.0.1`.
- The first request to each URL is made with `fetch` before the browser visit, so Next dev finishes compiling that page first. Pass `--no-warmup` for non-HTTP URLs.
- `SHOOT_MOCKS=file.json` (env var) answers chosen requests with your own JSON, for pages that need real-looking API data (for example /admin pages with `ADMIN_DEV_BYPASS=1`): `[{ "match": "/api/admin/reviews/1", "body": {...}, "status": 200 }]`. A URL containing `match` gets that body; the longest match wins; everything else follows `--stub-api` or goes to the network.
- Before each screenshot the script scrolls the page down and back and waits two frames: Chromium paints content far below the fold lazily, and a full-page capture taken at once could show an SVG chart (the test-history chart) as an empty box although the page was complete (the DOM was checked: it was never empty, and 18 loads showed the chart every time). With the scroll, repeated runs give identical pictures.
- Each run uses a fresh temporary profile and its own Chromium, on a free debugging port, and kills it on exit, so runs never share a profile or leave processes behind.

Typical lesson check (a throwaway preview page, as in `docs/notes/lesson-standard.md`):

```
npx next dev --webpack -p 3147 &            # stop later with: fuser -k 3147/tcp
node --import tsx scripts/shoot.ts --stub-api --out /tmp/shots 127.0.0.1:3147/zz-preview?l=fh
```

If a page needs steps (clicking Next through slides), shoot a static render or one URL per step. Never `pkill -f`.

## Why Chromium hung on this machine

Symptom: `Page.navigate` to any `http://` URL (even `python3 -m http.server`) never returned, the server never saw a request, and `Runtime.evaluate` timed out. `file:` and `data:` pages worked, which is why it looked random.

Root cause: Chromium reads its cookie-encryption key from the desktop secret service over D-Bus. Here `gnome-keyring-daemon` is running with a locked keyring, so the request waits for an unlock prompt that nobody sees in a headless run. The network service blocks on it, so every http(s) request stalls, while pages that need no network work. The user's `~/.config/chromium-flags.conf` also adds `--password-store=gnome-libsecret` (and wayland and extension flags) to every launch through `/usr/bin/chromium`.

Evidence (same binary, same server, 12 s navigate limit):

| Run | Result |
| --- | --- |
| default flags, with or without `--no-sandbox`, `--disable-gpu`, `--disable-extensions`, `--no-proxy-server`, `--ozone-platform=headless`, direct `/usr/lib/chromium/chromium` | hang |
| `DBUS_SESSION_BUS_ADDRESS` unset | page loaded in about 25 ms |
| `DBUS_SESSION_BUS_ADDRESS=unix:path=/nonexistent` | page loaded |
| `--password-store=basic` (through `/usr/bin/chromium` too) | page loaded |
| `localhost` instead of `127.0.0.1`, with the fix | page loaded |

So the fix is `--password-store=basic`; the wayland/ozone flags, sandbox, GPU, profile locking, IPv6 and the Next dev compile are not the cause. Next dev's first compile of a page can take tens of seconds, which is why the script warms the URL up first and has a generous per-page timeout.

Side notes:
- If you must launch Chromium yourself, add `--password-store=basic --use-mock-keychain --user-data-dir=<fresh dir>`.
- A hung run may leave an unlock prompt for the keyring on the desktop session; dismissing it is harmless.
- Next 16 dev blocks the HMR websocket for `127.0.0.1`, which logs a console error; the script ignores it (and favicon noise).
- Leftover processes: `ps -eo pid,etime,args | grep -E 'chromium|next dev'`. Only stop your own, by port with `fuser -k PORT/tcp`.
