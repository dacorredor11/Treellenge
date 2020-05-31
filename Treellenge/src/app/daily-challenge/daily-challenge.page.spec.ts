import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DailyChallengePage } from './daily-challenge.page';

describe('DailyChallengePage', () => {
  let component: DailyChallengePage;
  let fixture: ComponentFixture<DailyChallengePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyChallengePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DailyChallengePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
