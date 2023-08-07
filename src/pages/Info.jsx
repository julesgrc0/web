import './styles/Info.scss'
import { motion } from 'framer-motion'

export function Info({ onNext }) {
    return (<div className="content-info">
        <div className='if-line'></div>
        <motion.div
            className='if-exp'
            initial={{
                opacity: 0
            }}
            whileInView={{
                opacity: 1
            }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
        >
            <div className='if-box'>
                <div className='if-title'>Expériences professionnelles</div>
                <br />
                <div className='if-mtitle'>Cabinet médical, Rennes — Développement web</div>
                <div className='if-date'> 10/01 2021 À 30/01  2021</div>
                <div className='if-desc'>
                    Développement d'un site privé d'exercices d'orthoptie. Système d'administration, gestion de compte et suivi des clients.
                </div>
                <br />
                <div className='if-mtitle'> Ingeval, Saint-Malo — Création d’application mobile</div>
                <div className='if-date'> 24/07 2020 À 31/07 2020</div>
                <div className='if-desc'>Application mobile de comptage routier pour l’entreprise Ingeval. </div>
                <br />
                <div className='if-mtitle'> Culture Signe, Saint-Malo — Développement web</div>
                <div className='if-date'> 20/04 2021 À 28/04 2021</div>
                <div className='if-desc'>Site pour un centre de formation à la Langue des Signes Française. </div>
                <br />
                <div className='if-mtitle'>L'échiquier Malouin, Saint-Malo — Développement web</div>
                <div className='if-date'> 10/11 2022 À 30/07 2023</div>
                <div className='if-desc'>Site pour le club d'échecs de Saint-Servant. </div>
                <br />
            </div>
        </motion.div>

        <motion.div
            className='if-comp'
            initial={{
                opacity: 0
            }}
            whileInView={{
                opacity: 1
            }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
        >
            <div className='if-box'>
                <div className='if-title'>Compétences techniques</div>
                <br />

                <li className='if-list'> (Backend) Java, PHP, Node.js</li>
                <li className='if-list'> (Frontend) Angular, React</li>
                <li className='if-list'> C/C++, C#, rust, python</li>
                <li className='if-list'> Développement de jeux 2D/3D</li>
                <li className='if-list'> Logiciel</li >
                <li className='if-list'> Application Mobile(React native + java / Capacitor Angular)</li >
                <li className='if-list'> Outils de développement</li >
                <br />
            </div>
        </motion.div>


        <motion.div
            className='if-form'
            initial={{
                opacity: 0
            }}
            whileInView={{
                opacity: 1
            }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}>
            <div className='if-box'>
                <div className='if-title'>Formations</div>
                <br />
                <div className='if-mtitle'>Licence d'informatique </div>
                <div className='if-date'>Septembre 2023 <b>ISTIC</b>  Rennes</div>
                <div className='if-desc'>Rentrée prochaine à l'Université Rennes 1.</div>
                <br />
                <div className='if-mtitle'>Baccalauréat Général</div>
                <div className='if-date'>Depuis septembre 2022 <b> Lycée Jacques-Cartier</b> Saint-Malo</div>
                <div className='if-desc'>Spécialité Mathématiques/Physique-Chimie. Obtenu avec mention.</div>
                <br />

                <div className='if-mtitle'>Brevet des collèges</div>
                <div className='if-date'>Depuis septembre 2019 <b>Collège Jean-Charcot</b> Saint-Malo</div >
                <div className='if-desc'></div >
                <br />
                
                <div className='if-mtitle'>BAFA</div>
                <div className='if-date'>De juillet 2022 à août 2022</div>
                <div className='if-desc'>Formation théorique Rennes</div >
                <br />
            </div>
        </motion.div>

        <div className='if-margin'></div>
    </div>);
}