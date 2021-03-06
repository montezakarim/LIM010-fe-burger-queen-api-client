const getToken = (email, password) => {
  return fetch('http://localhost:5000/auth', {
    method: 'POST',
    headers: {
     'Content-Type': 'application/json'
    },
    body: { 
      email, 
      password 
    },
  }).then((resp) => {
    if (resp.status === 200) {
      return resp.json()
    } else if (resp.status === 400) {
      return Promise.reject({ message: 'Ingrese su usuario y/o contraseña' })
    } else if (resp.status === 401) {
      return Promise.reject({ message: 'Ingrese correctamente su usuario y/o contraseña' })
    } else if (resp.status === 403) {
      return Promise.reject({ message: 'Ingrese en el área correcta  Admin o Empleado' })
    } else {
      return Promise.reject({ message: 'Solicite Credenciales con el Administrador' })
    }
  })
};

export default getToken;