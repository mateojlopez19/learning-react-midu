import React from 'react'
import axios from 'axios'

const URI = 'http://localhost:3200/api/v1/auth/login';

export const loginService = async credenciales => {
  try {
    const response = await fetch(URI, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email,  password}),
    });
    
    console.log("response: "+response.ok)
    if (response.ok) {
      const data = await response.json();
      console.log(data)
      //const { access, refresh } = data;

      // Guarda los tokens en el almacenamiento local del navegador
      //localStorage.setItem('access_token', access);
      //localStorage.setItem('refresh_token', refresh);

      // redirigir a la página de inicio
    } else {
      const errorData = await response.json();
      const {msg} = errorData;
      setErrorMessage(msg);
    }
  } catch (error) {
    setErrorMessage('Ocurrio un error al iniciar sesion');
  }
}
