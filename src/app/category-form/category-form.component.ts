import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { Category } from '../_models/category';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {

  @Input() public actionName = 'Editar';

  public categoryForm!: FormGroup;

  @Output() closeModalEventEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input() public editableCategory!: Category;

  public isFormReady = false;

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.categoryForm = this.formBuilder.group({
      name: [this.editableCategory !=null ? this.editableCategory.name:'', Validators.required]
    });
    this.isFormReady = true;
  }

  public cancel(){
    console.log('Cancelar clicado');
    this.closeModalEventEmitter.emit(false);
  }

  public save(){
    console.log('salvar clicado');
    this.closeModalEventEmitter.emit(true);
  }

}
