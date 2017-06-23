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
    NavigatorIOS
} from 'react-native';

{/**引入react-navigation**/}
import TabNavigator from 'react-native-tab-navigator';

//引入组件
var Home = require('../Home/Home');
var Shop = require('../Shop/Shop');
var Mine = require('../Mine/Mine');
var More = require('../More/More');
var Circle = require('../Circle/Circle');
class Main extends Component{
    constructor(){
        super();
        this.state = {
            selectedTab: 'shop'
        }
    }

    render() {
        return (
            <TabNavigator>
                <TabNavigator.Item
                    title='首页'  // 传递变量,一定要加{}
                    renderIcon={() => <Image source={{uri: 'icon_tabbar_homepage'}} style={styles.iconStyle}/>} // 图标
                    renderSelectedIcon={() =><Image source={{uri: 'icon_tabbar_homepage_selected'}} style={styles.iconStyle}/>}   // 选中的图标
                    onPress={()=>{this.setState({selectedTab:'home'})}}
                    selected={this.state.selectedTab === 'home'}
                    selectedTitleStyle={styles.selectedTitleStyle}
                    >
                    <NavigatorIOS
                        initialRoute={{
                          component: Home,
                          title: '首页',
                        }}
                        style={{flex: 1}}
                        navigationBarHidden={true}
                    />
                </TabNavigator.Item>

                <TabNavigator.Item
                    title='商家'  // 传递变量,一定要加{}
                    renderIcon={() => <Image source={{uri: 'icon_tabbar_merchant_normal'}} style={styles.iconStyle}/>} // 图标
                    renderSelectedIcon={() =><Image source={{uri: 'icon_tabbar_merchant_selected'}} style={styles.iconStyle}/>}   // 选中的图标
                    onPress={()=>{this.setState({selectedTab:'shop'})}}
                    selected={this.state.selectedTab === 'shop'}
                    selectedTitleStyle={styles.selectedTitleStyle}
                >
                    <NavigatorIOS
                        initialRoute={{
                          component: Shop,
                          title: '商铺',
                        }}
                        style={{flex: 1}}
                        titleTextColor='white'
                        barTintColor='orange'
                        translucent={false}
                    />
                </TabNavigator.Item>

                <TabNavigator.Item
                    title='圈子'  // 传递变量,一定要加{}
                    renderIcon={() => <Image source={{uri: 'icon_tabbar_misc'}} style={styles.iconStyle}/>} // 图标
                    renderSelectedIcon={() =><Image source={{uri: 'icon_tabbar_misc_selected'}} style={styles.iconStyle}/>}   // 选中的图标
                    onPress={()=>{this.setState({selectedTab:'circle'})}}
                    selected={this.state.selectedTab === 'circle'}
                    selectedTitleStyle={styles.selectedTitleStyle}
                >
                    <NavigatorIOS
                        initialRoute={{
                          component: Circle,
                          title: '圈子',
                        }}
                        style={{flex: 1}}
                        titleTextColor='white'
                        barTintColor='orange'
                        translucent={false}
                    />
                </TabNavigator.Item>

                <TabNavigator.Item
                    title='我的'  // 传递变量,一定要加{}
                    renderIcon={() => <Image source={{uri: 'icon_tabbar_mine'}} style={styles.iconStyle}/>} // 图标
                    renderSelectedIcon={() =><Image source={{uri: 'icon_tabbar_mine_selected'}} style={styles.iconStyle}/>}   // 选中的图标
                    onPress={()=>{this.setState({selectedTab:'mine'})}}
                    selected={this.state.selectedTab === 'mine'}
                    selectedTitleStyle={styles.selectedTitleStyle}
                >
                    <NavigatorIOS
                        initialRoute={{
                          component: Mine,
                          title: '首页',
                        }}
                        style={{flex: 1}}
                        navigationBarHidden={true}
                    />
                </TabNavigator.Item>

            </TabNavigator>
        );
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