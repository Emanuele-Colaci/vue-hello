const { createApp } = Vue;

createApp({
    data(){
        return{
            messaggio: 'Questo è il messaggio'
        }
    },
}).mount('#app')