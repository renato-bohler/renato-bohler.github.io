export type RepositoryInfo = {
  forks: number;
  lastUpdate: string;
  liveUrl: string;
  monthlyDownloads: null | number;
  name: string;
  owner: string;
  repositoryUrl: string;
  stars: number;
  subscribers: number;
};

type GitHubApiResponse = {
  forks: number;
  homepage: string;
  html_url: string;
  pushed_at: string;
  stargazers_count: number;
  subscribers_count: number;
};

type NpmApiResponse = {
  downloads: number;
};

type Options = {
  owner: string;
  packageName?: string;
  repo: string;
};

const fetchGitHubRepositoryMetadata = async (
  owner: string,
  repo: string,
) => {
  const response = await fetch(
    `https://api.github.com/repos/${owner}/${repo}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
    },
  );
  if (response.status >= 400)
    throw new Error('Failed to fetch GitHub repository metadata');

  return response.json() as Promise<GitHubApiResponse>;
};

const fetchNpmPackageMetadata = async (packageName?: string) => {
  if (!packageName) return null;

  const response = await fetch(
    `https://registry.npmjs.org/${packageName}`,
  );
  if (response.status >= 400)
    throw new Error('Failed to fetch NPM package metadata');

  return response.json() as Promise<NpmApiResponse>;
};

export const fetchProjectDetails = async ({
  owner,
  packageName,
  repo,
}: Options): Promise<null | RepositoryInfo> => {
  const gitHubMetadata = await fetchGitHubRepositoryMetadata(
    owner,
    repo,
  );
  const npmPackageMetadata =
    await fetchNpmPackageMetadata(packageName);

  return {
    forks: gitHubMetadata.forks,
    lastUpdate: gitHubMetadata.pushed_at,
    liveUrl: gitHubMetadata.homepage,
    monthlyDownloads: npmPackageMetadata?.downloads ?? null,
    name: repo,
    owner,
    repositoryUrl: gitHubMetadata.html_url,
    stars: gitHubMetadata.stargazers_count,
    subscribers: gitHubMetadata.subscribers_count,
  };
};
