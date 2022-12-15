import logo from "/src/assets/images/logo.svg";
import iconMenu from "/src/assets/images/icon-menu.svg";
import iconMenuClose from "/src/assets/images/icon-menu-close.svg";
import imageWebMobile from "/src/assets/images/image-web-3-mobile.jpg";
import imageWebDesktop from "/src/assets/images/image-web-3-desktop.jpg";
import imageRetroPcs from "/src/assets/images/image-retro-pcs.jpg";
import imageGamingGrowth from "/src/assets/images/image-gaming-growth.jpg";
import imageTopLaptops from "/src/assets/images/image-top-laptops.jpg";

import { useState } from "react";

function App() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <header className="header">
        <img className="header__logo" src={logo} alt="logo" />
        <button className="header__menu">
          <img src={iconMenu} alt="open menu" />
        </button>
        <nav className={`header__navbar ${navbar ? "header__navbar--show" : ""}`}>
    <div className="header__container">
        <button className="header__menu-close">
          <img src={iconMenuClose} alt="close menu" />
        </button>
          <ul className="header__list">
            <li>Home</li>
            <li>New</li>
            <li>Popular</li>
            <li>Trending</li>
            <li>Categories</li>
          </ul>
    </div>
        </nav>

      </header>

      <main>
        <section className="hero">
          <picture className="hero__img">
            <source srcSet={imageWebDesktop} media="(min-width: 1024px)" />
            <img
              className=""
              src={imageWebMobile}
              alt="colorful illustration"
            />
          </picture>
          <h1 className="hero__title">The Bright Future of Web 3.0?</h1>

          <p className="hero__text">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>

          <button className="hero__btn">Read more</button>
        </section>

        <section className="side">
          <h2 className="side__title">New</h2>

          <article className="side__article">
            <h3 className="side__header">Hydrogen VS Electric Cars</h3>
            <p className="side__text">
              Will hydrogen-fueled cars ever catch up to EVs?
            </p>
          </article>

          <article className="side__article">
            <h3 className="side__header">The Downsides of AI Artistry</h3>
            <p className="side__text">
              What are the possible adverse effects of on-demand AI image
              generation?
            </p>
          </article>

          <article className="side__article">
            <h3 className="side__header">Is VC Funding Drying Up?</h3>
            <p className="side__text">
              Private funding by VC firms is down 50% YOY. We take a look at
              what that means.
            </p>
          </article>
        </section>
      </main>

      <footer className="bottom">
        <article className="bottom__article">
          <img
            className="bottom__img"
            src={imageRetroPcs}
            alt="a bunch of old electronics"
          />
          <div className="bottom__container">
            <h4 className="bottom__number">01</h4>
            <h5 className="bottom__title">Reviving Retro PCs</h5>
            <p className="bottom__text">
              What happens when old PCs are given modern upgrades?
            </p>
          </div>
        </article>

        <article className="bottom__article">
          <img
            className="bottom__img"
            src={imageTopLaptops}
            alt="a closeup of a keyboard"
          />
          <div className="bottom__container">
            <h4 className="bottom__number">02</h4>
            <h5 className="bottom__title">Top 10 Laptops of 2022</h5>
            <p className="bottom__text">
              Our best picks for various needs and budgets.
            </p>
          </div>
        </article>

        <article className="bottom__article">
          <img
            className="bottom__img"
            src={imageGamingGrowth}
            alt="a ps5 controller in the air over an open hand"
          />
          <div className="bottom__container">
            <h4 className="bottom__number">03</h4>
            <h5 className="bottom__title">The Growth of Gaming</h5>
            <p className="bottom__text">
              How the pandemic has sparked fresh opportunities.
            </p>
          </div>
        </article>
      </footer>
    </div>
  );
}

export default App;
