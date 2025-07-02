import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects';
import TitlePortfolio from '../components/TitlePortfolio'

export default function Portfolio() {
  return (
    <section>
        <TitlePortfolio/>
        <div className="px-6 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
            ))}
        </div>
    </section>
  );
}