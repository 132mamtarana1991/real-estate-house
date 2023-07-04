import React, { useEffect } from "react";
import LoginText from "./components/page/login-text";
import SignIn from "./components/page/sign-in";
import SignUp from "./components/page/sign-up";
export default function Page() {
  useEffect(() => {
    const sign_in_btn = document.querySelector("#sign-in-btn");
    const sign_up_btn = document.querySelector("#sign-up-btn");
    const container = document.querySelector(".containers");
    sign_up_btn &&
      sign_up_btn.addEventListener("click", () => {
        container.classList.add("sign-up-mode");
      });

    sign_in_btn &&
      sign_in_btn.addEventListener("click", () => {
        container.classList.remove("sign-up-mode");
      });
    const showPassword = document.querySelector("#show-password");
    const PasswordField = document.querySelector("#password");

    showPassword &&
      showPassword.addEventListener("click", function () {
        this.classList.toggle("fa-eye-slash");
        const type =
          PasswordField.getAttribute("type") === "password"
            ? "text"
            : "password";
        PasswordField.setAttribute("type", type);
      });
  }, []);

  return (
    <main className="auth">
      <div class="containers">
        <div class="forms-container">
          <div class="signin-signup">
           <SignIn/>
           <SignUp/>
          </div>
        </div>
        <LoginText />
      </div>
    </main>
  );
}
