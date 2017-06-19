/**
 * Created by lingnet on 2017/6/19.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

//屏幕宽高
var Dimensions = require('Dimensions');
var {width, heigth} = Dimensions.get('window');

//导入外部组件 main
var Main = require('./Main');

var LaunchImage = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                <Image source={{uri: 'launchimage'}} style={styles.launchImageStyle}/>
            </View>
        );
    },

    //处理一些复杂的操作
    componentDidMount(){
        //定时：隔两秒切换到main
        setTimeout(()=>{
            //页面切换
            this.props.navigator.replace({
                component: Main,
            });
        },2000)
    }
});

const styles = StyleSheet.create({
    launchImageStyle:{
        flex: 1
    }
});

module.exports = LaunchImage;