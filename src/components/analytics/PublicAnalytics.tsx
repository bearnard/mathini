import { GTM_NOSCRIPT_URL } from '../../lib/consent/gtmConsent';
import { adsCss, adsPrePaintScript } from '../../lib/ads/adsense';
import ConsentGtm from './ConsentGtm';
import AdsLoader from './AdsLoader';

/**
 * Tag Manager and AdSense for the public pages: the consent banner and loaders (client), the standard <noscript> iframe (server, in the body), and the
 * before-paint marker that reserves ad space for a visitor who already accepted.
 * Rendered ONLY by PublicShell, the home page and the privacy page. Never add it to a layout, the app or a signed-in area.
 */
export default function PublicAnalytics() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: adsCss() }} />
      <script dangerouslySetInnerHTML={{ __html: adsPrePaintScript() }} />
      <noscript>
        <iframe src={GTM_NOSCRIPT_URL} height="0" width="0" style={{ display: 'none', visibility: 'hidden' }} title="Google Tag Manager" />
      </noscript>
      <ConsentGtm />
      <AdsLoader />
    </>
  );
}
