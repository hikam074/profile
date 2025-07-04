import { Typewriter } from "react-simple-typewriter";

export default function TypingAnimate( {kalimat} ) {
    return (
        <span className="text-sekunder">
            <Typewriter 
                words={kalimat}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={150}
                deleteSpeed={80}
                delaySpeed={1500}
            />
        </span>
    );
}