import { Component, OnInit, ViewChild } from '@angular/core';
import { MainService } from './main.service';
import { Reading } from './reading.model';
import { SignalrService } from './signalr.service';
import { TagConstant } from './tag.constant';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid
} from "ng-apexcharts";
@Component({
  selector: 'main',
  templateUrl: './main.template.html',
  styleUrls: ['./main.style.scss']
})
export class MainComponent implements OnInit {
  // Mohamed Abdelaty
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
  actuals: Reading[];
  actualsDates: Date[];

  @ViewChild("chart") chart: ChartComponent;
  public actualChartOptions: any;

  constructor(private mainService: MainService,
    public signalRService: SignalrService
  ) {
  }

  ngOnInit(): void {
    this.getOne(TagConstant.SPTopLayerConsistencySet);
    // this.getOne(TagConstant.ACTopLayerConsistencyActual);
    // this.getOne(TagConstant.ACBottomLayerConsistencyActual);
    this.getOne(TagConstant.SPBottomLayerConsistency);
    // this.getOne(TagConstant.ACHomogeneityConsistencyActual);
    // this.getOne(TagConstant.SPHomogeneityConsistencySet);
    // this.getOne(TagConstant.ACSteamActual);
    // this.getOne(TagConstant.SPSteamSet);
    // this.getOne(TagConstant.ACTopLayerStockFlowActual);
    // this.getOne(TagConstant.SPTopLayerStockFlowSet);
    // this.getOne(TagConstant.ACBottomLayerStockFlowActual);
    // this.getOne(TagConstant.SPBottomLayerStockFlowSet);
    // this.getOne(TagConstant.SPPopeReelSpeed);
    // this.getOne(TagConstant.Moisture);
    // this.getOne(TagConstant.BasisWeight);
    this.getOne(TagConstant.SheetBreak);
    this.getOne(TagConstant.ScannerDirection);
    this.getOne(TagConstant.ProductName);

  // chart api
  this.getActual();

    this.signalRService.startConnection();
    this.receiveData();
  }

  getOne(path: string) {
    this.mainService.getOne({ path: path }).subscribe(
      (res: any) => {
        this.setValue(path, res.decimalValue, res.stringValue);
      });
  }


  //chart api 
  getActual() {
    this.mainService.getList({
      paths: [
        TagConstant.ACBottomLayerConsistencyActual,
        TagConstant.ACBottomLayerStockFlowActual,
        TagConstant.ACHomogeneityConsistencyActual,
        TagConstant.ACSteamActual,
        TagConstant.ACTopLayerConsistencyActual,
        TagConstant.ACTopLayerStockFlowActual
      ]
    }).subscribe(
      (res: Reading[]) => {
       // console.log(res); ///////////////////////////////////////
        // this.actuals = res;
        // this.actualsDates = this.actuals.map(item => item.date).filter((value, index, self) => self.indexOf(value) === index);
        // this.actualChartOptions.xaxis.categories = this.actualsDates;
        // this.actualChartOptions.series.push(
        //   {
        //     name: 'Bottom Layer Consistency',
        //     data: this.actuals.filter(d => d.path == TagConstant.ACSteamActual).map(a => a.decimalValue)
        //   });
        // this.actualChartOptions = {
        //   grid: {
        //     borderColor: '#1C2531'
        //   },
        //   series: [
        //     {
        //       name: 'Bottom Layer Consistency',
        //       data: this.actuals.filter(d => d.path == TagConstant.ACBottomLayerConsistencyActual).map(a => ({ x: a.date, y: a.decimalValue }))
        //     },
        //     {
        //       name: 'Bottom Layer Stock Flow',
        //       data: this.actuals.filter(d => d.path == TagConstant.ACBottomLayerStockFlowActual).map(a => ({ x: a.date, y: a.decimalValue }))
        //     }
        //   ],
        //   colors: ['#4ebfbb', '#FF8253', '#FDD468'],
        //   chart: {
        //     type: 'line',
        //     height: '280px',
        //     background: 'transparent',
        //     toolbar: {
        //       show: false
        //     }
        //   },
        //   stroke: {
        //     width: 2
        //   },
        //   legend: {
        //     show: false
        //   },
        //   xaxis: {
        //     type: 'datetime',
        //     axisBorder: {
        //       show: false,
        //       color: '#fff'
        //     },
        //     axisTicks: {
        //       show: false
        //     },
        //     labels: {
        //       style: {
        //         colors: '#fff'
        //       }
        //     }
        //   },
        //   yaxis: {
        //     axisBorder: {
        //       show: false,
        //       color: '#fff',
        //     },
        //     axisTicks: {
        //       show: false
        //     },
        //     labels: {
        //       style: {
        //         colors: '#fff'
        //       }
        //     },
        //     splitLine: {
        //       show: false
        //     }
        //   },
        //   tooltip: {
        //     enabled: true,
        //     x: {
        //       format: "dd/MM/yy HH:mm:ss"
        //     }
        //   }
        // };
        // this.actualChartOptions.series[0].data.push({ x: new Date(), y: 5 })
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
        break;
    }
  }
}


export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};

