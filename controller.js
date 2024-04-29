class ControladorPagina {
    tarefas = [];

    addTarefa(tarefa){
        if(!this.existeTarefa(tarefa)){
            this.tarefas.push(tarefa)
            return true;
        }
        return false;
    }

    existeTarefa(tarefa){
        return this.tarefas.some(taf => taf.trim().toLowerCase() === tarefa.trim().toLowerCase());
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