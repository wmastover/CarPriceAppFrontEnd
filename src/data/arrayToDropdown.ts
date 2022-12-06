
export const arrayToDropdown = (array: string[]) => {

    const objectArray = [] as any

    for(var i=0; i < array.length; i++){
        const object = {} as any
        object.value = array[i]
        object.label = array[i]

        objectArray.push(object)
    }
    return(objectArray)
            
}