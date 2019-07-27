import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { EventService } from 'src/app/event.service';
// import { HttpClient } from '@angular/common/http';
// import {MatPaginator, MatSort, MatTableDataSource, MatTableModule} from '@angular/material';


@Component({
  selector: 'app-view-tournament',
  templateUrl: './view-tournament.component.html',
  styleUrls: ['./view-tournament.component.css']
})
export class ViewTournamentComponent implements OnInit, AfterViewInit {
  events: Object;
  searchText;
  // displayedColumns = ['id', 'name', 'progress', 'color'];
  // dataSource: MatTableDataSource<UserData>;

  // @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ViewChild(MatSort) sort: MatSort;

  constructor(private event: EventService ) {
    // Create 100 users
    // const users: UserData[] = [];
    // for (let i = 1; i <= 100; i++) { users.push(createNewUser(i)); }

    // // Assign the data to the data source for the table to render
    // this.dataSource = new MatTableDataSource(users);
  }
  ngOnInit() {

    this.getAllEventsFn();
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }
  /**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.
   */
  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }

  // applyFilter(filterValue: string) {
  //   filterValue = filterValue.trim(); // Remove whitespace
  //   filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
  //   this.dataSource.filter = filterValue;
  // }

  getAllEventsFn(){
    this.event.getAllEventsFn()
    .subscribe((res)=>{
      this.events = res;
      console.log(this.events);
    });
  }
  deleteEvent(id){
    this.event.deleteEvent(id)
    .subscribe((res)=>{
      console.log(res);
      this.getAllEventsFn()
    });
  }
}

/** Builds and returns a new User. */
// function createNewUser(id: number): UserData {
//   const name =
//       NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
//       NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

//   return {
//     id: id.toString(),
//     name: name,
//     progress: Math.round(Math.random() * 100).toString(),
//     color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
//   };
// }

/** Constants used to fill up our data base. */
// const COLORS = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
//   'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
// const NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
//   'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
//   'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];

// export interface UserData {
//   id: string;
//   name: string;
//   progress: string;
//   color: string;
// }
  // searchText;
  // heroes = [
  //   { id: 11, name: 'Mr. Nice', country: 'India' },
  //   { id: 12, name: 'Narco' , country: 'USA'},
  //   { id: 13, name: 'Bombasto' , country: 'UK'},
  //   { id: 14, name: 'Celeritas' , country: 'Canada' },
  //   { id: 15, name: 'Magneta' , country: 'Russia'},
  //   { id: 16, name: 'RubberMan' , country: 'China'},
  //   { id: 17, name: 'Dynama' , country: 'Germany'},
  //   { id: 18, name: 'Dr IQ' , country: 'Hong Kong'},
  //   { id: 19, name: 'Magma' , country: 'South Africa'},
  //   { id: 20, name: 'Tornado' , country: 'Sri Lanka'}
  // ];

  // ngOnInit(){
    
  // }
  // dataUrl = 'https://jsonplaceholder.typicode.com/users';
  // data;

  // constructor(private http: HttpClient) { }

  // ngOnInit() {

  //   this.http.get(this.dataUrl)
  //     .subscribe(
  //       res => {
  //         this.data = res;
  //       },
  //       err => {
  //         console.log('Error occured');
  //       }
  //     );

  // }

