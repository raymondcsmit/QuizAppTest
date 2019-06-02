import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Question } from '../model/question';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class QuestionService {
filepath:string='../../assets/question.data.json';
  constructor(private httpService: HttpClient) { }
 questions:Question[];

 getQuestions() : Observable<Question[]> {
return   this.httpService.get<Question[]>( this.filepath );

}

  // getQuestions() : Observable<Question[]>{
  

    
  //  this.httpService.get(this.filepath).subscribe(
  //     data => {
  //       this.questions= data as Question[];
  //       return this.questions;
  //     },
  //     (err: HttpErrorResponse) => {       
        
  //       this.handleError(err);
        
  //     }
  //   );

  // }
  
  


private handleError(error: HttpErrorResponse) {
        console.log(error);
        //todo display error
        return Observable.throw(error.message || 'Internal Server error');
}

}
