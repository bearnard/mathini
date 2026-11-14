import { test } from 'node:test';
import assert from 'node:assert/strict';
import { isBot, parseUserAgent } from './ua';

const CHROME_ANDROID = 'Mozilla/5.0 (Linux; Android 13; SM-A135F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Mobile Safari/537.36';
const SAFARI_IPHONE = 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.4 Mobile/15E148 Safari/604.1';
const SAFARI_IPAD = 'Mozilla/5.0 (iPad; CPU OS 17_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.4 Mobile/15E148 Safari/604.1';
const ANDROID_TABLET = 'Mozilla/5.0 (Linux; Android 12; SM-T500) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36';
const FIREFOX_WIN = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:125.0) Gecko/20100101 Firefox/125.0';
const CHROME_LINUX = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36';
const EDGE_WIN = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36 Edg/124.0.0.0';
const SAMSUNG = 'Mozilla/5.0 (Linux; Android 13; SM-S911B) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/24.0 Chrome/117.0.0.0 Mobile Safari/537.36';
const SAFARI_MAC = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.4 Safari/605.1.15';

test('Chrome on an Android phone', () => {
  assert.deepEqual(parseUserAgent(CHROME_ANDROID), { device: 'mobile', browser: 'Chrome', os: 'Android' });
});
test('Safari on an iPhone', () => {
  assert.deepEqual(parseUserAgent(SAFARI_IPHONE), { device: 'mobile', browser: 'Safari', os: 'iOS' });
});
test('iPad is a tablet', () => {
  assert.equal(parseUserAgent(SAFARI_IPAD).device, 'tablet');
});
test('Android without "Mobile" is a tablet', () => {
  assert.deepEqual(parseUserAgent(ANDROID_TABLET), { device: 'tablet', browser: 'Chrome', os: 'Android' });
});
test('Firefox on Windows is desktop', () => {
  assert.deepEqual(parseUserAgent(FIREFOX_WIN), { device: 'desktop', browser: 'Firefox', os: 'Windows' });
});
test('Chrome on Linux', () => {
  assert.deepEqual(parseUserAgent(CHROME_LINUX), { device: 'desktop', browser: 'Chrome', os: 'Linux' });
});
test('Edge is Edge, not Chrome', () => {
  assert.equal(parseUserAgent(EDGE_WIN).browser, 'Edge');
});
test('Samsung Internet is not reported as Chrome', () => {
  assert.equal(parseUserAgent(SAMSUNG).browser, 'Samsung Internet');
});
test('Safari on macOS', () => {
  assert.deepEqual(parseUserAgent(SAFARI_MAC), { device: 'desktop', browser: 'Safari', os: 'macOS' });
});
test('no version numbers and no raw UA leak into the result', () => {
  const out = JSON.stringify(parseUserAgent(CHROME_ANDROID));
  assert.ok(!/\d/.test(out));
  assert.ok(!out.includes('Mozilla'));
});
test('empty or unknown UA gives Other / desktop', () => {
  assert.deepEqual(parseUserAgent(''), { device: 'desktop', browser: 'Other', os: 'Other' });
  assert.deepEqual(parseUserAgent(null), { device: 'desktop', browser: 'Other', os: 'Other' });
});

test('bots are detected', () => {
  for (const ua of [
    'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
    'Mozilla/5.0 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)',
    'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/124.0.0.0 Safari/537.36',
    'curl/8.5.0',
    'python-requests/2.31.0',
    'facebookexternalhit/1.1',
    'Mozilla/5.0 (compatible; AhrefsBot/7.0)',
    'Lighthouse',
  ]) {
    assert.equal(isBot(ua), true, ua);
  }
});
test('empty UA counts as a bot', () => {
  assert.equal(isBot(''), true);
  assert.equal(isBot(undefined), true);
});
test('real browsers are not bots', () => {
  for (const ua of [CHROME_ANDROID, SAFARI_IPHONE, FIREFOX_WIN, EDGE_WIN, SAFARI_MAC, SAMSUNG]) {
    assert.equal(isBot(ua), false, ua);
  }
});
test('a Cloudflare verified bot category marks a bot even with a browser UA', () => {
  assert.equal(isBot(CHROME_ANDROID, 'Search Engine Crawler'), true);
  assert.equal(isBot(CHROME_ANDROID, undefined), false);
});
