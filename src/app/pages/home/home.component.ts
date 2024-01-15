import { Component } from '@angular/core';
import { QuizzComponent } from "../../components/quizz/quizz.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styles: ``,
    imports: [QuizzComponent]
})
export class HomeComponent {

}
