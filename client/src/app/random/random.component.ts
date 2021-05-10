import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.scss'],
})
export class RandomComponent implements OnInit {
  randomValue;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.getRandomValue();
  }

  getRandomValue() {
    this.authService.getRandom().subscribe((response: any) => {
      // console.log('R', response);
      this.randomValue = response.value;
    });
  }
}
