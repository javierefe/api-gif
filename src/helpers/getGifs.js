export const getGifs = async(category) => {

    // encodeURI() reemplazara los espacios vacios por %20
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=2hvXk2v8sfRYdbMhUWuhF0y0aIr3jQ2O`
    const resp = await fetch(url);
    const {data} = await resp.json();
    
    const gifs = data.map( img => {

        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url // ? comprueba si todas las imagenes tienen url
        }
    })
    console.log(gifs);
    
    return gifs;
}
// getGifs();