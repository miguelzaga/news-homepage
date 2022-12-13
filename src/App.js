import { useState } from "react";

function App() {
  return (
    <div>
      <header>Home New Popular Trending Categories</header>

      <main>
        <section>
          <h1>The Bright Future of Web 3.0?</h1>

          <p>
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>

          <button>Read more</button>
        </section>

        <section>
          <h2>New</h2>

          <article>
            <h3>Hydrogen VS Electric Cars</h3>
            <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
          </article>

          <article>
            <h3>The Downsides of AI Artistry</h3>
            <p>
              What are the possible adverse effects of on-demand AI image
              generation?
            </p>
          </article>

          <article>
            <h3>Is VC Funding Drying Up?</h3>
            <p>
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
