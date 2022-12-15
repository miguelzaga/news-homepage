import logo from "/src/assets/images/logo.svg";
import iconMenu from "/src/assets/images/icon-menu.svg";
import iconMenuClose from "/src/assets/images/icon-menu-close.svg";
import imageWebMobile from "/src/assets/images/image-web-3-mobile.jpg";
import imageWebDesktop from "/src/assets/images/image-web-3-desktop.jpg";

function App() {
  return (
    <div>
      <header className="header">
        <img className="header__logo" src={logo} alt="logo" />
        <button className="header__menu">
          <img src={iconMenu} alt="" />
        </button>
        <nav className="header__navbar" style={{ display: "none" }}>
          <ul>
            <li>Home</li>
            <li>New</li>
            <li>Popular</li>
            <li>Trending</li>
            <li>Categories</li>
          </ul>
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
            <p className="side__text">Will hydrogen-fueled cars ever catch up to EVs?</p>
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

      <footer>
        <article>
          <h4>01</h4>
          <h5>Reviving Retro PCs</h5>
          <p>What happens when old PCs are given modern upgrades?</p>
        </article>

        <article>
          <h4>02</h4>
          <h5>Top 10 Laptops of 2022</h5>
          <p>Our best picks for various needs and budgets.</p>
        </article>

        <article>
          <h4>03</h4>
          <h5>The Growth of Gaming</h5>
          <p>How the pandemic has sparked fresh opportunities.</p>
        </article>
      </footer>
    </div>
  );
}

export default App;
