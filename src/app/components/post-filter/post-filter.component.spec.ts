import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostFilterComponent } from './post-filter.component';

describe('PostFilterComponent', () => {
  let component: PostFilterComponent;
  let fixture: ComponentFixture<PostFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostFilterComponent]
    });
    fixture = TestBed.createComponent(PostFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
