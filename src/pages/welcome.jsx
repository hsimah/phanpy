import './welcome.css';

import { Trans, useLingui } from '@lingui/react/macro';

import boostsCarouselUrl from '../assets/features/boosts-carousel.jpg';
import catchupUrl from '../assets/features/catch-up.png';
import multiColumnUrl from '../assets/features/multi-column.jpg';
import multiHashtagTimelineUrl from '../assets/features/multi-hashtag-timeline.jpg';
import nestedCommentsThreadUrl from '../assets/features/nested-comments-thread.jpg';
import logo from '../assets/pulsr-logo.jpg';
import logoText from '../assets/logo-text.png';
import homeMobileDark from '../assets/screenshots/home-mobile-dark@2x.png';
import homeMobileLight from '../assets/screenshots/home-mobile-light@2x.png';
import homeTabletDark from '../assets/screenshots/home-tablet-dark@2x.png';
import homeTabletLight from '../assets/screenshots/home-tablet-light@2x.png';

import LangSelector from '../components/lang-selector';
import Link from '../components/link';
import states from '../utils/states';
import useTitle from '../utils/useTitle';

const {
  PHANPY_DEFAULT_INSTANCE: DEFAULT_INSTANCE,
  PHANPY_WEBSITE: WEBSITE,
  PHANPY_PRIVACY_POLICY_URL: PRIVACY_POLICY_URL,
  PHANPY_DEFAULT_INSTANCE_REGISTRATION_URL: DEFAULT_INSTANCE_REGISTRATION_URL,
} = import.meta.env;
const appSite = WEBSITE
  ? WEBSITE.replace(/https?:\/\//g, '').replace(/\/$/, '')
  : null;
const sameSite = WEBSITE
  ? WEBSITE.toLowerCase().includes(location.hostname)
  : false;
const appVersion = __COMMIT_TIME__
  ? `${__COMMIT_TIME__.slice(0, 10).replace(/-/g, '.')}${__COMMIT_HASH__ ? `.${__COMMIT_HASH__}` : ''
  }`
  : null;

function Welcome() {
  const { t } = useLingui();
  useTitle(null, ['/', '/welcome']);
  return (
    <main id="welcome">
      <div class="hero-container">
        <div class="hero-content">
          <h1>
            <img src={logo} alt="" width="30%" height="30%" />
          </h1>
          <p class="desc">
            <Trans>pulsr | A social media platform for pomskies.</Trans>
          </p>
          <p>
            <Link
              to={
                DEFAULT_INSTANCE
                  ? `/login?instance=${DEFAULT_INSTANCE}&submit=1`
                  : '/login'
              }
              class="button plain6"
            >
              {DEFAULT_INSTANCE ? t`Log in` : t`Log in with Mastodon`}
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}

export default Welcome;
