export default function SkillCard({ name, logo, url}) {

    return ( 
        <a href={url} target="_blank" rel="noopener noreferrer" 
            className='transition hover:scale-105 flex flex-col gap-2 justify-center items-center w-14'
            >
            <img src={logo} alt={name} className='h-12 sm:h-15 object-contain' />
            <span className="inline-block whitespace-normal break-words text-xs font-light text-center">{ name }</span>
        </a>
    );
}