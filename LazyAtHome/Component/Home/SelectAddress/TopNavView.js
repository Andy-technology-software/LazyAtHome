/**
 * Created by lingnet on 2017/6/22.
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

var TopNvaView = React.createClass({
    getDefaultProps(){
        return{
            title: ''
        }
    },

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.contenViewStyle}>
                    <TouchableOpacity activeOpacity={0.5} onPress={()=>this.popView()}>
                        <View style={styles.backViewStyle}>
                            <Image source={{uri: 'navigationbar_arrow_up'}} style={styles.backImageStyle}/>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.titleViewStyle}>
                        <Text style={styles.titleStyle}>{this.props.title}</Text>
                    </View>
                </View>
            </View>
        );
    },

    //返回上一层
    popView(){
        this.props.navigator.pop()
    }
});

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'orange',
        height: 64
    },

    contenViewStyle: {
        marginTop: 20,
        flexDirection: 'row',
    },

    backViewStyle: {
        width: 40,
        height: 44,
        flexDirection: 'row',
        alignItems: 'center'
    },


    backImageStyle: {
        width: 14,
        height: 26,
        marginLeft: 10,
    },

    titleViewStyle: {
        alignItems: 'center',
        flexDirection: 'row',
        width: width -80,
        justifyContent: 'center'
    },

    titleStyle: {
        color: 'white',
        fontSize: 18,
    },


});

module.exports = TopNvaView;