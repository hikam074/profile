export default async function handler(req, res) {
  const count = Number(req.query.count || 5);

  const response = await fetch(
    `https://api.github.com/users/${process.env.GITHUB_USERNAME}/repos?sort=updated&per_page=${count}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        Accept: "application/vnd.github+json",
      },
    },
  );

  const repos = await response.json();

  res.setHeader("Cache-Control", "s-maxage=3600");

  res.status(200).json(repos);
}
