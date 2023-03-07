<template>
  <div class="container">
    <div class="content">
        <h1>{{ title }}</h1>
        <p>Build your brand’s recognition and get detailed <br/> insights on how your links are performing.</p>
        <button>Get Started</button>
    </div>
    <div class="content-image">
        <img src="../assets/illustration-working.svg" alt="">
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return{
            title: "More than just shorter links",
        }
    }
}
</script>

<style scoped>
.container {
    display: flex;
    margin: 0;
    margin-left: 130px;
}
.content {
    display: flex;
    flex-direction: column;
    width: 500px;
}
.content p {
    font-size: 18px;
    margin-top: -45px;
    color: gray;
    font-weight: 500;
}
.content button {
    margin-top: 20px;
    width: 150px;
    height: 40px;
    border: 0 solid;
    cursor: pointer;
    border-radius: 22px;
    font-size: 15px;
    font-weight: 700;
    color: white;
    background: hsl(182, 52%, 54%);
}
button:hover{
    opacity: 0.7;
}
h1 {
    color: rgb(26, 25, 25);
    font-size: 64px;
    font-weight: 700;
    
}
.content-image img {
    margin: 0;
    padding: 2rem;
    width: 80%;
}
@media (max-width: 768px) {
    .container{
        display: flex;
        flex-direction: column-reverse;
    }
    .content-image img{
        margin: 0;
        padding: 1rem 2rem;
        width: 400px;
        margin-top: -50px;
        margin-left: -150px;
    }
    .content {
        width: 250px;
    }
    .content h1{
        font-size: 38px;
        font-weight: bolder;
        margin-left: -60px;
        margin-top: -20px;
    }
    .content p{
        font-size: 16px;
        margin-top: -5px;
        margin-left: -60px;
        width: 250px;
        text-align: center;
    }
    .content button{
        margin-left: -10px;
        margin-top: -10px;
    }
}
</style>