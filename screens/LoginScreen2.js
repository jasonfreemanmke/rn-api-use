/*
Jason Freeman 
https://www.ancillapartners.com/


This is the main login screen that will show up when the user must verfiy thier credentails to move forward.

the time between logins is based on the customer and will be set in the database.


*/





import * as React from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, StatusBar, ActivityIndicator, AsyncStorage} from "react-native";
import { Image} from 'react-native';
import Footer from "../components/Footer";




var msg ='';
var jwtToken = ' ';




export default class LoginScreen2 extends React.Component {

  

     constructor(){
    super();
    this.state={
      user_name: '',
      password: '',
      error:'', 
    }
  }




  saveData(){
    let accessToken = jwtToken;
    AsyncStorage.setItem('token', accessToken );
  }

  async storeToken(accessToken){
try {
    await AsyncStorage.setItem(ACCESS_TOKEN, accessToken);
    this.getToken();
}catch (error){
  console.log("something went wrong")
}

  }

  async getToken(){
    try {
       let token = await AsyncStorage.setItem(ACCESS_TOKEN);
        this.getToken();
        console.log("token is: " + token);
    }catch (error){
      console.log("something went wrong")
    }
    
      }

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



      }


  render() {
    return (
 


      <View style={styles.container}>


<Image style={styles.logo}source={require('../assets/logo.png')} />
        
       
       
       
        <TextInput style={styles.input} placeholder="Username"
        onChangeText={(user_name)=>this.setState({user_name})} 
        value={this.state.user_name}
        autoCapitalize="none"

        />


       
        <TextInput style={styles.input} placeholder="Password" secureTextEntry
        onChangeText={(password)=>this.setState({password})} 
        value={this.state.password}
        autoCapitalize="none"

        />

        
<View style={styles.btnContainer}>

  <TouchableOpacity style={styles.userBtn} onPress={this.userLogin }>
<Text style={styles.btnText}>Login</Text>


  </TouchableOpacity>

    
  
</View>

<Footer/>


      </View>



    


    );
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center"
    
  },

  welcome:
  {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color: "orange",

    


  },

  txtBoxLabel:
  {
    fontSize: 14,
    textAlign: 'left',
    color: "black",
    alignSelf: "flex-start",
    flexDirection: "row",
    margin: 2,
    
    


  },
  input:
  {
    width: '90%',
    backgroundColor: "#d3d3d3",
    padding: 15,
    
    borderColor: 'rgb(66, 135, 245)',
    borderWidth: 1,
    
   
  },
  userBtn:
  {
    backgroundColor: "#f9983c",
    padding: 15,
    width: "90%",
   

    
  },
  btnText:
  {
    fontSize: 20,
    textAlign: "center",
    color: "white",
    

  },

  btnContainer:
  {
    flexDirection: "row",
    justifyContent: "space-between",
    
    
  },

  

  
  logo:
  {

    width: "75%",
    marginTop: 80,
    padding: 25,
    marginBottom: 80,
  },







});

