import React, { useEffect, useState, useContext } from 'react';
import styles from './Cart.module.css';
import Add from '../../assets/addWhite.svg?react';
import Minus from '../../assets/minusWhite.svg?react';
import Button from '../Form/Button';
import { CartContext } from '../../CartContext';
import { PROD_GET_ID } from '../../Api';
import useFetch from '../../Hooks/useFetch';

const Cart = () => {
  const { dataCart, addItem, removeItem } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const { request } = useFetch();

  useEffect(() => {
    async function fetchProducts() {
      if (dataCart && dataCart.products) {
        const fetchedProducts = await Promise.all(
          dataCart.products.map(async (product) => {
            const { url, options } = PROD_GET_ID(product.productId);
            const { response, json } = await request(url, options);
            return { ...json, quantity: product.quantity };
          }),
        );
        setProducts(fetchedProducts);
      }
    }
    fetchProducts();
  }, [dataCart, request]);

  useEffect(() => {
    async function fetchProducts() {
      if (dataCart && dataCart.cart) {
        const fetchedProducts = await Promise.all(
          dataCart.cart[0].products.map(async (product) => {
            const { url, options } = PROD_GET_ID(product.productId);
            const response = await fetch(url, options);
            const json = await response.json();
            return { ...json, quantity: product.quantity };
          }),
        );
        setProducts(fetchedProducts);
      }
    }
    fetchProducts();
  }, [dataCart]);

  const total = products
    .reduce((sum, prod) => sum + prod.price * prod.quantity, 0)
    .toFixed(2);

  const quantProds = products.reduce((sum, prod) => sum + prod.quantity, 0);

  return (
    <section className={`${styles.geral} container`}>
      <div
        style={quantProds === 0 ? { marginBottom: '30vh' } : {}}
        className={styles.tableContainer}
      >
        <table>
          <caption>CARRINHO</caption>
          <thead>
            <tr>
              <th>PRODUTO</th>
              <th>PREÇO</th>
              <th>QUANTIDADE</th>
              <th>SUBTOTAL</th>
            </tr>
          </thead>

          <tbody>
            {products &&
              products.map((prod) => (
                <tr key={prod._id}>
                  <td className={`${styles.fcol}`}>
                    <Add
                      className={styles.component}
                      onClick={() => addItem(prod._id)}
                    />
                    <div className={styles.imgP}>
                      <img
                        className={styles.image}
                        src={prod.img}
                        alt={prod.name}
                      />
                    </div>
                    <Minus
                      className={styles.component}
                      onClick={() => removeItem(prod._id)}
                    />
                  </td>
                  <td>R$ {prod.price}</td>
                  <td>{prod.quantity}</td>
                  <td>R$ {(prod.price * prod.quantity).toFixed(2)}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div className={styles.footerCart}>
        <div className={styles.total}>
          <p>TOTAL: R$ {total}</p>
          <Button ptb="8px" prl="24px" fs="20px">
            Finalizar compra
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Cart;
