import { StyleSheet, View, Text, TextInput } from 'react-native'; 
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState } from 'react';
import firebase from '../../src/database/firebaseconection';
import FirstPage from './FirstPage';
import FailedLogin from './FailedLogin';
import Result from './Result';
import { Button } from "react-native-elements";
import Lottie from  "lottie-react-native";
import vote2 from '../../vote2.json';

function HomeLogin({ navigation }) {

  async function navegarSucess(){
    const votosRef = firebase.firestore().collection('votos');
    const snapshot = await votosRef.where('email', '==', email).get();
    if (snapshot.empty) {
        navigation.navigate('FirstPage')
    } else {
      navigation.navigate('Result')
    }
  }

  function navegarFailed(){
    navigation.navigate('FailedLogin')
  }
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onChangeEmail = (txtEmail) => {
      setEmail(txtEmail)
  }
  const onChangePassword = (txtPassword) => {
      setPassword(txtPassword)
  }
  const login = () => {
    firebase.auth().signInWithEmailAndPassword(email,password).then(() => {
      navegarSucess()
    }).catch(() => {
      navegarFailed()
    })
  }
  return(
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#312f73",
      }}
    >
      <Lottie resizeMode="contain" style={{ height: 200 }} source={vote2} autoPlay loop />
      <Text style={styles.subTitle}>Acesse o sistema</Text>
      <TextInput
        placeholder="E-mail"
        style={styles.inputText}
        placeholderTextColor="#8985f2"
        value={email}
        onChangeText={txtEmail => onChangeEmail(txtEmail)}
      >

      </TextInput>
      <TextInput
        placeholder="Senha"
        style={styles.inputText}
        placeholderTextColor="#8985f2"
        value={password}
        onChangeText={txtPassword => onChangePassword(txtPassword)}
        secureTextEntry={true}
      >
      </TextInput>
      <Button 
        buttonStyle={styles.button}
        title="Entrar"
        onPress={login}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: "#43D9AE",
    borderRadius: 15,
    height: 60,
    width: 210,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
  },
  subTitle: {
    color: '#8985f2',
    fontSize: 21,
    marginBottom: 15
  },
  inputText: {
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 10,
    color: '#8985f2',
    fontSize: 16,
    paddingLeft: 20,
    marginBottom: 21,
    width: 300
},
});
const Stack = createStackNavigator();

function LoginForm() {
  return (
        <Stack.Navigator>
        <Stack.Screen name="HomeLogin" component={HomeLogin} />
        <Stack.Screen name="FirstPage" component={FirstPage} />
        <Stack.Screen name="FailedLogin" component={FailedLogin} />
        <Stack.Screen name="Result" component={Result} />
      </Stack.Navigator>
  );
}
export default LoginForm;
