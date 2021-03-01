const validateName = (str: string | undefined): boolean => {
  const re = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u;
  return str ? re.test(str) : false;
};

export default validateName;
