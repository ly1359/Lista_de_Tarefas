class Tarefas{
    
    constructor(){
        this.id = 0;
        this.arrayTarefas = [];
    }


    salvar(){
        let tarefa = this.lerDados();

        if(this.validarCampo(tarefa)){
            this.adicionar(tarefa);
        }
        this.limparCampo();
        this.listarTarefas();
    }

    listarTarefas(){
        let tBody = document.getElementById('tBody');
        tBody.innerText = ``;
    
        for(let i = 0; i < this.arrayTarefas.length; i++){
            let tr = tBody.insertRow();
    
            let tdId = tr.insertCell();
            let tdTarefa = tr.insertCell();
            let tdConcluida = tr.insertCell();
    
            tdId.innerText = this.arrayTarefas[i].id;
            tdTarefa.innerText = this.arrayTarefas[i].nomeTarefa;
    
            let imgConcluido = document.createElement('img');
            imgConcluido.src = `img/correto.png`;
            imgConcluido.setAttribute("onclick", "tarefa.remover(" + this.arrayTarefas[i].id +")");
    
            tdConcluida.appendChild(imgConcluido);
        }
    }

    adicionar(tarefa){
        this.arrayTarefas.push(tarefa);
        this.id++
    }

    lerDados(){
        let tarefa = {};
        tarefa.id = this.id;
        tarefa.nomeTarefa = document.getElementById("tarefa").value;

        return tarefa;
    }

    validarCampo(tarefa){
        let msg = "";

        if(tarefa.nomeTarefa == ""){
            msg += `Informe uma tarefa valida\n`;
        }
        if(msg != ''){
            alert(msg);
            return false;
        }
        return true;

    }

    limparCampo(){
        document.getElementById(`tarefa`).value = "";
    }

    remover(id){
        if(confirm(`Deseja remover a tarefa: ` + tarefa.id + `?`)){
            let tBoby = document.getElementById('tBody');

            for (let i = 0; i < this.arrayTarefas.length; i++){
                if(this.arrayTarefas[i].id == id){
                    this.arrayTarefas.splice(i, 1);
                    tBoby.deleteRow(i);
                }
            }
        }
    }

}
var tarefa = new Tarefas();