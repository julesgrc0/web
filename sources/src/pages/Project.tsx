import { motion } from "framer-motion";

import SpaceShip from "../assets/icons/spaceship.png";
import PyEdit from "../assets/icons/pyedit.ico";
import CNet from "../assets/icons/cnet.svg";
import Compteur from "../assets/icons/compteur.webp";
import CultureSigne from "../assets/icons/culturesigne.png";
import SkyAttack from "../assets/icons/skyattack.png";
import EyesGames from "../assets/icons/eyesgames.ico";
import Echiqier from "../assets/icons/echiquier.png";
import ADR from "../assets/icons/adr.svg";

type BoxProps = {
  index: number;

  title: string;
  content: string;

  image?: any;
};
const Box = ({ image, title, content, index }: BoxProps) => {
  return (
    <div className={`box box${index}`}>
      <div className="plogo">
        <img src={image} />
      </div>
      <div className="pname">{title}</div>
      <div className="pdesc">{content}</div>
    </div>
  );
};

const Project = () => {
  return (
    <div className="content-proj">
      <motion.div
        className="grid-proj"
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <Box
          index={1}
          image={SpaceShip}
          title="SpaceShip"
          content="Jeux 2D de vaisseaux de combat en solo ou en multijoueur."
        />
        <Box
          index={2}
          image={PyEdit}
          title="PyEdit"
          content="Logiciel (IDE) pour le développement python avec un interpréteur
          embarquer."
        />
        <Box
          index={3}
          image={CNet}
          title="CNet"
          content="Petite bibliothèque en C++ qui simplifie la
          communication réseau en utilisant Winsock."
        />

        <Box
          index={4}
          image={Echiqier}
          title="L'Échiqier Malouin"
          content="Site du Club d'échecs de Saint-Malo. Cours en ligne et actualité du club pour les membres inscrit."
        />
        <Box
          index={5}
          image={CultureSigne}
          title="Culture Signe"
          content="Site d'information pour effectuer une formation a la Langue des Signes Française."
        />

        <Box
          index={6}
          image={EyesGames}
          title="EyesGames"
          content="Logiciel Web du cabinet d'orthoptie de Saint-Grégoire.Le site comprends : des exercices de rééducation des yeux ainsi qu'un système de suivi à distance pour chaque patients."
        />
        <Box
          index={7}
          image={SkyAttack}
          title="SkyAttack"
          content="Jeux de combat spatial en multijoueur avec des serveurs indépendants
          et modulables."
        />
        <Box
          index={8}
          image={Compteur}
          title="Compteur"
          content="Application de comptage routier une possibilité d'exportation des données en fichier Excel (CSV)."
        />

        <Box
          index={9}
          image={ADR}
          title="ADR"
          content="ADR est un cheval de Troie qui récupère toutes les informations sur
          l'ordinateur et toutes les données stockées dans les applications
          utilisant chormuim. Il récupère les cookies, les tokens, les mots de
          passe et les cartes bancaires enregistrées."
        />
      </motion.div>
      <div className="proj-margin"></div>
    </div>
  );
};

export default Project;
