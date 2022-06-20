import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-falar-com-vendas',
  templateUrl: './falar-com-vendas.component.html',
  styleUrls: ['./falar-com-vendas.component.css']
})
export class FalarComVendasComponent implements OnInit {

  btnText = 'Compartilhar!';

  constructor() { }

  ngOnInit(): void {
  }

}
