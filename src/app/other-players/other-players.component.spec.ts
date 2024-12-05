import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherPlayersComponent } from './other-players.component';

describe('OtherPlayersComponent', () => {
  let component: OtherPlayersComponent;
  let fixture: ComponentFixture<OtherPlayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OtherPlayersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
