import React, {useEffect} from 'react';
import {Text, View} from 'react-native';

import SplashScreen from 'react-native-splash-screen';

import FAB from '../components/FAB';
import {useCounter} from '../hooks/useCounter';

import style from '../styles/styles';

const CounterScreen = () => {
  const {counter, handleClick} = useCounter();

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <View style={style.container}>
      <Text style={style.title}>
        Counter App:
        <Text
          style={
            counter < 0 ? style.negativo : style.positivo
          }>{` ${counter} `}</Text>
      </Text>

      <FAB type="add" value={1} handleClick={handleClick} />
      <FAB type="dis" value={-1} handleClick={handleClick} />
    </View>
  );
};

export default CounterScreen;
