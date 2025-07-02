import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects';
import TitleHome from '../components/TitleHome';
import { Link } from 'react-router-dom';
import GithubCalendarSection from '../components/GithubCalendarSection';
import RecentRepos from '../components/RecentRepos';

export default function Home() {
  const featured = projects.slice(0, 3); // Ambil berapa projek pertama

  return (
    <section className="p-6 gap-4 flex flex-col">
        <TitleHome />
        <div className='p-6 border shadow-lg rounded'>
            <div className='flex justify-between mx-6 items-baseline'>
                <h2 className="text-2xl font-bold">Proyek Unggulan</h2>
                <Link to="/portfolio" className="inline-block text-blue-600 text-sm hover:underline" >
                    Lihat Semua Proyek →
                </Link>
            </div>
            <div className="mt-4 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                {featured.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </div>
        <div className='bg-white p-6 rounded shadow-lg border flex gap-8'>
            <GithubCalendarSection />
            <RecentRepos username="hikam074" count={3} />
        </div>
    </section>
  );
}