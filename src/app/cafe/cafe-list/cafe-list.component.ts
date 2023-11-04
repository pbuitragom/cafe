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

      listaCafe.forEach(item => {

        if (item.tipo == 'Blend'){
          this.numCafeBlend = this.numCafeBlend + 1;
        }else{
          this.numCafeOrigen = this.numCafeOrigen + 1;
        }
      });

    });
  }

ngOnInit() {
    this.getCafes()
  }

}
