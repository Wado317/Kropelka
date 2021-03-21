export default class TextValidator {
  static isEmail = (val: string): boolean => {
    const emailRegex = new RegExp(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
    return emailRegex.test(String(val).toLowerCase());
  };

  static isCorrectPassword = (val: string): boolean => {
    const passwordRegex = new RegExp(
      /(?=.*(\d|[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]))(?=.*[a-z])(?=.*[A-Z])/,
    );
    return val?.length >= 6 && passwordRegex.test(String(val));
  };
};


//TESTY WALIDACJI DODAC DO PROJEKTU
//walidacje tez rozbic na 'komponent'