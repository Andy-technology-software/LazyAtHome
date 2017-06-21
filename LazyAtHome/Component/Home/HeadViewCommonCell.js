/**
 * Created by xurenqiang on 2017/6/22.
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

var HeadViewCommonCell = React.createClass({
    getDefaultProps(){
        return{
            leftIcon: '',
            leftTitle: '',
            rightTitle: ''
        }
    },

    render() {
        return (
            <View style={styles.container}>
                {/*左边*/}
                <View style={styles.leftViewStyle}>
                    <Image source={{url: this.props.leftIcon}} style={styles.leftIconStyle}/>
                    <Text style={{marginLeft: 5}}>{this.props.leftTitle}</Text>
                </View>

                {/*右边*/}
                <View style={styles.rightViewStyle}>
                    <Text>{this.props.rightTitle}</Text>
                    <Image source={{url: 'icon_cell_rightArrow'}} style={styles.rightIconStyle}/>
                </View>
            </View>
        );
    }
});

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        width: width,
        height: 50,
        borderBottomColor: '#d8d8d8',
        borderBottomWidth: 0.5
    },

    leftViewStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10
    },

    leftIconStyle: {
        width: 30,
        height: 30,
        alignItems: 'center',
    },

    rightViewStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 5
    },

    rightIconStyle: {
        width: 8,
        height: 13,
        marginLeft: 5
    }

});

module.exports = HeadViewCommonCell;