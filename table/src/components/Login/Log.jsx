import React from 'react';
import { useState } from 'react';
//import { useHistory } from 'react-router-dom';
import { Button, Form, Input, Alert } from 'antd';
import './Log.scss'

const URI = 'http://localhost:3200/api/v1/auth/login';

export const Log = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  //const history = useHistory();

  /* Fetch al backend que traera el token de la contraseña */
  const handleSubmit = async ({email, password}) => {
    try {
      const response = await fetch(URI, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email,  password}),
      });
      
      if (response.ok) {
        const data = await response.json();
        console.log(data)
        const { access, refresh } = data;

        // Guarda los tokens en el almacenamiento local del navegador
        localStorage.setItem('access_token', access);
        //localStorage.setItem('refresh_token', refresh);

        // redirigir a la página de inicio
        //history.push('/ruta-de-inicio');
      } else {
        const errorData = await response.json();
        const {msg} = errorData;
        setErrorMessage(msg);
      }
    } catch (error) {
      setErrorMessage('Ocurrio un error al iniciar sesion');
    }
  };

  /* Manejo de cambios en input de correo y contraseña */
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleCloseAlert = () => {
    setErrorMessage(null);
  };


  return (
    <>
      {errorMessage && 
        <Alert  
          message={errorMessage} 
          type="error" 
          showIcon
          closable 
          onClose={handleCloseAlert}  
        />
      }
      
      <Form
        onFinish={handleSubmit}
        autoComplete="off"
        labelCol={{
          span: 8,
        }}
        className='formulario'
      >
        <p className='title'>Iniciar Sesión</p>
        <Form.Item 
          name="email"
          rules={[{ required: true, message: 'Ingresa tu correo electrónico' }]}
          className='formulario-email'
          
        >
          <Input
            value={email}
            name="email"
            placeholder="Correo electronico"
            onChange={handleEmailChange}
            className='formulario-email-input'
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Ingresa tu contraseña' }]}  
          className='formulario-password'
        >
          <Input.Password 
            value={password}
            name="password"
            placeholder="Contraseña"
            onChange={handlePasswordChange}
            className='formulario-password-text'
          />
        </Form.Item>

        <Form.Item 
          wrapperCol={{ offset: 0, span: 16 }}
          className='formulario-button'  
        >
          <Button 
            type="primary" 
            htmlType="submit"
            className='formulario-button-submit'
          >
            Ingresar
          </Button>
        </Form.Item>
    </Form>
    </>
  )
}
