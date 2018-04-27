export function updateSearch(city){
    return{
        type: 'UPDATE_SEARCH',
        payload: { city }
    }
}
