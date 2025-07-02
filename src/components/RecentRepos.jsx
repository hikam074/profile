import React, { useEffect, useState } from 'react';

export default function RecentRepos({ username = "hikam074", count = 5 }) {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=${count}`)
      .then((res) => res.json())
      .then((data) => setRepos(data))
      .catch((err) => console.error("Gagal fetch repos:", err));
  }, [username, count]);

  return (
    <section className="">
        <div className='flex justify-between items-baseline'>
            <h2 className="text-xl font-bold mb-4">Repositori Terbaru</h2>
            <a href="https://github.com/hikam074" target="_blank" rel="noopener noreferrer" className='inline-block text-blue-600 text-sm hover:underline'>Lihat Lebih Banyak → </a>
        </div>
      <ul className="space-y-3">
        {repos.map((repo) => (
          <li key={repo.id} className="border-b pb-2">
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-semibold hover:underline"
            >
              {repo.name}
            </a>
            <p className="text-sm text-gray-600">{repo.description || "Tidak ada deskripsi"}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
