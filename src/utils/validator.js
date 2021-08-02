const validateEmail = function (email) {
  const re = /\S+@\S+\.\S+/;
  const isValidEmail = re.test(String(email).toLowerCase());

  if (!isValidEmail) return "Invalid Email!";
  else if (email.length > 50) return "Too long email!";
  else return "success";
};

const validatePassword = function (pw1, pw2) {
  if (!pw1 || !pw2) return "Input passwords!";
  else if (pw1.length < 8 || pw2.length < 8) return "Too short passwords!";
  else if (pw1.length > 50 || pw2.length > 50) return "Too long passwords!";
  else if (pw1 != pw2) return "Different passwords provided!";
  else return "success";
};

const validateName = function (name) {
  if (!name) return "Input name!";
  else if (name.length > 30) return "Too long name!";
  else return "success";
};

module.exports = { validateEmail, validatePassword, validateName };
