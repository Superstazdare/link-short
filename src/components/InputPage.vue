<template>
  <div class="link-input">
    <form class="input-container">
        <input type="text" placeholder="Shorten a link here" required/>
        <button type="submit" class="input-btn">Shorten it!</button>
    </form>
    <div class="result"></div>
  </div>
</template>

<script>
export default {
    name: 'InputPage',
}

// const selectElement = (selector) => {
//     const element = document.querySelector(selector);
//     if (element) return element;
//     throw new Error('Cannot find the element ${selector}');
// };

// const form = selectElement("form");
// const input = selectElement("inputs");
// const result = selectElement(".result");

// form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     const url = input.value;

//     shortenUrl(url);
// });

// async function shortenUrl(url) {
//     try {
//         const res = await fetch('https://api.shrtco.de/v2/shorten?url=${url}');
//         const data = await res.json();
//         const newUrl = document.createElement("div");
//         newUrl.classList.add("item");
//         newUrl.innerHTML = '
//         <p> ${data.result.short_link}<p/>
//         <button class="newUrl-btn" >Copy</button>
//         ';
        
//         result.prepend(newUrl);
//         const copyBtn = result.querySelector(".newUrl-btn");
//         copyBtn.addEventListener("click", () => {
//             navigator.clipboard.writeText(copyBtn.previousElementSibling.textContent);
//         });
//         input.value = "";
//     } catch (err) {
//         console.log(err);
//     }
    
// }
</script>

<style scoped>
.input-container {
    margin-top: 1.5rem;
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    background: url("../assets/bg-shorten-desktop.svg");
    background-color: hsl(257, 27%, 26%);
    padding: 1rem 1.5rem;
    position: relative;
    margin-left: 12%;
    border-radius: 0.5rem;
    width: min(100%, 47rem);
    overflow: hidden;
}
input {
    padding: 0.67rem 0.3rem;
    border-radius: 0.2rem;
    font-size: 1.2rem;
    font-weight: 700;
    outline: none;
    border: none;
    margin: 0.5rem;
    flex: 1;
}
.input-btn{
    padding: 0.5rem 1rem;
    border-radius: 0.2rem;
    color: #fff;
    font-size: 16px;
    font-weight: 700;
    text-align: center;
    height: 50px;
    background: hsl(182, 52%, 54%);
    cursor: pointer;
    outline: none;
    border: none;
}
.input-btn:hover{
    opacity: 0.8;
}
@media (max-width: 768px) {
    .input-container {
        display: flex;
        margin-left: 35px;
        flex-direction: column;
        width: min(80%, 15rem);
    }
    .input-btn {
        width: 16.5rem;
        margin: 8px;
    }
}
</style>