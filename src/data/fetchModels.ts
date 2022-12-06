import { collection, getDocs, Firestore } from 'firebase/firestore';


export const fetchModels = async(db: Firestore, make: string) => {


    const modelsQuery = await getDocs(collection(db, "Makes/" + make + "/Models"))
    const length = modelsQuery.docs.length

    var models = []

    for(var count = 0; count < length; count++){ 
        models.push(modelsQuery.docs[count].id)
    }
    
    return(models)

}