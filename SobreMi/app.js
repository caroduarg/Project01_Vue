const app = Vue.createApp({
    data() {
        return {
            nombre: "Andrea",
            apellido: "Duarte",
            edad: "23",
            vuelink: 'https://www.youtube.com/watch?v=4rgYUipGJNo',
        }
    },
    methods: {
        In5Years() {
            return parseInt(this.edad) + 5; // this.edad:Accede a la propiedad 'edad', parseInt(this.edad): Convierte la edad a número entero (por si viene como texto)
        },
        changeNumber() {
            return Math.floor(Math.random() * 100); // Genera un número aleatorio entre 0 y 100, Math.floor(): Quita decimales
        }
    }
})

app.mount('#about')