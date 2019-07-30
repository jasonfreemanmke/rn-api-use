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
import { ScrollView } from "react-native-gesture-handler";



var user_name = '';
var password ='';
var msg ='';
var jwtToken = ' ';
var rooms = [' '];

const ACCESS_TOKEN =jwtToken;
const Rooms = rooms;


export default class LoginScreen2 extends React.Component {

  

     constructor(){
    super();
    this.state={
      user_name: '',
      password: '',
      error:'', 
    }
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
        "jwt": ""+ jwtToken +"",

      
      }),
    }).then((response) => response.json())
        .then((responseJson) => {
           //alert(responseJson['message']);          
          //alert(responseJson['jwt']);
           jwtToken = responseJson.jwt;
            msg = responseJson.message;
            rooms = responseJson.rooms
          alert (jwtToken);
          alert (msg);
          alert(responseJson['rooms']);
          return responseJson;
          


        })
        .catch((error) => {
          console.error(error);

        });



      }


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
           jwtToken = responseJson.jwt;
            msg = responseJson.message;
            rooms = responseJson.rooms
          
         
          alert(responseJson['rooms']);
          return responseJson;
          


        })
        .catch((error) => {
        console.error(error);

        });



      }

      printToken()
      {
        alert (jwtToken);
      }




  render() {
    return (
 


      <View style={styles.container}>


<Image style={styles.logo}source={require('../assets/logo.png')} />
        
       
       
       
        <TextInput style={styles.input} placeholder="Username"
        onChangeText={(text)=>this.setState({user_name: text})} 
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
<View>
<TouchableOpacity style={styles.userBtn} onPress={this.getRooms }>
<Text style={styles.btnText}>Rooms</Text>

  </TouchableOpacity>

</View>
  <View>
<TouchableOpacity style={styles.userBtn} onPress={this.printToken }>
<Text style={styles.btnText}>Token</Text>
</TouchableOpacity>


      <ScrollView>

      <Text></Text>

      </ScrollView>



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

