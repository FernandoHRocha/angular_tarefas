import { Component, OnInit } from '@angular/core';
import { Tarefa, TarefaService } from '../shared';

@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.css']
})
export class ListarTarefaComponent implements OnInit {

  tarefas: Tarefa[];

  constructor(private tarefaService: TarefaService) { }

  ngOnInit(): void {
    this.tarefas = this.tarefaService.listarTodas()
  }

  /*removerTarefa($event: any, tarefa: Tarefa): void{
    $event.preventDefault();
    if(confirm('Deseja remover a tarefa "'+tarefa.nome+'" ?')){
      this.tarefaService.removerTarefa(tarefa.id);
      this.tarefas = this.tarefaService.listarTodas()
    }
  }*/

}
