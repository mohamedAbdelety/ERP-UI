import { Component, OnInit } from '@angular/core';
import { MainService } from './main.service';
import { SignalrService } from './signalr.service';
import { TagConstant } from './tag.constant';

@Component({
  selector: 'main',
  templateUrl: './main.template.html',
  styleUrls: ['./main.style.scss']
})
export class MainComponent implements OnInit {

  sPPopeReelSpeed: number;
  moisture: number;
  basisWeight: number;

  sPTopLayerConsistencySet: number;
  aCTopLayerConsistencyActual: number;
  aCBottomLayerConsistencyActual: number;
  sPBottomLayerConsistency: number;
  aCHomogeneityConsistencyActual: number;
  sPHomogeneityConsistencySet: number;
  aCSteamActual: number;
  sPSteamSet: number;
  aCTopLayerStockFlowActual: number;
  sPTopLayerStockFlowSet: number;
  aCBottomLayerStockFlowActual: number;
  sPBottomLayerStockFlowSet: number;

  constructor(private mainService: MainService,
    public signalRService: SignalrService
  ) {

  }

  ngOnInit(): void {
    this.getOne(TagConstant.SPTopLayerConsistencySet);
    this.getOne(TagConstant.ACTopLayerConsistencyActual);
    this.getOne(TagConstant.ACBottomLayerConsistencyActual);
    this.getOne(TagConstant.SPBottomLayerConsistency);
    this.getOne(TagConstant.ACHomogeneityConsistencyActual);
    this.getOne(TagConstant.SPHomogeneityConsistencySet);
    this.getOne(TagConstant.ACSteamActual);
    this.getOne(TagConstant.SPSteamSet);
    this.getOne(TagConstant.ACTopLayerStockFlowActual);
    this.getOne(TagConstant.SPTopLayerStockFlowSet);
    this.getOne(TagConstant.ACBottomLayerStockFlowActual);
    this.getOne(TagConstant.SPBottomLayerStockFlowSet);

    this.signalRService.startConnection();
    this.receiveData();
  }

  getOne(path: string) {
    this.mainService.getOne({ path: path }).subscribe(
      (res: any) => {
        this.setValue(path, res.decimalValue)
      });
  }

  public receiveData = () => {
    this.signalRService.hubConnection.on('SendToUI', (data) => {
      this.setValue(data.path, data.decimalValue)
    });
  }

  setValue(path: string, decimal: number) {

    switch (path) {
      case TagConstant.SPPopeReelSpeed:
        this.sPPopeReelSpeed = decimal;
        break;
      case TagConstant.Moisture:
        this.moisture = decimal;
        break;
      case TagConstant.BasisWeight:
        this.basisWeight = decimal;
        break;

      case TagConstant.SPTopLayerConsistencySet:
        this.sPTopLayerConsistencySet = decimal;
        break;
      case TagConstant.ACTopLayerConsistencyActual:
        this.aCTopLayerConsistencyActual = decimal;
        break;
      case TagConstant.ACBottomLayerConsistencyActual:
        this.aCBottomLayerConsistencyActual = decimal;
        break;
      case TagConstant.SPBottomLayerConsistency:
        this.sPBottomLayerConsistency = decimal;
        break;
      case TagConstant.ACHomogeneityConsistencyActual:
        this.aCHomogeneityConsistencyActual = decimal;
        break;
      case TagConstant.SPHomogeneityConsistencySet:
        this.sPHomogeneityConsistencySet = decimal;
        break;
      case TagConstant.ACSteamActual:
        this.aCSteamActual = decimal;
        break;
      case TagConstant.SPSteamSet:
        this.sPSteamSet = decimal;
        break;
      case TagConstant.ACTopLayerStockFlowActual:
        this.aCTopLayerStockFlowActual = decimal;
        break;
      case TagConstant.SPTopLayerStockFlowSet:
        this.sPTopLayerStockFlowSet = decimal;
        break;
      case TagConstant.ACBottomLayerStockFlowActual:
        this.aCBottomLayerStockFlowActual = decimal;
        break;
      case TagConstant.SPBottomLayerStockFlowSet:
        this.sPBottomLayerStockFlowSet = decimal;
        break;

      default:
        console.log("No such day exists!");
        break;
    }
  }

}
