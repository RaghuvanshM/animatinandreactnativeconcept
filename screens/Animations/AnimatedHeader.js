import React from 'react';
import { Component } from 'react';
import {
    ScrollView,
    Text,
    View,
    Image,
    Animated
} from 'react-native';
const HEADER_MAX_HEIGHT = 160;
const HEADER_MIN_HIGHT = 70;
const PROFILE_IMAGE_MAX_HIEGHT = 80;
const PROFILE_IMAGE_MIN_HIEGHT = 40;

class AnimatedHeader extends Component {
    constructor(props){
        super(props)
        this.state={
            scrollY:new Animated.Value(0)
        }
    }
    render() {
        const headerHeight = this.state.scrollY.interpolate({
            inputRange:[0,HEADER_MAX_HEIGHT-HEADER_MIN_HIGHT],
            outputRange:[HEADER_MAX_HEIGHT,HEADER_MIN_HIGHT],
            extrapolate:'clamp'
        })
        const profileimageHeight = this.state.scrollY.interpolate({
            inputRange:[0,HEADER_MAX_HEIGHT-HEADER_MIN_HIGHT],
            outputRange:[PROFILE_IMAGE_MAX_HIEGHT,PROFILE_IMAGE_MIN_HIEGHT],
            extrapolate:'clamp'
        })
        const margintopHeight = this.state.scrollY.interpolate({
            inputRange:[0,HEADER_MAX_HEIGHT-HEADER_MIN_HIGHT],
            outputRange:[HEADER_MAX_HEIGHT - (PROFILE_IMAGE_MAX_HIEGHT / 2),HEADER_MAX_HEIGHT+5],
            extrapolate:'clamp'
        })
        const profilezindex = this.state.scrollY.interpolate({
            inputRange:[0,HEADER_MAX_HEIGHT-HEADER_MIN_HIGHT],
            outputRange:[0,1],
            extrapolate:'clamp'
        })
        return (
            <View style={{ flex: 1 }}>
                <Animated.View style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    backgroundColor: 'lightskyblue',
                    height: headerHeight,
                    zIndex:profilezindex
                }}>

                </Animated.View>
                <ScrollView
                    onScroll={Animated.event(
                        // scrollX = e.nativeEvent.contentOffset.x
                        [{
                            nativeEvent: {
                                contentOffset: {
                                    y: this.state.scrollY
                                }
                            }
                        }]
                    )}
                    scrollEventThrottle={16}
                >
                    <View>
                        <Animated.View
                            style={{
                                height: profileimageHeight,
                                width: profileimageHeight,
                                borderRadius: PROFILE_IMAGE_MAX_HIEGHT / 2,
                                borderWidth: 3,
                                overflow: 'hidden',
                                marginTop:margintopHeight ,
                                marginLeft: 20

                            }}
                        >
                            <Image
                                resizeMode='contain'
                                style={{
                                    flex: 1,
                                    height: null,
                                    width: null

                                }}
                                source={require('../../assets/images/cardimg1.png')}
                            />
                        </Animated.View>

                        <View>
                            <Text style={{ fontSize: 20, fontFamily: 'bold', margin: '20%' }}>My name is Raghuvansh Mani Mishra
                                 </Text>
                        </View>
                        <View>
                            <Text style={{ fontSize: 20, fontFamily: 'bold', margin: '20%' }}>My name is Raghuvansh Mani Mishra
                                 </Text>
                        </View>
                        <View>
                            <Text style={{ fontSize: 20, fontFamily: 'bold', margin: '20%' }}>My name is Raghuvansh Mani Mishra
                                 </Text>
                        </View>
                        <View>
                            <Text style={{ fontSize: 20, fontFamily: 'bold', margin: '20%' }}>My name is Raghuvansh Mani Mishra
                                 </Text>
                        </View>
                    </View>
                </ScrollView>

            </View>
        )
    }
}
export default AnimatedHeader;