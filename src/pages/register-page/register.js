import {
  getUsers,
  saveUsers,
  setCurrentUser,
  hashPasswordSync,
  createUserId,
} from "../../data/auth.js";

const form = document.querySelector("#register-form");
const usernameInput = document.querySelector("#username");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const passwordConfirmInput = document.querySelector("#password-confirm");

const clearPasswordError = () => {
  passwordConfirmInput?.setCustomValidity("");
};

passwordInput?.addEventListener("input", clearPasswordError);
passwordConfirmInput?.addEventListener("input", clearPasswordError);

form?.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = usernameInput.value.trim();
  const email = emailInput.value.trim().toLowerCase();
  const password = passwordInput.value;
  const passwordConfirm = passwordConfirmInput.value;

  passwordConfirmInput.setCustomValidity("");

  if (password !== passwordConfirm) {
    passwordConfirmInput.setCustomValidity("Пароли не совпадают");
    passwordConfirmInput.reportValidity();
    return;
  }

  const users = getUsers();
  const exists = users.some(
    (user) => user.username.toLowerCase() === username.toLowerCase() || user.email === email
  );

  if (exists) {
    alert("Пользователь с таким логином или email уже существует");
    return;
  }

  const newUser = {
    id: createUserId(),
    username,
    email,
    passwordHash: hashPasswordSync(password),
    createdAt: new Date().toISOString(),
  };

  users.push(newUser);
  saveUsers(users);
  setCurrentUser(newUser);

  form.reset();
  window.location.href = "../welcome-page/";
});