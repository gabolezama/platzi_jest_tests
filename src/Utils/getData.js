export const getData = async(api) =>{
    try {
        const respFetch = await fetch(ap);
        return await respFetch.json();
        
    } catch (error) {
        return error
    }
}