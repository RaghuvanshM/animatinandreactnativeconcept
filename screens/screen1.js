import React, { useRef, Fragment } from 'react';
import {
  Animated,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
  ImageBackground
} from 'react-native';

const HEADER_MAX_HEIGHT = Dimensions.get('window').height / 2.5;
const HEADER_MIN_HEIGHT = Dimensions.get('window').height / 4.5;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;
const WellnessScreen = () => {
  const scrollAnim = useRef(new Animated.Value(0));
  const headerTranslateY = () =>
    scrollAnim.current.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, -HEADER_SCROLL_DISTANCE],
      extrapolate: 'clamp',
    });

  const imageTranslateY = () =>
    scrollAnim.current.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, 100],
      extrapolate: 'clamp',
    });
  return (
    <Animated.ScrollView
      contentContainerStyle={{ paddingTop: HEADER_MAX_HEIGHT }}
      scrollEventThrottle={16}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { y: scrollAnim.current } } }],
        { useNativeDriver: true },
      )}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: 'rgb(102,157,204)',
          paddingVertical: 10,
          paddingHorizontal: 10,
          justifyContent: 'space-between',
        }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image
            style={{ width: 20, height: 20, marginRight: 10 }}
            source={require('../assets/images/sunset.png')}
          />
          <View style={{ flexDirection: 'row' }}>
            <Text
              style={{
                color: '#fff',
                fontFamily: 'IBMPlexSans-Light',
                fontSize: 14,
              }}>
              Sunset at{' '}
            </Text>
            <Text
              style={{
                color: '#fff',
                fontFamily: 'IBMPlexSans-Bold',
                fontSize: 14,
              }}>
              7:21pm
              </Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text
            style={{
              color: '#fff',
              fontFamily: 'IBMPlexSans-Regular',
              fontSize: 14,
            }}>
            Outside Air Quality{' '}
          </Text>
          <View
            style={{
              width: 15,
              height: 15,
              marginLeft: 5,
              backgroundColor: 'rgb(126,211,33)',
              borderWidth: 1,
              borderColor: '#fff',
              borderRadius: 100,
            }}
          />
        </View>
      </View>
      <ImageBackground 
       source={require('../assets/images/cardimg1.png')}
       style={{width:'100%',marginTop:80,height:177}}
      >
        </ImageBackground>
        <ImageBackground 
       source={require('../assets/images/cardimg1.png')}
       style={{width:'100%',marginTop:80,height:177}}
      >
        </ImageBackground>
        <ImageBackground 
       source={require('../assets/images/cardimg1.png')}
       style={{width:'100%',marginTop:80,height:177}}
      >
        </ImageBackground>
        <ImageBackground 
       source={require('../assets/images/cardimg1.png')}
       style={{width:'100%',marginTop:80,height:177}}
      >
        </ImageBackground>
        <ImageBackground 
       source={require('../assets/images/cardimg1.png')}
       style={{width:'100%',marginTop:80,height:177}}
      >
        </ImageBackground>
        <Animated.View
        style={[
          styles.header,
          {transform: [{translateY: headerTranslateY()}]},
        ]}>
        <Animated.Image
          style={[
            styles.headerBackground,
            {
              transform: [{translateY: imageTranslateY()}],
            },
          ]}
          source={require('../assets/images/wellness_header.png')}
        />

        <View style={{position: 'absolute', bottom: 0, width: '100%'}}>
          <Image
            source={require('../assets/images/sunset.png')}
            style={{
              width: 140,
              height: 100,
              alignSelf: 'center',
              resizeMode: 'contain',
            }}
          />
          <View style={styles.headerRow}>
            <View
              style={{
                alignSelf: 'center',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={require('../assets/images/sunset.png')}
                style={{
                  marginRight: 10,
                  width: 30,
                  height: 30,
                  resizeMode: 'contain',
                }}
              />
              <Text style={styles.title}>72º Partly Cloudy</Text>
            </View>
          </View>
        </View>
      </Animated.View>
    </Animated.ScrollView>
  )

}

export default WellnessScreen

const styles = StyleSheet.create({
  saveArea: {
    flex: 1,
    backgroundColor: '#eff3fb',
  },
  headerRow: {
    paddingVertical: 5,
    backgroundColor: 'rgba(0,0,0,0.4)',
    width: '100%',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#402583',
    backgroundColor: '#ffffff',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 1,
    borderRadius: 10,
    marginHorizontal: 12,
    marginTop: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    // backgroundColor: '#62d1bc',
    overflow: 'hidden',
    height: HEADER_MAX_HEIGHT,
  },
  headerBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: HEADER_MAX_HEIGHT,
    width: '100%',
    resizeMode: 'cover',
  },
  topBar: {
    marginTop: 40,
    height: Dimensions.get('window').height / 5,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  title: {
    color: 'white',
    fontFamily: 'IBMPlexSans-Regular',
    fontSize: 14,
  },
  avatar: {
    height: 54,
    width: 54,
    resizeMode: 'contain',
    borderRadius: 54 / 2,
  },
  fullNameText: {
    fontSize: 16,
    marginLeft: 24,
  },
});