import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Icon, Button, Container, Header, Content, Left, Body, Title, Right, Center } from 'native-base';
import Footer from '../components/Footer';


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Header>
                <Left>
                  <Icon name="menu" onPress={() => this.props.navigation.openDrawer ()} />
                </Left>
                
                  <View>
                    <Image style={styles.headerImage} source={require('../assets/logo.png')}/>

                   


                  </View>
                  


                 
        

               
            </Header>


            <View style={styles.container}>
      <Text>Home Screen</Text>
    </View>


      <Footer />
    </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

