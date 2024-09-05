<script setup lang="ts">
import { ref } from "vue";
const passwordElement = ref();
const password = ref("");
const email = ref("");
const onShowPassword = () => {
  if (passwordElement.value.type === "password") {
    passwordElement.value.type = "text";
  } else {
    passwordElement.value.type = "password";
  }
};
const onFacebookSignin = () => {};
const onGoogleSignin = () => {};
const onSignin = () => {
  const value = {
    password: password.value,
    email: email.value,
  };
  console.log(value);
};
</script>

<template>
  <div class="container signin">
    <form @submit.prevent="onSignin">
      <h3>Đăng nhập</h3>
      <div class="form-group">
        <label for="email">Email</label>
        <input
          v-model="email"
          type="email"
          class="email"
          placeholder="Email..."
          required
        />
      </div>
      <div class="form-group">
        <label for="password">Mật khẩu</label>
        <input
          type="password"
          v-model="password"
          ref="passwordElement"
          class="password"
          placeholder="Đặt mật khẩu..."
          required
        />
        <div class="check">
          <input @click="onShowPassword" type="checkbox" /><span
            >Hiển thị mật khẩu!</span
          >
        </div>
      </div>
      <RouterLink to="/sign-up">Tôi chưa có tài khoản!</RouterLink>
      <button type="submit">Đăng nhập</button>
    </form>
    <div class="others">
      <p>______or______</p>
      <div class="btn-group">
        <button @click="onGoogleSignin">Google</button>
        <button @click="onFacebookSignin">Facebook</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.signin {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  max-height: 100vh;
}
form {
  width: calc(100% / 2);
  display: flex;
  flex-direction: column;
}
form h3 {
  font-size: 2rem;
}
form .form-group {
  display: flex;
  flex-direction: column;
  padding: 0.2rem 0;
}
form .form-group .check {
  display: flex;
  align-items: center;
  font-size: 0.8rem;
}
form .form-group input {
  padding: 0.4rem 0.5rem;
  background-color: var(--bg-primary);
  border: 1px solid var(--border-color);
  border-radius: 3px;
  color: var(--text-color);
}
form a {
  font-size: 0.8rem;
  font-style: italic;
  margin-bottom: 0.5rem;
  margin-left: auto;
  color: var(--text-color);
}
form a:hover {
  color: var(--link-color);
}
form button {
  cursor: pointer;
  width: 50%;
  margin: 0 auto;
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
  border: 1px solid var(--border-color);
  transition: all 0.1s linear;
  font-weight: 900;
}
form button:hover {
  background-color: var(--success-color);
  border-color: var(--success-color);
  color: var(--text-color);
}
.others {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.others p {
  margin: 0.5rem 0;
  opacity: 0.5;
}
.others .btn-group button {
  width: 100px;
  margin: 0.5rem;
  font-size: 0.8rem;
  cursor: pointer;
  border-radius: 4px;
  border: 1px solid var(--border-color);
}
@media screen and (max-width: 738px) {
  form {
    width: calc(80%);
  }
}
@media screen and (max-width: 538px) {
  form {
    width: calc(90%);
  }
}
</style>
