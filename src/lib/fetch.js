export const getTop=async (endpoint)=>{
    const url = `https://animedb1.p.rapidapi.com/top/${endpoint}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '8211e87e56msh7bc643da62dc703p1842dcjsn92dd720f35fa',
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

function sum(a,b){
    console.log(a+b)
}

sum(3,4)