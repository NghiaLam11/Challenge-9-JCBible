<script setup lang="ts"></script>

<template>
  <footer>
    <div class="container nav-footer">
      <div>
        <div class="logo">
          <img src="../images/webicon.png" alt="" />
          <span>JCBIBLE</span>
        </div>
        <p class="quote">
          Lời CHÚA là ngọn đèn cho chơn tôi, ánh sáng cho đường lối tôi.
        </p>
      </div>

      <div class="footer-list">
        <ul>
          <li>
            <RouterLink to="/">Trang chủ</RouterLink>
          </li>
          <li>
            <RouterLink to="/about">Về chúng tôi</RouterLink>
          </li>
          <li>
            <RouterLink to="/bible">Kinh Thánh</RouterLink>
          </li>
          <li>
            <RouterLink to="">Biểu đồ</RouterLink>
          </li>
          <li>
            <RouterLink to="/notes">Ghi chú</RouterLink>
          </li>
          <li>
            <RouterLink to="">Bài học</RouterLink>
          </li>
        </ul>
        <ul>
          <li><RouterLink to="">Facebook</RouterLink></li>
          <li><RouterLink to="/bible">Instagram</RouterLink></li>
          <li><RouterLink to="">Youtube</RouterLink></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  padding: 2rem 1.5rem 7rem 1.5rem;
  background-color: var(--bg-secondary);
  box-shadow: var(--shadow-box);
}
footer p.quote {
  padding-left: 0.5rem;
  font-family: var(--font-mono);
  font-style: italic;
  font-weight: 900;
  color: var(--warning-color);
}
footer .logo {
  display: flex;
  align-items: center;
}
footer .logo img {
  width: 50px;
}
footer .logo span {
  font-family: var(--font-mono);
  font-size: 1.4rem;
  transform: translateX(-7px);
}

.nav-footer {
  display: flex;
  align-items: start;
  justify-content: space-between;
}
.nav-footer .footer-list {
  display: flex;
}
.nav-footer .footer-list ul {
  list-style: none;
}
.nav-footer .footer-list ul li {
  padding: 0.1rem 0.5rem;
}
.nav-footer .footer-list ul li a {
  text-decoration: none;
  font-weight: 500;
  color: var(--text-color);
}
@media screen and (max-width: 738px) {
  .nav-footer {
    flex-direction: column;
  }
  .nav-footer .footer-list ul {
    padding: 0;
    padding-top: 0.5rem;
    padding-right: 1rem;
  }
}
</style>
