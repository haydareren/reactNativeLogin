/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import type {Node} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {TextInput, FAB, Button} from 'react-native-paper';

const theme = {
  colors: {placeholder: '#676767', text: '#676767', primary: '#676767'},
};

const App: () => Node = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <SafeAreaView style={styles.backGround}>
      <View style={styles.welcome}>
        <Text style={styles.textColor}> Hoşgeldiniz </Text>
      </View>

      <View style={styles.inputView}>
        <TextInput
          left={<TextInput.Icon name="account" theme={theme} />}
          style={styles.textInput}
          label="E-Posta"
          value={email}
          onChangeText={email => setEmail(email)}
          type="outlined"
          theme={theme}
          returnKeyType="done"
        />
        <TextInput
          left={<TextInput.Icon name="lock" theme={theme} />}
          style={styles.textInput}
          label="Parola"
          value={password}
          onChangeText={password => setPassword(password)}
          type="outlined"
          theme={theme}
          secureTextEntry={showPassword ? false : true}
          right={
            showPassword ? (
              <TextInput.Icon
                onPress={() => setShowPassword(!showPassword)}
                name="eye"
                theme={theme}
              />
            ) : (
              <TextInput.Icon
                onPress={() => setShowPassword(!showPassword)}
                name="eye-off"
                theme={theme}
              />
            )
          }
        />
      </View>

      <View style={styles.forgotPassword}>
        <Button
          uppercase={false}
          color="#FF4B26"
          onPress={() => console.log('Pressed')}>
          Şifremi Unuttum?
        </Button>
      </View>
      <View style={styles.loginView}>
        <Text style={styles.loginText}>Giriş</Text>
        <FAB
          style={styles.fab}
          icon="arrow-right"
          color="#FFFFFF"
          onPress={() => console.log('Pressed')}
        />
      </View>
      <View
        style={{
          marginTop: '30%',
          marginLeft: '18%',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <FAB
          style={styles.fab1}
          icon="google"
          color="#676767"
          onPress={() => console.log('Pressed')}
        />
        <FAB
          style={styles.fab2}
          icon="apple"
          color="#676767"
          onPress={() => console.log('Pressed')}
        />

        <FAB
          style={styles.fab3}
          icon="facebook"
          color="#676767"
          onPress={() => console.log('Pressed')}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backGround: {
    flex: 1,
    backgroundColor: 'black',
  },
  textColor: {
    fontFamily: 'Cochin',
    fontSize: 45,
    color: 'white',
  },
  welcome: {
    height: 80,
    marginTop: 20,
  },
  textInput: {
    backgroundColor: '#262626',
    marginTop: 50,
    justifyContent: 'center',
  },
  inputView: {
    width: '95%',
    alignSelf: 'center',
  },
  fab: {
    position: 'absolute',
    margin: 20,
    right: 0,
    bottom: 0,
    backgroundColor: 'red',
  },
  forgotPassword: {
    marginLeft: 'auto',
    marginRight: 15,
    marginTop: 10,
  },
  forgotPasswordText: {
    color: '#FF4B26',
    fontFamily: 'Cochin',
    fontSize: 18,
  },
  loginView: {
    flexDirection: 'row',
    marginTop: '20%',
    alignContent: 'center',
  },
  loginText: {
    fontFamily: 'Cochin',
    fontSize: 35,
    color: 'white',
    marginLeft: 20,
    marginBottom: 30,
  },
  fab1: {
    position: 'absolute',
    backgroundColor: '#262626',
  },
  fab2: {
    position: 'absolute',
    marginLeft: 100,
    backgroundColor: '#262626',
  },
  fab3: {
    position: 'absolute',
    marginLeft: 200,
    backgroundColor: '#262626',
  },
});

export default App;
