import './App.css';

function App() {
  return (
    <>
    <nav class="navbar">
      <div class="nav-center">
        <div class="nav-header">
          <img src="./images/logo.svg" class="nav-logo" alt="backroads" />
          <button type="button" class="nav-toggle" id="nav-toggle">
            <i class="fas fa-bars"></i>
          </button>
        </div>
        <ul class="nav-links" id="nav-links">
          <li>
            <a href="#home" class="nav-link"> home </a>
          </li>

          <li>
            <a href="#about" class="nav-link"> about </a>
          </li>

          <li>
            <a href="#services" class="nav-link"> services </a>
          </li>

          <li>
            <a href="#tours" class="nav-link"> tours</a>
          </li>
        </ul>

        <ul class="nav-icons">
          <li>
            <a href="https://www.twitter.com" target="_blank" class="nav-icon"
              ><i class="fab fa-facebook"></i
            ></a>
          </li>
          <li>
            <a href="https://www.twitter.com" target="_blank" class="nav-icon"
              ><i class="fab fa-twitter"></i
            ></a>
          </li>
          <li>
            <a href="https://www.twitter.com" target="_blank" class="nav-icon"
              ><i class="fab fa-squarespace"></i
            ></a>
          </li>
        </ul>
      </div>
    </nav>

    <section class="hero" id="home">
      <div class="hero-banner">
        <h1>continue exploring</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
          explicabo debitis est autem dicta.
        </p>
        <a href="#tours" class="btn hero-btn">explore tours</a>
      </div>
    </section>

    <section class="section" id="about">
      <div class="section-title">
        <h2>about <span>us</span></h2>
      </div>

      <div class="section-center about-center">
        <div class="about-img">
          <img
            src="./images/about.jpeg"
            class="about-photo"
            alt="awesome beach"
          />
        </div>
        <article class="about-info">
          <h3>explore the difference</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>
          <a href="#" class="btn">read more</a>
        </article>
      </div>
    </section>

    <section class="section services" id="services">
      <div class="section-title">
        <h2>our <span>services</span></h2>
      </div>
      <div class="section-center services-center">
        <article class="service">
          <span class="service-icon"><i class="fas fa-wallet fa-fw"></i></span>
          <div class="service-info">
            <h4 class="service-title">saving money</h4>
            <p class="service-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, officia.
            </p>
          </div>
        </article>

        <article class="service">
          <span class="service-icon"><i class="fas fa-tree fa-fw"></i></span>
          <div class="service-info">
            <h4 class="service-title">endless hiking</h4>
            <p class="service-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, officia.
            </p>
          </div>
        </article>

        <article class="service">
          <span class="service-icon"><i class="fas fa-socks fa-fw"></i></span>
          <div class="service-info">
            <h4 class="service-title">amazing comfort</h4>
            <p class="service-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, officia.
            </p>
          </div>
        </article>
      </div>
    </section>

    <section class="section" id="tours">
      <div class="section-title">
        <h2>featured <span>tours</span></h2>
      </div>

      <div class="section-center featured-center">
        <article class="tour-card">
          <div class="tour-img-container">
            <img src="./images/tour-1.jpeg" class="tour-img" alt="" />
            <p class="tour-date">august 26th, 2020</p>
          </div>
          <div class="tour-info">
            <div class="tour-title">
              <h4>Tibet Adventure</h4>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.
            </p>
            <div class="tour-footer">
              <p>
                <span><i class="fas fa-map"></i></span> china
              </p>
              <p>6 days</p>
              <p>from $2100</p>
            </div>
          </div>
        </article>

        <article class="tour-card">
          <div class="tour-img-container">
            <img src="./images/tour-2.jpeg" class="tour-img" alt="" />
            <p class="tour-date">october 1th, 2020</p>
          </div>
          <div class="tour-info">
            <h4>best of java</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.
            </p>
            <div class="tour-footer">
              <p>
                <span><i class="fas fa-map"></i></span> indonesia
              </p>
              <p>11 days</p>
              <p>from $1400</p>
            </div>
          </div>
        </article>

        <article class="tour-card">
          <div class="tour-img-container">
            <img src="./images/tour-3.jpeg" class="tour-img" alt="" />
            <p class="tour-date">september 15th, 2020</p>
          </div>
          <div class="tour-info">
            <h4>explore hong kong</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.
            </p>
            <div class="tour-footer">
              <p>
                <span><i class="fas fa-map"></i></span> hong kong
              </p>
              <p>8 days</p>
              <p>from $5000</p>
            </div>
          </div>
        </article>

        <article class="tour-card">
          <div class="tour-img-container">
            <img src="./images/tour-4.jpeg" class="tour-img" alt="" />
            <p class="tour-date">december 5th, 2019</p>
          </div>
          <div class="tour-info">
            <h4>kenya highlights</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.
            </p>
            <div class="tour-footer">
              <p>
                <span><i class="fas fa-map"></i></span> kenya
              </p>
              <p>20 days</p>
              <p>from $3300</p>
            </div>
          </div>
        </article>
      </div>
    </section>

    <footer class="section footer">
      <ul class="footer-links">
        <li>
          <a href="#home" class="footer-link">home</a>
        </li>
        <li>
          <a href="#about" class="footer-link">about</a>
        </li>
        <li>
          <a href="#services" class="footer-link">services</a>
        </li>
        <li>
          <a href="#featured" class="footer-link">featured</a>
        </li>
      </ul>
      <ul class="footer-icons">
        <li>
          <a href="https://www.twitter.com" target="_blank" class="footer-icon"
            ><i class="fab fa-facebook"></i
          ></a>
        </li>
        <li>
          <a href="https://www.twitter.com" target="_blank" class="footer-icon"
            ><i class="fab fa-twitter"></i
          ></a>
        </li>
        <li>
          <a href="https://www.twitter.com" target="_blank" class="footer-icon"
            ><i class="fab fa-squarespace"></i
          ></a>
        </li>
      </ul>
      <p class="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
    </>
  );
}

export default App;
