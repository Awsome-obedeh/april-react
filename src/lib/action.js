
"use server"
export async function handleSubmit(formData){
    
        // const firstname= formData.get("firstname")
        // const lastname=formData.get("lastname")
        // const age=formData.get("age")
        // const answer=formData.get("answer")
        // const players=formData.getAll("players")
        // console.log(firstname, age, lastname, answer, players)

        const data=Object.fromEntries(formData)
        const players=formData.getAll('players')

        console.log(data, players)

        // using Object.fromEntries to handle a large form entry

        // challenge- get all checked boxes values from the object
    
}

export const loginForm=async ()=>{
        const username=formData.get('username')
        const password=formData.get('password')
}


