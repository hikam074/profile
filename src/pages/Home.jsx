import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects';
import TitleHome from '../components/home/TitleHome';
import { Link } from 'react-router-dom';
import GithubCalendarSection from '../components/home/GithubCalendarSection';
import RecentRepos from '../components/home/RecentRepos';
import GridReveal from '../components/utils/GridReveal';
import LazyReveal from '../components/utils/LazyReveal';
import useDynamicBgScroll from '../components/utils/UseDynamicBgScroll';
import { useSmartScroll } from '../components/utils/ScrollTo';
import SkillCard from '../components/home/SkillCard';
import skills from '../data/skills';
import skillsPropImg from '/prop-skills.png';
import TimelineExperiences from '../components/home/TimelineExperiences';
import FormContact from '../components/ContactForm';


export default function Home() {
  const featured = projects.slice(0, 3); // Ambil berapa projek pertama
  const { ref, bg } = useDynamicBgScroll( {colorIn: 'bg-white', colorOut: 'bg-bsoft', threshold: 0.5} );
  useSmartScroll();

  return (
    <section className={`px-6 pb-6 gap-4 flex flex-col transition-colors duration-500 ${bg}`}>

        <section ref={ref}><TitleHome /> </section>

        <LazyReveal direction='up' triggerOnce={true}>
            <section id='projek' className='p-6 border shadow-xl rounded bg-white'>
                <div className='flex justify-between mx-6 gap-6 items-center'>
                    <h3 className="text-4xl font-bold mb-6">Some of My Portfolio</h3>
                    <Link to="/portfolio" className="inline-block text-blue-600 text-right text-sm hover:underline" > Lihat Semua Proyek → </Link>
                </div>
                <GridReveal direction="left" duration={0.6} stagger={0.2} sequential="false" className="" rowGap="gap-6"
                    gridClassName="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-stretch"
                    >
                    {featured.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </GridReveal>
            </section>
        </LazyReveal>

        <LazyReveal asChild triggerOnce={true} >
            <section className='flex flex-col justify-center bg-white p-6 border rounded shadow-xl items-center w-full
                lg:flex-row lg:justify-between lg:border-l-4 lg:space-x-40 lg:border-l-sekunderDark'
                >
                <div className='hidden lg:flex justify-center w-[30%] h-auto flex-none'>
                    <img src={skillsPropImg} className='' />
                </div>
                <div className='space-y-5 flex-auto'>
                    <h3 id='skills' className='text-4xl font-bold text-center border-b-2'>
                        Skills
                    </h3>

                    <LazyReveal duration={0.2} stagger={0.1}
                        className='flex gap-5 flex-wrap justify-between sm:justify-center'
                        >
                        {skills.map((skill, index) => (
                            <SkillCard key={index} {...skill} />
                        ))}
                    </LazyReveal>
                </div>
            </section>
        </LazyReveal>

        <LazyReveal asChild triggerOnce={true}>
            <section id='experiences'>
                <TimelineExperiences />
            </section>
        </LazyReveal>

        <div>---CERTIFICATE---</div>

        <LazyReveal direction='up' triggerOnce={true}>
            <div className='bg-white p-6 rounded shadow-lg border flex flex-col gap-8 lg:flex-row'> 
                <GithubCalendarSection />
                <RecentRepos username="hikam074" count={3} />
            </div>
        </LazyReveal>

        <LazyReveal triggerOnce={true}>
            <section id='contact' className='bg-white rounded shadow p-6 border-l-[4px] border-primer'>
                <FormContact/>
            </section>
        </LazyReveal>

    </section>
  );
}