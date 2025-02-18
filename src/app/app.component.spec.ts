import { TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-header',
  template: `<!-- empty -->`,
})
export class MockHeaderComponent {}

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).overrideComponent(AppComponent, {
      remove: { imports: [HeaderComponent] },
      add: { imports: [MockHeaderComponent] },
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  // it(`should have the 'angular-primeng' title`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app.title).toEqual('angular-primeng');
  // });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('h1')?.textContent).toContain('Hello, angular-primeng');
  // });
});
