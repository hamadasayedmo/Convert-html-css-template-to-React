function App() {
  return (
    <>
      {/* Start Header */}
      <header>
        <div className="container">
          <a href="#" className="logo">
            Hamada
          </a>
          <ul className="nav">
            <li>
              <a href="#articles">Articles</a>
            </li>
            <li>
              <a href="#gallery">Gallery</a>
            </li>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#">Other Links</a>
              {/* Start Mega menu */}
              <div className="mega-menu">
                <div className="image">
                  <img src="imgs/megamenu.png" alt="" />
                </div>
                <ul className="links">
                  <ul className="link">
                    <li>
                      <a href="#testimonials">
                        <i className="far fa-comments fa-fw" /> Testimonials
                      </a>
                    </li>
                    <li>
                      <a href="#team">
                        <i className="far fa-user fa-fw" /> Team Members
                      </a>
                    </li>
                    <li>
                      <a href="#services">
                        <i className="far fa-building fa-fw" /> Services
                      </a>
                    </li>
                    <li>
                      <a href="#skills">
                        <i className="far fa-check-circle fa-fw" /> Our Skills
                      </a>
                    </li>
                    <li>
                      <a href="#work-steps">
                        <i className="far fa-clipboard fa-fw" /> How It Works
                      </a>
                    </li>
                  </ul>
                  <ul className="link">
                    <li>
                      <a href="#events">
                        <i className="far fa-calendar-alt fa-fw" /> Events
                      </a>
                    </li>
                    <li>
                      <a href="#pricing">
                        <i className="fas fa-server fa-fw" /> Pricing Plans
                      </a>
                    </li>
                    <li>
                      <a href="#videos">
                        <i className="far fa-play-circle fa-fw" /> Top Videos
                      </a>
                    </li>
                    <li>
                      <a href="#stats">
                        <i className="far fa-chart-bar fa-fw" /> 
                      </a>
                    </li>
                    <li>
                      <a href="#discount">
                        <i className="fas fa-percent fa-fw" /> Request A
                        Discount
                      </a>
                    </li>
                  </ul>
                </ul>
              </div>
              {/* End Mega menu */}
            </li>
          </ul>
        </div>
      </header>
      {/* End Header */}
      {/* Start Landing  */}
      <div className="landing">
        <div className="container">
          <div className="text">
            <h1>Welcome, To Hamada World</h1>
            <p>
              Here Iam gonna share everything about my life. Books Iam reading,
              Games Iam Playing, Stories and Events
            </p>
          </div>
          <div className="image">
            <img src="imgs/landing-image.png" alt="" />
          </div>
        </div>
        <a href="#articles" className="go-down">
          <i className="fas fa-angle-double-down fa-2x" />
        </a>
      </div>
      {/* End Landing  */}
      {/* Start Article */}
      <div className="articles" id="articles">
        <div className="container">
          <h2 className="main-title">articles</h2>
          <div className="article-content">
            <div className="box">
              <img src="imgs/cat-01.jpg" alt="" />
              <h3>Test Title</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Reprehenderit
              </p>
              <div className="info">
                <a href="#">Read More</a>
                <i className="fas fa-long-arrow-alt-right" />
              </div>
            </div>
            <div className="box">
              <img src="imgs/cat-02.jpg" alt="" />
              <h3>Test Title</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Reprehenderit
              </p>
              <div className="info">
                <a href="#">Read More</a>
                <i className="fas fa-long-arrow-alt-right" />
              </div>
            </div>
            <div className="box">
              <img src="imgs/cat-03.jpg" alt="" />
              <h3>Test Title</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Reprehenderit
              </p>
              <div className="info">
                <a href="#">Read More</a>
                <i className="fas fa-long-arrow-alt-right" />
              </div>
            </div>
            <div className="box">
              <img src="imgs/cat-04.jpg" alt="" />
              <h3>Test Title</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Reprehenderit
              </p>
              <div className="info">
                <a href="#">Read More</a>
                <i className="fas fa-long-arrow-alt-right" />
              </div>
            </div>
            <div className="box">
              <img src="imgs/cat-05.jpg" alt="" />
              <h3>Test Title</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Reprehenderit
              </p>
              <div className="info">
                <a href="#">Read More</a>
                <i className="fas fa-long-arrow-alt-right" />
              </div>
            </div>
            <div className="box">
              <img src="imgs/cat-06.jpg" alt="" />
              <h3>Test Title</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Reprehenderit
              </p>
              <div className="info">
                <a href="#">Read More</a>
                <i className="fas fa-long-arrow-alt-right" />
              </div>
            </div>
            <div className="box">
              <img src="imgs/cat-07.jpg" alt="" />
              <h3>Test Title</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Reprehenderit
              </p>
              <div className="info">
                <a href="#">Read More</a>
                <i className="fas fa-long-arrow-alt-right" />
              </div>
            </div>
            <div className="box">
              <img src="imgs/cat-08.jpg" alt="" />
              <h3>Test Title</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Reprehenderit
              </p>
              <div className="info">
                <a href="#">Read More</a>
                <i className="fas fa-long-arrow-alt-right" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="spikes" />
      {/* End Article */}
      {/* Start Gallery */}
      <div className="gallery" id="gallery">
        <h2 className="main-title">Gallery</h2>
        <div className="container">
          <div className="box">
            <div className="image">
              <img src="imgs/gallery-01.png" alt="" />
            </div>
          </div>
          <div className="box">
            <div className="image">
              <img src="imgs/gallery-02.png" alt="" />
            </div>
          </div>
          <div className="box">
            <div className="image">
              <img src="imgs/gallery-03.jpg" alt="" />
            </div>
          </div>
          <div className="box">
            <div className="image">
              <img src="imgs/gallery-04.png" alt="" />
            </div>
          </div>
          <div className="box">
            <div className="image">
              <img src="imgs/gallery-05.jpg" alt="" />
            </div>
          </div>
          <div className="box">
            <div className="image">
              <img src="imgs/gallery-06.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* End Gallery */}
      {/* Start Features */}
      <div className="features" id="features">
        <h2 className="main-title">features</h2>
        <div className="container">
          <div className="card Quality">
            <div className="image-holder">
              <img src="imgs/features-01.jpg" alt="" />
            </div>
            <h2 className="Quality">Quality</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              harum hic veniam eligendi minima
            </p>
            <a
              href="#"
              style={{
                borderColor: "#f44036",
                color: "#f44036",
                fontWeight: "bold",
              }}
            >
              More
            </a>
          </div>
          <div className="card Time">
            <div className="image-holder">
              <img src="imgs/features-02.jpg" alt="" />
            </div>
            <h2 className="Time">Time</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              harum hic veniam eligendi minima
            </p>
            <a
              href="#"
              style={{
                borderColor: "#009688",
                color: "#009688",
                fontWeight: "bold",
              }}
            >
              More
            </a>
          </div>
          <div className="card Passion">
            <div className="image-holder">
              <img src="imgs/features-03.jpg" alt="" />
            </div>
            <h2 className="Passion">Passion</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              harum hic veniam eligendi minima
            </p>
            <a
              href="#"
              style={{
                borderColor: "#03a9f4",
                color: "#03a9f4",
                fontWeight: "bold",
              }}
            >
              More
            </a>
          </div>
        </div>
      </div>
      {/* End Features */}
      {/* Start Testimonials */}
      <div className="testimonials" id="testimonials">
        <h2 className="main-title">testimonials</h2>
        <div className="container">
          <div className="box">
            <img src="imgs/avatar-01.png" alt="" />
            <h3>Mohamed Farag</h3>
            <span className="title">Full Stack Developer</span>
            <div className="rate">
              <i className="filled fas fa-star" />
              <i className="filled fas fa-star" />
              <i className="filled fas fa-star" />
              <i className="filled fas fa-star" />
              <i className="far fa-star" />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              et reiciendis voluptatum, amet est natus quaerat ducimus
            </p>
          </div>
          <div className="box">
            <img src="imgs/avatar-02.png" alt="" />
            <h3>Mohamed Ibrahim</h3>
            <span className="title">Full Stack Developer</span>
            <div className="rate">
              <i className="filled fas fa-star" />
              <i className="filled fas fa-star" />
              <i className="filled fas fa-star" />
              <i className="filled fas fa-star" />
              <i className="far fa-star" />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              et reiciendis voluptatum, amet est natus quaerat ducimus
            </p>
          </div>
          <div className="box">
            <img src="imgs/avatar-03.png" alt="" />
            <h3>Shady Nabil</h3>
            <span className="title">Full Stack Developer</span>
            <div className="rate">
              <i className="filled fas fa-star" />
              <i className="filled fas fa-star" />
              <i className="filled fas fa-star" />
              <i className="filled fas fa-star" />
              <i className="far fa-star" />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              et reiciendis voluptatum, amet est natus quaerat ducimus
            </p>
          </div>
          <div className="box">
            <img src="imgs/avatar-04.png" alt="" />
            <h3>Amr Hendawy</h3>
            <span className="title">Full Stack Developer</span>
            <div className="rate">
              <i className="filled fas fa-star" />
              <i className="filled fas fa-star" />
              <i className="filled fas fa-star" />
              <i className="filled fas fa-star" />
              <i className="filled fas fa-star" />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              et reiciendis voluptatum, amet est natus quaerat ducimus
            </p>
          </div>
          <div className="box">
            <img src="imgs/avatar-05.png" alt="" />
            <h3>Sherief Ashraf</h3>
            <span className="title">Full Stack Developer</span>
            <div className="rate">
              <i className="filled fas fa-star" />
              <i className="filled fas fa-star" />
              <i className="filled fas fa-star" />
              <i className="far fa-star" />
              <i className="far fa-star" />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              et reiciendis voluptatum, amet est natus quaerat ducimus
            </p>
          </div>
          <div className="box">
            <img src="imgs/avatar-06.png" alt="" />
            <h3>Osama Mohamed</h3>
            <span className="title">Full Stack Developer</span>
            <div className="rate">
              <i className="filled fas fa-star" />
              <i className="filled fas fa-star" />
              <i className="filled fas fa-star" />
              <i className="far fa-star" />
              <i className="far fa-star" />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              et reiciendis voluptatum, amet est natus quaerat ducimus
            </p>
          </div>
        </div>
      </div>
      {/* End Testimonials */}
      {/* Start Team  */}
      <div className="team" id="team">
        <h2 className="main-title">team members</h2>
        <div className="container">
          <div className="card">
            <div className="data">
              <img src="imgs/team-01.jpg" alt="" />
              <div className="social">
                <a href="#">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#">
                  <i className="fab fa-twitter" />
                </a>
                <a href="#">
                  <i className="fab fa-linkedin-in" />
                </a>
                <a href="#">
                  <i className="fab fa-youtube" />
                </a>
              </div>
            </div>
            <div className="info">
              <h3>Name</h3>
              <p>Simple Short Description</p>
            </div>
          </div>
          <div className="card">
            <div className="data">
              <img src="imgs/team-02.jpg" alt="" />
              <div className="social">
                <a href="#">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#">
                  <i className="fab fa-twitter" />
                </a>
                <a href="#">
                  <i className="fab fa-linkedin-in" />
                </a>
                <a href="#">
                  <i className="fab fa-youtube" />
                </a>
              </div>
            </div>
            <div className="info">
              <h3>Name</h3>
              <p>Simple Short Description</p>
            </div>
          </div>
          <div className="card">
            <div className="data">
              <img src="imgs/team-03.jpg" alt="" />
              <div className="social">
                <a href="#">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#">
                  <i className="fab fa-twitter" />
                </a>
                <a href="#">
                  <i className="fab fa-linkedin-in" />
                </a>
                <a href="#">
                  <i className="fab fa-youtube" />
                </a>
              </div>
            </div>
            <div className="info">
              <h3>Name</h3>
              <p>Simple Short Description</p>
            </div>
          </div>
          <div className="card">
            <div className="data">
              <img src="imgs/team-04.jpg" alt="" />
              <div className="social">
                <a href="#">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#">
                  <i className="fab fa-twitter" />
                </a>
                <a href="#">
                  <i className="fab fa-linkedin-in" />
                </a>
                <a href="#">
                  <i className="fab fa-youtube" />
                </a>
              </div>
            </div>
            <div className="info">
              <h3>Name</h3>
              <p>Simple Short Description</p>
            </div>
          </div>
          <div className="card">
            <div className="data">
              <img src="imgs/team-05.png" alt="" />
              <div className="social">
                <a href="#">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#">
                  <i className="fab fa-twitter" />
                </a>
                <a href="#">
                  <i className="fab fa-linkedin-in" />
                </a>
                <a href="#">
                  <i className="fab fa-youtube" />
                </a>
              </div>
            </div>
            <div className="info">
              <h3>Name</h3>
              <p>Simple Short Description</p>
            </div>
          </div>
          <div className="card">
            <div className="data">
              <img src="imgs/team-06.png" alt="" />
              <div className="social">
                <a href="#">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#">
                  <i className="fab fa-twitter" />
                </a>
                <a href="#">
                  <i className="fab fa-linkedin-in" />
                </a>
                <a href="#">
                  <i className="fab fa-youtube" />
                </a>
              </div>
            </div>
            <div className="info">
              <h3>Name</h3>
              <p>Simple Short Description</p>
            </div>
          </div>
        </div>
      </div>
      <div className="spikes" />
      {/* End Team  */}
      {/* Start Services */}
      <div className="services" id="services">
        <h2 className="main-title">services</h2>
        <div className="container">
          <div className="box">
            <i className="fas fa-user-shield fa-4x" />
            <h3>Security</h3>
            <div className="info">
              <a href="#">Details</a>
            </div>
          </div>
          <div className="box">
            <i className="fas fa-tools fa-4x" />
            <h3>Fixing Issues</h3>
            <div className="info">
              <a href="#">Details</a>
            </div>
          </div>
          <div className="box">
            <i className="fas fa-map-marked-alt fa-4x" />
            <h3>Location</h3>
            <div className="info">
              <a href="#">Details</a>
            </div>
          </div>
          <div className="box">
            <i className="fas fa-laptop-code fa-4x" />
            <h3>Coding</h3>
            <div className="info">
              <a href="#">Details</a>
            </div>
          </div>
          <div className="box">
            <i className="fas fa-palette fa-4x" />
            <h3>Security</h3>
            <div className="info">
              <a href="#">Details</a>
            </div>
          </div>
          <div className="box">
            <i className="fas fa-bullhorn fa-4x" />
            <h3>Marketing</h3>
            <div className="info">
              <a href="#">Details</a>
            </div>
          </div>
        </div>
      </div>
      {/* End Services */}
      {/* Start Our Skills */}
      <div className="skills" id="skills">
        <h2 className="main-title">our skills</h2>
        <div className="container">
          <div className="image">
            <img src="imgs/skills.png" alt="" />
          </div>
          <div className="skill">
            <div className="info html">
              <h3>
                HTML<span>80%</span>
              </h3>
              <div className="progress">
                <span style={{ width: "80%" }} />
              </div>
            </div>
            <div className="info css">
              <h3>
                CSS<span>85%</span>
              </h3>
              <div className="progress">
                <span style={{ width: "85%" }} />
              </div>
            </div>
            <div className="info js">
              <h3>
                JavaScript<span>70%</span>
              </h3>
              <div className="progress">
                <span style={{ width: "70%" }} />
              </div>
            </div>
            <div className="info py">
              <h3>
                Python<span>80%</span>
              </h3>
              <div className="progress">
                <span style={{ width: "80%" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Our Skills */}
      {/* Start Our Work  */}
      <div className="work-steps" id="work-steps">
        <h2 className="main-title">how it works</h2>
        <div className="container">
          <div className="image">
            <img src="imgs/work-steps.png" alt="" />
          </div>
          <div className="info">
            <div className="box">
              <img src="imgs/work-steps-1.png" alt="" />
              <div className="text">
                <h3>Business Analysis</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
                  nesciunt obcaecati quisquam quis laborum recusandae debitis
                  vel
                </p>
              </div>
            </div>
            <div className="box">
              <img src="imgs/work-steps-2.png" alt="" />
              <div className="text">
                <h3>Architecture</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
                  nesciunt obcaecati quisquam quis laborum recusandae debitis
                  vel
                </p>
              </div>
            </div>
            <div className="box">
              <img src="imgs/work-steps-3.png" alt="" />
              <div className="text">
                <h3>Development</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
                  nesciunt obcaecati quisquam quis laborum recusandae debitis
                  vel
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Our Work  */}
      {/* Start Events */}
      <div className="events" id="events">
        <h2 className="main-title">latest events</h2>
        <div className="container">
          <img src="imgs/events.png" alt="" />
          <div className="info">
            <div className="time">
              <div className="unit">
                <span className="days">0-126</span>
                <span>Days</span>
              </div>
              <div className="unit">
                <span className="hours">0-10</span>
                <span>Hours</span>
              </div>
              <div className="unit">
                <span className="minutes">0-35</span>
                <span>Minutes</span>
              </div>
              <div className="unit">
                <span className="seconds">0-28</span>
                <span>Seconds</span>
              </div>
            </div>
            <div className="title">
              <h2>Tech Masters Event 2021</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et vero
                tenetur doloremque iusto ut adipisci quam ratione aliquam
                excepturi nulla in harum, veritatis porro
              </p>
            </div>
          </div>
        </div>
        <form action="">
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email:"
            required=""
          />
          <input type="submit" defaultValue="Subscribe" />
        </form>
      </div>
      {/* End Events */}
      {/* Start pricing */}
      <div className="pricing" id="pricing">
        <h2 className="main-title">pricing plans</h2>
        <div className="container">
          <div className="box">
            <div className="title">Basic</div>
            <img src="imgs/hosting-basic.png" alt="" />
            <div className="price">
              <span>$15</span>
              <span>Per Month</span>
            </div>
            <ul>
              <li>10GB HDD Space</li>
              <li>5 Email Addresses</li>
              <li>2 Subdomains</li>
              <li>4 Databases</li>
              <li>Basic Support</li>
            </ul>
            <a href="#">Choose Plan</a>
          </div>
          <div className="box">
            <div className="poplar">Most Poplar</div>
            <div className="title">Advanced</div>
            <img src="imgs/hosting-basic.png" alt="" />
            <div className="price">
              <span>$25</span>
              <span>Per Month</span>
            </div>
            <ul>
              <li>20GB HDD Space</li>
              <li>10 Email Addresses</li>
              <li>5 Subdomains</li>
              <li>8 Databases</li>
              <li>Advanced Support</li>
            </ul>
            <a href="#">Choose Plan</a>
          </div>
          <div className="box">
            <div className="title">Professional</div>
            <img src="imgs/hosting-basic.png" alt="" />
            <div className="price">
              <span>$45</span>
              <span>Per Month</span>
            </div>
            <ul>
              <li>50GB HDD Space</li>
              <li>20 Email Addresses</li>
              <li>10 Subdomains</li>
              <li>20 Databases</li>
              <li>Professional Support</li>
            </ul>
            <a href="#">Choose Plan</a>
          </div>
        </div>
      </div>
      {/* End pricing */}
      {/* Start Top Video */}
      <div className="videos" id="videos">
        <h2 className="main-title">top video</h2>
        <div className="container">
          <div className="column1">
            <div className="name">
              Top Videos
              <span>
                <i className="fas fa-random" />
              </span>
            </div>
            <ul>
              <li>
                How To Create Sub Domain <span>05:18</span>
              </li>
              <li>
                Playing With The DNS <span>03:18</span>
              </li>
              <li>
                Everything About The Virtual Hosts <span>05:25</span>
              </li>
              <li>
                How To Monitor Your Website <span>04:16</span>
              </li>
              <li>
                Uncharted Beating The Last Boss <span>07:48</span>
              </li>
              <li>
                Ys Oath In Felghana Overview <span>03:12</span>
              </li>
              <li>
                Ys Series All Games Ending <span>08:10</span>
              </li>
            </ul>
          </div>
          <div className="column2">
            <div className="imge">
              <img src="imgs/video-preview.jpg" alt="" />
            </div>
            <div className="info">Everything About The Virtual Hosts</div>
          </div>
        </div>
      </div>
      {/* End Top Video */}
      {/* Start Stats */}
      <div className="stats" id="stats">
        <h2>Our Awesome Stats</h2>
        <div className="container">
          <div className="box">
            <i className="far fa-user fa-2x fa-fw" />
            <span className="number" data-goal={150}>
              150
            </span>
            <span className="text">Clients</span>
          </div>
          <div className="box">
            <i className="fas fa-code fa-2x fa-fw" />
            <span className="number" data-goal={135}>
              135
            </span>
            <span className="text">Projects</span>
          </div>
          <div className="box">
            <i className="fas fa-globe-asia fa-2x fa-fw" />
            <span className="number" data-goal={50}>
              50
            </span>
            <span className="text">Countries</span>
          </div>
          <div className="box">
            <i className="far fa-money-bill-alt fa-2x fa-fw" />
            <span className="number" data-goal={500}>
              500
            </span>
            <span className="text">Money</span>
          </div>
        </div>
      </div>
      {/* End Stats */}
      {/* Start discount */}
      <div className="discounts" id="discount">
        <div className="image">
          <div className="text">
            <h2>We Have A Discount</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Excepturi asperiores consectetur, recusandae ratione provident
              necessitatibus, cumque delectus commodi fuga praesentium beatae.
              Totam vel similique laborum dicta aperiam odit doloribus corporis
            </p>
          </div>
          <img src="./imgs/discount.png" alt="" />
        </div>
        <div className="form">
          <h2>Request A Discount</h2>
          <form action="">
            <input
              type="text"
              name="name"
              required=""
              placeholder="Your Name"
            />
            <input
              type="email"
              name="email"
              required=""
              placeholder="Your Email"
            />
            <input
              type="text"
              name="phone"
              required=""
              placeholder="Your Phone"
            />
            <textarea
              name="msg"
              placeholder="Tell Us About Your Needs"
              defaultValue={""}
            />
            <input type="submit" defaultValue="Send" />
          </form>
        </div>
      </div>
      {/* End discount */}
      {/* Start Footer */}
      <footer>
        <div className="container">
          <div className="box">
            <h3>Hamada</h3>
            <ul className="social">
              <li>
                <a href="#" className="facebook">
                  <i className="fab fa-facebook-f" />
                </a>
              </li>
              <li>
                <a href="#" className="twitter">
                  <i className="fab fa-twitter" />
                </a>
              </li>
              <li>
                <a href="#" className="youtube">
                  <i className="fab fa-youtube" />
                </a>
              </li>
            </ul>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Temporibus nulla rem, dignissimos iste aspernatur
            </p>
          </div>
          <div className="box">
            <ul className="links">
              <li>
                <a href="#">Important Link 1</a>
              </li>
              <li>
                <a href="#">Important Link 2</a>
              </li>
              <li>
                <a href="#">Important Link 3</a>
              </li>
              <li>
                <a href="#">Important Link 4</a>
              </li>
              <li>
                <a href="#">Important Link 5</a>
              </li>
            </ul>
          </div>
          <div className="box">
            <div className="line">
              <i className="fas fa-map-marker-alt fa-fw" />
              <div className="info">
                Egypt, Giza, Inside The Sphinx, Room Number 220
              </div>
            </div>
            <div className="line">
              <i className="far fa-clock fa-fw" />
              <div className="info">Business Hours: From 10:00 To 18:00</div>
            </div>
            <div className="line">
              <i className="fas fa-phone-volume fa-fw" />
              <div className="info">
                <span>+20123456789</span>
                <span>+20198765432</span>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="box footer-gallery">
              <img src="imgs/gallery-01.png" alt="" />
              <img src="imgs/gallery-02.png" alt="" />
              <img src="imgs/gallery-03.jpg" alt="" />
              <img src="imgs/gallery-04.png" alt="" />
              <img src="imgs/gallery-05.jpg" alt="" />
              <img src="imgs/gallery-06.png" alt="" />
            </div>
          </div>
        </div>
        <p className="copyright">
          © 2023 All Right Reserved
          <a href="https://www.linkedin.com/in/hamadasayed" target="_blank">
            Hamada Sayed
          </a>
        </p>
      </footer>
      {/* End Footer */}
    </>
  );
}

export default App;
