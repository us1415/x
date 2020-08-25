import type { FC } from 'react';
import styles from '../styles/Windows.module.scss';
import { AppsContext } from '../contexts/Apps';
import { useContext } from 'react';
import { Window } from './Window';

export const Windows: FC = () => {
  const { apps, updateApps } = useContext(AppsContext);

  return (
    <ol className={styles.windows}>
      {apps
        .filter(({ running, minimized }) => running && !minimized)
        .map(({ component: App, id, name }) => (
          <Window
            key={id}
            name={name}
            onMinimize={() => updateApps({ update: { minimized: true }, id })}
            onClose={() => updateApps({ update: { running: false }, id })} // TODO: Need to reset states on close?
          >
            <App />
          </Window>
        ))}
    </ol>
  );
};