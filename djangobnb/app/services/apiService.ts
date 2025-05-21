const apiServices = {
    get: async function(url:string): Promise<any>{
        console.log("get", url);

        return new Promise((resolve, reject) => {
            fetch(`${process.env.NEXT_PUBLIC_API_HOST}${url}`,{
                method: "GET",
                headers: {
                    "Accept" : 'application/json',
                    'Content-Type': "applicaiton/json"
                }
            })

                .then(response => response.json())  // Parse JSON data
                .then((json) => { 
                    console.log("Response:", json);  // Use the data

                    resolve(json)
                })
                .catch ((error => {
                    reject(error)
                }))                               // Handle errors
        })
    }
}


export default apiServices;