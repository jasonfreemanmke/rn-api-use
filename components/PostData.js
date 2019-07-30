

export function PostData (type, userData){

let BaseUrl = 'https://pilot.readylist.com/mobile/authorize/login.php';
return new Promise((resolve, reject) => {

fetch(BaseUrl+type,{
    method: 'POST',
    body: JSON.stringify(userData)

})
.then ((response)=> response.json())
.then ((responseJson)=>{
    resolve(responseJson);
})
.cathch((error)=>{
    reject(error);
})

})
}