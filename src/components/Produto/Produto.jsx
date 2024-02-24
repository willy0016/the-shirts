import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../Hooks/useFetch';
import { PROD_GET_ID } from '../../Api';
import styles from './Produto.module.css';
import Add from '../../assets/add.svg?react';
import Cart from '../../assets/cart.svg?react';
import { CartContext } from '../../CartContext';
import { UserContext } from '../../UserContext';

const Produto = () => {
  const { id } = useParams();
  const { request } = useFetch();
  const [prod, setProd] = React.useState([]);

  const { createCart } = React.useContext(CartContext);
  const { login } = React.useContext(UserContext);

  React.useEffect(() => {
    async function getProduct() {
      const { url, options } = PROD_GET_ID(id);
      const { response, json } = await request(url, options);
      setProd(json);
    }
    getProduct();
  }, [request, id]);

  async function addCart() {
    const userId = window.localStorage.getItem('id');

    const body = {
      userId: userId,
      products: [
        {
          productId: id,
          quantity: 1,
        },
      ],
    };
    await createCart(body);
  }

  return (
    <section className="container">
      <div className={styles.containerSectionInitial}>
        <div className={styles.containerImg}>
          <img className={styles.img} src={prod.img} alt={prod.desc} />
        </div>

        <div className={styles.containerRigth}>
          <span className={styles.preco}>R$ {prod.price}</span>
          <p className={styles.cartao}>Em ate 12x no cartão</p>

          <div className={styles.sizeContainer}>
            <h3 className={styles.sizeTit}>TAMANHOS DIPONIVEIS</h3>
            <ul className={styles.sizeUl}>
              {prod.size &&
                prod.size.map((onesize) => (
                  <li key={onesize} className={styles.size}>
                    {onesize}
                  </li>
                ))}
            </ul>
          </div>

          <div className={styles.descConatainer}>
            <h3 className={styles.desTit}>DESCRIÇÃO</h3>
            <p className={styles.desText}>
              {prod.desc}
              {prod.desc}
              {prod.desc}
              {prod.desc}
            </p>

            <div className={styles.btns}>
              <div className={styles.desBtnBuy}>COMPRAR</div>
              {login ? (
                <div onClick={addCart} className={styles.desBtnCart}>
                  <Add />
                  <Cart />
                </div>
              ) : (
                <div className={styles.desBtnCart}>
                  <Add />
                  <Cart />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Produto;
