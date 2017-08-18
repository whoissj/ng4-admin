import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NzModalCustomizeComponent } from './nz-modal-customize.component';

describe('NzModalCustomizeComponent', () => {
  let component: NzModalCustomizeComponent;
  let fixture: ComponentFixture<NzModalCustomizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NzModalCustomizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NzModalCustomizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
