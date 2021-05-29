import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Input, Icon, Button } from "react-native-elements";
import Loading from "../Loading";
import { validateEmail } from "../../utils/validations";
import { size, isEmpty } from "lodash";
import * as firebase from "firebase";
import { useNavigation } from "@react-navigation/native";

const RegisterForm = ({ toastRef }) => {
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    repeatPassword: "",
  });
  const handleSubmit = () => {
    // console.log(formData);
    // console.log(validateEmail(formData.email));
    //FIREBASE REQUIRE QUE LA CONTRASEÑA DEBA TENER MINIMO 6 CARACTERES
    if (
      isEmpty(formData.email) ||
      isEmpty(formData.password) ||
      isEmpty(formData.repeatPassword)
    ) {
      // console.log("Todos los campos son obligatorios");
      toastRef.current.show("Todos los campos son obligatorios");
    } else if (!validateEmail(formData.email)) {
      // console.log("email incorrecto");
      toastRef.current.show("email incorrecto");
    } else if (formData.password !== formData.repeatPassword) {
      // console.log("las contraseñas deben coincidir");
      toastRef.current.show("las contraseñas deben coincidir");
    } else if (size(formData.password) < 6) {
      // console.log("la contraseña debe tener 6 caracteres");
      toastRef.current.show("la contraseña debe tener 6 caracteres");
    } else {
      // console.log("ok");
      setLoading(true);
      firebase
        .auth()
        .createUserWithEmailAndPassword(formData.email, formData.password)
        .then((res) => {
          setLoading(false);
          console.log(res);
          navigation.navigate("account");
        })
        .catch((err) => {
          setLoading(false);
          toastRef.current.show("Email o password incorrecto");
        });
    }
  };
  const handleChange = (e, type) => {
    setFormData({ ...formData, [type]: e.nativeEvent.text });
  };
  return (
    <View style={styles.formContainer}>
      <Input
        placeholder="Correo electrónico"
        onChange={(e) => handleChange(e, "email")}
        containerStyle={styles.inputForm}
        rightIcon={
          <Icon
            type="material-community"
            name="at"
            iconStyle={styles.iconRight}
          />
        }
      />
      <Input
        placeholder="Contraseña"
        onChange={(e) => handleChange(e, "password")}
        containerStyle={styles.inputForm}
        password={true}
        secureTextEntry={showPassword ? false : true}
        rightIcon={
          <Icon
            type="material-community"
            name={showPassword ? "eye-off-outline" : "eye-outline"}
            onPress={() => setShowPassword(!showPassword)}
            iconStyle={styles.iconRight}
          />
        }
      />
      <Input
        placeholder="Repetir contraseña"
        onChange={(e) => handleChange(e, "repeatPassword")}
        containerStyle={styles.inputForm}
        password={true}
        secureTextEntry={showRepeatPassword ? false : true}
        rightIcon={
          <Icon
            type="material-community"
            name={showRepeatPassword ? "eye-off-outline" : "eye-outline"}
            onPress={() => setShowRepeatPassword(!showRepeatPassword)}
            iconStyle={styles.iconRight}
          />
        }
      />
      <Button
        title="Unirse"
        containerStyle={styles.btnContainerRegister}
        buttonStyle={styles.btnRegister}
        onPress={() => handleSubmit()}
      />
      <Loading isVisible={loading} text="Creando cuenta" />
    </View>
  );
};
const styles = StyleSheet.create({
  //los estilos del form container funciona bien en conjunto con el view de scrollview que engloba el componente register
  formContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  inputForm: {
    width: "100%",
    marginTop: 20,
  },
  btnContainerRegister: {
    marginTop: 20,
    width: "95%",
  },
  btnRegister: {
    backgroundColor: "#00a680",
  },
  iconRight: {
    color: "#c1c1c1",
  },
});
export default RegisterForm;
