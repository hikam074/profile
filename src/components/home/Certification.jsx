
export default function Certification( {title, issuer, description, year, image, link} ) {
    return (
        <div className="p-4 flex-col bg-white rounded shadow w-full
            sm:w-[45%]"
            >
            <h5 className="font-bold text-lg ">{title}</h5>
            <h6 className="font-extralight text-sm">
                <a href={link} target="_blank" className="text-blue-600">
                    {issuer}
                </a> | {year}</h6>
            <p className="mt-2 font-light">{description}</p>
            <img src={image} alt={title} className="p-4" />
        </div>
    )
}