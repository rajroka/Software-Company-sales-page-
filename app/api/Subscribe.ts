import axios from "axios";

   const apitoken = "your_api_token_here";

   async function getSubscribe (data: any){
     const request = await  axios.post("/auth/",data , {
        headers:{
            Authorization: apitoken,
            "Content-Type": "application/json"
        } , 
        
     });
     return request.data;
   }
   export {getSubscribe};