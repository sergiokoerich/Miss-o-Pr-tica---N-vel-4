import { Injectable } from '@angular/core';
import { Editora } from './editora';

@Injectable({
  providedIn: 'root'
})
export class ControleEditoraService {
  editoras: Editora[] = [
    new Editora(1, 'Editora Rocco'),
    new Editora(2, 'Companhia da Letras'),
    new Editora(3, 'Aleph')
  ];

  constructor() {}

  getEditoras(): Editora[] {
    return this.editoras;
  }

  getNomeEditora(codEditora: number): string {
    const editora = this.editoras.find(e => e.codEditora === codEditora);
    return editora ? editora.nome : '';
  }
}