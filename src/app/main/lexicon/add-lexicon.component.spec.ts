import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLexiconComponent } from './add-lexicon.component';

describe('AddLexiconComponent', () => {
  let component: AddLexiconComponent;
  let fixture: ComponentFixture<AddLexiconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLexiconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLexiconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
