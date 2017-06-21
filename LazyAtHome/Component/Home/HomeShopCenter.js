/**
 * Created by xurenqiang on 2017/6/22.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

//引入头部标题view
var HeadViewCommonCell = require('./HeadViewCommonCell');

var ShopCenter = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                <HeadViewCommonCell
                    leftIcon = 'gw'
                    leftTitle= '商家推荐'
                    rightTitle= '还有4家'
                />
                <Text>购物中心</Text>
            </View>
        );
    }
});

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5FCFF',
        marginTop: 10,
    }
});

module.exports = ShopCenter;