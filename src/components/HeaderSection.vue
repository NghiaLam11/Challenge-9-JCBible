<script setup lang="ts"></script>

<template>
  <section class="header">
    <div class="proverb">
      <p class="container">
        Sống Phúc âm, phụng sự Thiên Chúa, phục vụ Tổ quốc và dân tộc.
      </p>
    </div>
    <div class="navbar">
      <nav class="container">
        <div class="logo">
          <img src="../images/webicon.png" alt="" />
          <span>JCBIBLE</span>
        </div>
        <ul class="nav-list">
          <li><RouterLink to="/">TRANG CHỦ</RouterLink></li>
          <li><RouterLink to="/bible">KINH THÁNH</RouterLink></li>
          <li><RouterLink to="/charts">BIỂU ĐỒ</RouterLink></li>
          <li><RouterLink to="/notes">GHI CHÚ</RouterLink></li>
          <li><RouterLink to="/lessons">BÀI HỌC</RouterLink></li>
        </ul>
        <div class="nav-more">
          <i class="fas fa-bars"></i>
          <ul class="hidden-nav">
            <li>
              <RouterLink to="/profile"
                ><img
                  src="../images/710080731381b1dfe890 (1).jpg"
                  alt="avatar"
                /><span>Lam Nghia <br />&#127793;</span></RouterLink
              >
            </li>
            <li><RouterLink to="/profile">Hồ sơ</RouterLink></li>
            <li class="item-mobile">
              <RouterLink to="/">Trang chủ</RouterLink>
            </li>
            <li class="item-mobile">
              <RouterLink to="/bible">Kinh Thánh</RouterLink>
            </li>
            <li class="item-mobile">
              <RouterLink to="/mindmaps">Biểu đồ</RouterLink>
            </li>
            <li class="item-mobile">
              <RouterLink to="/notes">Ghi chú</RouterLink>
            </li>
            <li class="item-mobile">
              <RouterLink to="/lessons">Bài học</RouterLink>
            </li>
            <li><RouterLink to="/settings">Cài đặt</RouterLink></li>
            <li><a>Đăng xuất</a></li>
          </ul>
        </div>
      </nav>
    </div>
  </section>
</template>

<style scoped>
.proverb {
  background-color: var(--warning-color);
}
.proverb p {
  text-align: center;
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  font-weight: 500;
  font-style: italic;
  line-height: 2.1rem;
}
.navbar {
  background-color: var(--bg-secondary);
  box-shadow: var(--shadow-box);
  z-index: 99;
}
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
}
nav .logo {
  display: flex;
  align-items: center;
}
nav .logo img {
  width: 50px;
}
nav .logo span {
  font-family: var(--font-mono);
  font-size: 1.4rem;
  transform: translateX(-7px);
}
nav ul {
  display: flex;
  list-style: none;
}
nav ul li a {
  color: var(--text-color);
  text-decoration: none;
  padding: 0.5rem 1rem;
  transition: all 0.1s linear;
  font-size: 0.9rem;
}
nav ul li a:hover {
  color: var(--link-color);
  font-weight: 500;
}
nav .nav-more i {
  cursor: pointer;
  font-size: 1.5rem;
  opacity: 0.7;
  transition: all 0.1s linear;
}
nav .nav-more i:hover {
  opacity: 1;
  scale: 1.1;
}
nav .nav-more {
  position: relative;
}

nav .nav-more ul {
  position: absolute;
  right: 0;
  padding: 0;
  z-index: 20;
  background-color: var(--bg-primary);
  padding: 1rem;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-box);
  display: flex;
  flex-direction: column;
  width: 30vw;
  transition: all 0.2s ease-in-out;
  transform: scaleX(0) scaleY(0);
  transform-origin: top right;
}
nav .nav-more ul::after {
  position: absolute;
  top: -20px;
  right: 20px;
  content: "";
  width: 100px;
  height: 20px;
  background-color: transparent;
}
nav .nav-more ul li {
  padding: 0.09rem;
}
nav .nav-more ul .item-mobile {
  display: none;
}
nav .nav-more ul li:first-child a {
  display: flex;
}
nav .nav-more ul li:first-child a img {
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 4px;
}
nav .nav-more ul li:first-child a span {
  font-size: 1rem;
  font-weight: 700;
  margin-left: 0.4rem;
}
nav .nav-more ul li:last-child a:hover {
  color: var(--error-color);
}
nav .nav-more:hover .hidden-nav {
  transform: scaleX(1) scaleY(1);
}
@media screen and (min-width: 1260px) {
  nav .nav-more ul {
    width: 20vw;
  }
}
@media screen and (max-width: 738px) {
  nav ul {
    display: none;
  }
  nav .nav-more ul {
    width: 50vw;
  }
  nav .nav-more ul .item-mobile {
    display: block;
  }
}
</style>
