export default function Shop() {
  return (
    <main>
      <section id="shop-products">
        <h2>Shop Our Products</h2>
        <div className="product-grid">
          <article className="product">
            <img src="/img/pedal1.jpg" alt="Guitar Pedal Model A" />
            <h3>Guitar Pedal Model A</h3>
            <p className="price">$99.99</p>
            <p>High-quality overdrive pedal for warm tone.</p>
            <button className="add-to-cart">Add to Cart</button>
          </article>

          <article className="product">
            <img src="/img/pedal2.jpg" alt="Guitar Pedal Model B" />
            <h3>Guitar Pedal Model B</h3>
            <p className="price">$119.99</p>
            <p>Versatile delay pedal with analog warmth.</p>
            <button className="add-to-cart">Add to Cart</button>
          </article>

          {/* Add more products as needed */}
        </div>
      </section>
    </main>
  );
}
