import React from 'react';
import { SafeAreaView, ScrollView, Alert} from 'react-native';
import {TextInput, Button} from 'react-native-paper';

import styles from '../components/Network-Register.style';

const RegisterScreen = () => {
    const showPW = () => {Alert.alert("ICON PRESSED")}
    
    return(
        <SafeAreaView>
            <ScrollView>
                <TextInput label="Name" style={styles.fields}/>
                <TextInput label="Email" keyboardType='email-address' style={styles.fields}/>
                <TextInput label="Username" style={styles.fields}/>
                <TextInput label="Password" secureTextEntry={true} style={styles.fields} right={<TextInput.Icon icon="eye-off-outline"/>}/>
                <TextInput label="Confirm Password" secureTextEntry={true} style={styles.fields} right={<TextInput.Icon icon="eye-off-outline" 
                    onPress={showPW}/>}/>
                <Button mode="contained" style={styles.button} buttonColor={'rgb(114, 185, 186)'}>Register</Button>
            </ScrollView>
        </SafeAreaView>
    );
};

export default RegisterScreen;