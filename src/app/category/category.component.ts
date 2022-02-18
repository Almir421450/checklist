import { DialogComponent } from './../dialog/dialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Category } from '../_models/category';
import { CategoryEditComponent } from '../category-edit/category-edit.component';

export const CATEGORY_DATA = [
  {name: 'Educação', guid: 'aaa-bbb-ccc-dddd'},
  {name: 'Saúde', guid: 'aaa-bbb-ccc-dddd'},
  {name: 'Trabalho', guid: 'aaa-bbb-ccc-dddd'},
  {name: 'Outros', guid: 'aaa-bbb-ccc-dddd'}
];

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  public displayedColumns: string[] = ['id', 'name', 'actions'];
  public dataSource: Category[] = CATEGORY_DATA;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  public editCategory(inputCategory: Category){
    console.log('edit new category clicked');

    this.dialog.open(CategoryEditComponent, { disableClose:true,
      data: { editableCategory:inputCategory}
       }).afterClosed().subscribe(resp => {
        console.log('Modal editar fechada');
      });
  }

  public deleteCategory(category: Category){

    this.dialog.open(DialogComponent, { disableClose:true,
      data: { dialogMsg: 'Você tem certeza que gostaria de apagar essa Categoria?',
       leftButtonLabel: 'Cancelar', rightButtonLabel: 'Sim'} }).afterClosed().subscribe(
      resp => {
        if(resp) {
          console.log('Categoria apagada com sucesso!');
        }else{
          console.log('Categoria não apagada!');
        }
      });

  }

  public creatNewCategory(){
    console.log('create new category clicked');

    this.dialog.open(CategoryEditComponent, { disableClose:true,
      data: { actionName:'criar'}
       }).afterClosed().subscribe(resp => {
        console.log('Modal criar fechada');
      });
  }

}
