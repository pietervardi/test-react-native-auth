import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  registerContainer: {
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  registerHeader: {
    fontSize: 30,
    color: '#000000',
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  inputLabel: {
    fontSize: 16,
    color: '#000000',
    marginLeft: 20,
  },
  inputField: {
    backgroundColor: '#FFFFFF',
    height: 40,
    marginHorizontal: 20,
    marginVertical: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#3797a8',
    marginVertical: 10,
    paddingVertical: 12,
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 9,
    elevation: 3,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  loginContainer: {
    flexDirection: 'row',
    gap: 5,
    marginLeft: 20,
  },
  loginText: {
    fontWeight: 'bold',
  },
});

export default styles;
