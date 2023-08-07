import React from 'react'
import { motion, useAnimation } from 'framer-motion'

import { Home } from './Home';
import { Projects } from './Projects';
import { Info } from './Info';
import { Contact } from './Contact';

import { TopBar } from '../components/TopBar';

export function Transition() {
    const [selected, setSelected] = React.useState(0);
    const animation = useAnimation();
    const content = useAnimation();

    React.useEffect(() => {
        (async ()=>{
            await animation.start({
                width: '100%',
                height: '100%',
                opacity: 1,
                borderRadius: '0px',
            });
            await animation.set({
                borderColor: "transparent"
            })
        })()
    }, [])

    const onNextHome = React.useCallback(async () => {
        await Promise.all([
            animation.start({
                left: "-100%",
                width: '60%',
                height: '60%',
                borderColor: "white",
                borderRadius: '20px',
                transition: {
                    duration: 1
                }
            }),
            content.start({
                opacity: 0,
                transition: {
                    duration: 0.5
                }
            })
        ])
        setSelected(1);
        await animation.set({
            left: "150%",
            transition: {
                duration: 1
            }
        })
        await Promise.all([
            content.start({
                opacity: 1,
                transition: {
                    duration: 0.5
                }
            }),
            animation.start({
                left: "50%",
                width: '100%',
                height: '100%',
                borderRadius: '0px',
                transition: {
                    duration: 1
                }
            })
        ])
        await animation.set({
            borderColor: 'transparent'
        })
    }, [animation, setSelected])

    const onNext = React.useCallback(async (index) => {
        if (index == selected) {
            return;
        }

        await Promise.all([
            animation.start({
                width: '60%',
                height: '60%',
                borderColor: "white",
                borderRadius: '20px'
            }),
            content.start({
                opacity: 0
            })
        ])
        setSelected(index);

        await content.start({
            opacity: 1,
            transition: {
                duration: 0.5
            }
        })
        await animation.start({
            width: '100%',
            height: '100%',
            borderRadius: '0px',
        })
        await animation.set({
            borderColor: 'transparent'
        })
    }, [animation, selected, setSelected]);

    return <>
        <TopBar selected={selected} setSelected={onNext} />
        <motion.div
            initial={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                overflow: "hidden",
                height: "60%",
                width: "60%",
                borderRadius: "20px",
                border: "1px solid",
                borderColor: "white",
                zIndex: 1
            }}
            animate={animation}
            transition={{
                duration: 1
            }}
        >
            <motion.div
                initial={{
                    opacity: 1
                }}
                animate={content}
                transition={{
                    duration: 0.5
                }}>
                {selected === 0 && <Home onNext={onNextHome} />}
                {selected === 1 && <Projects onNext={onNext} />}
                {selected === 2 && <Info onNext={onNext} />}
                {selected === 3 && <Contact onNext={onNext} />}
            </motion.div>
        </motion.div>
    </>;
}