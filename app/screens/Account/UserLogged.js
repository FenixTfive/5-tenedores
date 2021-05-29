import React from "react";
import { View, Text, Button } from "react-native";
import * as firebase from "firebase";
const UserLogged = () => {
  return (
    <View>
      <Text>UserLogged...</Text>
      <Button
        title="Cerrar Sessión"
        onPress={() => firebase.auth().signOut()}
      />
    </View>
  );
};

export default UserLogged;
