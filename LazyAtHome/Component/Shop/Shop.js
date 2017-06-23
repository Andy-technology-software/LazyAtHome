/**
 * Created by xurenqiang on 2017/6/18.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    Image,
    TouchableOpacity,
    AlertIOS
} from 'react-native';

//获取宽高
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

//引入配置文件跟请求框架
var config = require('../Common/Config');
var request = require('../Common/Request');

var Shop = React.createClass({
    //设置初始值
    getInitialState(){
        //设置数据源
        var ds = new ListView.DataSource({rowHasChanged:(r1, r2) => r1 !== r2});
        //设置返回数据
        return{
            dataSource:ds.cloneWithRows([])
        }
    },

    render(){
        return(
            <View style={{flex: 1, backgroundColor: 'white', marginBottom: 64}}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                    enableEmptySections = {true}
                >
                </ListView>
            </View>
        );
    },

    //展示列表
    renderRow(rowData,sectionID,rowID,highlightRow){
        console.log('一共有：' + rowData.length);
        return(
            <TouchableOpacity onPress={()=>{}} activeOpacity={0.5}>
                <View style={styles.cellViewStyle}>
                    <Image source={{uri: 'https://imgsa.baidu.com/news/q%3D100/sign=8eb105ab2234349b72066a85f9eb1521/b8389b504fc2d5622ea9345ced1190ef77c66cda.jpg'}} style={styles.imageStyle}/>
                    <View style={styles.cellViewStyle1}>
                        <View>
                            <Text style={styles.topTitleStyle}>{rowData.industry}</Text>
                            <Text style={styles.topTitleStyle}>{rowData.remark}</Text>
                            <Text style={styles.bottomTitleStyle}>￥{rowData.weidu}</Text>
                        </View>

                        <View style={styles.distanceViewStyle}>
                            <Image source={{uri: 'icon_tabbar_mine_selected'}} style={{width: 20, height: 20}}/>
                            <Text>{rowData.distance.substr(0,4)} km</Text>
                        </View>
                    </View>

                </View>
            </TouchableOpacity>
        );
    },

    //组件安装完毕以后  进行异步数据获取
    componentDidMount () {
        this._fetchData()
    },

    _fetchData(){
        var that = this;
        request.get(config.api.base + config.api.FAXIANXINPIN, {
            pnum: '4',
            jingdu: '120.16281373397624',
            weidu: '35.963475831545807',
            num: '10',
            type: '1',
            userid: '1'
        })
            .then((data) => {
                var temArr = [];
                if (data.result) {
                    temArr = JSON.parse(data.data)
                    console.log(temArr);
                    this.setState({
                        dataSource: this.state.dataSource.cloneWithRows(temArr)
                    })
                }
            })
            .catch((error) => {
                console.error(error);
            })
    }

});


const styles = StyleSheet.create({
    cellViewStyle: {
        padding:10,
        flexDirection:'row',
        borderBottomWidth:0.5,
        borderBottomColor:'#d8d8d8'
    },

    imageStyle:{
        width:100,
        height:80
    },

    cellViewStyle1:{
        flexDirection:'column',
        marginLeft:10
    },

    topTitleStyle:{
        fontSize:16,
        width:width - 120,
        marginBottom:15
    },

    bottomTitleStyle:{
        color:'red',
        fontSize:14
    },

    distanceViewStyle: {
        flexDirection: 'row',
        marginRight: 10,
        justifyContent: 'flex-end'
    }

});

module.exports = Shop;