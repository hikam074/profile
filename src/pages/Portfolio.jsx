import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects';
import TitlePortfolio from '../components/portfolio/TitlePortfolio';
import GridReveal from '../components/utils/GridReveal';
import LazyReveal from '../components/utils/LazyReveal';
import { useMemo, useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useSmartScroll } from '../components/utils/ScrollTo';

export default function Portfolio() {
  const [searchParams, setSearchParams] = useSearchParams();

  // get nilai
  const [category, SetCategory] = useState(searchParams.get('category') || 'Semua');
  const [sort, SetSort] = useState(searchParams.get('sort') || 'default');
  const [query, SetSearchQuery] = useState(searchParams.get('query') || '');

  const categories = useMemo(
    () => ['Semua', ...new Set(projects.map(p => p.category))],
    []
  );

  // sinkronisasi filter ke URL saat berubah
  useEffect(() => {
    const params = {};

    if (category !== 'Semua') params.category = category;
    if (sort !== 'default') params.sort = sort;
    if (query.trim()) params.query = query.trim();

    setSearchParams(params);
  }, [category, sort, query, setSearchParams]);

  const projekFiltered = useMemo(() => {
    const q = query.trim().toLowerCase();

    const hasilSearch = (p) => {
      if (!q) return true;
      return [
        p.title,
        p.description,
        Array.isArray(p.technologies) ? p.technologies.join(' ') : p.technologies,
        p.year,
      ]
        .filter(Boolean)
        .some(field => field.toString().toLowerCase().includes(q));
    };

    return projects
      .filter(p => (category === 'Semua' || p.category === category) && hasilSearch(p))
      .sort((a, b) => {
        const getStartYear = (yearString) => {
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

      <LazyReveal direction='up' duration={0.6} triggerOnce={true}
        className="w-full flex justify-center mb-6 text-xs"
      >
        <div
          className="flex flex-col items-center gap-4 p-2 bg-white rounded-xl shadow border sm:flex-row"
        >
          <div className='w-full'>
            <input type="text" placeholder="Cari..." value={query} onChange={e => SetSearchQuery(e.target.value)}
              className="border shadow rounded-full p-2 w-full sm:w-auto"
            />
          </div>
          <div className='flex gap-2'>
            <div className="flex gap-2 items-center">
              <span>Filter</span>
              <select value={category} onChange={e => SetCategory(e.target.value)}
                className="border shadow p-2 rounded-full"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category}
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

      <GridReveal direction="up" duration={0.6} stagger={0.2} rowGap="gap-6" sequential="false" triggerOnce={true}
        gridClassName="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-stretch"
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