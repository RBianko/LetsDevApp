export const editElement = (item, id, array) => {
    let result = [...array]
    result.splice(id, 1, item)
    return result
}

export const addNewElement = (item, array) => [...array, item]