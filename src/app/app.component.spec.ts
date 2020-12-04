import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let appFixture: ComponentFixture<AppComponent>;
  let app: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();

    appFixture = TestBed.createComponent(AppComponent);
    app = appFixture.componentInstance;
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('should see the current count.', () => {
    expect(app.count).toEqual(0);
  });

  it('should increase the count.', () => {
    app.addCount();
    expect(app.count).toEqual(1);
    app.addCount();
    expect(app.count).toEqual(2);
  });

  it('should not increase the count more than 5.', () => {
    [...Array(5).keys()].map(() => app.addCount());
    expect(app.count).toEqual(5);
    app.addCount();
    expect(app.count).toEqual(5);
  });
});
