const loginForm = document.getElementById("login-form");
const errorMessage = document.querySelector(".error-message");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // Simulate authentication (replace with your actual authentication logic)
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "user" && password === "password") {
    // Successful login
    alert("Login successful!");
    // Redirect to the protected area of your site
  } else {
    // Invalid credentials
    errorMessage.textContent = "Invalid username or password.";
  }
});
