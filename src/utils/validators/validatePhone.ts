const validatePhone = (phone: string | undefined): boolean => {
  const re = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
  return phone ? re.test(phone) : false;
};

export default validatePhone;
