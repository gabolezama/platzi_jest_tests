export const getData = async(api) =>{
    try {
        const respFetch = await fetch(api);
        return await respFetch.json();
        
    } catch (error) {
        return error
    }
}