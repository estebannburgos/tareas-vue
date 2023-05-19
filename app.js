// createApp
// desctructuring

const {createApp} = Vue;

createApp({
    data() {
        return {
            titulo: "primer desafío Vue",
            contador: 0,
        }
    },
    created() {
       
    },
    methods: {
        ascendente() {
            this.contador++;
        },
        descendente() {
            this.contador--;
        }
    },
    computed: {
       
    }
}).mount("#app")