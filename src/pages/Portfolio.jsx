import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects';
import TitlePortfolio from '../components/portfolio/TitlePortfolio'
import GridReveal from '../components/utils/GridReveal';
import { useMemo, useState } from 'react';
import LazyReveal from '../components/utils/LazyReveal';
import { useSmartScroll } from '../components/utils/ScrollTo';

export default function Portfolio() {
  const [category, SetCategory] = useState('Semua');
  const [sort, SetSort] = useState('default');
  const categories = useMemo(
    () => ['Semua', ...new Set(projects.map(p => p.category))],
    []
  );
  const [query, SetSearchQuery] = useState('');

  const projekFiltered = useMemo(() => {
    const q = query.trim().toLowerCase();
      const hasilSearch = (p) => {
        if (!q) return true;
        return [
          p.title,
          p.description,
          Array.isArray(p.technologies) ? p.technologies.join(' ') : p.technologies,
          p.year,
        ].filter(Boolean).some(field => field.toString().toLowerCase().includes(q));
      };

    return projects.filter(p => (category === 'Semua' || p.category === category) && hasilSearch(p)).sort((a, b) => {
      const getStartYear =  (yearString) => {
        const mulai = yearString.match(/\d{4}/);
        return mulai ? parseInt(mulai[0]) : 0;
      };

      const yearA = getStartYear(a.year);
      const yearB = getStartYear(b.year);

      switch (sort) {
        case 'year-asc':
          return yearA - yearB;
        case 'year-desc':
          return yearB - yearA;
        case 'title-asc':
          return a.title.localeCompare(b.title);
        case 'title-desc':
          return b.title.localeCompare(a.title);
        default:
          return 0;
      }
    });
  }, [category, sort, query]);

  useSmartScroll();

  return (
    <section className='p-6'>
      <TitlePortfolio />

      <LazyReveal direction='up' duration={0.6} className="w-full flex justify-center mb-6 text-xs">
        <div className="flex flex-col items-center gap-4 p-2 bg-white rounded-xl shadow border
          sm:flex-row
          ">
          <div className='w-full'>
            <input type="text" placeholder="Cari..." value={query} onChange={e => SetSearchQuery(e.target.value)}
              className="border shadow rounded-full p-2 w-full sm:w-auto"/>
          </div>
          <div className='flex gap-2'>
          <div className="flex gap-2 items-center">
            <span>Filter</span>
            <select value={category} onChange={e => SetCategory(e.target.value)}
              className="border shadow p-2 rounded-full"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
          <div className="flex gap-2 items-center">
              <span>Urutkan</span>
            <select value={sort} onChange={e => SetSort(e.target.value)}
              className="border shadow p-2 rounded-full"
            >
              <option value="default">Default</option>
              <option value="year-desc">Terbaru</option>
              <option value="year-asc">Terlama</option>
              <option value="title-asc">Judul A‑Z</option>
              <option value="title-desc">Judul Z‑A</option>
            </select>
          </div>
          </div>
        </div>
      </LazyReveal>

      <GridReveal
        gridClassName="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-stretch"
        direction="up" duration={0.6} stagger={0.2} rowGap="gap-6" sequential="false"
        className="px-6"
      >
        {projekFiltered.length > 0 ? (
          projekFiltered.map(project => (
            <ProjectCard key={project.id} {...project} />
          ))
        ) : (
          <div className="text-center text-gray-500">
            Tidak ada proyek yang cocok.
          </div>
        )}
      </GridReveal>
    </section>
  );
}