import React from 'react';
import styles from './Card.module.css';
import { Link } from 'react-router-dom';
import Coin from '../../assets/coin-comprar.svg?react';

const Card = ({ img, tit, desc, prec, id, categoria }) => {
  return (
    <div
      className={`${styles.card} ${categoria === 'verao' && styles.summer} `}
    >
      <div className={styles.bgImg}>
        <img className={styles.img} src={img} alt={desc} />
      </div>
      <h3 className={styles.tit}>{tit}</h3>
      <p className={styles.preco}>R$ {prec}</p>
      <Link to={`/produto/${id}`} className={styles.btn}>
        COMPRAR <Coin />
      </Link>
    </div>
  );
};

export default Card;
