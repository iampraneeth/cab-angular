import { Component }
    from '@angular/core';



@Component({

    selector: "select-driver",

    templateUrl: "./select-driver.component.html"

})

export class SelectDriverComponent {



    driverData: any = [{

        DriverName: "Tom",

        DriverCity: "Hopkins",

        Ratings: "male",

    },

    {

        DriverName: "Tom",

        DriverCity: "Hopkins",

        Ratings: "male",

    }

    ]

}

