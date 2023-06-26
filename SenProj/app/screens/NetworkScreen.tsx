import React from 'react';
import { View, SafeAreaView, Alert } from 'react-native';
import { Card, TextInput, Button, HelperText, } from 'react-native-paper';

import styles from '../components/Network-Register.style';

interface RegisterScreenProps {
  navigation: any;
}

const NetworkScreen = (props: RegisterScreenProps) => 
{
  const regClick = () => props.navigation.navigate("Register")
  const [usernameIn, setUser] = React.useState('');
  const [passwordIn, setPass] = React.useState('');
  const hasError = () => {
    return !usernameIn.includes('@');
  };

  const login = () => {

    fetch('http://10.0.2.2:5000/users', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "Username": usernameIn,
        "Password": passwordIn
      })
    })

    .then((response) => response.json())

    .then ((res) => {

      if (res.success === true) {
        //AsyncStorage.setItem('Username', res.body.Username)
        Alert.alert("LOGIN SUCCESSFUL")
      }

      else if (res.sucess === false) { 
        Alert.alert("WRONG CREDENTIALS")
      }

      else {
        Alert.alert(res.message)
      }
    })
    .catch(err => err);
  }

  return (
      <SafeAreaView style={styles.content}>
        <View style={styles.entry}>
          <Card>
            <Card.Title title="Login to Recipe-Share" titleStyle={{textAlign: "center"}}/>
              <TextInput 
              id='username' label="Email" keyboardType="email-address" mode='outlined' style={styles.fields} 
              onChangeText={(usernameIn) => setUser(usernameIn)} value={usernameIn}/>
              <TextInput 
              id='password' label="Password" secureTextEntry={true} mode='outlined' style={styles.fields}
              onChangeText={(passwordIn) => setPass(passwordIn)} value={passwordIn}
              />
              <HelperText id="errorText" type="error" visible={hasError()} style={styles.errorText}> Not valid! </HelperText>
              <Button uppercase={true} mode="contained" style={styles.button} onPress={login} buttonColor={'rgb(114, 185, 186)'}>Login</Button>
              <Button uppercase={true} style={styles.button} onPress={regClick} textColor={'rgb(114, 185, 186)'}>Register</Button>
          </Card>
        </View>
      </SafeAreaView>
  );
};

export default NetworkScreen;