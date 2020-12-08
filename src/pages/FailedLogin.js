import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native'; 

function FailedLogin(){
    return(
        <View
        style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#312f73",
        }}
        >
        <Text style={styles.subTitle}>Usuário ou senha Inválidos!</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    subTitle: {
      color: '#8985f2',
      fontSize: 21,
      marginBottom: 15
    },
  });

export default FailedLogin;