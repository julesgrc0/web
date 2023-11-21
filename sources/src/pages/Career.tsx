import { motion } from "framer-motion";

const Career = () => {
  return (
    <div className="content-info">
      <div className="if-line"></div>
      <motion.div
        className="if-exp"
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 1 }}
      >
        <div className="if-box">
          <div className="if-title">Expériences professionnelles</div>
          <br />
          <div className="if-mtitle">
            Cabinet médical, Rennes — Développement web
          </div>
          <div className="if-date">2021 À 2024</div>
          <div className="if-desc">
            Développement d'un site privé d'exercices d'orthoptie. Système
            d'administration, gestion de compte et suivi des clients.
          </div>
          <br />
          <div className="if-mtitle">
            L'échiquier Malouin, Saint-Malo — Développement web
          </div>
          <div className="if-date"> Février 2023 À Mai 2023</div>
          <div className="if-desc">
            Site pour le club d'échecs de Saint-Servant.
          </div>
          <br />
          <div className="if-mtitle">
            Culture Signe, Saint-Malo — Développement web
          </div>
          <div className="if-date">Avril 2021 À Mai 2021</div>
          <div className="if-desc">
            Site pour un centre de formation à la Langue des Signes Française.
          </div>
          <br />
          <div className="if-mtitle">
            Ingeval, Saint-Malo — Création d'application mobile
          </div>
          <div className="if-date">Juillet 2020 À Août 2020</div>
          <div className="if-desc">
            Application mobile de comptage routier pour l'entreprise Ingeval.
          </div>
          <br />
        </div>
      </motion.div>

      <motion.div
        className="if-comp"
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="if-box">
          <div className="if-title">Compétences techniques</div>
          <br />

          <li className="if-list"> (Backend) Java, PHP, Node (Deno/Bun)</li>
          <li className="if-list"> (Frontend) Angular, React (+ Vite)</li>
          <li className="if-list"> C/C++, C#, Rust, Python</li>
          <li className="if-list"> Développement de jeux 2D/3D</li>
          <li className="if-list"> Logiciel (Windows/Linux)</li>
          <li className="if-list">
            Application Mobile (React Native + Java/Capacitor)
          </li>
          <li className="if-list"> Outils de développement</li>
          <br />
        </div>
      </motion.div>

      <motion.div
        className="if-form"
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="if-box">
          <div className="if-title">Formations</div>
          <br />
          <div className="if-mtitle">Licence d'informatique </div>
          <div className="if-date">
            Septembre 2023 <b>ISTIC</b> Rennes
          </div>
          <div className="if-desc">Premier année a l'Université Rennes 1.</div>
          <br />
          <div className="if-mtitle">Baccalauréat Général</div>
          <div className="if-date">
            Depuis septembre 2022 <b> Lycée Jacques-Cartier</b> Saint-Malo
          </div>
          <div className="if-desc">
            Spécialité Mathématiques/Physique-Chimie. Obtenu avec mention.
          </div>
          <br />
          <div className="if-mtitle">Brevet des collèges</div>
          <div className="if-date">
            Depuis septembre 2019 <b>Collège Jean-Charcot</b> Saint-Malo
          </div>
          <div className="if-desc"></div>
          <br />
          <div className="if-mtitle">BAFA</div>
          <div className="if-date">De juillet 2022 à août 2022</div>
          <div className="if-desc">Formation théorique</div>
          <br />
        </div>
      </motion.div>

      <div className="if-margin"></div>
    </div>
  );
};

export default Career;
