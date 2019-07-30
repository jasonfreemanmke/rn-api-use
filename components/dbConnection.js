 testDB()
  {

    fetch('https://pilot.readylist.com/mobile/authorize/login.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "user_name": 'psa1',
        "password": "wordpass",
      }),
    }).then((response) => response.json())
        .then((responseJson) => {
           //alert(responseJson['message']);          
          //alert(responseJson['jwt']);
           jwtToken = responseJson.jwt;
          alert (jwtToken);

          return responseJson;
          


        })
        .catch((error) => {
          console.error(error);

        });



      }
