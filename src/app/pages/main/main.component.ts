import { Component, OnInit } from '@angular/core';
import { MainService } from './main.service';
import { TagConstant } from './tag.constant';

@Component({
  selector: 'main',
  templateUrl: './main.template.html',
})
export class MainComponent implements OnInit {

  sPPopeReelSpeed: number;
  moisture: number;
  basisWeight: number;

  constructor(private mainService: MainService) {

  }

  ngOnInit(): void {
    this.getOne(TagConstant.SPPopeReelSpeed);
    this.getOne(TagConstant.Moisture);
    this.getOne(TagConstant.BasisWeight);
  }

  getOne(path: string) {
    this.mainService.getOne({ path: path }).subscribe(
      (res: any) => {
        this.setValue(path, res.decimalValue)
      });
  }

  setValue(path: string, decimal: number) {

    switch (path) {
      case TagConstant.SPPopeReelSpeed:
        this.sPPopeReelSpeed = decimal;
        console.log(TagConstant.SPPopeReelSpeed, " ==> ", decimal)
        break;
      case TagConstant.Moisture:
        this.moisture = decimal;
        console.log(TagConstant.Moisture, " ==> ", decimal)
        break;
      case TagConstant.BasisWeight:
        this.basisWeight = decimal;
        console.log(TagConstant.BasisWeight, " ==> ", decimal)
        break;

      default:
        console.log("No such day exists!");
        break;
    }

  }



}
