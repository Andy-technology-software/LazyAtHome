/**
 * Created by lingnet on 2017/6/22.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Platform,    //判断当前运行的系统
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';

{/**引入react-navigation**/}
import {StackNavigator, TabNavigator} from "react-navigation";

//引入组件
var Home = require('../Home/Home');
var Shop = require('../Shop/Shop');
var Mine = require('../Mine/Mine');
var More = require('../More/More');

class Main extends Component{
    //初始化函数（变量是可以改变的，充当状态机的角色）
    // getInitialState(){
    //     return{
    //         selectedTab: 'home' //默认是第一个
    //     }
    // },

    constructor(){
        super();
        this.state = {
            selectedTab: 'home'
        }
    }

    render() {
        // 注册导航
        const Navs = StackNavigator({
            Home: { screen: Home },
            Shop: {screen: Shop},
            Mine: { screen: Mine },
            More: { screen: More }
        }, {
            initialRouteName: 'Home', // 默认显示界面
            navigationOptions: {  // 屏幕导航的默认选项, 也可以在组件内用 static navigationOptions 设置(会覆盖此处的设置)
                header: {  // 导航栏相关设置项
                    backTitle: '返回',  // 左上角返回键文字
                    style: {
                        backgroundColor: '#fff'
                    },
                    titleStyle: {
                        color: 'green'
                    }
                },
                cardStack: {
                    gesturesEnabled: true
                }
            },
            mode: 'card',  // 页面切换模式, 左右是card(相当于iOS中的push效果), 上下是modal(相当于iOS中的modal效果)
            headerMode: 'screen', // 导航栏的显示模式, screen: 有渐变透明效果, float: 无透明效果, none: 隐藏导航栏
            onTransitionStart: ()=>{ console.log('导航栏切换开始'); },  // 回调
            onTransitionEnd: ()=>{ console.log('导航栏切换结束'); }  // 回调
        });

        return (
            <TabNavigator>
                {/*--首页--*/}
                {this.renderTabBarItem('首页', 'icon_tabbar_homepage', 'icon_tabbar_homepage_selected','home', '首页', Home)}
                {/*--商家--*/}
                {this.renderTabBarItem('商家', 'icon_tabbar_merchant_normal', 'icon_tabbar_merchant_selected','shop', '商家', Shop)}
                {/*--我的--*/}
                {this.renderTabBarItem('我的', 'icon_tabbar_mine', 'icon_tabbar_mine_selected','mine', '我的', Mine)}
                {/*--更多--*/}
                {this.renderTabBarItem('更多', 'icon_tabbar_misc', 'icon_tabbar_misc_selected','more', '更多', More)}
            </TabNavigator>
        );
    }

    // 每一个TabBarItem
    renderTabBarItem(title, iconName, selectedIconName, selectedTab, componentName, component, badgeText){
        return(
            <TabNavigator.Item
                title={title}  // 传递变量,一定要加{}
                renderIcon={() => <Image source={{uri: iconName}} style={styles.iconStyle}/>} // 图标
                renderSelectedIcon={() =><Image source={{uri: selectedIconName}} style={styles.iconStyle}/>}   // 选中的图标
                onPress={()=>{this.setState({selectedTab:selectedTab})}}
                selected={this.state.selectedTab === selectedTab}
                selectedTitleStyle={styles.selectedTitleStyle}
                badgeText = {badgeText}
            >
                <Home/>
            </TabNavigator.Item>
        )
    }
}

const styles = StyleSheet.create({
    iconStyle: {
        width: Platform.OS === 'ios' ? 30 : 25,
        height: Platform.OS === 'ios' ? 30 : 25
    },

    selectedTitleStyle:{
        color:'orange'
    }
});

//输出组件类
module.exports = Main;