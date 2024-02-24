import React from 'react';
import { TOKEN_POST, USER_GET } from './Api';
import { useNavigate } from 'react-router-dom';
import { CartContext } from './CartContext';

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const navigate = useNavigate();
  const { setDataCart, checkUserCart } = React.useContext(CartContext);

  const userLogout = React.useCallback(
    async function () {
      setData(null);
      setError(null);
      setLoading(false);
      setLogin(false);
      setDataCart(null);
      window.localStorage.removeItem('token');
      window.localStorage.removeItem('id');
      window.localStorage.removeItem('dataCart');
      navigate('/login');
    },
    [navigate, setDataCart],
  );

  async function getUser(token, id) {
    const { url, options } = USER_GET(token, id);
    const response = await fetch(url, options);
    const json = await response.json();
    setData(json);
    setLogin(true);
  }

  async function userLogin(username, password) {
    try {
      setError(null);
      setLoading(true);
      const { url, options } = TOKEN_POST({ username, password });
      const userRes = await fetch(url, options);
      if (!userRes.ok) throw new Error(`Error ${userRes.statusText}`);
      const data = await userRes.json();
      window.localStorage.setItem('token', data.accessToken);
      window.localStorage.setItem('id', data._id);
      const token = window.localStorage.getItem('token');
      const id = window.localStorage.getItem('id');
      console.log('TOKEN: ' + token + ' ID: ' + id);
      await getUser(token, id);
      const cart = await checkUserCart(id);
      window.localStorage.setItem('dataCart', JSON.stringify(cart));
      navigate('/');
    } catch (err) {
      setError(err.message);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }

  React.useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem('token');
      const id = window.localStorage.getItem('id');
      if (token && id) {
        try {
          setError(null);
          setLoading(true);
          await getUser(token, id);
          const cart = JSON.parse(window.localStorage.getItem('dataCart'));
          setDataCart(cart);
        } catch (err) {
          userLogout();
        } finally {
          setLoading(false);
        }
      } else {
        setLogin(false);
      }
    }
    autoLogin();
  }, [userLogout, setDataCart]);

  return (
    <UserContext.Provider
      value={{ userLogin, data, userLogout, error, login, loading }}
    >
      {children}
    </UserContext.Provider>
  );
};
