const { createApp } = Vue;

createApp({
    data(){
        return{
            messaggio: 'Amo la pizza',
            image: './img/pizza.jpg'
        }
    },
}).mount('#app')