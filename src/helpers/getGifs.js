


export const getGifs= async(nombres)=>{
    const url=`https://api.giphy.com/v1/gifs/search?q=${ encodeURI(nombres) }&limit=10&api_key=vQ09z5GzpJCO5PwpAQCK7NRXKMH8WQkU`;
    const resp= await fetch(url);
    const { data }= await resp.json();
    
    const gifs=data.map(img =>{

        return {
            id:img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;
    
}