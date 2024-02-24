import React, { useEffect, useState, createContext } from 'react';
import { CART_GET_USER, CART_POST, CART_PUT } from './Api';

export const CartContext = createContext();

export const CartStorage = ({ children }) => {
  const [dataCart, setDataCart] = useState(null);
  const token = localStorage.getItem('token');
  const userId = localStorage.getItem('id');

  async function checkUserCart(userId) {
    const token = window.localStorage.getItem('token');
    const { url, options } = CART_GET_USER(userId, token);
    try {
      const res = await fetch(url, options);
      const cart = await res.json();
      setDataCart(cart);
      return { cart };
    } catch (error) {
      console.error('Erro ao verificar carrinho do usuário:', error);
      throw error;
    }
  }

  async function getUserCart() {
    const token = window.localStorage.getItem('token');
    const userId = window.localStorage.getItem('id');
    const { url, options } = CART_GET_USER(userId, token);

    try {
      const response = await fetch(url, options);
      if (!response.ok) throw new Error('Erro ao buscar carrinho do usuário');
      const cart = await response.json();
      return cart;
    } catch (error) {
      console.error('Erro ao buscar carrinho do usuário:', error);
      throw error;
    }
  }

  async function updateCart(updatedCart) {
    const { url, options } = CART_PUT(updatedCart._id, updatedCart, token);
    const updateRes = await fetch(url, options);
    const updatedCartRes = await updateRes.json();
    setDataCart(updatedCartRes);
    localStorage.setItem('dataCart', JSON.stringify(updatedCartRes));
  }

  async function createNewCart(body) {
    const { url, options } = CART_POST(body, token);
    const res = await fetch(url, options);
    const json = await res.json();
    setDataCart(json);
    localStorage.setItem('dataCart', JSON.stringify(json));
  }

  async function createCart(body) {
    const userId = body?.userId;
    const productId = body?.products?.[0]?.productId;

    try {
      const { cart } = await checkUserCart(userId);

      if (cart && cart.length > 0 && userId === cart[0].userId) {
        const existingProductIndex = cart[0].products.findIndex(
          (item) => item.productId === productId,
        );

        const updatedCart = JSON.parse(JSON.stringify(cart[0]));

        if (existingProductIndex !== -1) {
          updatedCart.products[existingProductIndex].quantity += 1;
        } else {
          updatedCart.products.push({
            productId: productId,
            quantity: 1,
          });
        }
        await updateCart(updatedCart);
      } else {
        await createNewCart(body);
      }
    } catch (error) {
      console.error('Erro ao criar ou atualizar carrinho:', error);
    }
  }

  async function addItem(productId) {
    const body = {
      userId: userId,
      products: [{ productId: productId }],
    };
    await createCart(body);
  }

  async function removeItem(productId) {
    const { cart } = await checkUserCart(userId);
    const updatedCart = JSON.parse(JSON.stringify(cart[0]));
    const productIndex = updatedCart.products.findIndex(
      (item) => item.productId === productId,
    );

    if (productIndex !== -1) {
      if (updatedCart.products[productIndex].quantity > 1) {
        updatedCart.products[productIndex].quantity -= 1;
      } else {
        updatedCart.products.splice(productIndex, 1);
      }

      await updateCart(updatedCart);
    }
  }

  return (
    <CartContext.Provider
      value={{
        createCart,
        dataCart,
        setDataCart,
        checkUserCart,
        addItem,
        removeItem,
        getUserCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
