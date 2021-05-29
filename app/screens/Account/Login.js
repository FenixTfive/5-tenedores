import React, { useRef } from "react";
import { StyleSheet, ScrollView, View, Text, Image } from "react-native";
import { Divider } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import LoginForm from "../../components/Account/LoginForm";
import Toast from "react-native-easy-toast";
const Login = () => {
  const toastRef = useRef();
  const navigation = useNavigation();
  return (
    <ScrollView>
      <Image
        source={require("../../../assets/img/5Tlogo.png")}
        resizeMode="contain"
        style={styles.logo}
      />
      <View style={styles.viewContainer}>
        <LoginForm toastRef={toastRef} />
        <Text style={styles.textRegister}>
          ¿Aún no tienes cuenta?
          <Text
            style={styles.btnRegister}
            onPress={() => navigation.navigate("register")}
          >
            Registrate
          </Text>
        </Text>
      </View>
      <Divider style={styles.divider} />
      <Text>Social Login</Text>
      <Toast ref={toastRef} position="top" opacity={0.9} />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  logo: {
    width: "100%",
    height: 150,
    marginTop: 20,
  },
  viewContainer: {
    marginRight: 40,
    marginLeft: 40,
  },
  textRegister: {
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
  },
  btnRegister: {
    color: "#00a680",
    fontWeight: "bold",
  },
  divider: {
    backgroundColor: "#00a680",
    margin: 40,
  },
});
export default Login;
