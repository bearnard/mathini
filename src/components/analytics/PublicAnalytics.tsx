import { GTM_NOSCRIPT_URL } from '../../lib/consent/gtmConsent';
import ConsentGtm from './ConsentGtm';

/**
 * Tag Manager for the public marketing pages: the consent banner and loader (client) and the standard <noscript> iframe (server, in the body).
 * Rendered ONLY by PublicShell, the home page and the privacy page. Never add it to a layout, the app or a signed-in area.
 */
export default function PublicAnalytics() {
  return (
    <>
      <noscript>
        <iframe src={GTM_NOSCRIPT_URL} height="0" width="0" style={{ display: 'none', visibility: 'hidden' }} title="Google Tag Manager" />
      </noscript>
      <ConsentGtm />
    </>
  );
}
