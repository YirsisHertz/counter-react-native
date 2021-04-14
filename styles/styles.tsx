import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdfdfd',
    justifyContent: 'center',
  },
  title: {
    color: 'black',
    textAlign: 'center',
    top: -15,
    fontSize: 35,
    fontWeight: 'bold',
  },
  btn: {
    borderRadius: 100,
    width: 60,
    height: 60,
    justifyContent: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4.65,

    elevation: 7,
  },
  btnIncrement: {
    backgroundColor: 'blue',
  },
  btnDecrement: {
    backgroundColor: 'red',
  },
  text: {
    color: 'snow',
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  location: {
    position: 'absolute',
    bottom: 25,
  },
  locationBL: {
    left: 25,
  },
  locationBR: {
    right: 25,
  },
  positivo: {
    color: 'seagreen',
  },
  negativo: {
    color: 'crimson',
  },
});

export default styles;
