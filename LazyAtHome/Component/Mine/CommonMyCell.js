/**
 * Created by xurenqiang on 2017/6/19.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Platform
} from 'react-native';

var CommonMyCell = React.createClass({
    getDefaultProps(){
        return{
            leftIconName: '',
            leftTitle: '',

            rightIconName: '',
            rightTitle: '',
        }
    },

    render() {
        return (
            <View style={styles.container}>
                {/*--左边--*/}
                <View style={styles.leftViewStyle}>
                    <Image source={{uri: this.props.leftIconName}} style={styles.leftImageStyle}/>
                    <Text style={styles.leftTitleStyle}>{this.props.leftTitle}</Text>
                </View>
                {/*--右边--*/}
                <View style={styles.rightViewStyle}>
                    {this.rightSubView()}
                    <Image source={{uri: 'icon_cell_rightArrow'}} style={{width: 8, height: 13, marginRight: 10, marginLeft: 10}}/>
                </View>
            </View>
        );
    },

    //右边view
    rightSubView(){
        if (!this.props.rightIconName.length) {
            return(
                <Text style={{color: 'gray'}}>{this.props.rightTitle}</Text>
            )
        }else {
            return(
                <Image source={{uri: this.props.rightIconName}} style={{width: 24, height: 13}}/>
            )
        }
    }
});

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        //主轴对齐方式
        justifyContent: 'space-between',
        height: Platform.OS == 'ios' ? 44 : 40,
        backgroundColor: 'white',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#d8d8d8',

    },

    //左边view
    leftViewStyle:{
        //主轴方向
        flexDirection: 'row',
        //侧轴居中
        alignItems: 'center',

        //做外边距
        marginLeft: 10
    },

    //左边view上的图片
    leftImageStyle:{
        width: 30,
        height: 30,
        borderRadius: 15
    },

    //左边view的标题
    leftTitleStyle:{
        marginLeft: 6,
        fontSize: 16
    },

    //右边view
    rightViewStyle:{
        flexDirection: 'row',
        alignItems: 'center'
    },
});

module.exports = CommonMyCell;