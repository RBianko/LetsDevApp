const formattedTerm = (item, term) => {
    let result = item[term]

    if (term === 'firstName') result = [item[term], item['lastName']]
    if (Array.isArray(result)) result = result.join('')

    return result.toLowerCase()
}

export const searchFilter = (items, selectorTerm, inputTerm) =>
    items.filter(item => {
        const terms = formattedTerm(item, selectorTerm)
        return terms.includes(inputTerm.toLowerCase())
    })