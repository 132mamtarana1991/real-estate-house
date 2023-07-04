import React from "react";

export default function LoginText() {
  return (
    <div>
      <div class="panels-container">
        <div class="panel left-panel">
          <div class="content">
            <h3>New here ?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <button class="btn transparent" id="sign-up-btn">
              Sign up
            </button>
          </div>
          <img src="https://weblearnbd.net/tphtml/seomy-prv/seomy/assets/img/banner/banner-5-bg-1.png" class="image" alt="" />
        </div>
        <div class="panel right-panel">
          <div class="content">
            <h3>One of us ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <button class="btn transparent" id="sign-in-btn">
              Sign in
            </button>
          </div>
          <img src="https://weblearnbd.net/tphtml/seomy-prv/seomy/assets/img/banner/banner-2-thumb-1.png" class="image" alt="" />
        </div>
      </div>
    </div>
  );
}
