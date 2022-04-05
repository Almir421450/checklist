import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './../dialog/dialog.component';

import { Component, OnInit } from '@angular/core';
import { ChecklistEditComponent } from '../checklist-edit/checklist-edit.component';
import { ChecklistItem } from '../_models/checklist_item';
import { ChecklistService } from '../service/checklist.service';



@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.css']
})
export class ChecklistComponent implements OnInit {

  public dataSource : ChecklistItem[] = [];

  public displayedColumns: string[] = ['id', 'completed',
  'description', 'deadLine', 'postDate', 'category', 'actions'];


  constructor(private dialog: MatDialog, private checklistService: ChecklistService) { }

  ngOnInit(): void {

    this.checklistService.getAllchecklistItens().subscribe(
      (resp: ChecklistItem[]) => {
        this.dataSource = resp;
      }
    )
  }

  public updateCompleteStatus(status: boolean){
    console.log(`status alterado ${status}`)
  }

  public creatNewItem(){
    console.log('Criar Novo item clicado!');

    this.dialog.open(ChecklistEditComponent,{
      disableClose: true, data:{actionName:'Criar'},
    }).afterClosed().subscribe(resp => {
      console.log('Fechando Modal de criação');
    });
  }

  public deleteChecklistItem(checklistItem:ChecklistItem ){
    console.log('deletando item do check list')

    this.dialog.open(DialogComponent, {disableClose: true, data: {
      msg: 'Você deseja apagar esse item ?', leftButtonLabel:'cancelar', rightButtonLabel:'Ok'}
    }).afterClosed().subscribe(resp =>{
      console.log('Janela Modal fechada ')

    })
  }

  public updateChecklistItem(checklistItem:ChecklistItem){
    console.log('atualizando item do check list')

    this.dialog.open(ChecklistEditComponent,{
      disableClose: true, data:{updatableChecklistItem: checklistItem, actionName:'Editar'},
    }).afterClosed().subscribe(resp => {
      console.log('Fechando Modal de edição');
    });
  }
}
