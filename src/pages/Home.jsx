const Home = () => {
  return (
    <>
      <div id="intro" className="content-section">
        <h2>Welcome to Movie Stream</h2>
        <p>
          Experience the world of entertainment like never before with 
          <a href="https://www.netflix.com" target="_blank" rel="noopener noreferrer"> Movie Stream</a>, your ultimate online streaming platform.
          From the latest blockbusters to timeless classics, we bring you <i>high-quality movies and TV shows</i> at your fingertips. 
          Enjoy seamless streaming <b>anytime, anywhere!</b>
        </p>

        <h3>Endless Streaming, Unlimited Fun</h3>
        <p>
          Discover a vast collection of movies across all genres—<b>action</b>, <i>drama</i>, thriller, comedy, and more.
          With HD streaming, fast loading times, and a user-friendly interface, <u>Movie Stream</u> ensures a smooth and enjoyable viewing experience on any device.
        </p>

        <h3>Watch Anytime, Anywhere</h3>
        <p>
          No need to wait in long queues or download heavy files—just click, stream, and enjoy! 
          <b>Movie Stream</b> is accessible on desktops, tablets, and mobile devices. 
          <br />So you can watch your favorite movies <i>on the go</i>. 
          Create your watchlist, explore trending films, and dive into a world of <u>endless entertainment</u>.
        </p>
      </div>

      <div id="imagess" className="content-section">
        <h2>Featured Movies</h2>
        <div className="image-container">
          <img src="/jkcp4.jpg" alt="John Wick Chapter 4" />
          <img src="/dune.jpg" alt="Dune" />
          <img src="/openh.jpg" alt="Oppenheimer" />
        </div>
      </div>

      <div id="top-movies" className="content-section">
        <h2>Top 5 Must-Watch Movies</h2>
        <ol>
          <li>Dune</li>
          <li>Oppenheimer</li>
          <li>John Wick Chapter 4</li>
          <li>Pushpa</li>
          <li>Mission Impossible</li>
        </ol>
      </div>
    
      <div id="genres" className="content-section">
        <h2>Genres We Offer</h2>
        <p>We have got something for everyone! Whether you are in the mood for laughs, chills, or edge-of-your-seat action, you will find it here.</p>

        <ul>
          <li>Action
            <ul>
              <li>Lots of fighting and explosions</li>
            </ul>
          </li>
          <li>Comedy
            <ul>
              <li>Funny and lighthearted</li>
            </ul>
          </li>
          <li>Drama
            <ul>
              <li>Emotional and serious stories</li>
            </ul>
          </li>
          <li>Horror
            <ul>
              <li>Scary and spooky stuff</li>
            </ul>
          </li>
          <li>Sci-Fi
            <ul>
              <li>Aliens, space, and the future</li>
            </ul>
          </li>
        </ul>
      </div>

      <div id="audio-section" className="content-section">
        <section>
          <h2>Listen to Our Audio</h2>
          <audio controls>
            <source src="/tension.mp3" type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
        </section>
      </div>

      <div id="video-section" className="content-section">
        <section>
          <h2>Watch Our Video</h2>
          <iframe 
            src="https://www.youtube.com/embed/-mgGnx1p3b8" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
          </iframe>
        </section>
      </div>

      <div id="contact-link">
        <a href="mailto:l1s23bscs0023@ucp.edu.pk">Contact Us</a>
      </div>
    </>
  );
};

export default Home;
