/**
 * Created by xurenqiang on 2017/6/18.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    AlertIOS,
    Image,
    TextInput,
    Platform
} from 'react-native';

//屏幕宽高
var Dimensions = require('Dimensions');
var {width, heigth} = Dimensions.get('window');

//引入详情页
var HomeDetail = require('./HomeDetail/HomeDetail');

var Home = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                {/*首页导航条*/}
                {this.renderBavBar()}

                <TouchableOpacity onPress={()=>{this.pushToDetail()}}>
                    <Text>首页</Text>
                </TouchableOpacity>
            </View>
        );
    },

    //首页导航条
    renderBavBar(){
        return(
            <View style={styles.navBarStyle}>

                {/*左边*/}
                <TouchableOpacity onPress={()=>{AlertIOS.alert('点击地点')}}>
                    <Text style={{color: 'white'}}>广州</Text>
                </TouchableOpacity>

                {/*中间*/}
                <TextInput
                    placeholder={'输入商家，品类，商圈'}
                    style={styles.topInputStyle}
                />
                {/*右边*/}
                <View style={styles.navRightViewStyle}>
                    <TouchableOpacity onPress={()=>{AlertIOS.alert('点击通知')}}>
                        <Image source={{uri: 'icon_homepage_message'}} style={styles.navRightImgStyle} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>{AlertIOS.alert('点击扫码')}}>
                        <Image source={{uri: 'icon_homepage_scan'}} style={styles.navRightImgStyle} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    },

    //跳转二级界面
    pushToDetail(){
        this.props.navigator.push({
            component: HomeDetail,
            title: '详情'
        });
    }
});

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e8e8e8',
        justifyContent: 'center',
    },

    //导航条样式
    navBarStyle:{
        //此处针对安卓适配一下
        height: Platform.OS == 'ios' ? 64 : 44,
        backgroundColor: 'rgb(255,96,0)',
        //设置主轴方向
        flexDirection: 'row',

        //侧轴对齐方式
        alignItems: 'center',

        //设置主轴对齐方式
        justifyContent: 'space-around'
    },

    //设置输入框
    topInputStyle:{
        width: width * 0.7,
        height: Platform.OS == 'ios' ? 35 : 30,
        backgroundColor: 'white',
        //针对安卓适配一下
        marginTop: Platform.OS == 'ios' ? 18 : 0,
        //设置圆角
        borderRadius: 16,
        //内左边距
        paddingLeft: 8
    },

    navRightViewStyle:{
        flexDirection: 'row',
        height: 64,
        alignItems: 'center'
    },

    //设置右边导航图片
    navRightImgStyle:{
        width: Platform.OS == 'ios' ? 28 : 24,
        height: Platform.OS == 'ios' ? 28 : 24
    }
});

module.exports = Home;