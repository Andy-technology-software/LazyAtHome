/**
 * Created by lingnet on 2017/7/26.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

{/*-----引入外部组件--导航---*/}
import TopNavView from '../../Home/SelectAddress/TopNavView';

var ShopDetail = React.createClass({
    render() {
        return (
            <View>
                <Text>详情页</Text>

            </View>
        );
    },

    // 渲染组件时隐藏tabbar
    componentWillMount(){
        this.props.tabBar.hide();
    },

    // 销毁组件时显示tabbar
    componentWillUnmount(){
        this.props.tabBar.show();
    }
});

module.exports = ShopDetail;