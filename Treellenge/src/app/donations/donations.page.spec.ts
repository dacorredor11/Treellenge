import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DonationsPage } from './donations.page';

describe('DonationsPage', () => {
  let component: DonationsPage;
  let fixture: ComponentFixture<DonationsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonationsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DonationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
