import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Icon, Button, Container, Header, Content, Left, Body, Title, Right, Center } from 'native-base';


export default function HomeScreen() {
  return (
    <Container>

        
        <Header>
                <Left>
                  <Icon name="menu" onPress={() => this.props.navigation.openDrawer ()} />
                </Left>
                
                  <View>
                    <Image style={styles.headerImage} source={require('../assets/logo.png')}/>




                  </View>


                 
        

               
            </Header>


      

    

        </Container>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  icon: {
    width: 24,
    height: 24,
  },

});
