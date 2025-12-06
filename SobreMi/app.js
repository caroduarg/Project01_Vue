const app = Vue.createApp({
    data() {
        return {
            nombre: "Andrea",
            apellido: "Duarte",
            edad: "23",
            peliculaFavorita: "Gladiador II",
        }
    },
    methods: {
        In5Years() {
            return parseInt(this.edad) + 5;
        },
        changeNumber() {
            return Math.floor(Math.random() * 100);
        }
    }
})

app.mount('#about')