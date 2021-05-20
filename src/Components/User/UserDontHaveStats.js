import React from 'react';
import styles from './UserDontHaveStats.module.css';

const UserDontHaveStats = () => {
  return (
    <section className="container">
      <h1 className="title">
        Não há estatísticas a serem mostradas no momento
      </h1>
      <p className={styles.p}>
        Poste alguma foto para poder visualizar essa página
      </p>
    </section>
  );
};

export default UserDontHaveStats;
