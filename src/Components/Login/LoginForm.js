import React from 'react';
import Button from '../Forms/Button';
import Input from '../Forms/Input';
import { Link } from 'react-router-dom';
import useForm from '../../Hooks/useForm';
import Error from '../Helper/Error';
import { UserContext } from '../../UserContext';
import styles from './LoginForm.module.css';
import stylesBtn from '../Forms/Button.module.css';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const { userLogin, error, loading } = React.useContext(UserContext);

  async function handleSubmit(e) {
    e.preventDefault();
    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Login</h1>
      <form className={styles.form} action="" onSubmit={handleSubmit}>
        <Input label="Usuário" id="username" type="text" {...username} />
        <Input label="Senha" id="password" type="password" {...password} />
        {loading ? (
          <Button disabled label={'Carregando...'} width={200} />
        ) : (
          <Button label={'Entrar'} width={200} />
        )}
        <Error error={error} />
      </form>
      <Link className={styles.perdeu} to="/login/perdeu">
        Perdeu a Senha?
      </Link>
      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se em nosso site</p>
        <Link to="/login/cadastro" className={stylesBtn.button}>
          Cadastro
        </Link>
      </div>
    </section>
  );
};

export default LoginForm;
