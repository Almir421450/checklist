import { ChecklistItem } from './../_models/checklist_item';
import { CATEGORY_DATA } from './../category/category.component';
import { Component, OnInit } from '@angular/core';


export const CHECKLIST_DATA = [

  { guid:'aaaa-bbbb-cccc-dddd', completed: false, description:'ir ao oftalmologista', deadLine: Date.now(), postDate: Date.now(),
   category: CATEGORY_DATA.find(x => x.name == 'Saude')
  },
  { guid:'aaaa-bbbb-cccc-dddd', completed: true, description:'Reunião com o gerente regional', deadLine: Date.now(), postDate: Date.now(),
   category: CATEGORY_DATA.find(x => x.name == 'Trabalho')
  }
];

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.css']
})
export class ChecklistComponent implements OnInit {

  public dataSource = CHECKLIST_DATA;

  public displayedColumns: string[] = ['id', 'completed',
  'description', 'deadLine', 'postDate', 'category', 'actions'];

  constructor() { }

  ngOnInit(): void {
  }

  public updateCompleteStatus(status: boolean){
    console.log(`status alterado ${status}`)
  }

  public creatNewItem(){
    console.log('Criar Novo item clicado!');
  }

  public deleteChecklistItem(checklistItem:ChecklistItem ){
    console.log('deletando item do check list')
  }

  public updateChecklistItem(checklistItem:ChecklistItem){
    console.log('atualizando item do check list')
  }
}
