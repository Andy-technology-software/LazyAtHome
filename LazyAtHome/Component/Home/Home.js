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

{/*-------引入扫码-------*/}
// import { QRScannerView } from 'ac-qrcode';

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

//home中下部分view
var HomeMiddleBottomView = require('./HomeMiddleBottomView');

//购物中心
var ShopCenter = require('./HomeShopCenter');

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

                    {/*中下部分*/}
                    <HomeMiddleBottomView
                        popTopHome={(data)=>{this.pushToDetail(data)}}
                    />

                    {/*购物中心*/}
                    <ShopCenter/>

                </ScrollView>
            </View>
        );
    },

    // 跳转到二级界面
    pushToDetail(data){

        alert(data);
        //要跳转
        // this.props.navigator.push(
        //     {
        //         component: HomeDetail, // 要跳转的版块
        //         title:'详情页'
        //     }
        // );
    },

    //首页导航条
    renderNavBar(){
        return(
            <View style={styles.navBarStyle}>

                {/*左边*/}
                <TouchableOpacity onPress={()=>{this.pushToSelectAddress()}}>
                    <View style={styles.leftNavTitleViewStyle}>
                        <Text style={styles.leftNavTitleStyle}>广州</Text>
                    </View>
                </TouchableOpacity>

                {/*中间*/}
                <TextInput
                    placeholder={'输入商家，品类，商圈'}
                    style={styles.topInputStyle}
                />
                {/*右边*/}
                <View style={styles.navRightViewStyle}>
                    {/*<TouchableOpacity onPress={()=>{AlertIOS.alert('点击通知')}}>*/}
                        {/*<Image source={{uri: 'icon_homepage_message'}} style={styles.navRightImgStyle} />*/}
                    {/*</TouchableOpacity>*/}

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
            title: '选择地址',
            passProps:{
                tabBar: {
                    hide: () => this.props.tabBar.hide(),
                    show: () => this.props.tabBar.show()
                }
            }
        });
    }
});

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f8f8f8',
        flex: 1
    },

    //导航条样式
    navBarStyle:{
        //此处针对安卓适配一下
        height: Platform.OS == 'ios' ? 64 : 44,
        backgroundColor: 'orange',
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
        marginTop: Platform.OS == 'ios' ? 20 : 0,
        //设置圆角
        borderRadius: 16,
        //内左边距
        paddingLeft: 8,
        fontSize: 14
    },

    navRightViewStyle:{
        flexDirection: 'row',
        alignItems: 'center',
        height: 44,
        marginTop: 20
    },

    //设置右边导航图片
    navRightImgStyle:{
        width: Platform.OS == 'ios' ? 28 : 24,
        height: Platform.OS == 'ios' ? 28 : 24,


    },

    leftNavTitleViewStyle: {
        marginTop: 10,
        height: 44,
        justifyContent: 'center',
    },

    leftNavTitleStyle: {
        color: 'white',

    }
});

module.exports = Home;