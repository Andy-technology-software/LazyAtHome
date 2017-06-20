/**
 * Created by xurenqiang on 2017/6/20.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    ListView
} from 'react-native';

{/*-------屏幕宽高-------*/}
var Dimensions = require('Dimensions');
var {width, heigth} = Dimensions.get('window');

{/*-------引入外部组件-------*/}
var HomeTopViewListView = require('./HomeTopViewListView');

{/*-------引入外部json数据-------*/}
var TopMenu = require('../../LocalData/TopMenu.json');

HomeTopView = React.createClass({
    getInitialState(){
        return {
            activePage: 0
        }
    },

    render() {
        return (
            <View style={styles.container}>
                {/*内容部分*/}
                <ScrollView
                    //横向
                    horizontal={true}
                    //分页
                    pagingEnabled={true}
                    //去除条
                    showsHorizontalScrollIndicator={false}
                    //当一帧滚动结束的时候
                    onMomentumScrollEnd={this.onScrollAnimationEnd}
                >
                    {this.renderScrollItem()}
                </ScrollView>

                {/*页码部分*/}
                <View style={styles.indicatorViewStyle}>
                    {this.renderIndicator()}
                </View>
            </View>

        );
    },

    //当一帧滚动结束时调用
    onScrollAnimationEnd(e){
        //求出当前页码
        var currentPage = Math.floor(e.nativeEvent.contentOffset.x / width);
        this.setState({
            activePage: currentPage
        });
    },

    //分页圆点 页码指示器
    renderIndicator(){
        //指示器数组
        var indicatorArr = [], textStyle;
        //遍历创建组件
        for (var i = 0; i < 2; i++) {
            //设置圆点样式
            textStyle = (i == this.state.activePage) ? {color: 'orange'} : {color: 'gray'}
            indicatorArr.push(
                <Text key={i} style={[{fontSize: 25}, textStyle]}>&bull;</Text>
            );
        }
        return indicatorArr;

    },

    //ScrollView内部的组件
    renderScrollItem(){
        //组件数组
        var itemArr = [];
        //数据数组
        var dataArr = TopMenu.data;
        //遍历创建组件
        for (var i = 0; i < dataArr.length; i++) {
            itemArr.push(
                <HomeTopViewListView
                    key={i}
                    dataArr={dataArr[i]}
                />
            );
        }
        return itemArr;
    }
});

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white'
    },

    indicatorViewStyle: {
        //改变主轴方向
        flexDirection: 'row',
        //水平方向居中
        justifyContent: 'center'
    },

});

module.exports = HomeTopView;