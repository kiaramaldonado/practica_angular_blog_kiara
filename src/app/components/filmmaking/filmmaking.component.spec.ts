import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmmakingComponent } from './filmmaking.component';

describe('FilmmakingComponent', () => {
  let component: FilmmakingComponent;
  let fixture: ComponentFixture<FilmmakingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilmmakingComponent]
    });
    fixture = TestBed.createComponent(FilmmakingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
