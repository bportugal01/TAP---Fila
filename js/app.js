new Vue({
    el: '#app',
    data: {
      fila: []
    },
    methods: {
      adicionarComum() {
        this.fila.push({ id: Date.now(), nome: 'Atendimento Comum', tipo: 'comum' });
      },
      adicionarEspecial() {
        this.fila.push({ id: Date.now(), nome: 'Atendimento Especial', tipo: 'especial' });
      },
      atenderComum() {
        const index = this.fila.findIndex(item => item.tipo === 'comum');
        if (index !== -1) {
          this.fila.splice(index, 1);
        }
      },
      atenderEspecial() {
        const index = this.fila.findIndex(item => item.tipo === 'especial');
        if (index !== -1) {
          this.fila.splice(index, 1);
        }
      }
    }
  });