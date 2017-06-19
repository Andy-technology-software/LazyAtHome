/**
 * Created by xurenqiang on 2017/6/18.
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

//引入tabbar
import TabNavigator from 'react-native-tab-navigator';

//版本升级到0.43以上的话，Navigator不能直接从react-native里面获取了，npm install react-native-deprecated-custom-components --save
//引入Navigator 导航
import {Navigator} from 'react-native-deprecated-custom-components';

//引入组件
var Home = require('../Home/Home');
var Shop = require('../Shop/Shop');
var Mine = require('../Mine/Mine');
var More = require('../More/More');

var Main = React.createClass({
    //初始化函数（变量是可以改变的，充当状态机的角色）
    getInitialState(){
        return{
            selectedTab: 'mine' //默认是第一个
        }
    },

    render() {
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
    },

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
                <Navigator
                    initialRoute={{name:componentName,component:component}}
                    configureScene={()=>{
                             return Navigator.SceneConfigs.PushFromRight;
                        }}
                    renderScene={(route,navigator)=>{
                           let Component = route.component;
                           return <Component {...route.passProps} navigator={navigator}/>;
                        }}
                />
            </TabNavigator.Item>
        )
    }
});

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