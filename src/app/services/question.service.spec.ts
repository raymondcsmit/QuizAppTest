import { TestBed } from '@angular/core/testing';

import { QuestionService } from './question.service';
import { HttpClientModule } from '@angular/common/http';
import { Question } from '../model/question';
import { of } from 'rxjs';

describe('QuestionService', () => {
 
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [QuestionService]
    });
  });

  it('should be created', () => {
    const service: QuestionService = TestBed.get(QuestionService);
    expect(service).toBeTruthy();
  });
  it('should load data', () => {
    const service: QuestionService = TestBed.get(QuestionService);
    expect(service).toBeTruthy();
  });
  
});
