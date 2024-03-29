export type RepositoryInfo = {
  forks: number;
  lastUpdate: string;
  liveUrl: string;
  monthlyDownloads?: number;
  name: string;
  owner: string;
  repositoryUrl: string;
  stars: number;
  subscribers: number;
};

type Options = {
  owner: string;
  packageName?: string;
  repo: string;
};

export const fetchProjectDetails = async ({
  owner,
  packageName,
  repo,
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
    forks: githubData.forks,
    lastUpdate: githubData.pushed_at,
    liveUrl: githubData.homepage,
    name: repo,
    owner,
    repositoryUrl: githubData.html_url,
    stars: githubData.stargazers_count,
    subscribers: githubData.subscribers_count,
    ...npmDetails,
  };
};
