class ControladorPagina {
    tarefas = [];

    addTarefa(tarefa){
        this.tarefas.push(tarefa)
    }

    removeTarefa(index){
        this.tarefas.splice(index, 1);
    }

    obterTarefa(index){
        return this.tarefas[index];
    }

    listarTarefa(){
        return this.tarefas;
    }
}