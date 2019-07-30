/*
This will hold of the api calls here in one place and export out to other pages, so that if changes need to be made they are all in one place and not spread throughout tthe app


*/


// this it login used to verify the username and passowrd, if correct this call will also get and store that access token tobe user throughout the rest of the app
async userLogin()
{
 
  fetch('https://pilot.readylist.com/mobile/authorize/login.php', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      "user_name": "psa1",
      "password": "wordpass",
    }),
  }).then((response) => response.json())
      .then((responseJson) => {
         //alert(responseJson['message']);          
        //alert(responseJson['jwt']);
         jwtToken = responseJson.jwt;
          msg = responseJson.message;
        alert (jwtToken);
        alert (msg);
        return responseJson;
        


      })
      .catch((error) => {
        console.error(error);

      });



      // gets a list of rooms

      async getRooms()
      {
       
        fetch('https://pilot.readylist.com/mobile/get_rooms.php', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            
            "jwt": ""+ jwtToken +"",
    
          
          }),
        }).then((response) => response.json())
            .then((responseJson) => {
               //alert(responseJson['message']);          
              //alert(responseJson['jwt']);
               
                rooms = responseJson.rooms
              
             
              alert(responseJson['rooms']);
              return responseJson;
              
    
    
            })
            .catch((error) => {
            console.error(error);
    
            });