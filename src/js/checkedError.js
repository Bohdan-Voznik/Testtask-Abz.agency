export function validationName(name) {
  if (name === '') {
    return null;
  }
  if (name.length <= 2 || name.length >= 60) {
    return 'The name must be at least 2 characters.';
  }
  return null;
}

export function validationEmail(email) {
  if (email === '') {
    return null;
  }
  const regexp =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/i;
  if (!regexp.test(email)) {
    return 'The email must be a valid email address.';
  }
  return null;
}

export function validationPhone(phone) {
  if (phone === '') {
    return null;
  }

  const regexp = /^(?:\+38)?(0[0-9][0-9]\d{7})$/i;
  if (!regexp.test(phone)) {
    return 'The phone field is required.';
  }
  return null;
}

export async function validationFIle(file) {
  const error = {
    value: [],
  };
  //   ----------File type----------
  if (file.type !== 'image/jpeg') {
    error.value = ['The photo format must be jpeg/jpg type.'];
  } else {
    //   ----------Image resolution----------
    const { height, width } = await new Promise(resolve => {
      const img = new Image();
      img.onload = () => {
        resolve({
          height: img.height,
          width: img.width,
        });
      };
      img.src = window.URL.createObjectURL(file);
    });

    if (width < 70 && height < 70) {
      error.value = ['Minimum size of photo 70x70px.'];
    }
  }

  //   ----------File size----------
  if (file.size > 5242880) {
    error.value = [
      ...error.value,
      'The photo may not be greater than 5 Mbytes.',
    ];
  }

  return error.value.length !== 0 ? error.value : null;
}
