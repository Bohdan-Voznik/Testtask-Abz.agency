import { useState, useEffect } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { fetchUsers } from 'js/fetchApi';

import { Header } from 'components/Header/Header';
import { Hero } from 'components/Hero/Hero';
import { SignInForm } from 'components/SignInForm/SignInForm';
import { Users } from 'components/Users/Users';

export const App = () => {
  const [nextUrl, setNextUrl] = useState(null);
  const [users, setUsers] = useState(null);

  const [loadind, setLoadind] = useState(false);

  useEffect(() => {
    fetchUsers().then(data => {
      setNextUrl(data.nextUrl);
      setUsers(data.users);
    });
  }, []);

  const notifi = message => {
    toast.error(message, {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  };

  const SignInSuccess = () => {
    setNextUrl(null);
    fetchUsers().then(data => {
      setNextUrl(data.nextUrl);
      setUsers(data.users);
    });
  };

  const showMore = () => {
    setLoadind(true);
    fetchUsers(nextUrl)
      .then(data => {
        setNextUrl(data.nextUrl);
        setUsers(prevState => {
          const sortedUsers = [...prevState, ...data.users].sort((a, b) => {
            return b.registration_timestamp - a.registration_timestamp;
          });
          return sortedUsers;
        });
      })
      .catch(error => {
        const message = error?.response?.data?.message
          ? error.response.data.message
          : error.message;
        notifi(message);
      })
      .finally(() => setLoadind(false));
  };

  const isShowSignInButton = Boolean(!loadind && nextUrl);

  return (
    <>
      <Header />
      <Hero />
      {users && (
        <Users
          nextUrl={nextUrl}
          users={users}
          showMore={showMore}
          isShowSignInButton={isShowSignInButton}
          isShowPreloader={loadind}
        />
      )}
      <SignInForm onSuccess={SignInSuccess} notifi={notifi} />

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};
