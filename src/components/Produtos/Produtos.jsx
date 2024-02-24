import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../Hooks/useFetch';
import { PROD_GET } from '../../Api';
import Titulo from '../Gerais/Titulo';
import styles from './Produtos.module.css';
import ContainerCard from '../Gerais/ContainerCard';

const Produtos = () => {
  const { id } = useParams();
  const { request } = useFetch();
  const [products, setProducts] = React.useState([]);

  let title;
  if (id === 'feminino') {
    title = 'CAMISETAS FEMININAS';
  } else if (id === 'masculino') {
    title = 'CAMISETAS MASCULINAS';
  } else if (id === 'new') {
    title = 'NOVAS CAMISETAS';
  } else {
    title = `CAMISETAS ${id.toUpperCase()}`;
  }

  React.useEffect(() => {
    async function getProducts() {
      const { url, options } = PROD_GET(id);
      const { prods, json } = await request(url, options);
      setProducts(json);
    }
    getProducts();
  }, [request, id]);
  return (
    <section className="container">
      <div className={styles.prodsContainer}>
        <div>
          <Titulo className={styles.tit}>{title}</Titulo>
        </div>
      </div>
      <div className={styles.cards}>
        <ContainerCard products={products} />
      </div>
    </section>
  );
};

export default Produtos;
