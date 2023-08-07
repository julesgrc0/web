import './styles/Reveal.scss'
import { motion } from 'framer-motion';

export function TextReveal({ delay, children }) {
    return (
        <div className="tr-box">
            {children.split(' ').map((w, wi) => {
                return (<div className="tr-word" key={wi+w}>{w.split('').map((c, ci) => {
                    return (
                        <motion.p 
                        className={"tr-char "}
                        initial={{
                            translateY: 100,
                            opacity: 0
                        }}
                        animate={{
                            translateY: 0,
                            opacity: 1
                        }}
                        transition={{
                            duration: 0.8,
                            delay: delay + (wi / 10.0), // (wi+ci)/10.0
                        }}
                            key={ci+c}>
                            {c}
                        </motion.p>
                    );
                })}</div>)
            })}
        </div>
    );
}