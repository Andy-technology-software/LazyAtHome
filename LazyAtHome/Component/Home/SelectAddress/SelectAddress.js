/**
 * Created by lingnet on 2017/6/19.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    WebView,
    AlertIOS
} from 'react-native';

{/*-----引入外部组件--webView---*/}
import SelectAddWebView from './SelectAddWebView';

{/*-----引入外部组件--导航---*/}
import TopNavView from './TopNavView';

var SelectAddress = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                {/*导航*/}
                <TopNavView
                    title="地址调整"
                    popTopSelectAddress={()=>{this.popToHome()}}
                />

                {/*地图*/}
                <SelectAddWebView />
            </View>
        );
    },

    //返回响应
    popToHome() {
        this.props.navigator.pop();
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    }
});

module.exports = SelectAddress;