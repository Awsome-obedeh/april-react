export const getTop=async (endpoint)=>{
    const url = `https://animedb1.p.rapidapi.com/top/${endpoint}`;
    const options = {
        method: 'GET',
        headers: {
		'x-rapidapi-key': process.env.RAPID_API_KEY,
		'x-rapidapi-host': 'animedb1.p.rapidapi.com'
	}
         
    };

    try {
        const response = await fetch(url, options);
        // convert from json to objects
        const result = await response.json();
        console.log(result);
        return result
    } catch (error) {
        console.error(error);
    }
}

export async function getAnime(anime,pageNumber){
    const url = `https://animedb1.p.rapidapi.com/anime?q=${anime}&page=${pageNumber}`;
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '8211e87e56msh7bc643da62dc703p1842dcjsn92dd720f35fa',
		'x-rapidapi-host': 'animedb1.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
    return result
	// console.log(result);
} catch (error) {
	console.error(error);
}
}

function sum(a,b){
    console.log(a+b)
}

sum(3,4)