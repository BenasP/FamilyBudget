import {Component, Inject} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'statements',
  templateUrl: './statements.component.html',
  styleUrls: ['./statements.component.css']
})
export class StatementsComponent {
  public statements: Statement[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.getStatements(http, baseUrl);
  }

  private getStatements(http: HttpClient, baseUrl: string) {
    http.get<Statement[]>(baseUrl + 'Statements').subscribe(result => {
      this.statements = result;
    }, error => console.error(error));
  }
}

class Statement {
  public id: number;
  public date: Date;
  public amount: number;
  public categoryName: string;
  public details: string;
}
