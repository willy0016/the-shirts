import React from 'react';
import styles from './Home.module.css';
import Titulo from './Gerais/Titulo';
import { PROD_GET } from '../Api';
import useFetch from '../Hooks/useFetch';
import ContainerCard from './Gerais/ContainerCard';
import Img1 from '../assets/seja-voce-mesmo.jpg?react';
import Img2 from '../assets/nao-tenha-medo.jpg?react';
import Img3 from '../assets/viva-intensamente.jpg?react';
import Img4 from '../assets/seja-feliz.jpg?react';
import Slide from './Slide/Slide';

const Home = () => {
  const { request } = useFetch();
  const [products, setProducts] = React.useState([]);
  const [productsSummer, setProductsSummer] = React.useState([]);

  React.useEffect(() => {
    async function getProducts() {
      const { url, options } = PROD_GET('topSales');
      const { prods, json } = await request(url, options);
      setProducts(json);
    }
    async function getProducts2() {
      const { url, options } = PROD_GET('verao');
      const { prods, json } = await request(url, options);
      setProductsSummer(json);
    }
    getProducts();
    getProducts2();
  }, [request]);

  return (
    <>
      <section className="container">
        <div className={`${styles.heroSection} ${styles.gridAreas}`}>
          <div className={styles.img1}>
            <Slide />
          </div>
          <div className={styles.img2}></div>
          <div className={styles.img3}></div>
        </div>
      </section>

      <section className={styles.prodBg}>
        <div className="contCard container">
          <div className={styles.titLayout}>
            <Titulo>MODELOS MAIS VENDIDOS</Titulo>
          </div>
          <div>
            <ContainerCard products={products} categoria="topSales" />
          </div>
        </div>
      </section>

      <section className={styles.frases}>
        <div className={`${styles.displayBloco} container`}>
          <div className={styles.bloco}>
            <div className={styles.imgBloco}>
              <img src={Img1} alt="homen andando de skate" />
            </div>
            <div className={styles.textBloco}>
              <h3 className={styles.titBloco}>SEJA VOCÊ MESMO</h3>
              <p className={styles.paragrafoBloco}>
                Seja sempre você mesmo. Onde quer que esteja. Com quem quer que
                for. Em qualquer momento. Faça o que acredita.
              </p>
            </div>
          </div>

          <div className={styles.bloco}>
            <div className={styles.textBloco}>
              <h3 className={styles.titBloco}>NÃO TENHA MEDO</h3>
              <p className={styles.paragrafoBloco}>
                Sempre temos como melhorar!Inove, estude, questione!Quer mudar
                algo?Comece por você!
              </p>
            </div>
            <div className={styles.imgBloco}>
              <img src={Img2} alt="mulher com roupa unica" />
            </div>
          </div>

          <div className={styles.bloco}>
            <div className={styles.imgBloco}>
              <img src={Img3} alt="mulher sentada no campo" />
            </div>
            <div className={styles.textBloco}>
              <h3 className={styles.titBloco}>VIVA INTENSAMENTE</h3>
              <p className={styles.paragrafoBloco}>
                O propósito da vida é vivê-la, experienciá-la ao máximo, agarrar
                avidamente e sem medo experiências mais ricas e novas.
              </p>
            </div>
          </div>

          <div className={styles.bloco}>
            <div className={styles.textBloco}>
              <h3 className={styles.titBloco}>SEJA FELIZ</h3>
              <p className={styles.paragrafoBloco}>
                E o importante mesmo é ser feliz, é buscar os seus sonhos, fazer
                aquilo que te faz bem. Não importa o que os outros vão pensar,
                não importa o que eles vão dizer.
              </p>
            </div>
            <div className={styles.imgBloco}>
              <img src={Img4} alt="mulher olhar intenso" />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.verao}>
        <div className={styles.bgTit}>
          <h1 className={styles.bgTit}>DESTAQUES DO VERÃO</h1>
        </div>
        <div className={styles.bgWhite}>
          <div className="container">
            <div>
              <ContainerCard products={productsSummer} categoria="verao" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
