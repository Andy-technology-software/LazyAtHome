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
    Platform,
    ScrollView
} from 'react-native';

{/*-------屏幕宽高-------*/}
var Dimensions = require('Dimensions');
var {width, heigth} = Dimensions.get('window');

{/*-------引入外部组件-------*/}
//详情页
var HomeDetail = require('./HomeDetail/HomeDetail');

//选地址页
var SelectAddress = require('./SelectAddress/SelectAddress');

//home上部分view
var HomeTopView = require('./HomeTopView');

//home中上部分view
var HomeMiddleView = require('./HomeMiddleView');

var Home = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                {/*首页导航条*/}
                {this.renderNavBar()}

                {/*首页主要内容*/}
                <ScrollView>

                    {/*头部topview*/}
                    <HomeTopView />

                    {/*中间-中上view*/}
                    <HomeMiddleView/>

                </ScrollView>
            </View>
        );
    },

    //首页导航条
    renderNavBar(){
        return(
            <View style={styles.navBarStyle}>

                {/*左边*/}
                <TouchableOpacity onPress={()=>{this.pushToSelectAddress()}}>
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

    //跳转到选地址界面
    pushToSelectAddress(){
        this.props.navigator.push({
            component: SelectAddress,
            title: '选择地址'
        });
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
        flex: 1
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