const app = Vue.createApp({
    data() {
        return {
            tasksA: 'Ir a la Playa',
            tasksB: 'Ir al Cine',
            vuelink: 'https://vuejs.org'
        }
    },
    methods: {
        changeTask() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return this.tasksA;
            } else {
                return this.tasksB;
            }
        }
    }
});

app.mount('#tasks'); // # Selector: se usa para seleccionar el elemento HTML donde se va a montar la aplicacion