import React from 'react';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import Error from '../Helper/Error';
import { PASSWORD_LOST } from '../../Api';

const LoginPasswordLost = () => {
  const login = useForm();
  const { data, loading, error, request } = useFetch();

  async function handleSubmit(e) {
    e.preventDefault();
    if (login.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: window.location.href.replace('perdeu', 'resetar'),
      });
      const { json } = await request(url, options);
      console.log(json);
    }
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Esqueci a Senha</h1>
      {data ? (
        <p style={{ color: '#4c1' }}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input
            label="Digite o seu e-mail para mandarmos um token de recuperação da senha a ele"
            id="login"
            type="text"
            name="login"
            {...login}
          />
          {loading ? (
            <Button label="Enviando..." disabled />
          ) : (
            <Button label="Enviar E-mail" />
          )}
          {error && <Error error={error} />}
          {login.value}
        </form>
      )}
    </section>
  );
};

export default LoginPasswordLost;
