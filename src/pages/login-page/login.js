import { getUsers, setCurrentUser, hashPasswordSync } from "../../data/auth.js";

const form = document.querySelector("#login-form");
const loginInput = document.querySelector("#login");
const passwordInput = document.querySelector("#password");

loginInput?.addEventListener("input", () => {
  loginInput.setCustomValidity("");
});

passwordInput?.addEventListener("input", () => {
  passwordInput.setCustomValidity("");
});

form?.addEventListener("submit", (event) => {
  event.preventDefault();

  const loginValue = loginInput.value.trim().toLowerCase();
  const passwordHash = hashPasswordSync(passwordInput.value);

  loginInput.setCustomValidity("");
  passwordInput.setCustomValidity("");

  const users = getUsers();
  const user = users.find(
    (item) =>
      item.username.toLowerCase() === loginValue || item.email.toLowerCase() === loginValue
  );

  if (!user) {
    loginInput.setCustomValidity("Пользователь с таким логином или почтой не найден");
    loginInput.reportValidity();
    return;
  }

  if (user.passwordHash !== passwordHash) {
    passwordInput.setCustomValidity("Неверный пароль");
    passwordInput.reportValidity();
    return;
  }

  setCurrentUser(user);

  form.reset();
  window.location.href = "../welcome-page/";
});