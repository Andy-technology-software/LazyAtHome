/**
 * Created by lingnet on 2017/6/20.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    AlertIOS
} from 'react-native';

//拿进来json数据
var MiddleData = require('./MiddleData.json');

var MineMiddleView = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                {this.renderAllItems()}
            </View>
        );
    },

    renderAllItems(){
        // 定义组件数组
        var itemArr = [];
        // 遍历
        for(var i=0; i<MiddleData.length; i++){
            // 取出单独的数据
            var data = MiddleData[i];
            // 创建组件装入数组
            itemArr.push(
                <MyInnerView key={i} topImage={data.topImage} bottomTitle={data.bottomTitle}/>
            );
        }
        // 返回
        return itemArr;
    }
});

var  MyInnerView = React.createClass({
    getDefaultProps(){
        return{
            topImage: '',
            bottomTitle: ''
        }
    },

    render() {
        return(
            <TouchableOpacity activeOpacity={0.5} onPress={()=>AlertIOS.alert('0')}>
                <View style={styles.outViewStyle}>
                    <Image source={{uri: this.props.topImage}} style={styles.topImageStyle}/>
                    <Text style={styles.bottomTextStyle}>{this.props.bottomTitle}</Text>
                </View>
            </TouchableOpacity>
        );
    }
});

const styles = StyleSheet.create({
    container: {
        // 设置主轴的方向
        flexDirection:'row',
        alignItems: 'center',
        backgroundColor: 'white',
        // 设置主轴的对齐方式
        justifyContent:'space-around'
    },

    outViewStyle:{
        width: 70,
        height: 70,
        
        alignItems: 'center',
        justifyContent: 'center'
    },  

    topImageStyle: {
        width: 40,
        height: 30,
        marginBottom: 3
    },

    bottomTextStyle:{
        color: 'gray',
        fontSize: 12
    }
});


module.exports = MineMiddleView;