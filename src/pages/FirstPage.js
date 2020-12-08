import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { RadioButton } from "react-native-paper";
import { Button } from "react-native-elements";
import { createStackNavigator } from '@react-navigation/stack';
import Result from './Result';
import firebase from '../database/firebaseconection';

function FirstPage({ navigation }) {

  const [checked, setChecked] = React.useState("first")

  const vote = (() => {
      let usermail = firebase.auth().currentUser.email;
      firebase.firestore().collection('votos').add( { candidato: checked, email: usermail } )
  })

  return (
    
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#312f73",
        }}
      >
        <View>
          <Text style={styles.subTitle}>Escolha seu candidato abaixo</Text>
        </View>

        <View style={styles.container}>
          <RadioButton
            value="joseAntonio"
            status={checked === "joseAntonio" ? "checked" : "unchecked"}
            onPress={() => setChecked("joseAntonio")}
          />
          <Image
            style={styles.image}
            source={require("../../src/assets/candidato1.png")}
          />
          <Text style={styles.txtCandidato}>José Antônio</Text>
          <Text style={styles.txtCandidato2}>Unidos Pelo Brasil (UPB)</Text>
        </View>

        <View style={styles.container}>
          <RadioButton
            value="giovanaBatista"
            status={checked === "giovanaBatista" ? "checked" : "unchecked"}
            onPress={() => setChecked("giovanaBatista")}
          />
          <Image
            style={styles.image}
            source={require("../../src/assets/candidato2.jpg")}
          />
          <Text style={styles.txtCandidato}>Giovana Batista</Text>
          <Text style={styles.txtCandidato2}>
            Partido da Esperança Política (PdEP)
          </Text>
        </View>

        <View style={styles.container}>
          <RadioButton
            value="reginaldoGoncalves"
            status={checked === "reginaldoGoncalves" ? "checked" : "unchecked"}
            onPress={() => setChecked("reginaldoGoncalves")}
          />
          <Image
            style={styles.image}
            source={require("../../src/assets/candidato3.jpg")}
          />
          <Text style={styles.txtCandidato}>Reginaldo Gonçalves</Text>
          <Text style={styles.txtCandidato2}>Liderança Nacional (LN)</Text>
        </View>

        <View style={styles.container}>
          <RadioButton
            value="ludmilaArantes"
            status={checked === "ludmilaArantes" ? "checked" : "unchecked"}
            onPress={() => setChecked("ludmilaArantes")}
          />
          <Image
            style={styles.image}
            source={require("../../src/assets/candidato4.jpg")}
          />
          <Text style={styles.txtCandidato}>Ludmila Arantes</Text>
          <Text style={styles.txtCandidato2}>
            Partido Novo Democrático (PND)
          </Text>
        </View>

        <Button 
        buttonStyle={styles.button} 
        title="Confirmar" 
        onPress={() => {
            vote(); 
            navigation.navigate("Result");
          } 
        }
          />
      </View>
  );
}
const styles = StyleSheet.create({
  image: {
    borderRadius: 50,
    height: 100,
    width: 100,
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
  subTitle: {
    color: "#8985f2",
    fontSize: 21,
    marginBottom: 10,
    marginTop: 15,
  },
  container: {
    backgroundColor: "#fff",
    borderRadius: 15,
    height: 200,
    width: 200,
    alignItems: "center",
    justifyContent: "center",
    margin: 3
  },
  txtCandidato: {
    color: "#8985f2",
    fontSize: 18,
  },
  txtCandidato2: {
    color: "#8985f2",
    fontSize: 12,
  },
});
const Stack = createStackNavigator();

function FirstForm() {
  return (
      <Stack.Navigator screenOptions={{ headerShown: false }} init>
        <Stack.Screen name="FirstPage" component={FirstPage} headerShown={false}/>
        <Stack.Screen name="Result" component={Result} />
      </Stack.Navigator>
  );
}
export default FirstForm;
