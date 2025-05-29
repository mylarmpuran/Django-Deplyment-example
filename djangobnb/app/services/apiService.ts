
import { getAccessToken  } from "../lib/actions";


const apiServices = {
    get: async function(url:string): Promise<any>{
        console.log("get", url);

        const token = await getAccessToken();

        return new Promise((resolve, reject) => {
            fetch(`${process.env.NEXT_PUBLIC_API_HOST}${url}`,{
                method: "GET",
                headers: {
                    "Accept" : 'application/json',
                    'Content-Type': "applicaiton/json",
                    'Authorization': `Bearer ${token}`
                }
            })

                .then(response => response.json())  // Parse JSON data but its and asynchronous method
                .then((json) => { 
                    console.log("Response:", json);  // Use the data
                   

                    resolve(json)
                })
                .catch ((error => {
                    reject(error)
                }))                               // Handle errors
        })
    },


postWithoutToken: async function(url: string, data:any): Promise<any> {
        console.log('post', url, data);
        

        return new Promise((resolve, reject) => {
            fetch(`${process.env.NEXT_PUBLIC_API_HOST}${url}`, {
                method: "POST",
                body: data,
                headers: {
                    "Accept": 'application/json',
                    "Content-Type":'application/json',
                }
               
            })
             .then(response => response.json())
                .then((json) => {
                    console.log('Response', json);

                    resolve(json)
                })
                .catch((error) => {
                    reject(error)
                })

        })
    },

    post: async function(url: string, data:any): Promise<any> {
        console.log('post', url, data);
        const token = await getAccessToken();
        console.log("apiservice", token)

        return new Promise((resolve, reject) => {
            fetch(`${process.env.NEXT_PUBLIC_API_HOST}${url}`, {
                method: "POST",
                body: data,
                headers: {
                    // "Accept": 'application/json',
                    // "Content-Type":'application/json',
                    'Authorization': `Bearer ${token}`
                }
               
            })
             .then(response => response.json())
                .then((json) => {
                    console.log('Response', json);

                    resolve(json)
                })
                .catch((error) => {
                    reject(error)
                })

        })
    }
}


export default apiServices;