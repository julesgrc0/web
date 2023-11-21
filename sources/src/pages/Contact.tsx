/*
html {
  height: 100%;
  overflow: hidden;
}

body {
  position: relative;
  height: 100%;
  background: linear-gradient(#6084d7 25%, #a2cef4 50%, #a2cef4 50%, #6084d7 100%);
}

.wrap {
  width: 100%;
  height: 100%;
  position: absolute;
  margin: 0 auto;
  perspective: 360px;
  perspective-origin: 50% 50%;
}

.top-plane, .bottom-plane {
  width: 200%;
  height: 130%;
  position: absolute;
  bottom: -30%;
  left: -50%;
  background-image: -webkit-linear-gradient(#a2cef4 2px, transparent 2px), -webkit-linear-gradient(left, #a2cef4 2px, transparent 2px);
  background-size: 100px 100px,100px 100px;
  background-position: -1px -1px,-1px -1px;
  transform: rotateX(85deg);
  animation: planeMoveTop 2s infinite linear;
}

.bottom-plane {
  transform: rotateX(-85deg);
  top: -30%;
  animation: planeMoveBot 2s infinite linear;
}

@keyframes planeMoveTop {
  from {
    background-position: 0px -100px,0px 0px;
  }
  to {
    background-position: 0px 0px, 100px 0px;
  }
}
@keyframes planeMoveBot {
  from {
    background-position: 0px 0px,0px 0px;
  }
  to {
    background-position: 0px -100px, 100px 0px;
  }
}
@media (max-height: 350px) {
  .wrap {
    perspective: 210px;
  }
}
*/

import Mail from "../assets/mail.svg";
import Discord from "../assets/discord.svg";
import Call from "../assets/call.svg";
import Github from "../assets/git.svg";
import Facebook from "../assets/facebook.svg";

const Contact = () => {
  return (
    <div className="contact-content">
      <div className="ct-form">
        <div className="ct-section">
          <img src={Mail} />
          <a
            className="ct-text"
            target="_top"
            href="mailto:jules10avrg@gmail.com?subject=Site Web"
          >
            julesgrc0@gmail.com
          </a>
        </div>
        <div className="ct-section">
          <img src={Github} />
          <a
            className="ct-text"
            target="_blank"
            href="https://github.com/julesgrc0"
          >
            julesgrc0
          </a>
        </div>
        <div className="ct-section">
          <img src={Discord} />
          <a className="ct-text" target="_blank" href="https://discord.com/">
            julesgrc0
          </a>
        </div>
        <div className="ct-section">
          <img src={Facebook} />
          <a
            className="ct-text"
            target="_blank"
            href="https://fr-fr.facebook.com/people/Jules-Garcia/100095145083252/"
          >
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
    </div>
  );
};
export default Contact;
