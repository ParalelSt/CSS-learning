export default function NavBar() {
  return (
    <>
      <div className="nav-bar-container">
        <div className="notif-bar-div">
          <h1 className="notif-bar">FREE POUCH ON ORDERS OVER &#163;40</h1>
        </div>
        <nav className="nav-bar">
          <div className="left-nav">
            <a href="#">
              <button className="shop">SHOP</button>
            </a>
            <a className="build-a-bundle" href="#">
              BUILD A BUNDLE
            </a>
          </div>
          <div className="logo">
            <img src="/ELEAT-logo.svg" alt="site-logo" />
          </div>
          <div className="right-nav">
            <ul className="right-nav-content">
              <li className="our-story">
                <a href="#">OUR STORY</a>
              </li>
              <li className="refer-a-friend">
                <a href="#">REFER A FRIEND</a>
              </li>
              <li className="user-icon">
                <img src="/User.svg" alt="user-icon" />
              </li>
              <li className="cart-icon">
                <img src="/Cart.svg" alt="cart-icon" />
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}
