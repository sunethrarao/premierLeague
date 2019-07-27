import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatFormFieldModule, 
         MatInputModule, 
         MatButtonModule,
         MatDatepickerModule,
         MatNativeDateModule,
         MatToolbarModule, 
         MatCardModule, 
         MatIconModule,
        MatSnackBarModule,        
        MatPaginatorModule,
         MatSortModule,
    MatTableModule 
        } from '@angular/material';
@NgModule({
    imports:
    [   
        BrowserAnimationsModule, MatFormFieldModule, 
        MatInputModule, MatButtonModule,
        MatDatepickerModule,MatNativeDateModule,
        MatToolbarModule, 
        MatCardModule, 
        MatIconModule,
        MatSnackBarModule,        
        MatPaginatorModule,
         MatSortModule,
    MatTableModule 
            
    ],
    exports:
    [
        BrowserAnimationsModule, MatFormFieldModule, 
        MatInputModule, MatButtonModule,
        MatDatepickerModule,MatNativeDateModule,
        MatToolbarModule, 
        MatCardModule, 
        MatIconModule,
        MatSnackBarModule, 
        MatPaginatorModule,
         MatSortModule,
    MatTableModule 
            
    ]
})

export class MaterialModule {

}