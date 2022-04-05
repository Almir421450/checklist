import { Category } from './../_models/category';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { ChecklistItem } from '../_models/checklist_item';

export const CHECKLIST_DATA = [
  { guid: 'aaa-bbb-ccc-ddd', completed: false, description: 'ir ao oftalmo', deadLine: new Date(), postDate: new Date(),
  category: { guid: 'aaa-bbb-ccc-ddd', name: 'Saude'}
  },
  { guid: 'aaa-bbb-ccc-ddd', completed: true, description: 'Reunião com o gerente',deadLine: new Date(), postDate: new Date(),
  category: { guid: 'aaa-bbb-ccc-ddd', name: 'Trabalho'}
  }
]


@Injectable({
  providedIn: 'root'
})
export class ChecklistService {

  constructor() { }

  public getAllchecklistItens(): Observable<ChecklistItem[]>{
    return of(CHECKLIST_DATA);
  }
}
