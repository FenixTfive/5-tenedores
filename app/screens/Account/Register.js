import React, { useRef } from "react";
import { StyleSheet, View, Image } from "react-native";
//deve englobar la vista de un formuario para que el teclaro no tape los inputs
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import RegisterForm from "../../components/Account/RegisterForm";
//este import del toast debe estar en el top de screen donde se desean mostrar las notificaciones
import Toast from "react-native-easy-toast";

const Register = () => {
  const toastRef = useRef();
  return (
    <KeyboardAwareScrollView>
      <Image
        source={require("../../../assets/img/5Tlogo.png")}
        resizeMode="contain"
        style={styles.logo}
      />
      <View style={styles.viewForm}>
        <RegisterForm toastRef={toastRef} />
      </View>
      <Toast ref={toastRef} position="top" opacity={0.9} />
    </KeyboardAwareScrollView>
  );
};
const styles = StyleSheet.create({
  logo: {
    width: "100%",
    height: 150,
    marginTop: 20,
  },
  viewForm: {
    marginRight: 40,
    marginLeft: 40,
  },
});
export default Register;
