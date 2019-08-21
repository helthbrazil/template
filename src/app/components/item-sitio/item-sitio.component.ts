import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-sitio',
  templateUrl: './item-sitio.component.html',
  styleUrls: ['./item-sitio.component.css']
})
export class ItemSitioComponent implements OnInit {
  @Input() src: string;
  @Input() titulo: string;
  @Input() subTitulo: string;
  @Input() link: string;

  constructor() { }

  ngOnInit() {
  }

}
