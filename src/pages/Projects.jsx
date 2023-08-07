
import React from 'react'
import { motion } from 'framer-motion'


import './styles/Projects.scss'
import SP from '../assets/icons/sp.png'
import CS from '../assets/icons/cs.png'
import SK from '../assets/icons/sk.png'
import CP from '../assets/icons/cp.webp'
import SD from '../assets/icons/sd.png'
import PY from '../assets/icons/py.ico'
import CPP from '../assets/icons/cpp.svg'
import FFS from '../assets/icons/filesearch.png'
import ADR from '../assets/icons/adr.png'

const Box = ({ className, name, desc, image }) => {
    return (
        <div className={className}>
            <div className='plogo'>
                {image && <img src={image} />}
            </div>
            <div className='pname'>{name}</div>
            <div className='pdesc'>{desc}</div>
        </div>
    );
}

export function Projects({ onNext }) {
    return (<div className="content-proj">
        <motion.div
            className='grid-proj'
            initial={{
                opacity: 0
            }}
            animate={{
                opacity: 1
            }}
            transition={{
                delay: 0.2,
                duration: 2
            }}
        >
            <Box className="box box1" name={"Compteur"} desc={"Application de comptage routier une possibilité d'exportation des données en fichier Excel (CSV)."} image={CP} />
            <Box className="box box2" name={"Culture Signe"} desc={"Site d'information pour des inscriptions a des cours de langue des signes."} image={CS} />
            <Box className="box box3" name={"SpaceShip"} desc={"Jeux 2D de vaisseaux de combat en solo ou en multijoueur."} image={SP} />
            <Box className="box box4" name={"Send"} desc={"Site et Application de communication : message, image, vidéo, etc..."} image={SD} />
            <Box className="box box5" name={"PyEdit"} desc={"Logiciel (IDE) pour le développement python avec un interpréteur embarquer."} image={PY} />
            <Box className="box box6" name={"Sky Attack"} desc={"Jeux de combat spatial en multijoueur avec des serveurs indépendants et modulables."} image={SK} />
            <Box className="box box7" name={"CNet"} desc={"CNet est une petite bibliothèque en C++ qui simplifie la communication réseau en utilisant Winsock. Son design simple facilite la gestion des connexions et des échanges de données via des sockets."} image={CPP} />
            <Box className="box box8" name={"FFS"} desc={"Extension python FFS (FastFileSearch) et bibliothèque C++, pour rechercher des fichiers à l'aide de différents algorithmes"} image={FFS} />
            <Box className="box box9" name={"ADR"} desc={"ADR est un cheval de Troie qui récupère toutes les informations sur l'ordinateur et toutes les données stockées dans les applications utilisant chormuim. Il récupère les cookies, les tokens, les mots de passe et les cartes bancaires enregistrées."} image={ADR} />

        </motion.div>
        {/* <motion.div
            initial={{
                opacity: 0,
                marginTop: "50px"
            }}
            whileInView={{
                opacity: 1,
                marginTop: "0px"
            }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className='github-proj'>
                <div className='gt-title'>Github</div>
                
            </motion.div> */}

        <div className="proj-margin"></div>
    </div>);
}