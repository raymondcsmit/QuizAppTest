import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizComponent } from './quiz.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { QuestionService } from 'src/app/services/question.service';
import { ToastrModule } from 'ngx-toastr';

describe('QuizComponent', () => {
  let component: QuizComponent;
  let fixture: ComponentFixture<QuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule, FormsModule, ReactiveFormsModule,HttpClientModule,RouterTestingModule.withRoutes([]),ToastrModule.forRoot()],
      declarations: [ QuizComponent ],
      providers:[QuestionService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should start with a testFinished at false', () => {
    
    expect(component.testFinished).toEqual(false);
  });

  it('should have current question when is resolved', async(() => {
   
  
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      //expect(component.CurrentQuestion).toEqual(1);
    })
  }))

});


// it("should call getUsers and return list of users", async(() => {
//   const response: Question[] = [];

//   spyOn(QuestionService, 'getQuestions').and.returnValue(of(response))

//   homeComponent.getUsers();

//   fixture.detectChanges();

//   expect(homeComponent.listOfUsers).toEqual(response);
// }));