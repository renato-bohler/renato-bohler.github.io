import { GitHubIcon } from '~/components/icons/GitHub';
import { PlayIcon } from '~/components/icons/Play';
import { useFirstMount } from '~/hooks/useFirstMount';
import * as format from '~/utils/format';

import styles from './RepositoryDetails.module.css';

type Props = {
  lastUpdate: string;
  liveUrl: string;
  monthlyDownloads?: number;
  name: string;
  owner: string;
  repositoryUrl: string;
  stars: number;
  title: string;
};

export const RepositoryDetails: React.FC<Props> = ({
  lastUpdate,
  liveUrl,
  monthlyDownloads,
  name,
  owner,
  repositoryUrl,
  stars,
  title,
}) => {
  const isFirstMount = useFirstMount();

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        <a
          href={liveUrl}
          rel="noopener noreferrer"
          target="_blank"
          title={`See "${title}" in action`}
        >
          Live
          <PlayIcon />
        </a>
        <a
          href={repositoryUrl}
          rel="noopener noreferrer"
          target="_blank"
          title={`See "${owner}/${name}" on GitHub`}
        >
          <GitHubIcon />
          GitHub
        </a>
      </div>
      {monthlyDownloads ? (
        <span>
          downloaded{' '}
          <strong>{format.number(monthlyDownloads)}</strong> times
          last month
        </span>
      ) : (
        <span>
          last updated{' '}
          <strong>
            {isFirstMount
              ? format.dateTimeUTC(new Date(lastUpdate))
              : format.relativeTime(new Date(lastUpdate))}
          </strong>
        </span>
      )}
      <span>
        <strong>{format.number(stars)}</strong> stars
      </span>
    </div>
  );
};
