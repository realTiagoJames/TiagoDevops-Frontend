import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriacaoWebsitesComponent } from './criacao-websites.component';

describe('CriacaoWebsitesComponent', () => {
  let component: CriacaoWebsitesComponent;
  let fixture: ComponentFixture<CriacaoWebsitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriacaoWebsitesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriacaoWebsitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
