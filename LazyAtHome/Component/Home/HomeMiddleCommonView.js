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
    AlertIOS,
    TouchableOpacity
} from 'react-native';

{/*-------屏幕宽高-------*/}
var Dimensions = require('Dimensions');
var {width, heigth} = Dimensions.get('window');

var HomeMiddleCommonView = React.createClass({
    getDefaultProps(){
        return{
            title: '',
            subTitle: '',
            rightIcon: '',
            titleColor: '',
            tplurl: '',
            // 回调函数
            callBackClickCell: null
        }
    },

    render() {
        return (
            <View style={styles.container}>
                {this.renderRightView()}
            </View>
        );
    },

    renderRightView(){
        return(
            <TouchableOpacity onPress={()=>this.clickCell(this.props.tplurl)}>
                <View style={styles.outViewStyle}>
                    <View>
                        <Text style={{color: this.props.titleColor, fontSize: 18, padding: 10}}>{this.props.title}</Text>
                        <Text style={{padding: 10}}>{this.props.subTitle}</Text>
                    </View>
                    <Image source={{uri: this.props.rightIcon}} style={styles.rightImageStyle}/>
                </View>
            </TouchableOpacity>
        );
    },

    // 点击了cell
    clickCell(data){
        // 判断处理
        if (this.props.callBackClickCell == null) return;
        // 执行回调函数
        this.props.callBackClickCell(data);
    }
});

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    outViewStyle: {
        flexDirection: 'row',
        width: width / 2 ,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 80,
        borderLeftColor: '#d8d8d8',
        borderLeftWidth: 0.5,
        borderBottomColor: '#d8d8d8',
        borderBottomWidth: 0.5,
    },

    rightImageStyle: {
        width: 70,
        height: 60,
        marginRight: 5
    },

});

module.exports = HomeMiddleCommonView;