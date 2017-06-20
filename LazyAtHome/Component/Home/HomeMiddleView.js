/**
 * Created by xurenqiang on 2017/6/21.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

{/*-------屏幕宽高-------*/}
var Dimensions = require('Dimensions');
var {width, heigth} = Dimensions.get('window');

var HomeMiddleView = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                {/*左边*/}
                {this.renderLeftView()}

                {/*右边*/}
                {this.renderRightView()}
            </View>
        );
    },

    //左边
    renderLeftView(){
        return(
            <View style={styles.leftOutViewStyle}>
                <Image style={{width: width * 0.5, height: width * 0.4}}
                       source={{uri: 'https://p1.meituan.net/wedding/4570371c129ce5cc93bd9521ff193b9a346314.jpg'}} />
            </View>
        );
    },

    //右边
    renderRightView(){
        return(
            <View style={styles.rightOutViewStyle}>
                <Image style={{width: width * 0.5, height: width * 0.2}}
                       source={{uri: 'https://p1.meituan.net/activityback/6302ab2e9d3b041e0b3e57984492ce65323088.jpg'}} />
                <Image style={{width: width * 0.5, height: width * 0.2, marginTop: 0.5}}
                       source={{uri: 'https://qcloud.dpfile.com/pc/VHMaElO_AdN8lsDZcGmJSHiOU8u7bCE3hcelYGLg4VU0yV8ZGtgE6o8T5V5GQf42DHHF6TtwrLv9HRb4p3FZSQ.jpg'}} />
            </View>
        );
    },

});

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        backgroundColor: '#F5FCFF',
        flexDirection: 'row'
    },

    leftOutViewStyle: {
        backgroundColor: 'white'
    },

    rightOutViewStyle: {
        backgroundColor: 'white',
        marginLeft: 0.5
    },

});

module.exports = HomeMiddleView;