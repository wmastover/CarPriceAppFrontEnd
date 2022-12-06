import { collection, getDocs, Firestore } from 'firebase/firestore';



export const fetchMakes = async(db: Firestore) => {

    

    const makesQuery = await getDocs(collection(db, "Makes/"))
    const length = makesQuery.docs.length

    var makes = []

    for(var count = 0; count < length; count++){ 
        makes.push(makesQuery.docs[count].id)
    }
    
    return(makes)

}