import * as React from 'react';
import { Text, TextInput, View, StyleSheet, Alert, ImageBackground } from 'react-native';
import Constants from 'expo-constants';
import * as firebase from "firebase";
import {Button} from 'react-native-elements';
import {Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Divider } from 'react-native-elements';

const image = { uri: 'https://cdn.discordapp.com/attachments/669659858097930274/682330946405531655/2_logo.png'};

var firebaseConfig = {
  apiKey: "AIzaSyCMbDELEAbLxRgOz61YA5RWkp9tUpTjcqg",
  authDomain: "localr-2fcff.firebaseapp.com",
  databaseURL: "https://localr-2fcff.firebaseio.com",
  projectId: "localr-2fcff",
  storageBucket: "localr-2fcff.appspot.com",
  messagingSenderId: "950232331521",
  appId: "1:950232331521:web:e80c4356281fd6851c1700",
  measurementId: "G-ZLVWHFRFXD"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const styles_1 = StyleSheet.create({
  appContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontSize:20, 
    textAlign:'center'
  },
  input: {
    alignSelf:'center',
    height: 40,
    borderWidth: 1,
    width: 200
  }
})



export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Email: '',
      Password:'',
    }
  }

  SignUp = (email, password) => {
    try {
      firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(user => { 
                 console.log(user);
           });
} catch (error) {
      console.log(error.toString(error));
    }
  };
  

  LogIn = (email, password) => {
    try {
      firebase
         .auth()
         .signInWithEmailAndPassword(email, password)
         .then(res => {
             console.log(res.user.email);
             Alert.alert(res.user.email);
      });
} catch (error) {
      console.log(error.toString(error));
    }
  };


  render() {
    return (
      <View style = {styles_1.appContainer}>
        <ImageBackground source={image} style = {styles_1.image}>
      
    </ImageBackground>
      <Input
  placeholder='Email address'
  leftIcon={
    <Icon
      name='envelope-square'
      size={24}
      color='black'
    />
  }
  onChangeText={Email => this.setState({Email})}
      value = {this.state.Email}
/>
      
      <Input
      
  placeholder='Enter password'
  leftIcon={
    <Icon
      name='lock'
      size={24}
      color='black'
    />
  }
  onChangeText={Password => this.setState({Password})}
/>

      <Button style = {{width: 200, alignSelf:'center', marginTop: 10, marginBottom: 10}}title = "Log In" onPress={() => this.LogIn(this.state.Email, this.state.Password)} />
      <Button style = {{width: 200, alignSelf:'center'}}title = "Sign Up" onPress = {() => this.SignUp(this.state.Email, this.state.Password)}/>
      </View>
    )
  }
}

