import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-atendimento-form',
  templateUrl: './atendimento-form.component.html',
  styleUrls: ['./atendimento-form.component.css']
})
export class AtendimentoFormComponent implements OnInit {

  @Input() btnText!: string

  constructor() { }

  ngOnInit(): void {
  }

}
