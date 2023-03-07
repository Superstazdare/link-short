<template>
  <div class="service-container">
    <div class="service-content">
        <h1>Advanced Statistics</h1>
        <p>Track how your links are performing across the web <br> with our advanced statistics dashboard</p>
    </div>
    <div class="diverder"></div>
    <div class="cards">
        <div class="card card1">
            <div class="images">
                <img src="../assets/icon-brand-recognition.svg" alt="">
            </div>
            <h3>Brand Recognition</h3>
            <p>Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.</p>
        </div>
        <div class="card card2">
            <div class="images">
                <img src="../assets/icon-detailed-records.svg" alt="">
            </div>
            <h3>Detailed Records</h3>
            <p>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
        </div>
        <div class="card card3">
            <div class="images">
                <img src="../assets/icon-fully-customizable.svg" alt="">
            </div>
            <h3>Fully Customisable</h3>
            <p>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'InputPage',
}
</script>

<style scoped>
.service-container {
    margin-top: -3rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: hsl(0, 8%, 95%);
    background: cover;
    overflow: hidden;
}
.service-content{
    display: flex;
    max-width: 30rem;
    margin-top: 8rem;
    margin-left: 25%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.service-content p{
    color: hsl(257, 7%, 63%);
}
.service-content h1 {
    font-size: 2.3rem;
    font-weight: bolder;
}
.diverder {
    border: 0 solid;
    background: cyan;
    height: 10px;
    width: 40rem;
    margin-left: 23%;
    margin-top: 27%;
    position: absolute;
    display: flex;
    z-index: 9;
    align-content: center;
    justify-items: center;
}
.cards {
    margin-top: 2.5rem;
    position: relative;
    z-index: 9999999;
    display: flex;
    gap: -2px;
    margin-left: 8%;
    align-items: center;
    width: 100%;
}
.cards p{
    font-size: 14px;
    text-align: start;
    padding: 0.2rem;
    margin-left: 15px;
    margin-top: -20px;
    font-weight: 700;
    color: gray;
}
.cards h3  {
    font-size: 1.3rem;
    padding: 0.5rem 0.3rem 2pxrem;
}
.images {
    border: 0 solid;
    background: hsl(257, 27%, 26%);
    width: 4rem;
    height: 4rem;
    align-items: center;
    justify-content: center;
    display: flex;
    border-radius: 50%;
    margin-top: -50px;
    margin-left: 20px;
}
.card {
    margin: 2rem;
    max-width: 15rem;
    height: 10rem;
    margin-top: -5px;
}
.card1{
    background: #fff;
    border: 0 solid;
    padding: 1rem ;
    border-radius: 0.3rem;
}
.card2{
    background: #fff;
    border: 0 solid;
    margin-top: 100px;
    padding: 1rem 0.2rem;
    border-radius: 0.3rem;
}
.card3{
    background: #fff;
    border: 0 solid;
    margin-top: 200px;
    padding: 1rem 0.2rem;
    border-radius: 0.3rem;
}
@media (max-width: 768px){
    .service-content h1{
        margin-top: -20px;
        margin-left: -100px;
    }
    .service-content p{
        font-size: 1rem;
        text-align: center;
        margin-left: -78px;
        margin-top: 10px;
    }
    .diverder {
        height: 600px;
        width: 10px;
        margin-top: 200px;
        margin-left: 180px;
    }
    .cards {
        display: flex;
        flex-direction: column;
        width: 330px;
        padding-bottom: 50px;
    }
    .card1 {
        margin-top: -10px;
        margin-left: 10px;
    }
    .card2 {
        margin-top: 20px;
        margin-left: 20px;
        width: 350px;
    }
    .card3 {
        margin-top: 20px;
        margin-left: 20px;
        width: 350px;
    }
    .images{
        margin-left: 100px;
    }
}
</style>