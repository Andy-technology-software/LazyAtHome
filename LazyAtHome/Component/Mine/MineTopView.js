/**
 * Created by lingnet on 2017/6/20.
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

//宽高
//屏幕宽高
var Dimensions = require('Dimensions');
var {width, heigth} = Dimensions.get('window');

var MineTopView = React.createClass({
    render() {
        return (
            <View>
                {this.renderTopView()}
            </View>
        );
    },

    renderTopView(){
        return(
            <View style={styles.bgViewStyle}>
                {this.section0()}
            </View>
        );
    },

    section0(){
        return(
            <View style={styles.section0Style}>
                <Image style={styles.headImageStyle} source={{uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1497951762800&di=e1cb54ba5ff141c77683c5c79e60204b&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201602%2F27%2F20160227121425_eCG2m.thumb.700_0.png'}}/>
                <Text style={{marginLeft:10}}>安迪科技</Text>
                <Image style={styles.vipImageStyle} source={{uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1497952058202&di=6e5ccd7bcfc0db2e23bec2b0042fea64&imgtype=0&src=http%3A%2F%2Fpic.qiantucdn.com%2F58pic%2F19%2F53%2F72%2F58558PICa4D_1024.jpg'}}/>
            </View>
        );
    }
});

const styles = StyleSheet.create({
    bgViewStyle: {
        justifyContent: 'center',
        backgroundColor: 'orange',

        width: width,
        height: width * 0.4
    },

    section0Style:{
        marginLeft: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },

    headImageStyle:{
        width: 80,
        height: 80,
        borderRadius: 40
    },

    vipImageStyle:{
        width: 30,
        height: 10,
        marginLeft:10
    }
});

module.exports = MineTopView;