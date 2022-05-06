export default class Validation {
  constructor() {
    this.fails = {};
  }

  async checkedError({ name, email, phone, file }) {
    if (name === '' || email === '' || phone === '' || file === null) {
      return this.fails;
    }

    this.validationName(name);
    this.validationEmail(email);
    this.validationPhone(phone);
    await this.validationFIle(file);
    return this.fails;
  }

  validationName(name) {
    if (name.length <= 2 || name.length >= 60) {
      this.fails = {
        ...this.fails,
        name: ['The name must be at least 2 characters.'],
      };
    }
  }

  validationEmail(email) {
    let regexp =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/i;
    if (!regexp.test(email)) {
      this.fails = {
        ...this.fails,
        email: ['The email must be a valid email address.'],
      };
    }
  }

  validationPhone(phone) {
    let regexp = /^(?:\+38)?(0[0-9][0-9]\d{7})$/i;
    if (!regexp.test(phone)) {
      this.fails = {
        ...this.fails,
        phone: ['The phone field is required.'],
      };
    }
  }

  async validationFIle(file) {
    if (file.type !== 'image/jpeg') {
      this.fails = {
        ...this.fails,
        photo: this.fails?.photo
          ? [...this.fails.photo, 'The photo format must be jpeg/jpg type.']
          : ['The photo format must be jpeg/jpg type.'],
      };
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
        this.fails = {
          ...this.fails,
          photo: this.fails?.photo
            ? [...this.fails.photo, 'Minimum size of photo 70x70px.']
            : ['Minimum size of photo 70x70px.'],
        };
      }
    }

    //   ----------File size----------
    if (file.size > 5242880) {
      this.fails = {
        ...this.fails,
        photo: this.fails?.photo
          ? [...this.fails.photo, 'The photo may not be greater than 5 Mbytes.']
          : ['The photo may not be greater than 5 Mbytes.'],
      };
    }
  }
}
