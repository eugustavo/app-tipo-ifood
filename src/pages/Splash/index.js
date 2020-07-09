import React from 'react';
import { StatusBar } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import * as S from './styles';

import backgroundImage from '~/assets/images/splash-background.png';

export default function Splash() {
  const navigation = useNavigation();

  return (
    <>
      <StatusBar hidden />
      <S.Container source={backgroundImage}>
        <S.TitleButton onPress={() => navigation.navigate('sign-in')}>
          <S.Title>Foodybite</S.Title>
        </S.TitleButton>
      </S.Container>
    </>
  );
}
