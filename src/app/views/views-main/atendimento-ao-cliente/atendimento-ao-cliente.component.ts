import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atendimento-ao-cliente',
  templateUrl: './atendimento-ao-cliente.component.html',
  styleUrls: ['./atendimento-ao-cliente.component.css']
})
export class AtendimentoAoClienteComponent implements OnInit {

  btnText = 'Compartilhar!';

  constructor() { }

  ngOnInit(): void {
  }

}
