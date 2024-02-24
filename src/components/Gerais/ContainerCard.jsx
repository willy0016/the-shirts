import React from 'react';
import styles from './ContainerCard.module.css';
import Card from './Card';

const ContainerCard = ({ products, categoria }) => {
  return (
    <section className={styles.cards}>
      {products.map((product) => (
        <Card
          id={product._id}
          key={product._id}
          tit={product.desc}
          img={product.img}
          prec={product.price}
          desc={product.title}
          categoria={categoria}
        />
      ))}
    </section>
  );
};

export default ContainerCard;
