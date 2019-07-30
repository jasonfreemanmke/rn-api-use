/*
Jason Freeman 
https://www.ancillapartners.com/


This is the main login screen that will show up when the user must verfiy thier credentails to move forward.

the time between logins is based on the customer and will be set in the database.

The time the page stays on will be determied by the time to connect to database, verify token for access and returned 
*/





import * as React from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, StatusBar, ActivityIndicator,} from "react-native";
import { Image} from 'react-native';
import Footer from "../components/Footer";



var user_name = '';
var password ='';

var jwtToken = ' ';

export default class LoginScreen2 extends React.Component {

  

     constructor(){
    super();
    this.state={
      user_name: '',
      password: ''
    }
  }

  

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


  render() {
    return (
 


      <View style={styles.container}>


<Image style={styles.logo}source={require('../assets/logo.png')} />
        
      
        <Text style={styles.txtBoxLabel}>2Email Address (User Name):</Text>
        < TextInput style={styles.input} placeholder="Username"
        onChangeText={(user_name)=>this.setState({user_name})} 
        value={this.state.user_name}
        autoCapitalize="none"

        />


        <Text  style={styles.txtBoxLabel}>Password:</Text>
        <TextInput style={styles.input} placeholder="Password" secureTextEntry
        onChangeText={(password)=>this.setState({password})} 
        value={this.state.password}
        autoCapitalize="none"

        />

        
<View style={styles.btnContainer}>

  <TouchableOpacity style={styles.userBtn} onPress={this.testDB }>
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
    margin: 20,
    
    


  },
  input:
  {
    width: '90%',
    backgroundColor: "#d3d3d3",
    padding: 15,
    marginBottom: 10,
    borderColor: 'rgb(66, 135, 245)',
    borderWidth: 1,
   
  },
  userBtn:
  {
    backgroundColor: "#f9983c",
    padding: 15,
    width: "55%",
    marginTop: 50,

    
  },
  btnText:
  {
    fontSize: 18,
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

