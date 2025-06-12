import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <div className="logo">
        <Link to="/">
          <img src="/img/Twelfth-Fret-Music-Logo" alt="Twelfth Fret Music Logo" />
        </Link>
      </div>
      <button className="menu-toggle" aria-label="Toggle Menu">&#9776;</button>
      <nav className="nav-links">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/our-story">Our Story</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li>
            <Link to="/tfm-connect">
              <img
                src="/img/TFM-Connect.svg"
                alt="TFM Connect"
                style={{ height: '30px', verticalAlign: 'middle' }}
              />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
