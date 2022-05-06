const axios = require('axios').default;
const BASE_URL = 'https://frontend-test-assignment-api.abz.agency/api/v1';

export async function fetchUsers(nextUrl = `${BASE_URL}/users?page=1&count=6`) {
  const options = {
    method: 'get',
    url: nextUrl,
  };

  const { data } = await axios(options);
  const {
    links: { next_url },
    users,
  } = data;

  const result = users.map(user => {
    const phone = user.phone;
    const fixedPhone = `${phone.slice(0, 3)} (${phone.slice(
      3,
      6
    )}) ${phone.slice(6, 9)} ${phone.slice(9, 11)} ${phone.slice(
      11,
      phone.length
    )} `;
    user.phone = fixedPhone;
    return user;
  });
  console.log(result);
  return { nextUrl: next_url, users: result };
}

export async function fetchPositions() {
  const options = {
    method: 'get',
    url: `${BASE_URL}/positions`,
  };

  const { data } = await axios(options);
  return data;
}

async function getToket() {
  const options = {
    method: 'get',
    url: `${BASE_URL}/token`,
  };

  const { data } = await axios(options);
  return data;
}

export async function createUser({ positionId, name, email, phone, file }) {
  let formData = new FormData();
  formData.append('position_id', positionId);
  formData.append('name', name);
  formData.append('email', email);
  formData.append('phone', phone);
  formData.append('photo', file);

  const { token } = await getToket();

  const options = {
    method: 'post',
    url: `${BASE_URL}/users`,
    headers: {
      Token: token,
    },
    data: formData,
  };
  // {
  //   method: 'POST',
  //   body: formData,
  //   headers: {
  //     Token: token,
  //   },
  // };

  const { data } = await axios(options);
  // await fetch(`${BASE_URL}/users`, options);
  console.log('lol');
  return data;
}
