import React from 'react';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';

const LoginPasswordLost = () => {
  const email = useForm();

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Esqueci a Senha</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="Digite o seu e-mail para mandarmos um token de recuperação da senha a ele"
          id="email"
          type="email"
          {...email}
        />
        <Button label="Enviar" />
      </form>
    </section>
  );
};

export default LoginPasswordLost;
