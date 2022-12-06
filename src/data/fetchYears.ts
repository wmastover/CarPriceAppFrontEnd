import { collection, getDocs, Firestore } from 'firebase/firestore';


export const fetchYears = async(db: Firestore, make: string, model:string) => {


    const yearsQuery = await getDocs(collection(db, "Makes/" + make + "/Models/" + model + "/Years"))
    const length = yearsQuery.docs.length

    var years = []

    for(var count = 0; count < length; count++){ 
        years.push(yearsQuery.docs[count].id)
    }
    
    return(years)

}