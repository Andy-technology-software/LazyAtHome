/**
 * Created by xurenqiang on 2017/6/20.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ListView,
    TouchableOpacity,
    AlertIOS
} from 'react-native';

{/*-------屏幕宽高-------*/}
var Dimensions = require('Dimensions');
var {width, heigth} = Dimensions.get('window');

var HomeTopViewListView = React.createClass({
    getDefaultProps(){
        return{
            dataArr: []
        }
    },
    getInitialState(){
        //创建数据源
        var ds = new ListView.DataSource({rowHasChanged:(row1, row2) => row1 !== row2});
        return{
            dataSource: ds.cloneWithRows(this.props.dataArr)
        }
    },
    render() {
        return (
            <ListView
                //设置数据源
                dataSource={this.state.dataSource}
                //绘制cell
                renderRow={this.renderRow}
                //样式
                contentContainerStyle={styles.contentViewStyle}
                scrollEnabled={false}
            />
        );
    },

    //具体cell  数据 sectionid rowid 选中样式
    renderRow(rowData){
        return(
            <TouchableOpacity onPress={()=>AlertIOS.alert(rowData.title)}>
                <View style={styles.cellStyle}>
                    <Image source={{uri: rowData.image}} style={{width: 52,height: 52}}/>
                    <Text>{rowData.title}</Text>
                </View>
            </TouchableOpacity>
        );
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },

    contentViewStyle: {
        //多个cell在同一行显示
        flexWrap: 'wrap',
        //设置主轴方向
        flexDirection: 'row',
        //宽度
        width: width
    },

    cellStyle: {
        // backgroundColor: 'red',
        width: width / 5,
        height: 80,
        //水平居中
        justifyContent: 'center',
        //垂直侧轴居中
        alignItems: 'center'

    },
});

module.exports = HomeTopViewListView;