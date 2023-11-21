import {
  PAGE_INDEX_CAREER,
  PAGE_INDEX_CONTACT,
  PAGE_INDEX_PROJECT,
} from "./const";

type TopBarProps = {
  index: number;
  onClick: (index: number) => void;
};

type LinkProps = {
  index: number;
  onClick: (index: number) => void;

  linkIndex: number;
  linkName: string;
};

const Link = ({ index, onClick, linkIndex, linkName }: LinkProps) => {
  return (
    <button
      className={"button " + (index == linkIndex ? "selected" : "")}
      onClick={() => onClick(linkIndex)}
    >
      {linkName}
    </button>
  );
};

const TopBar = ({ index, onClick }: TopBarProps) => {
  return (
    <div className="topbar">
      <div className="title">
        <div className="mail"></div>
      </div>
      <div className="menu">
        <Link
          index={index}
          onClick={onClick}
          linkName="Projets"
          linkIndex={PAGE_INDEX_PROJECT}
        />
        <Link
          index={index}
          onClick={onClick}
          linkName="Parcours"
          linkIndex={PAGE_INDEX_CAREER}
        />
        <Link
          index={index}
          onClick={onClick}
          linkName="Contact"
          linkIndex={PAGE_INDEX_CONTACT}
        />
      </div>
      <div className="line"></div>
    </div>
  );
};

export default TopBar;
