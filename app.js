// createApp
// desctructuring

const {createApp} = Vue;

const MyComponent = {
    props: {
      data: {
        type: Array,
        required: true
      },
      bgColor: {
        type: String,
        default: 'white'
      },
      textColor: {
        type: String,
        default: 'black'
      }
    },
    template: `
    <table :style="{ backgroundColor: bgColor, color: textColor }">
      <tr>
        <th>Nombre</th>
        <th>Edad</th>
      </tr>
      <tr v-for="item in data" :key="item.id">
        <td>{{ item.nombre }}</td>
        <td>{{ item.edad }}</td>
      </tr>
    </table>
    `
  };

createApp({
    components: {
        'my-component': MyComponent
    },
    data() {
        return {
            data1: [
              { id: 1, nombre: 'Pedro', edad: 25 },
              { id: 2, nombre: 'Juan', edad: 30 },
              { id: 3, nombre: 'Diego', edad: 35 }
            ],
            data2: [
              { id: 4, nombre: 'María', edad: 28 },
              { id: 5, nombre: 'Luisa', edad: 32 },
              { id: 6, nombre: 'Camila', edad: 40 }
            ],
            data3: [
              { id: 7, nombre: 'Marcelo', edad: 27 },
              { id: 8, nombre: 'Daniela', edad: 31 },
              { id: 9, nombre: 'Miguel', edad: 38 }
            ]
          };
    },
    created() {

    },
    methods: {
        
    },
    computed: {
       
    }
}).mount("#app")