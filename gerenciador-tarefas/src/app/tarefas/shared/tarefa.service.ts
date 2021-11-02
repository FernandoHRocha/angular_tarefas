import { Injectable } from '@angular/core';
import { Tarefa } from './';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor() { }

  listarTodas(): Tarefa[] {
    const tarefas = localStorage['tarefas'];
    return tarefas ? JSON.parse(tarefas) : [];
  }

  cadastrarTarefa(tarefa:Tarefa): void{
    const tarefas = this.listarTodas();
    tarefa.id = new Date().getTime()
    tarefas.push(tarefa)
    localStorage['tarefas'] = JSON.stringify(tarefas)
  }

  buscarPorId(id: number): Tarefa {
    const tarefas: Tarefa[] = this.listarTodas()
    return tarefas.find(tarefa => tarefa.id === id);
  }

  atualizarTarefa(tarefa: Tarefa): void {
    const tarefas: Tarefa[] = this.listarTodas()
    tarefas.forEach((obj, index, objs) => {
      if(tarefa.id === obj.id) {
        objs[index] = tarefa
      }
    });
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  removerTarefa(id: number): void{
    let tarefas: Tarefa[] = this.listarTodas()
    tarefas = tarefas.filter(tarefa => tarefa.id !== id);
    localStorage['tarefas'] = JSON.stringify(tarefas)
  }

  alterarStatusTarefa(id: number): void{
    const tarefas: Tarefa[] = this.listarTodas()
    tarefas.forEach((obj,index,objs) => {
      if(id === obj.id) {
        objs[index].concluida = !obj.concluida
        localStorage['tarefas']=JSON.stringify(tarefas);
        return
      }
    })
  }
}
