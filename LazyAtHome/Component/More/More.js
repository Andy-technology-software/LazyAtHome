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
    TouchableOpacity,
    Platform,
    AlertIOS,
    ScrollView
} from 'react-native';

//引入cell 外部组件
var CommonCell = require('./CommonCell');

var More = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                {/*导航条*/}
                {this.renderNavBar()}

                <ScrollView>
                    <View style={{marginTop: 20}}>
                        <CommonCell
                            title='扫一扫'
                        />
                    </View>

                    <View style={{marginTop: 20}}>
                        <CommonCell
                            title='省流量模式'
                            isSwitch={true}
                        />
                        <CommonCell
                            title='扫一扫'
                        />
                        <CommonCell
                            title='扫一扫'
                        />
                        <CommonCell
                            title='扫一扫'
                        />
                        <CommonCell
                            title='加油'
                        /><CommonCell
                            title='清空缓存'
                            rightTitle='1.99M'
                        />
                    </View>

                    <View style={{marginTop: 20}}>
                        <CommonCell
                            title='扫一扫'
                        />
                        <CommonCell
                            title='扫一扫'
                        />
                        <CommonCell
                            title='扫一扫'
                        />
                    </View>
                </ScrollView>
            </View>
        );
    },

    //导航条
    renderNavBar(){
        return(
            <View style={styles.navOutViewStyle}>
                <Text style={styles.topTitleStyle}>更多</Text>
                <TouchableOpacity onPress={()=>{AlertIOS.alert('点击设置')}} style={styles.navRightTouchStyle}>
                    <Image source={{uri: 'icon_mine_setting'}} style={styles.navRightImgStyle} />
                </TouchableOpacity>
            </View>
        )
    }


});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
    },

    //导航view
    navOutViewStyle:{
        //此处针对安卓适配一下
        height: Platform.OS == 'ios' ? 64 : 44,
        backgroundColor: 'rgb(255,96,0)',
        //设置主轴方向
        flexDirection: 'row',
        //侧轴对齐方式
        alignItems: 'center',
        //主轴方向居中
        justifyContent: 'center'
    },

    topTitleStyle:{
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    },

    navRightTouchStyle:{
        position: 'absolute',
        right: 10
    },

    //设置右边导航图片
    navRightImgStyle:{
        width: Platform.OS == 'ios' ? 28 : 24,
        height: Platform.OS == 'ios' ? 28 : 24
    }
});

module.exports = More;