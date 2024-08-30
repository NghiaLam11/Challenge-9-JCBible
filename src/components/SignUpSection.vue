<script setup lang="ts"></script>

<template>
  <div class="container signup">
    <form>
      <h3>Đăng ký</h3>
      <div class="form-group">
        <label for="name">Tên</label>
        <input type="text" class="name" placeholder="Đặt tên..." />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="text" class="email" placeholder="Email..." />
      </div>
      <div class="form-group">
        <label for="password">Mật khẩu</label>
        <input type="text" class="password" placeholder="Đặt mật khẩu..." />
        <div class="check">
          <input type="checkbox" /><span>Hiển thị mật khẩu!</span>
        </div>
      </div>
      <RouterLink to="/signin">Tôi đã có tài khoản!</RouterLink>
      <button type="submit">Đăng ký</button>
    </form>
    <div class="others">
      <p>______or______</p>
      <div class="btn-group">
        <button>Google</button>
        <button>Facebook</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.signup {
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
</style>
