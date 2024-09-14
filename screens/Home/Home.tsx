import {View, Text, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';
import styles from './styles';
import {AuthContext} from '../../context/AuthContext';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamsList} from '../../App';

interface HomeScreenProps {
  navigation: NativeStackNavigationProp<RootStackParamsList, 'Home'>;
}

const Home = ({navigation}: HomeScreenProps) => {
  const {logout} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Page</Text>
      <TouchableOpacity style={styles.logoutButton} onPress={() => logout()}>
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
