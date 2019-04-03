import { Component,OnInit } from '@angular/core';
import {Chart} from 'chart.js'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Line and Bar Chart';

  ngOnInit()
  {
    // Line chart:
 new Chart('lineChart', {
type: 'line',
data: {
 labels: ["Jan", "Feb", "March", "April", "May", "June","July","Aug","Sep","Oct","Nov","Dec"],
 datasets: [{
     label: 'Number of Items Sold in Months',
     data: [9,7 , 3, 5, 2, 10,15,16,19,3,1,9],
     fill:false,
     lineTension:0.2,
     borderColor:"red",
     borderWidth: 1
 }]
}, 
options: {
 title:{
     text:"Line Chart",
     display:true
 },
 scales: {
     yAxes: [{
         ticks: {
             beginAtZero:true
         }
     }]
 }
}
});

// Bar chart:
new Chart('barChart', {
  type: 'bar',
data: {
 labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
 datasets: [{
     label: '# of Votes',
     data: [9,7 , 3, 5, 2, 10],
     backgroundColor: [
         'rgba(255, 99, 132, 0.2)',
         'rgba(54, 162, 235, 0.2)',
         'rgba(255, 206, 86, 0.2)',
         'rgba(75, 192, 192, 0.2)',
         'rgba(153, 102, 255, 0.2)',
         'rgba(255, 159, 64, 0.2)'
     ],
     borderColor: [
         'rgba(255,99,132,1)',
         'rgba(54, 162, 235, 1)',
         'rgba(255, 206, 86, 1)',
         'rgba(75, 192, 192, 1)',
         'rgba(153, 102, 255, 1)',
         'rgba(255, 159, 64, 1)'
     ],
     borderWidth: 1
 }]
}, 
options: {
 title:{
     text:"Bar Chart",
     display:true
 },
 scales: {
     yAxes: [{
         ticks: {
             beginAtZero:true
         }
     }]
 }
}
});



// Bar chart:
new Chart('lineChart2', {
    type: 'line',
  data: {
   labels: ["1", "2", "3", "4", "5"],
   datasets: [{
       label: 'A',
       yAxisID: 'A',
       data: [100, 96, 84, 76, 69],
       backgroundColor:'rgba(255, 159, 64, 0.2)'
       },{
    label: 'B',
    yAxisID: 'B',
    data: [1, 1, 1, 1, 0]
  }]
  },
   
  options: {
    scales: {
      yAxes: [{
        id: 'A',
        type: 'linear',
        position: 'left',
      }, {
        id: 'B',
        type: 'linear',
        position: 'right',
        ticks: {
          max: 1,
          min: 0
        }
      }]
    }
  }
  });

  new Chart ('pieChart',{
      type:'pie',
      data :{
        datasets: [{ data: [10, 20, 30],
            backgroundColor:[
                'rgba(225, 20, 20, 1)',
                'rgba(225, 215, 20, 1)',
                'rgba(20, 133, 225, 1)'
                ],
                hoverBackgroundColor:[
                 'rgba(225, 20, 20, .5)',
                'rgba(225, 215, 20, 0.5)',
                'rgba(20, 133, 225, 0.5)'
                ]

            },
            
    ],
   
    
        labels: [
            'Red',
            'Yellow',
            'Blue'
        ],
       
    },
    options: {}
  })
  
  
  
 

}
}
 
    
  
  