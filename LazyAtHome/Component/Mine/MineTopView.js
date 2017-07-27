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
    TouchableOpacity,
    AlertIOS,
    ActionSheetIOS,
    ListView
} from 'react-native';

{/**选图**/}
var ImagePicker = require('react-native-image-picker');

//图片选择器参数设置
var options = {
    title: '请选择图片来源',
    cancelButtonTitle:'取消',
    takePhotoButtonTitle:'拍照',
    chooseFromLibraryButtonTitle:'相册图片',
    storageOptions: {
        skipBackup: true,
        path: 'images'
    }
};

//屏幕宽高
var Dimensions = require('Dimensions');
var {width, heigth} = Dimensions.get('window');

var MineTopView = React.createClass({
    //设置初始值
    getInitialState(){
        //设置数据源
        var ds = new ListView.DataSource({rowHasChanged:(r1, r2) => r1 !== r2});
        //设置返回数据
        return{
            isLoadingTail: false,
            dataSource:ds.cloneWithRows([]),
            avatarSource: 'http://h.hiphotos.baidu.com/zhidao/pic/item/1b4c510fd9f9d72a6fc41f7ed22a2834349bbb34.jpg'
        }
    },

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

    _changeHeadImage() {
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('用户取消了选择！');
            } else if (response.error) {
                alert("ImagePicker发生错误：" + response.error);
            } else {
                // let source = { uri: response.uri };
                // You can also display the image using data:
                let source = { uri: 'data:image/jpeg;base64,' + response.data };
                console.log("这是我的打印：" + source.uri);
                this.setState({
                    avatarSource: source.uri
                });
            }
        });
    },

    section0(){
        return(
            <View style={styles.section0Style}>
                <TouchableOpacity onPress={this._changeHeadImage} activeOpacity={0.5}>
                    <Image style={styles.headImageStyle} source={{uri:this.state.avatarSource}}/>
                </TouchableOpacity>
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
        height: width,

        marginTop: -20
    },

    section0Style:{
        marginLeft: 10,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: width/2 + 20
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