const app = Vue.createApp({
    data() {
        return {
            tasksA: 'Ir a la Playa',
            tasksB: 'Ir al Cine',
        }
    }
});

app.mount('#tasks'); // # Selector: se usa para seleccionar el elemento HTML donde se va a montar la aplicacion
