import { motion } from "framer-motion"

export default function PageTransitionWrap({children, bg = '#fff'}) {
    return (
        <motion.div 
            initial={{ backgroundColor: bg, opacity: 0 }}
            animate={{ backgroundColor: bg, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="min-h-screen w-full transition-colors"
        >
            {children}
        </motion.div>
    );
}