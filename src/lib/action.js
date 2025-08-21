
"use server"
export async function handleSubmit(formData){
    
        const firstname= formData.get("firstname")
        console.log(firstname)

        // using Object.fromEntries to handle a large form entry

        // challenge- get all checked boxes values from the object
    
}