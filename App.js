import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert} from 'react-native';
import styles from './android/components/style.js';
import { useState } from 'react';
import email from 'react-native-email';
const validator = require('validator');

export default function App() {
  
  const [name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const submit = () => {
    if (name == "" || email == ""  || phone == "" || message == "") {
      Alert.alert("Please fill all the fields !!");
    } else {
      if(validator.isEmail(`${Email}`) == false){
        Alert.alert("Please enter a valid email !!");
      }
      else{
        Alert.alert(`Thank You ${name}`);
        const to = ['info@redpositive.in']
        email(to, {
          subject: `Contacting Redpositive`,
          body: `${message} \n\n Regards,\n${name}\n${phone}`
      }).catch(console.error);
      }
    }
  };


  return (
    <View style={styles.container}>
      <Text style={styles.header}>Contact Us 👋</Text>
      <StatusBar style="auto" />

      <View style={styles.boxContainers}>

        <View style={styles.inputContainer}>
          <Text style={styles.labels}> Enter your name </Text>
          <TextInput
            style={styles.inputStyle}
            placeholder={"Samarth Joseph"}
            value={name}
            onChangeText={(userdata) => setName(userdata)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.labels}> Enter your Email </Text>
          <TextInput
            style={styles.inputStyle}
            placeholder={"demo@joseph.com"}
            value={Email}
            onChangeText={(Email) => setEmail(Email)}
            />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.labels}> Enter your mobile </Text>
          <TextInput
            style={styles.inputStyle}
            placeholder={"123456789"}
            keyboardType='numeric'
            value={phone}
            onChangeText={(phone) => setPhone(phone)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.labels}> How can we help you? </Text>
          <TextInput
            style={[styles.inputStyle, styles.multilineStyle]}
            placeholder={"Please describe your query here..."}
            value={message}
            onChangeText={(msg) => setMessage(msg)}
            numberOfLines={5}
            multiline={true}
          />
        </View>

        <TouchableOpacity
          style={[
            styles.buttonStyle,
            {
              backgroundColor: "#4630EB",
            },
          ]}
          onPress={submit}
        >
        <Text style={styles.buttonText}> Send </Text>
      </TouchableOpacity>

      </View>

    </View>
  );
};
