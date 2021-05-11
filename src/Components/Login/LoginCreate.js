import React from 'react';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import Error from '../Helper/Error';
import useForm from '../../Hooks/useForm';
import { USER_POST } from '../../Api';
import { UserContext } from '../../UserContext';
import useFetch from '../../Hooks/useFetch';

const LoginCreate = () => {
  const username = useForm();
  const email = useForm('email');
  const password = useForm();
  const { userLogin } = React.useContext(UserContext);
  const { error, loading, request } = useFetch();

  async function handleSubmit(e) {
    e.preventDefault();
    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });
    const { response } = await request(url, options);
    if (response.ok) userLogin(username.value, password.value);
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" id="username" type="text" {...username} />
        <Input label="E-mail" type="email" id="email" {...email} />
        <Input label="Senha" type="password" id="password" {...password} />
        {loading ? (
          <Button label="Cadastrando..." disabled />
        ) : (
          <Button label="Cadastrar" />
        )}
        <Error error={error} />
      </form>
    </section>
  );
};

export default LoginCreate;
