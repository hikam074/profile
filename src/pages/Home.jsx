import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects';
import TitleHome from '../components/TitleHome';
import { Link } from 'react-router-dom';
import GithubCalendarSection from '../components/GithubCalendarSection';
import RecentRepos from '../components/RecentRepos';
import GridReveal from '../components/utils/GridReveal';
import LazyReveal from '../components/utils/LazyReveal';

export default function Home() {
  const featured = projects.slice(0, 3); // Ambil berapa projek pertama

  return (
    <section className="p-6 gap-4 flex flex-col">
        <TitleHome />
        <LazyReveal direction='up'>
        <div className='p-6 border shadow-xl rounded bg-white'>
            <div className='flex justify-between mx-6 items-baseline'>
                <h2 className="text-2xl font-bold mb-6">Proyek Unggulan</h2>
                <Link to="/portfolio" className="inline-block text-blue-600 text-right text-sm hover:underline" >
                    Lihat Semua Proyek →
                </Link>
            </div>
            <GridReveal gridClassName="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-stretch" direction="left" duration={0.6} stagger={0.2} sequential="false" className="px-6" rowGap="6">
                {featured.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </GridReveal>
        </div>
        </LazyReveal>
        <LazyReveal direction='up'>
        <div className='bg-white p-6 rounded shadow-lg border flex flex-col gap-8 lg:flex-row'> 
            <GithubCalendarSection />
            <RecentRepos username="hikam074" count={3} />
        </div>
        </LazyReveal>
    </section>
  );
}