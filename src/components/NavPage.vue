<template>
  <div class="container">
    <div class="left">
      <img src="../assets/logo.svg" alt="logo">
      <ul class="nav-menu">
        <li class="nav-item"><a class="nav-link" href="#">Features</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Pricing</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Resources</a></li>
      </ul>
    </div>
    <div class="login">
      <ul>
        <li class="nav-item"><a class="nav-link" href="#">Login</a></li>
      <li class="nav-item"><a class="active1" href="#">Sign up</a></li>
      </ul>
    </div>
    <div class="mobile">
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavPage',
}
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 1rem;
  padding: 1rem;
  margin-bottom: 3rem;
}
.nav-menu {
  display: flex;
}
.left {
  display: flex;
  margin-right: 200px;
}
a:active,.nav-item:hover {
  opacity: 0.7; 
  transition: .3s;
}
.left img {
  width: 100px;
  height: 30px;
  padding: 1.2rem;
}
.left ul{
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
}
.left ul a{
  color: hsl(257, 7%, 63%);
  text-decoration: none;
  padding: 0.2rem 1rem;
  font-weight: 700;
  cursor: pointer;
}
.login {
  margin-left: 0.5rem;
}
.login ul{
  display: flex;
  align-items: center;
  list-style: none;
}
.login ul a {
  text-decoration: none;
  padding: 0.2rem 1rem;
  font-weight: 700;
  color: hsl(257, 7%, 63%);
  cursor: pointer;
}
.login ul .active1 {
  background-color: hsl(182, 52%, 54%);
  color: #ffff;
  padding: 0.4rem 1.2rem;
  border-radius: 1.5rem;
}
.active1:hover {
  opacity: 0.6;
}
.mobile {
  display: none;
}
.bar {
  display: block;
  width: 1.5rem;
  height: 0.2rem;
  margin: 0.3rem auto;
  transition: all 0.3s ease-in-out;
  background: #000;
}
@media (max-width: 768px) {
  .mobile {
    display: block;
    margin-left: -40px;
  }
  .nav-item{
    display: none;
  }
 .login {
  display: none;
 }
}
</style>