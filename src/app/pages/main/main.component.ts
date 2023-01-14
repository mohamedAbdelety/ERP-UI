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
  sheetBreak: number;
  scannerDirection: number;
  productName: string;
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
    this.getOne(TagConstant.SPPopeReelSpeed);
    this.getOne(TagConstant.Moisture);
    this.getOne(TagConstant.BasisWeight);
    this.getOne(TagConstant.SheetBreak);
    this.getOne(TagConstant.ScannerDirection);
    this.getOne(TagConstant.ProductName);

    this.signalRService.startConnection();
    this.receiveData();
  }

  getOne(path: string) {
    this.mainService.getOne({ path: path }).subscribe(
      (res: any) => {
        this.setValue(path, res.decimalValue, res.stringValue);
      });
  }

  public receiveData = () => {
    this.signalRService.hubConnection.on('SendToUI', (data) => {
      this.setValue(data.path, data.decimalValue, data.stringValue)
    });
  }

  setValue(path: string, decimalValue: number, stringValue: string) {

    switch (path) {
      case TagConstant.SPPopeReelSpeed:
        this.sPPopeReelSpeed = decimalValue;
        break;
      case TagConstant.Moisture:
        this.moisture = decimalValue;
        break;
      case TagConstant.BasisWeight:
        this.basisWeight = decimalValue;
        break;
      case TagConstant.SheetBreak:
        this.sheetBreak = decimalValue;
        break;
      case TagConstant.ScannerDirection:
        this.scannerDirection = decimalValue;
        break;
      case TagConstant.ProductName:
        this.productName = stringValue;
        break;

      case TagConstant.SPTopLayerConsistencySet:
        this.sPTopLayerConsistencySet = decimalValue;
        break;
      case TagConstant.ACTopLayerConsistencyActual:
        this.aCTopLayerConsistencyActual = decimalValue;
        break;
      case TagConstant.ACBottomLayerConsistencyActual:
        this.aCBottomLayerConsistencyActual = decimalValue;
        break;
      case TagConstant.SPBottomLayerConsistency:
        this.sPBottomLayerConsistency = decimalValue;
        break;
      case TagConstant.ACHomogeneityConsistencyActual:
        this.aCHomogeneityConsistencyActual = decimalValue;
        break;
      case TagConstant.SPHomogeneityConsistencySet:
        this.sPHomogeneityConsistencySet = decimalValue;
        break;
      case TagConstant.ACSteamActual:
        this.aCSteamActual = decimalValue;
        break;
      case TagConstant.SPSteamSet:
        this.sPSteamSet = decimalValue;
        break;
      case TagConstant.ACTopLayerStockFlowActual:
        this.aCTopLayerStockFlowActual = decimalValue;
        break;
      case TagConstant.SPTopLayerStockFlowSet:
        this.sPTopLayerStockFlowSet = decimalValue;
        break;
      case TagConstant.ACBottomLayerStockFlowActual:
        this.aCBottomLayerStockFlowActual = decimalValue;
        break;
      case TagConstant.SPBottomLayerStockFlowSet:
        this.sPBottomLayerStockFlowSet = decimalValue;
        break;

      default:
        console.log("No such day exists!");
        break;
    }
  }

}
