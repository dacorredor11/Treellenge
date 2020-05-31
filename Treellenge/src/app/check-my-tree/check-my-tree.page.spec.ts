import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CheckMyTreePage } from './check-my-tree.page';

describe('CheckMyTreePage', () => {
  let component: CheckMyTreePage;
  let fixture: ComponentFixture<CheckMyTreePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckMyTreePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CheckMyTreePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
