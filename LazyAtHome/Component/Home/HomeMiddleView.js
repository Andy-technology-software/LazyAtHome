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

//引入外部数据
var TopMiddleData = require('../../LocalData/HomeTopMiddleLeft.json');

//home中部分共同样式view
var  HomeMiddleCommonView = require('./HomeMiddleCommonView');

var HomeMiddleView = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                {/*左边*/}
                {this.renderLeftView()}

                {/*右边*/}
                <View style={styles.rightViewStyle}>
                    {this.renderRightView()}
                </View>

            </View>
        );
    },

    //左边
    renderLeftView(){
        return(
            <View style={styles.leftOutViewStyle}>
                <Image style={{width: width * 0.4, height: width * 0.3}}
                       source={{uri: 'https://p1.meituan.net/wedding/4570371c129ce5cc93bd9521ff193b9a346314.jpg'}} />
            </View>
        );
    },

    //右边
    renderRightView(){
        //组件数组
        var  itemArr = [];
        //取出具体数据
        var rightData = TopMiddleData.dataRight;
        //遍历
        for (var i = 0; i < rightData.length; i++){
            itemArr.push(
                <HomeMiddleCommonView
                    key={i}
                    title={rightData[i].title}
                    subTitle={rightData[i].subTitle}
                    rightIcon={rightData[i].rightImage}
                    titleColor={rightData[i].titleColor}
                />
            );
        }
        return itemArr;
    },

});

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5FCFF',
        flexDirection: 'row',
        marginTop: 10
    },

    leftOutViewStyle: {
        backgroundColor: 'white',
        width: width / 2,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: '#d8d8d8',
        borderBottomWidth: 1
    },

    rightOutViewStyle: {
        backgroundColor: 'white',
        marginLeft: 0.5
    },

    rightViewStyle: {
    },

});

module.exports = HomeMiddleView;