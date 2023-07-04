import React from "react";

export default function SignIn() {
  return (
    <form action="#" class="sign-in-form">
      <h2 class="title">Sign in</h2>
      <div class="input-field">
        <i class="fas fa-user"></i>
        <input type="text" placeholder="Username" />
      </div>
      <div class="input-field password-container">
        <i class="fas fa-lock"></i>
        <input type="password" id="password" placeholder="Password" />
        <i class="fa-solid fa-eye" id="show-password"></i>
      </div>
      <a
        href="#_"
        class=" my-2 relative inline-flex items-center justify-center px-16 py-3 overflow-hidden font-mono font-medium tracking-tighter text-[#00c194] bg-[#dceeea] hover:text-white  rounded-md group"
      >
        <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#00c194] text-white rounded-full group-hover:w-56 group-hover:h-56"></span>
        <span class="absolute inset-0 w-full h-full"></span>
        <span class="relative">Login</span>
      </a>
      <p class="social-text">Or Sign in with social platforms</p>
      <div class="social-media">
        <a href="#" class="social-icon">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="#" class="social-icon">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="#" class="social-icon">
          <i class="fab fa-google"></i>
        </a>
        <a href="#" class="social-icon">
          <i class="fab fa-linkedin-in"></i>
        </a>
      </div>
    </form>
  );
}
