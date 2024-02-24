import React from 'react';
import styles from './Footer.module.css';
import LogoWhite from '../Assets/LogoWhite.svg?react';
import Instagram from '../assets/instagram.png?react';
import Facebook from '../assets/facebook.png?react';
import Pinterest from '../assets/pinterest.png?react';

const Foorter = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.col1}>
            <LogoWhite />
            <p>Buscando sempre o melhor produto para você.</p>
            <div className={styles.social}>
              <img src={Pinterest} alt="Pinterest" />
              <img src={Facebook} alt="Facebook" />
              <img src={Instagram} alt="Instagram" />
            </div>
          </div>
          <ul className={styles.col2}>
            <li>Nossos Produtos</li>
            <li>Todos Produtos</li>
            <li>Promoções</li>
            <li>Produçãp</li>
            <li>Entrega</li>
            <li>Lema da Empresa</li>
          </ul>
          <ul className={styles.col3}>
            <li>Ajuda</li>
            <li>Contato</li>
            <li>Consultoria</li>
            <li>Politicas</li>
          </ul>
          <ul className={styles.col4}>
            <li>Sobre nós</li>
            <li>Contato</li>
            <li>Endereços</li>
            <li>Nossos processos</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Foorter;
