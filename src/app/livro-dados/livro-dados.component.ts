import { Component, OnInit } from '@angular/core';
import { Livro } from '../livro';
import { Editora } from '../editora';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-livro-dados',
  templateUrl: './livro-dados.component.html',
  styleUrls: ['./livro-dados.component.css']
})
export class LivroDadosComponent implements OnInit {
  livro: Livro = new Livro(0, 0, '', '', []);
  autoresForm: string = '';
  editoras: Editora[] = [];

  constructor(
    private controleEditora: ControleEditoraService,
    private controleLivros: ControleLivrosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.editoras = this.controleEditora.getEditoras();
  }

  incluir(): void {
    this.livro.autores = this.autoresForm.split('\n');
    this.controleLivros.incluir(this.livro);
    this.router.navigateByUrl('/lista');
  }
}