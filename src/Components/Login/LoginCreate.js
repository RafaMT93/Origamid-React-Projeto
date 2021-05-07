import React from 'react';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';

const LoginCreate = () => {
  const username = useForm();
  const email = useForm('email');
  const password = useForm('password');

  async function handleSubmit(e) {
    e.preventDefault();
    if (username.validate() && email.validate() && password.validate()) {
      console.log('Enviar');
    } else {
      console.log('Não Enviar');
    }
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" id="username" type="text" {...username} />
        <Input label="E-mail" type="email" id="email" {...email} />
        <Input label="Senha" type="password" id="password" {...password} />
        <Button label="Cadastrar" />
      </form>
    </section>
  );
};

export default LoginCreate;
