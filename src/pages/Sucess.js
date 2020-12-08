import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native'; 
import firebase from '../../src/database/firebaseconection';

function Sucess(){
    return(
        <View
        style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#312f73",
        }}
        >
        <Text style={styles.subTitle}>Usuário cadastrado com Sucesso!</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    subTitle: {
      color: '#8985f2',
      fontSize: 21,
      marginBottom: 15
    },
    button: {
        backgroundColor: "#43D9AE",
        borderRadius: 15,
        height: 60,
        width: 210,
        alignItems: "center",
        justifyContent: "center",
        margin: 5,
      },
  });

export default Sucess;