import { Component } from '@angular/core';
import { Brewery } from 'src/app/models/brewery';
import { BreweryService } from 'src/app/services/brewery.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  breweries?:Brewery[];

  constructor(private dataServ:BreweryService){
    this.getAllBreweries();
  }

  getAllBreweries(){
    this.dataServ.getBreweries().subscribe({
      next: brewery => this.breweries=brewery,
      error: err=> console.log(err)
    })
  }

  filterByName(searchText:string){
    //this.breweries = this.breweries?.filter(brewery => brewery.name ===searchText)

      this.dataServ.getBreweries().subscribe({
      next: brewery => this.breweries=brewery.filter(brewery => brewery.name ===searchText),
      error: err=> console.log(err)
    })
  }

}


//filter by name with input text
//filter by city with select
