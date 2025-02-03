import { Component, HostListener, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexXAxis,
  ApexFill,
  NgApexchartsModule,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-graph-bar',
  imports: [NgApexchartsModule],
  templateUrl: './graph-bar.component.html',
  styleUrl: './graph-bar.component.scss',
})
export class GraphBarComponent {
  @ViewChild('chart') chartComponent: ChartComponent | undefined;

  series: any[] = [];
  chart: ApexChart = {
    height: 350,
    width: '100%',
    background: 'transparent',
    type: 'bar',
  };
  plotOptions = {
    bar: {
      dataLabels: {
        position: 'top', // top, center, bottom
      },
    },
  };
  dataLabels = {
    enabled: true,
    formatter: function (val: any) {
      return val + '%';
    },
    offsetY: -20,
    style: {
      fontSize: '12px',
      colors: ['#304758'],
    },
  };

  xaxis = {
    categories: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    position: 'top',
    labels: {
      offsetY: -18,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    crosshairs: {
      fill: {
        type: 'gradient',
        gradient: {
          colorFrom: '#D8E3F0',
          colorTo: '#BED1E6',
          stops: [0, 100],
          opacityFrom: 0.4,
          opacityTo: 0.5,
        },
      },
    },
    tooltip: {
      enabled: true,
      offsetY: -35,
    },
  };
  fill = {
    type: 'gradient',
    gradient: {
      shade: 'light',
      type: 'horizontal',
      shadeIntensity: 0.25,
      gradientToColors: undefined,
      inverseColors: true,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [50, 0, 100, 100],
    },
  };
  yaxis = {
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    labels: {
      show: false,
      formatter: function (val: any) {
        return val + '%';
      },
    },
  };
  title: ApexTitleSubtitle = {
    text: 'Monthly Inflation in Argentina, 2002',
    floating: false,
    offsetY: 320,
    align: 'center',
    style: {
      color: '#444',
    },
  };

  constructor() {
    this.series = [
      {
        name: 'Inflation',
        data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2],
      },
    ];
  }
}
