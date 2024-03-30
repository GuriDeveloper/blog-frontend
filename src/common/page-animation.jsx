import { AnimatePresence, motion } from 'framer-motion'

function AnimationWrapper({ keyvalue, children, initial = { opacity: 0 }, animate = { opacity: 1 }, transition = { duration: 1 }, className }) {
    return (
        <motion.div
            key={keyvalue}
            initial={initial}
            animate={animate}
            transition={transition}
            className={className}
        >
            {children}
        </motion.div>
    )
}

export default AnimationWrapper