export const API_URL = 'http://localhost:5000/api';

export function TOKEN_POST(body) {
  return {
    url: API_URL + '/auth/login',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function USER_GET(token, id) {
  return {
    url: API_URL + '/users/find/' + id,
    options: {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    },
  };
}

export function USER_POST(body) {
  return {
    url: API_URL + '/auth/register/',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function PROD_GET(category) {
  return {
    url: API_URL + '/products?category=' + category,
    options: {
      method: 'GET',
    },
  };
}

export function PROD_GET_ID(id) {
  return {
    url: API_URL + '/products/find/' + id,
    options: {
      method: 'GET',
    },
  };
}

// PARTE TESTE

export function CART_POST(body, token) {
  return {
    url: API_URL + '/carts',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
      body: JSON.stringify(body),
    },
  };
}
export function CART_PUT(cartId, body, token) {
  return {
    url: API_URL + '/carts/' + cartId,
    options: {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
      body: JSON.stringify(body),
    },
  };
}

export function CART_DELETE(id, token) {
  return {
    url: API_URL + '/carts/' + id,
    options: {
      method: 'DELETE',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    },
  };
}

export function CART_GET_USER(id, token) {
  return {
    url: API_URL + '/carts/find/' + id,
    options: {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    },
  };
}

export function CART_GET_ALL(token) {
  return {
    url: API_URL + '/carts',
    options: {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    },
  };
}
