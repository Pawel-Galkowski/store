import { Component, OnInit, Inject } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';
import { Leader } from '../shared/leader'
import { LeaderService } from '../services/leader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dish: Dish = new Dish;
  promotion: Promotion = new Promotion;
  leader!: Leader;
  errMess?: string;

  constructor(
    private dishservice: DishService,
    private promotionservice: PromotionService,
    private leaderservice: LeaderService,
    @Inject('BaseURL') public BaseURL: string
  ) { }

  async ngOnInit() {
    this.dishservice.getFeaturedDish().subscribe({
      next: dish => this.dish = dish,
      error: errmess => this.errMess = <any>errmess
    })
    this.promotionservice.getFeaturedPromotion().subscribe({
      next: promotion => this.promotion = promotion,
      error: errmess => this.errMess = <any>errmess
    })
    this.leaderservice.getFeaturedLeader().subscribe({
      next: leader => this.leader = leader,
      error: errmess => this.errMess = <any>errmess
    })
  }

}
