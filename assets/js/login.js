// assets/js/login.js

document.addEventListener("DOMContentLoaded", function () {
  // Autofill current year in footer
  document.getElementById("year").textContent = new Date().getFullYear();

  const loginForm = document.getElementById("loginForm");
  const loginError = document.getElementById("loginError");

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Remove error on each try
    loginError.classList.add("d-none");

    // Validation (Frontend)
    const username = loginForm.username.value.trim();
    const password = loginForm.password.value;

    let valid = true;
    if (!username) {
      loginForm.username.classList.add("is-invalid");
      valid = false;
    } else {
      loginForm.username.classList.remove("is-invalid");
    }

    if (!password) {
      loginForm.password.classList.add("is-invalid");
      valid = false;
    } else {
      loginForm.password.classList.remove("is-invalid");
    }

    if (!valid) return;

    // DEMO only: ไม่เชื่อมต่อ backend
    // ตัวอย่าง admin demo: username: admin, password: 123456
    if (username === "admin" && password === "123456") {
      // Login success
      window.location.href = "/dashboard.html";
    } else {
      // Login failed
      loginError.classList.remove("d-none");
    }
  });
});
