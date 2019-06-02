import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { Location, CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome.component';
import { RouterModule, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('WelcomeComponent', () => {
  let component: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule, RouterTestingModule.withRoutes([])],
      declarations: [ WelcomeComponent ],
      providers:[Location]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should render title in a h4 tag', () => {
    const fixture = TestBed.createComponent(WelcomeComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h4').textContent).toContain('Quiz App');
  });

  it('should go to url',
    async(inject([Router, Location], (router: Router, location: Location) => {

    let fixture = TestBed.createComponent(WelcomeComponent);
    fixture.detectChanges();
    const elem = fixture.debugElement;
    const button = elem.query(e => e.name === 'startquiz');
    expect(button.nativeElement.textContent.trim()).toContain('Start Quiz');
    console.log(button);
    button.nativeElement.click();

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(location.path()).toEqual('/quiz');
      console.log('after expect');
    });
  })));

});
