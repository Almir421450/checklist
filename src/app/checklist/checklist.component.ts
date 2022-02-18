import { CATEGORY_DATA } from './../category/category.component';
import { Category } from './../_models/category';
import { Component, OnInit } from '@angular/core';


export const CHECKLIST_DATA = [

  { guid:'aaaa-bbbb-cccc-dddd', completed: false, description:'ir ao oftalmo', deadLine: Date.now(), postDate: Date.now(),
   category: CATEGORY_DATA.find(x => x.name == 'Saude')
  },
  { guid:'aaaa-bbbb-cccc-dddd', completed: true, description:'Reunião com o gerente', deadLine: Date.now(), postDate: Date.now(),
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
  'description', 'deadLine', 'postDate','category'];

  constructor() { }

  ngOnInit(): void {
  }

  public creatNewItem(){
    console.log('Criar Novo item clicado!');
  }
}
