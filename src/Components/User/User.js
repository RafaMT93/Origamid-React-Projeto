import React from 'react';
import UserHeader from './UserHeader';
import { Routes, Route } from 'react-router-dom';
import Feed from '../Feed/Feed';
import UserPhotoPost from './UserPhotoPost';
import UserStats from './UserStats';
import { UserContext } from '../../UserContext';
import NotFound from '../NotFound';
import Head from '../Helper/Head';
import useFetch from '../../Hooks/useFetch';
import UserDontHaveStats from './UserDontHaveStats';
import { PHOTO_USER_GET } from '../../Api';

const User = () => {
  const { data } = React.useContext(UserContext);
  const [photos, setPhotos] = React.useState(false);
  const { request } = useFetch();

  React.useEffect(() => {
    async function fetchUserGet() {
      const { url, options } = PHOTO_USER_GET(data.username);
      const { json } = await request(url, options);
      setPhotos(json);
    }
    fetchUserGet();
  }, [photos]);

  return (
    <section className="container">
      <Head title="Minha Conta" />
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="postar" element={<UserPhotoPost />} />
        {photos.length > 0 ? (
          <Route path="estatisticas" element={<UserStats />} />
        ) : (
          <Route path="estatisticas" element={<UserDontHaveStats />} />
        )}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  );
};

export default User;
