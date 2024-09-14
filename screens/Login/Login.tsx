import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React, {useContext, useState} from 'react';
import styles from './styles';
import {AuthContext} from '../../context/AuthContext';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamsList} from '../../App';

interface LoginScreenProps {
  navigation: NativeStackNavigationProp<RootStackParamsList, 'Login'>;
}

const Login = ({navigation}: LoginScreenProps) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const {login} = useContext(AuthContext);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={styles.loginContainer}>
        <Text style={styles.loginHeader}>LOGIN</Text>
        <View>
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput
            value={email}
            placeholder="email@example.com"
            onChangeText={(text: string) => setEmail(text)}
            style={styles.inputField}
          />
        </View>
        <View>
          <Text style={styles.inputLabel}>Password</Text>
          <TextInput
            value={password}
            placeholder="*****"
            onChangeText={(text: string) => setPassword(text)}
            style={styles.inputField}
            secureTextEntry
          />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => login(email, password)}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <View style={styles.registerContainer}>
          <Text>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.registerText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;
