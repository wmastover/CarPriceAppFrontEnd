import { collection, getDocs, Firestore, doc, getDoc } from 'firebase/firestore';
import { store  } from "../redux/reduxStore"
import { changeRows } from '../redux/rowsSlice';
import { changeParams } from '../redux/paramsSlice';
import { row, params } from '../type/data';

export const fetchCars = async(db: Firestore, make: string, model:string, year:string) => {


    const carsQuery = await getDocs(collection(db, "Makes/" + make + "/Models/" + model + "/Years/" + year + "/Cars"))
    const length = carsQuery.docs.length
    const rows = [] as Array<row>

    for(var count = 0; count < length; count++){ 
        const row = carsQuery.docs[count].data() as row
        rows.push(row)
    }
    store.dispatch(changeRows(rows))
    // console.log("running params query")

    const paramsRef =  doc(db, "Makes/" + make + "/Models/" + model + "/Years/" + year)
    const paramsQuery = await getDoc(paramsRef)
    
    // console.log(paramsQuery.data())
    store.dispatch(changeParams(paramsQuery.data() as params))


    console.log("done")
    return

}