import MailchimpForm from '../components/MailchimpForm';
import GuitarNeckAndPick from '../img/Guitar-Neck-And-Pick';

export default function Home() {
  return (
    <main>
      <section id="hero">
        <div className="outer-border">
          <div className="inner-border">
            <img
              src={GuitarNeckAndPick}
              alt="Guitar Neck and Pick"
              className="hero-img"
            />
            <div className="hero-content">
            <p style={{ fontSize: '20px', fontWeight: 550, fontStyle: 'italic', lineHeight: '1.4'}}>
                A PLACE WHERE ARTISTS GROW. 
                Bringing together gear, learning, and community.
              </p>
              <a href="/shop" id="shop-now" className="button">
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="products">
        <div className="product-list">
          <div className="product">
          <h3>DRIVE FIRST</h3>
            <img
              src="../img/Drive-First-Pedal"
              alt="Drive-First-Guitar-Pedal"
            />
            <p>The ultimate overdrive pedal designed to ignite your tone</p>
            <button className="add-to-cart">BUY NOW</button>
          </div>
          <div className="product">
          <h3>JOIN TODAY!</h3>
            <img
              src="../img/TFM-Connect.svg"
              alt="Social-Media-App-For-Musicians"
            />
            <p> Connect with local artists, share your passion, and explore everything music-related in one vibrant community.</p>
            <button className="add-to-cart">CREATE ACCOUNT</button>
          </div>
          <div className="product">
          <h3>MERCHANDISE</h3>
            <img
              src="../img/Twelfth-Fret-Shirt"
              alt="Twelfth-Fret-Apparel"
            />
            <p>Merch for those who live and breathe the culture, on stage and off.</p>
            <button className="add-to-cart">SHOP MERCH</button>
          </div>
        </div>
      </section>

        <div style={{marginTop: 70}}>
            <img
              src="../img/Drive-First-Pedal-Banner"
              alt="Drive-First-Guitar-Pedal-Info"
            />
        </div>

      <div className="tareks-pedal">
        <img
              src="../img/Tarek-Original-Pedal"
              alt="Twelfth-Fret-Apparel"
            />
            <img
              src="../img/Tarek-Original-Pedal-2"
              alt="Twelfth-Fret-Apparel"
            />
      </div>

      <section id="about">
        <h2>Read Our Story</h2>
        <p>
        Twelfth Fret Music was built on the belief that music is more than sound—it's a force for community, healing, and cultural connection. From intimate jam sessions, to music gear and more, TFM creates spaces where people can show up as their authentic selves, collaborate freely, and create beautiful moments together.

        </p>
      </section>

      <section id="blog">
        <h2>Latest Blog Post</h2>
        <article>
          <h3>The Evolution of Guitar Pedals</h3>
          <p>
            Explore the history and advancements in guitar pedal technology and how they've shaped modern music.
          </p>
        </article>
      </section>
      <MailchimpForm />
    </main>
  );
}
