import { Component, OnInit } from '@angular/core';
import { Livro } from '../livro';
import { Editora } from '../editora';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';

@Component({
  selector: 'app-livro-lista',
  templateUrl: './livro-lista.component.html',
  styleUrls: ['./livro-lista.component.css']
})
export class LivroListaComponent implements OnInit {
  livros: Livro[] = [];
  editoras: Editora[] = [];

  constructor(
    private controleEditora: ControleEditoraService,
    private controleLivros: ControleLivrosService
  ) {}

  ngOnInit(): void {
    this.editoras = this.controleEditora.getEditoras();
    this.livros = this.controleLivros.obterLivros();
  }

  excluir(codigo: number): void {
    this.controleLivros.excluir(codigo);
    this.livros = this.controleLivros.obterLivros();
  }

  obterNome(codEditora: number): string {
    return this.controleEditora.getNomeEditora(codEditora);
  }
}