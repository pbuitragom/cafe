import { Component, OnInit } from '@angular/core';
import { Cafe } from '../cafe';
import { CafeService } from '../cafe.service';


@Component({
  selector: 'app-cafe-list',
  templateUrl: './cafe-list.component.html',
  styleUrls: ['./cafe-list.component.css']
})
export class CafeListComponent implements OnInit {

  listaCafe: Array<Cafe> = [];
  numCafeOrigen: number = 0;
  numCafeBlend: number = 0;

  constructor(private cafeService: CafeService) { }

  getCafes(): void {
    this.cafeService.getCafes().subscribe((listaCafe) => {
      this.listaCafe = listaCafe;
    });
  }

  getNumCafeBlend(): number {
    return this.numCafeBlend = this.listaCafe.filter(cafe => cafe.tipo === 'Blend').length;
  }

  getNumCafeOrigen(): number {
    return this.numCafeOrigen = this.listaCafe.filter(cafe => cafe.tipo === 'Café de Origen').length;
  }


ngOnInit() {
    this.getCafes()
  }

}
