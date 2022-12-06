import { collection, getDocs, Firestore } from 'firebase/firestore';


export const fetchCars = async(db: Firestore, make: string, model:string, year:string) => {


    const carsQuery = await getDocs(collection(db, "Makes/" + make + "/Models/" + model + "/Years/" + year + "/Cars"))
    const length = carsQuery.docs.length

    var years = []

    for(var count = 0; count < length; count++){ 
        years.push(carsQuery.docs[count].data())
    }
    
    return(years)

}