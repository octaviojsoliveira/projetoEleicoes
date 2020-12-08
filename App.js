import * as React from "react";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Cadastro from "./src/pages/Cadastration";
import Login from "./src/pages/Login";
import { Button } from "react-native-elements";
import { FontAwesome5 as Icon } from "@expo/vector-icons";
import Lottie from  "lottie-react-native";
import vote2 from './vote2.json';

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#312f73",
      }}
    >
      <Lottie resizeMode="contain" style={{ height: 200 }} source={vote2} autoPlay loop />
      <Text style={styles.subTitle}>Nos diga qual é o seu candidato favorito!</Text>
      <Button
        buttonStyle={styles.button}
        title="Entrar"
        onPress={() => navigation.navigate("Entrar")}
      />
      <Button
        buttonStyle={styles.button}
        title="Cadastrar usuário"
        onPress={() => navigation.navigate("Cadastro")}
      />
    </SafeAreaView>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} init>
        <Stack.Screen name="Eleições 2020" component={HomeScreen} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Entrar" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
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
    marginBottom: 15,
  },
});

export default App;
