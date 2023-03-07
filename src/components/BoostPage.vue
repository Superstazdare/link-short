<template>
  <div class="boost">
    <h1>Boost your links today</h1>
    <button>Get Started</button>
  </div>
</template>

<script>
export default {
    name: 'BoostPage',
}
</script>

<style scoped>
.boost {
    text-align: center;
    margin-top: -3px;
    display: flex;
    flex-direction: column;
    background: url("../assets/bg-boost-desktop.svg");
    background-color: hsl(257, 26%, 27%);
    height: 180px;
    position: relative;
}
.boost h1{
    margin-top: 15px;
    font-size: 3rem;
    font-weight: 700;
    color: white;
}
.boost button {
    margin-top: 120px;
    width: 150px;
    height: 40px;
    border: 0 solid;
    position: absolute;
    cursor: pointer;
    margin-left: 45%;
    border-radius: 22px;
    font-size: 15px;
    font-weight: 700;
    color: white;
    background: hsl(182, 52%, 54%);
}
button:hover{
    opacity: 0.7;
}
@media (max-width: 768px){
    .boost h1{
        font-size: 30px;
        margin-top: 30px;
    }
    .boost button {
        margin-left: 120px;
    }
}
</style>