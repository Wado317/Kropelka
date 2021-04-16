import React, { useRef } from 'react'
import { StyleSheet, Text, SafeAreaView, Image, Dimensions, View, Animated } from 'react-native'
import { colors } from '../../const/colors'
import { useNavigation } from '@react-navigation/native';
import { Routes } from '../../const/routes';

const { width: screenWidth } = Dimensions.get('window');
;

const HomeScreen = () => {
  const navigation = useNavigation();

  const goToIntroScreen = () => {
    setTimeout(function(){
      navigation.navigate(Routes.IntroScreen);
    }, 4000);
  }
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      delay: 1000,
      toValue: 1,
      duration: 2000      
    }).start();
  };
  fadeIn();
  goToIntroScreen();

  return (
    <SafeAreaView style={styles.container}>  
      <View style={styles.main}>
        <Animated.Image
        style={[
          styles.image,
          {
            opacity: fadeAnim
          }
        ]}
          source={require('../../components/kropelka/kropelka.png')}
          />
        <Animated.Text 
          style={[
            styles.header,
             {
               opacity: fadeAnim
            }
          ]}
         >
          KROPELKA
        </Animated.Text>
      </View>
      <Image
        style={styles.image2}
        source={require('../../../assets/images/Bottom.png')}
      />
    </SafeAreaView>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  main: {
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 106,
    marginTop: 30,
  },
  header: {
    fontFamily: 'Megrim',
    color: colors.danger,
    fontSize: 72,
    marginTop: 200,
  },
  image2: {
    position: 'absolute',
    width: screenWidth,
    bottom: 0,
  },
});
