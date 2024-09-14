import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ToastAndroid,
} from 'react-native';
import React, {useContext, useState} from 'react';
import styles from './styles';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamsList} from '../../App';
import {AuthContext} from '../../context/AuthContext';

interface RegisterScreenProps {
  navigation: NativeStackNavigationProp<RootStackParamsList, 'Register'>;
}

const Register = ({navigation}: RegisterScreenProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {register} = useContext(AuthContext);

  const handleRegister = () => {
    if (register) {
      register(name, email, password, () => {
        navigation.navigate('Login');
      });
      ToastAndroid.show('Anda berhasil Registrasi', ToastAndroid.LONG);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={styles.registerContainer}>
        <Text style={styles.registerHeader}>REGISTER</Text>
        <View>
          <Text style={styles.inputLabel}>Name</Text>
          <TextInput
            value={name}
            placeholder="John Doe"
            onChangeText={text => setName(text)}
            style={styles.inputField}
          />
        </View>
        <View>
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput
            value={email}
            placeholder="email@example.com"
            onChangeText={text => setEmail(text)}
            style={styles.inputField}
          />
        </View>
        <View>
          <Text style={styles.inputLabel}>Password</Text>
          <TextInput
            value={password}
            placeholder="*****"
            onChangeText={text => setPassword(text)}
            style={styles.inputField}
            secureTextEntry
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
        <View style={styles.loginContainer}>
          <Text>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.pop()}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Register;
