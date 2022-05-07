export const getGifs = async(categorie)=>{
    const url=`https://api.giphy.com/v1/gifs/search?q=${encodeURI(categorie)}&limit=25&offset=0&api_key=arCQwczS2CsC1OFPeAQRbh7S1zAglNaC`;
    // const key='arCQwczS2CsC1OFPeAQRbh7S1zAglNaC';
    const response=await fetch(url);
    const {data}=await response.json();
    const gifs=data.map(img=>{
        return{
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url,
        }
    });

    return gifs;
}