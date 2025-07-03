import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects';
import TitlePortfolio from '../components/TitlePortfolio'
import GridReveal from '../components/utils/GridReveal.jsx';

export default function Portfolio() {
  return (
    <section className=''>
        <TitlePortfolio/>
        <GridReveal gridClassName="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-stretch" direction="up" duration={0.6} stagger={0.2} sequential="false" className="px-6" rowGap="6">
            {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
            ))}
        </GridReveal>
    </section>
  );
}