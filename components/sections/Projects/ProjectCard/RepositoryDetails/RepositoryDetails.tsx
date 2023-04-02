import GitHubIcon from '~/components/icons/GitHub';
import PlayIcon from '~/components/icons/Play';
import useFirstMount from '~/hooks/useFirstMount';
import * as format from '~/utils/format';

import styles from './RepositoryDetails.module.css';

type Props = {
  title: string;
  owner: string;
  name: string;
  stars: number;
  monthlyDownloads?: number;
  lastUpdate: string;
  liveUrl: string;
  repositoryUrl: string;
};

const RepositoryDetails: React.FC<Props> = ({
  title,
  owner,
  name,
  stars,
  monthlyDownloads,
  lastUpdate,
  liveUrl,
  repositoryUrl,
}) => {
  const isFirstMount = useFirstMount();

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          title={`See "${title}" in action`}
        >
          Live
          <PlayIcon />
        </a>
        <a
          href={repositoryUrl}
          target="_blank"
          rel="noopener noreferrer"
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
          last updated
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

export default RepositoryDetails;
