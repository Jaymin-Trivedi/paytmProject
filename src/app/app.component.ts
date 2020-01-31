import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'paytmProject';

  
  bookingArray=[{
    name:'Movies',
    img:'',
  },
  {
    name:'Train',
    img:'',
  },
  {
    name:'Bus',
    img:'',
  },
  {
    name:'flights',
    img:'',
  },
  {
    name:'Shop',
    img:'',
  },
  {
    name:'Hot-Deals',
    img:'',
  },
  {
    name:'Events',
    img:'',
  },
  {
    name:'Hotels',
    img:'',
  },
];


shoppingArray=[{
  name:'Shop On Mall',
  img:'',
},
{
  name:'FASTag',
  img:'',
},
{
  name:'Electronics',
  img:'',
},
{
  name:'Men fashion',
  img:'',
},
{
  name:'Women fashion',
  img:'',
},
{
  name:'Home & Kitchen',
  img:'',
},
{
  name:'Mobiles',
  img:'',
},
{
  name:'Laptops',
  img:'',
},
];

navArray=[{
  name:'Prepaid Bill',
  img:'',
},
{
  name:'Postpaid Bill',
  img:'',
},
{
  name:'Electricity',
  img:'',
},
{
  name:'Metro',
  img:'',
},
{
  name:'Landline',
  img:'',
},
{
  name:'BroadBand',
  img:'',
},
{
  name:'Buy FASTag',
  img:'',
},
{
  name:'More',
  img:'',
},
];




}
