/**
 * Created by xurenqiang on 2017/6/18.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView
} from 'react-native';

//引入中间view
var MineTopView = require('./MineTopView');

//引入中间view
var MineMiddleView = require('./MineMiddleView');

//引入下半部分cell
CommonMyCell = require('./CommonMyCell');

var Mine = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    {/*上部分view*/}
                    <MineTopView />

                    {/*中间view*/}
                    <View>
                        <CommonMyCell
                            leftIconName='collect'
                            leftTitle="我的订单"
                            rightTitle="查看全部订单"
                        />
                        <MineMiddleView/>

                    </View>

                    {/*下半部分*/}
                    <View style={{marginTop: 20}}>
                        <CommonMyCell
                            leftIconName='draft'
                            leftTitle='钱包'
                            rightTitle="账户余额：￥100.0"
                        />
                        <CommonMyCell
                            leftIconName='like'
                            leftTitle='抵用券'
                            rightTitle="10张"
                        />
                    </View>

                    <View style={{marginTop: 20}}>
                        <CommonMyCell
                            leftIconName='card'
                            leftTitle='积分商城'
                        />
                    </View>

                    <View style={{marginTop: 20}}>
                        <CommonMyCell
                            leftIconName='new_friend'
                            leftTitle='今日推荐'
                            rightIconName="me_new"
                        />
                    </View>

                    <View style={{marginTop: 20}}>
                        <CommonMyCell
                            leftIconName='pay'
                            leftTitle='我要合作'
                            rightTitle="首页广告  日进斗金"
                        />
                    </View>
                </ScrollView>
            </View>
        );
    }
});

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e8e8e8',
        flex: 1
    }
});

module.exports = Mine;