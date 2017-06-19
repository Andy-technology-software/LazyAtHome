/**
 * Created by lingnet on 2017/6/19.
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
    Switch,
    Platform
} from 'react-native';

var CommonCell = React.createClass({
    getDefaultProps(){
        return{
            title: '', //标题
            isSwitch: false, //是否展示开关
            rightTitle: ''
        }
    },

    getInitialState(){
        return{
             isOn: false
        }
    },

    render() {

        return (
            <TouchableOpacity onPress={()=>{AlertIOS.alert('点击了')}}>
                <View style={styles.container}>
                    {/*左边*/}
                    <Text>{this.props.title}</Text>

                    {/*右边*/}
                    {this.renderRightView()}
                </View>
            </TouchableOpacity>
        );
    },

    //右边view
    renderRightView(){
        if (this.props.isSwitch){
            return(
                <Switch value={this.state.isOn == true} onValueChange={()=>{this.setState({
                    isOn: !this.state.isOn
                })}}/>
            )
        }else {
            return(
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    {this.rightTitle()}
                    <Image source={{uri: 'icon_cell_rightArrow'}} style={{width: 8, height: 13}}/>
                </View>
            )
        }
    },

    //右边有字的清空
    rightTitle(){
        if (this.props.rightTitle.length > 0){
            return(
                <Text style={{color: 'gray',marginRight: 10}}>{this.props.rightTitle}</Text>
            )
        }
    }
});

const styles = StyleSheet.create({
    container: {
        height: Platform.OS == 'ios' ? 44 : 40,
        backgroundColor: 'white',
        borderBottomColor: '#dddddd',
        borderBottomWidth: 1,

        //主轴方向
        flexDirection: 'row',
        //主轴对齐方式
        justifyContent: 'space-between',

        //侧轴对其方式
        alignItems: 'center',

        padding: 10
    }
});

module.exports = CommonCell;