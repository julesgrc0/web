import Arrow from "../assets/arrow.svg";

type HomeProps = {
  onNext: () => void;
};

const Home = ({ onNext }: HomeProps) => {
  return (
    <div className="content-home">
      <div className="text-drop">
        <svg className="td-n">
          <text x="50%" y="170px" textAnchor="middle">
            Jules
          </text>
        </svg>
        <div className="td-ln">Garcia</div>
        <div className="line-section"></div>
        <div className="td-info">
          <div>
            <span>Portfolio/CV numérique</span>
            <br />
            Étudiant en informatique à l'Université de Rennes 1
          </div>
          <button onClick={onNext}>
            Mes projets <img src={Arrow} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
