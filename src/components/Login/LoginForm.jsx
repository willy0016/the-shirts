import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../Form/Input';
import styles from './LoginForm.module.css';
import Titulo from '../Gerais/Titulo';
import useForm from '../../Hooks/useForm';
import { UserContext } from '../../UserContext';
import Error from '../Helper/Error';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const { userLogin, error, loading } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section className="container">
      <div className={styles.form}>
        <div className={styles.layout}>
          <Titulo>LOGAR NA CONTA</Titulo>
          <p className={styles.text}>
            Bem-vindo ao nosso universo de moda! É com imensa satisfação que
            recebemos você em nossa loja online de camisetas. Agradecemos
            sinceramente por dedicar seu tempo e confiança ao explorar nossos
            produtos.
          </p>

          <form onSubmit={handleSubmit}>
            <Input label="USUÁRIO" type="text" name="username" {...username} />
            <Input
              label="SENHA"
              type="password"
              name="password"
              {...password}
            />
            <div className={styles.buttonContainer}>
              {loading ? (
                <button className={styles.loginButton} disabled>
                  CARREGANDO...
                </button>
              ) : (
                <>
                  <button className={styles.loginButton}>ENTRAR</button>
                </>
              )}
              <Link to="/login/criar" className={styles.createAccountButton}>
                CRIAR UMA CONTA
              </Link>
            </div>
            <Error error={error} />
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
