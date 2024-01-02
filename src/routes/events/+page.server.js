import { HIDDEN } from '$env/static/private'



export const load = async({fetch}) => {
    
   let tester = await fetch('https://api.tickettailor.com/v1/event_series' , {
    method: 'GET',
    headers: {
        'Accept' : 'application/json' ,
        'Authorization': 'Basic ' + Buffer.from(HIDDEN).toString('base64')
    },
})
let info = await tester.json()


console.log(info)
   
    return {
      info 
       
    }
}