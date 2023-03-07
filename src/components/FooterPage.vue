<template>
 <div class="footer-container">
    <div class="foot-link">
      <div class="image">
        <img src="../assets/logo.svg" alt="logo">
      </div>
      <ul class="footer-links">
        <li>Features</li>
        <li>Link Shortening</li>
        <li>Branded links</li>
        <li>Analytics</li>
      </ul>
      <ul class="footer-links">
        <li>Resources</li>
        <li>Blogs</li>
        <li>Developers</li>
        <li>Support</li>
      </ul>
      <ul class="footer-links">
        <li>Company</li>
        <li>About</li>
        <li>Our Team</li>
        <li>Careers</li>
        <li>Contacts</li>
      </ul>
      <div class="foot-social">
        <img src="../assets/icon-facebook.svg" alt="">
        <img src="../assets/icon-twitter.svg" alt="">
        <img src="../assets/icon-instagram.svg" alt="">
        <img src="../assets/icon-pinterest.svg" alt="">
      </div>
    </div>
 </div>   
</template>

<script>
export default {
    name: 'FooterPage',
}
</script>

<style scoped>
.footer-container{
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    background:rgb(25, 25, 36);
}
.foot-link {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin: 2rem 2rem;
    margin-left: 15%;
    gap: 4rem;
}
ul, li:hover{
    opacity: 0.7;
}
img{
    color: white;
    margin-top: 15px;
}
ul li {
    color: hsl(240, 2%, 80%);
    margin: 0.2rem 0;
    list-style: none;
    gap: 2rem;
    font-size: 14px;
    font-weight: 500;
}
ul :nth-child(1) {
    color: #fff;
    font-weight: bold;
}
.foot-social{
    display: flex;
    justify-content: space-between;
    gap: 20px;
}
@media (max-width: 768px){
    .footer-container {
        display: flex;
        flex-direction: column;
    }
    .foot-link {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        align-items: center;
        justify-content: center;
        margin-left: 100px;
    }
    .foot-social {
        margin-left: 30px;
    }
}
</style>