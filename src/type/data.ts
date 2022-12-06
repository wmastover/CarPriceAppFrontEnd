
// declares the type for the data displayed on home screen

export type row = {
    Link: string
    PhotoLink: string
    Milage: string 
    Price: string
    Year: string
}

export type params = {
    numberOfDataPoints: string
    parameterA: string
    parameterB: string 
}

export type setRowsFunction =  (row: any) => void
   
