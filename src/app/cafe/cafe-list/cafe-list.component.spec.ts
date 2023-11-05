/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { faker } from '@faker-js/faker';

import { CafeListComponent } from './cafe-list.component';
import { Cafe } from '../cafe';

describe('CafeListComponent', () => {
  let component: CafeListComponent;
  let fixture: ComponentFixture<CafeListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ CafeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CafeListComponent);
    component = fixture.componentInstance;

    for(let i = 0; i < 3; i++) {

      const cafe = new Cafe(
        faker.datatype.number(), // id
        faker.commerce.productName(), // nombre
        faker.helpers.arrayElement(["Blend", "Café de Origen"]), // tipo
        faker.address.country(), // región
        faker.commerce.productDescription(), // sabor
        faker.datatype.number({ min: 500, max: 2000 }), // altura
        faker.image.food() // imagen
      )
      component.listaCafe.push(cafe)
    }

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 3 elements', () => {
    const tableRows = fixture.debugElement.queryAll(By.css('.table tbody tr'));
    expect(tableRows.length).toBe(component.listaCafe.length);
  });

  it('should have 3 elements', () => {
    const tableRows = fixture.debugElement.queryAll(By.css('.table tbody tr'));
    expect(tableRows.length).toBe(component.listaCafe.length);
  });

  it('should display correct table headers', () => {
    const headerRow = fixture.debugElement.query(By.css('.table thead tr'));
    const headers = headerRow.queryAll(By.css('th')).map(de => de.nativeElement.textContent.trim());
    
    expect(headers.length).toBe(4); // Expecting four headers
    expect(headers[0]).toBe('#');
    expect(headers[1]).toBe('Nombre');
    expect(headers[2]).toBe('Tipo');
    expect(headers[3]).toBe('Región');
  });

  it('should calculate totals correctly', () => {
    const compiled = fixture.nativeElement;
    const cafeBlend = component.listaCafe.filter(cafe => cafe.tipo === 'Blend');
    const cafeOrigen = component.listaCafe.filter(cafe => cafe.tipo === 'Café de Origen');
   
    const paragraphs = compiled.querySelectorAll('p');
  
    let origenText = '';
    let blendText = '';

    paragraphs.forEach((p: any) => {
      if (p.textContent.includes('Total café de origen:')) {
        origenText = p.textContent;
        console.log(origenText)
      }
      if (p.textContent.includes('Total café blend:')) {
        blendText = p.textContent;
        console.log(blendText)
      }
    });

  expect(origenText).toContain(`Total café de origen: ${cafeOrigen.length}`);
  expect(blendText).toContain(`Total café blend: ${cafeBlend.length}`);

  });
 
});




