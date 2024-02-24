import React from 'react';
import styles from './Header.module.css';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../Assets/Logo.svg?react';
import Cart from '../Assets/cart.svg?react';
import Pessoa from '../Assets/pessoa-login.svg?react';
import New from '../Assets/icon-new.svg?react';
import Masculina from '../Assets/icon-camisa-masculina.svg?react';
import Feminina from '../Assets/icon-camisa-feminina.svg?react';
import { UserContext } from '../UserContext';
import { CartContext } from '../CartContext';

const Header = () => {
  const { data, userLogout, login } = React.useContext(UserContext);
  const [mobileMenu, setMobileMenu] = React.useState(false);
  const { pathname } = useLocation();

  const { dataCart } = React.useContext(CartContext);
  const [prodsQuant, setProdsQuant] = React.useState(null);

  React.useEffect(() => {
    async function itemsCart() {
      if (dataCart) {
        setProdsQuant(somaQuantidadeProdutos(dataCart));
      }
    }
    itemsCart();
  }, [dataCart]);

  function somaQuantidadeProdutos(carrinho) {
    let total = 0;
    if (carrinho && carrinho.products) {
      for (let i = 0; i < carrinho.products.length; i++) {
        total += carrinho.products[i].quantity;
      }
    } else if (carrinho && carrinho.cart) {
      for (var i = 0; i < carrinho.cart.length; i++) {
        for (var j = 0; j < carrinho.cart[i].products.length; j++) {
          total += carrinho.cart[i].products[j].quantity;
        }
      }
    }
    return total;
  }

  function handleLogout() {
    userLogout();
    setProdsQuant(0);
  }

  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <header className={`${styles.header} container`}>
      <nav className={styles.navGeral}>
        <button
          className={`${styles.mobileBtn} ${mobileMenu && styles.ativo}`}
          aria-label="menu"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          <span id={styles.hamburger}></span>
        </button>
        <ul
          className={`${styles.menuHamburger} ${
            mobileMenu && styles.menuHamburgerActive
          }`}
        >
          <li className={styles.menuHamburgerLi}>
            <ul className={styles.SubMenuHamburger}>
              <li>
                <Link className={styles.link} to={`produtos/masculina`}>
                  <Masculina className={styles.icon} /> Camisetas Masculinas
                </Link>
              </li>
              <li>
                <Link className={styles.link} to={`produtos/feminina`}>
                  <Feminina className={styles.icon} /> Camisetas Feminas
                </Link>
              </li>
              <li>
                <Link className={styles.link} to={`produtos/new`}>
                  <New className={styles.icon} />
                  Lançamentos
                </Link>
              </li>
            </ul>
          </li>
        </ul>
        <Link className={styles.logo} to="/">
          <Logo className={styles.logoItem} />
        </Link>
        <ul className={styles.containerLinks}>
          {data ? (
            <li>
              <div className={styles.liFlex} to="/conta">
                <Pessoa className={styles.iconsHeader} /> <p>{data.username}</p>
                <button className={styles.btnSair} onClick={handleLogout}>
                  {' '}
                  sair
                </button>
              </div>
            </li>
          ) : (
            <li>
              <Link className={styles.liFlex} to="/login">
                <Pessoa className={styles.iconsHeader} /> <p>login</p>
              </Link>
            </li>
          )}
          <li>
            {dataCart && data ? (
              <Link className={styles.liFlex} to="/cart">
                <Cart className={styles.iconsHeader} />
                <p>{prodsQuant}</p>
              </Link>
            ) : (
              <Link className={styles.liFlex}>
                <Cart className={styles.iconsHeader} />
                <p> {prodsQuant}</p>
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
