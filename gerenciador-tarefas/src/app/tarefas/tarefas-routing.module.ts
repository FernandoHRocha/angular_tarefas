import { Routes } from '@angular/router';
import { ListarTarefaComponent, CadastrarTarefaComponent, EditarTarefaComponent } from './shared';

export const TarefaRoutes: Routes = [
    {
        path: 'tarefas',
        redirectTo: 'tarefas/listar'
    },
    {
        path: 'tarefas/listar',
        component: ListarTarefaComponent
    },
    {
        path: 'tarefas/cadastrar',
        component: CadastrarTarefaComponent
    },
    {
        path: 'tarefas/editar/:id',
        component:EditarTarefaComponent
    }
];
