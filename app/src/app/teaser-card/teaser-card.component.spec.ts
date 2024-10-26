import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TeaserCardComponent } from './teaser-card.component';

describe('TeaserCardComponent', () => {
  let component: TeaserCardComponent;
  let fixture: ComponentFixture<TeaserCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeaserCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeaserCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});