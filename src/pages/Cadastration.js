import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TextInput } from 'react-native-gesture-handler';
import firebase from '../../src/database/firebaseconection';
import Sucess from './Sucess';
import { Button } from 'react-native-elements';
import Lottie from  "lottie-react-native";
import vote2 from '../../vote2.json';

function TaskForm({ navigation }){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onChangeEmail = (txtEmail) => {
        setEmail(txtEmail)
    }
    const onChangePassword = (txtPassword) => {
        setPassword(txtPassword)
    }
    const Cadastration = () => {
        firebase.auth().createUserWithEmailAndPassword(email,password).then(() => {
            navigation.navigate('Sucess')
            
        }).catch(() => {

        })
    }
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#312f73' }}>
             <Lottie resizeMode="contain" style={{ height: 200 }} source={vote2} autoPlay loop />
            <Text style={styles.subTitle}>Cadastro de Usuário</Text>
            <TextInput
            style={styles.inputText}
            placeholder="E-mail"
            placeholderTextColor="#8985f2"
            value={email}
            onChangeText={txtEmail => onChangeEmail(txtEmail)}
            >

            </TextInput>
            <TextInput
            style={styles.inputText}
            placeholder="Senha"
            placeholderTextColor="#8985f2"
            value={password}
            onChangeText={txtPassword => onChangePassword(txtPassword)}
            >
                
            </TextInput>
            <Button
                buttonStyle={styles.button}
                title="Cadastrar"
                onPress={Cadastration} 
            >

            </Button>

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

function CadastrationForm() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="TaskForm" component={TaskForm} />
        <Stack.Screen name="Sucess" component={Sucess} />
      </Stack.Navigator>
  );
}
export default CadastrationForm;