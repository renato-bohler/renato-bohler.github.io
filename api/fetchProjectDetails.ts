export type RepositoryInfo = {
  repositoryUrl: string;
  liveUrl: string;
  stars: number;
  subscribers: number;
  forks: number;
  lastUpdate: string;
  monthlyDownloads?: number;
};

type Options = {
  owner: string;
  repo: string;
  packageName?: string;
};

const fetchProjectDetails = async ({
  owner,
  repo,
  packageName,
}: Options): Promise<RepositoryInfo> => {
  const githubResponse = await fetch(
    `https://api.github.com/repos/${owner}/${repo}`,
  );
  const githubData = await githubResponse.json();

  const npmDetails: {
    monthlyDownloads?: number;
    packageUrl?: string;
  } = {};
  if (packageName) {
    const npmResponse = await fetch(
      `https://api.npmjs.org/downloads/point/last-month/${packageName}`,
    );
    const npmData = await npmResponse.json();

    npmDetails.monthlyDownloads = npmData.downloads;
    npmDetails.packageUrl = `https://www.npmjs.com/package/${packageName}`;
  }

  return {
    repositoryUrl: githubData.html_url,
    liveUrl: githubData.homepage,
    stars: githubData.stargazers_count,
    subscribers: githubData.subscribers_count,
    forks: githubData.forks,
    lastUpdate: githubData.updated_at,
    ...npmDetails,
  };
};

export default fetchProjectDetails;
