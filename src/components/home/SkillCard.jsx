import SvgIcon from "../utils/SvgIcon";

export default function SkillCard({ name, logo, url}) {

    return ( 
        <a href={url} target="_blank" rel="noopener noreferrer" 
            className='transition hover:scale-105 flex flex-col gap-2 justify-center items-center w-14'
            >
            <SvgIcon icon={logo} size={48} className="h-12 sm:h-15" />
            <span className="inline-block whitespace-normal break-words text-xs font-light text-center">{ name }</span>
        </a>
    );
}