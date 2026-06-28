import React, { useEffect, useState } from "react";

export default function RecentRepos({ count = 5 }) {
  const [repos, setRepos] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
      fetch(`/api/repos?count=${count}`)
      .then((res) => res.json())
      .then((data) => {setRepos(data); setLoading(false)})
      .catch((err) => console.error("Gagal fetch repos:", err));
  },[count]);

  return (
    <section className="h-full flex flex-col">
      <div className="flex justify-between items-baseline">
        <h2 className="text-xl font-bold mb-4">Repositori Terbaru</h2>
        <a
          href="https://github.com/hikam074"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-right text-blue-600 text-sm hover:underline"
        >
          Lihat Lebih Banyak →{" "}
        </a>
      </div>
      <div className="w-full h-full">
        {repos.length ? (
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
                <p className="text-sm text-gray-600">
                  {repo.description || "Tidak ada deskripsi"}
                </p>
              </li>
            ))}
          </ul>
        ) : ( 
          <div className="flex justify-center items-center h-full py-5 bg-gray-50">
            <span className="italic text-gray-500">{isLoading ? ('Loading...') : ('Coming Soon!')}</span>
          </div>
        )}
      </div>
    </section>
  );
}
