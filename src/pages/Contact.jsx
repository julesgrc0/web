import React from "react";
// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles"

import './styles/Contact.scss'

import Mail from '../assets/mail.svg'
import Discord from '../assets/discord.svg'
import Call from '../assets/call.svg'
import Git from '../assets/git.svg'
import Facebook from '../assets/facebook.svg'

export function Contact({ onNext }) {
    // const options = React.useMemo(() => {
    //     return {
    //         background: {
    //             color: "rgba(33, 38, 50, 1)",
    //         },
    //         fullScreen: {
    //             enable: true,
    //             zIndex: -1,
    //         },
    //         interactivity: {
    //             events: {
    //                 onHover: {
    //                     enable: true,
    //                     mode: "repulse",
    //                 },
    //             },
    //             modes: {
    //                 repulse: {
    //                     distance: 100,
    //                 },
    //             },
    //         },
    //         particles: {
    //             number:{
    //                 max: window.innerWidth >= 1200 ? 300 : 30,
    //                 limit: window.innerWidth >= 1200 ? 300 : 30,
    //             },
    //             links: {
    //                 enable: true,
    //                 distance: 200,
    //             },
    //             move: {
    //                 enable: true,
    //                 speed: { min: 0.5, max: 2 },
    //             },
    //             opacity: {
    //                 value: { min: 0.3, max: 0.7 },
    //             },
    //             size: {
    //                 value: { min: 1, max: 3 },
    //             },
    //         },
    //         detectRetina: true
    //     };
    // }, []);

    // const particlesInit = React.useCallback(async (engine) => {
    //     await loadFull(engine);
    // }, []);

    return (<div className="contact-content">
        {/* <Particles
            id='tsparticles'
            init={particlesInit}
            options={options}
        /> */}
        <div className="ct-form">
            <div className="ct-section">
                <img src={Mail} />
                <a className="ct-text" target="_top"  href="mailto:jules10avrg@gmail.com?subject=Site Web">
                    jules10avrg@gmail.com
                </a>
            </div>
            <div className="ct-section">
                <img src={Git} />
                <a className="ct-text" target="_blank" href="https://github.com/julesgrc0">
                    julesgrc0
                </a>
            </div>
            <div className="ct-section" >
                <img src={Discord} />
                <a className="ct-text" target="_blank" href="https://discord.com/">
                    julesgrc
                </a>
            </div>
            <div className="ct-section" >
                <img src={Facebook} />
                <a className="ct-text" target="_blank" href="https://fr-fr.facebook.com/people/Jules-Garcia/100095145083252/">
                    Jules GARCIA
                </a>
            </div>
            <div className="ct-section">
                <img src={Call} />
                <a className="ct-text" target="_blank">
                    (non dispo)
                </a>
            </div>
        </div>
        <div className="ct-margin"></div>
    </div>);
}