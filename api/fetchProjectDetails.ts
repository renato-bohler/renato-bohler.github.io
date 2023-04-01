export type RepositoryInfo = {
  owner: string;
  name: string;
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
}: Options): Promise<RepositoryInfo | null> => {
  const githubResponse = await fetch(
    `https://api.github.com/repos/${owner}/${repo}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
    },
  );
  if (githubResponse.status >= 400) return null;
  const githubData = await githubResponse.json();

  const npmDetails: {
    monthlyDownloads?: number;
    packageUrl?: string;
  } = {};
  if (packageName) {
    const npmResponse = await fetch(
      `https://api.npmjs.org/downloads/point/last-month/${packageName}`,
    );
    if (npmResponse.status < 400) {
      const npmData = await npmResponse.json();

      npmDetails.monthlyDownloads = npmData.downloads;
      npmDetails.packageUrl = `https://www.npmjs.com/package/${packageName}`;
    }
  }

  return {
    owner,
    name: repo,
    repositoryUrl: githubData.html_url,
    liveUrl: githubData.homepage,
    stars: githubData.stargazers_count,
    subscribers: githubData.subscribers_count,
    forks: githubData.forks,
    lastUpdate: githubData.pushed_at,
    ...npmDetails,
  };
};

export default fetchProjectDetails;
