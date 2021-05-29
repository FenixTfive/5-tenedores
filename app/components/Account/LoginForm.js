import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Input, Icon, Button } from "react-native-elements";
import { isEmpty } from "lodash";
import { validateEmail } from "../../utils/validations";
import * as firebase from "firebase";
import { useNavigation } from "@react-navigation/native";
import Loading from "../Loading";
const LoginForm = ({ toastRef }) => {
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = () => {
    console.log(formData);
    if (isEmpty(formData.email) | isEmpty(formData.password)) {
      toastRef.current.show("Todos los campos son obligatorios");
    } else if (!validateEmail(formData.email)) {
      toastRef.current.show("El email no es correcto");
    } else {
      //   console.log("ok");
      setLoading(true);
      firebase
        .auth()
        .signInWithEmailAndPassword(formData.email, formData.password)
        .then((res) => {
          setLoading(false);
          console.log(res);

          navigation.navigate("account");
        })
        .catch((err) => {
          setLoading(false);
          console.log(err);
          toastRef.current.show("Contraseña incorrecta");
        });
    }
  };
  const handleChange = (e, type) => {
    setFormData({ ...formData, [type]: e.nativeEvent.text });
  };
  return (
    <View style={styles.formContainer}>
      <Input
        placeholder="Correo Electrónico"
        containerStyle={styles.inputForm}
        onChange={(e) => handleChange(e, "email")}
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
        containerStyle={styles.inputForm}
        onChange={(e) => handleChange(e, "password")}
        password={true}
        secureTextEntry={showPassword ? false : true}
        rightIcon={
          <Icon
            type="material-community"
            name={showPassword ? "eye-off-outline" : "eye-outline"}
            iconStyle={styles.iconRight}
            onPress={() => setShowPassword(!showPassword)}
          />
        }
      />
      <Button
        title="Iniciar Sesión"
        containerStyle={styles.btnContainerLogin}
        buttonStyle={styles.btnLogin}
        onPress={() => handleSubmit()}
      />
      <Loading isVisible={loading} text="Validando" />
    </View>
  );
};

const styles = StyleSheet.create({
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
  btnContainerLogin: {
    marginTop: 20,
    width: "95%",
  },
  btnLogin: {
    backgroundColor: "#00a680",
  },
  iconRight: {
    color: "#c1c1c1",
  },
});
export default LoginForm;
