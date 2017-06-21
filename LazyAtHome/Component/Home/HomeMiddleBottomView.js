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
    AlertIOS

} from 'react-native';

//外部数据
var Home = require('../../LocalData/XMG_Home_D4.json');

//导入外部组件
var  HomeMiddleCommonView = require('./HomeMiddleCommonView');

var HomeMiddleBottomView = React.createClass({
    getDefaultProps(){
        return{
            // 回调函数
            popTopHome: null
        }
    },

    render() {
        return (
            <View style={styles.container}>
                {/*上部分*/}
                <View style={styles.topViewStyle}>

                </View>
                {/*下部分*/}
                <View style={styles.bottomViewStyle}>
                    {this.renderBottom()}
                </View>
            </View>
        );
    },

    // 继续往父级界面传递数据
    popToTopView(data){
        // 继续执行回调函数
        this.props.popTopHome(data);
    },

    //上部分
    topViewStyle(){

    },

    //下部分
    renderBottom(){
        //组件数组
        var itemArr = [];
        //拿到数据
        var dataArr = Home.data;
        //遍历
        for (var i = 0; i < dataArr.length; i++){
            itemArr.push(
                <HomeMiddleCommonView
                    key={i}
                    title={dataArr[i].maintitle}
                    subTitle={dataArr[i].deputytitle}
                    rightIcon={this.dealWithImgUrl(dataArr[i].imageurl)}
                    titleColor={dataArr[i].typeface_color}
                    tplurl={dataArr[i].tplurl}
                    callBackClickCell={(data)=>this.popToTopView(data)}
                />
            );
        }
        return itemArr;
    },

    //处理图像
    dealWithImgUrl(url){
        if (url.search('w.h') == -1) {
            //没有找到
            return url;
        }else {
            return url.replace('w.h','90.60');
        }
    }


});

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        backgroundColor: 'white'
    },

    topViewStyle: {

    },

    bottomViewStyle: {
        //主轴方向
        flexDirection: 'row',
        //多行显示
        flexWrap: 'wrap',
    },
});

module.exports = HomeMiddleBottomView;