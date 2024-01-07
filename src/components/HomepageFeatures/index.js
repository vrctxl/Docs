import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import the FontAwesomeIcon component.
import { library } from '@fortawesome/fontawesome-svg-core'; // Import the library component.
import { fas } from '@fortawesome/free-solid-svg-icons'; // Import all solid icons.

library.add(fas); // Add all icons to the library so you can use them without importing them individually.

const FeatureList = [
  {
    title: 'CommonTXL',
    // Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    icon: 'fa-solid fa-code',
    iconColor: styles.colorYellow,
    url: 'docs/common-txl',
    description: (
      <>
        Common components and base classes for TXL projects.
      </>
    ),
  },
  {
    title: 'VideoTXL',
    icon: 'fa-solid fa-film',
    iconColor: styles.colorBlue,
    url: 'docs/video-txl',
    description: (
      <>
        Highly configurable general purpose sync and non-sync video players.
      </>
    ),
  },
  {
    title: 'AccessTXL',
    icon: 'fa-solid fa-key',
    iconColor: styles.colorRed,
    url: 'docs/access-txl',
    description: (
      <>
        Additional controls, access sources, and tools that build on the basic Access Control model.
      </>
    ),
  },
  {
    title: 'PlayerAudioTXL',
    icon: 'fa-solid fa-microphone',
    iconColor: styles.colorGreen,
    url: 'docs/player-audio-txl',
    description: (
      <>
        Audio zone system for overriding player voice and avatar audio. Comes with multiple microphone prefabs.
      </>
    ),
  },
  {
    title: 'MiscTXL',
    icon: 'fa-solid fa-box',
    iconColor: styles.colorOrange,
    url: 'docs/misc-txl',
    description: (
      <>
        Collection of assorted useful scripts including toggles, triggers, language management, material management.
      </>
    ),
  },
  {
    title: 'PortalTXL',
    icon: 'fa-solid fa-person-through-window',
    iconColor: styles.colorPurple,
    url: 'docs/portal-txl',
    description: (
      <>
        Prefab to support creating interactive VR/real-world portals.
      </>
    ),
  },
];

// <Svg className={styles.featureSvg} role="img" />
function Feature({icon, iconColor, url, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className={iconColor}>
        <div className={styles.featureIcon}>
          <FontAwesomeIcon icon={icon} size="lg" />
        </div>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h2">
          <a href={url}>{title}</a>
        </Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
