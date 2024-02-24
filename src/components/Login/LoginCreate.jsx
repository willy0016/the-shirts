import React from 'react';
import Titulo from '../Gerais/Titulo';
import styles from './LoginForm.module.css';
import Input from '../Form/Input';
import useForm from '../../Hooks/useForm';
import { USER_POST } from '../../Api';
import { UserContext } from '../../UserContext';
import useFetch from '../../Hooks/useFetch';
import Error from '../Helper/Error';

const LoginCreate = () => {
  const username = useForm();
  const email = useForm('email');
  const password = useForm();

  const { userLogin } = React.useContext(UserContext);
  const { loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });
    const { response, json } = await request(url, options);
    if (response.ok) userLogin(username.value, password.value);
  }

  return (
    <section className="container">
      <div className={styles.form}>
        <div className={styles.layout}>
          <Titulo>CADASTRE-SE</Titulo>
          <p className={styles.text}>
            Bem-vindo ao nosso universo de moda! É com imensa satisfação que
            recebemos você em nossa loja online de camisetas. Agradecemos
            sinceramente por dedicar seu tempo e confiança ao explorar nossos
            produtos.
          </p>

          <form onSubmit={handleSubmit}>
            <Input label="USUÁRIO" type="text" name="username" {...username} />
            <Input label="EMAIL" type="email" name="email" {...email} />
            <Input
              label="SENHA"
              type="password"
              name="password"
              {...password}
            />
            {loading ? (
              <button className={styles.loginButton} disabled>
                CADASTRANDO...
              </button>
            ) : (
              <button className={styles.loginButton}>CADASTRAR</button>
            )}
            <Error error={error} />
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginCreate;
