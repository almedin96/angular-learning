import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightSideComponent } from './right-side.component';

describe('RightSideComponent', () => {
  let component: RightSideComponent;
  let fixture: ComponentFixture<RightSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightSideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RightSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should ceck if list on init with lenght of 3', () => {
    expect(component.djeca.length).toEqual(3);
  });


  it('should test the -dodajDjete- function', () => {
    const spy = spyOn(component, 'dodajDjete').and.callThrough();
    expect(spy).not.toHaveBeenCalled();
  

    component.dodajDjete("kobica mali");
 
  //provjerava pozivanje funkcije
    expect(spy).toHaveBeenCalledTimes(1);
  //provjerava je li se mali kobica dodao na listu djece
    expect(component.djeca.length).toBe(4);

    for(var i=0;i<30;i++){
      component.dodajDjete("user"+i);//actual code will be slightly more complicated
   }
   expect(spy).toHaveBeenCalledTimes(31);

   expect(component.djeca.length).toBe(34);
  });
});
