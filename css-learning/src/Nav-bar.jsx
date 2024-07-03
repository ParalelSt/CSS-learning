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
              <button className="hamburger">
                <img className="hamburger-menu" src="DropDWN.svg" alt="" />
              </button>
              <li className="cart-icon">
                <img src="/Cart.svg" alt="cart-icon" />
              </li>
            </ul>
          </div>

          <div className="mobile-nav">
            <div className="items-display">
              <div className="item item1">
                <span>
                  <div className="img-container">
                    <img src="item1.webp" alt="" />
                  </div>
                  <div className="item-container">
                    <p className="item-notification">POPULAR</p>
                    <p className="item-title">CEREAL POUCHES</p>
                    <p className="item-description">
                      250mg multi-serve pouches
                    </p>
                  </div>
                </span>
              </div>
              <div className="item item2">
                <span>
                  <div className="img-container">
                    <img src="item2.webp" alt="" />
                  </div>
                  <div className="item-container">
                    <p className="item-notification">ON THE GO</p>
                    <p className="item-title">CEREAL POTS</p>
                    <p className="item-description">
                      50g pots for when you're on the go
                    </p>
                  </div>
                </span>
              </div>
              <div className="item item3">
                <span>
                  <div className="img-container">
                    <img src="item3.webp" alt="" />
                  </div>
                  <div className="item-container">
                    <p className="item-notification">BEST SELLER</p>
                    <p className="item-title">BUILD A BUNDLE</p>
                    <p className="item-description">
                      Mix & match your favorite flavors
                    </p>
                  </div>
                </span>
              </div>
              <div className="item item4">
                <span>
                  <div className="img-container">
                    <img src="item4.webp" alt="" />
                  </div>
                  <div className="item-container">
                    <p className="item-notification">NEW</p>
                    <p className="item-title">NEW FLAVOUR: MOCHA</p>
                    <p className="item-description">
                      One for the coffee lovers out there!
                    </p>
                  </div>
                </span>
              </div>
            </div>
            <span>
              <a href="#">Give 10&#163;, Get 10&#163; </a>
              <img className="item-arrow" src="Arrow.svg" alt="" />
            </span>
            <span>
              <a href="#">Our Story</a>
              <img className="item-arrow" src="Arrow.svg" alt="" />
            </span>
            <span>
              <a href="#">Reviews</a>
              <img className="item-arrow" src="Arrow.svg" alt="" />
            </span>
            <span>
              <a href="#">My Account</a>
              <img className="item-arrow" src="Arrow.svg" alt="" />
            </span>
            <span>
              <a href="#">Student Discount</a>
              <img className="item-arrow" src="Arrow.svg" alt="" />
            </span>
            <div className="display">
              <p>START WITH A VARIETY PACK</p>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
