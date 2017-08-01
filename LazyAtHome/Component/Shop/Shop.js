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

{/*-------引入外部组件-------*/}
//详情页
var ShopDetail = require('./ShopDetail/ShopDetail');

//获取宽高
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

//引入配置文件跟请求框架
var config = require('../Common/Config');
var request = require('../Common/Request');

//声明一个缓存  来缓存列表里边所有的数据
var cachedResults = {
    nextPage: 1,
    items: [],//缓存的数据列表
}

var Shop = React.createClass({
    //设置初始值
    getInitialState(){
        //设置数据源
        var ds = new ListView.DataSource({rowHasChanged:(r1, r2) => r1 !== r2});
        //设置返回数据
        return{
            isLoadingTail: false,
            dataSource:ds.cloneWithRows([])
        }
    },

    render(){
        return(
            <View style={{flex: 1, backgroundColor: 'white', marginBottom: 64}}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow}
                    enableEmptySections = {true}
                    //触底加载更多
                    onEndReached={this._fetchMoreData()}
                    //距离底部还有多少  就是快要触底 20是个布局尺寸
                    onEndReachedThreshold={20}
                >
                </ListView>
            </View>
        );
    },

    //加载数据
    _fetchData(page){
        //修改请求状态
        this.setState({
            isLoadingTail: true
        })

        var that = this;
        request.get(config.api.base + config.api.FAXIANXINPIN, {
            pnum: page,
            jingdu: '120.16281373397624',
            weidu: '35.963475831545807',
            num: '10',
            type: '1',
            userid: '1'
        })
            .then((data) => {
                var temArr = [];
                if (data.result) {
                    //请求来的数据
                    temArr = JSON.parse(data.data)
                    //拿到已有的数据
                    var items = cachedResults.items.slice();
                    //对已有数据进行追加
                    items = items.concat(temArr);
                    //把新的数据存到缓存中
                    cachedResults.items = items;
                    this.setState({
                        isLoadingTail: false,
                        dataSource: this.state.dataSource.cloneWithRows(cachedResults.items),
                    })
                }
            })
            .catch((error) => {
                this.setState({
                    isLoadingTail: false
                })
                console.error(error);
            })
    },

    //下拉加载更多数据
    _fetchMoreData() {
        if (!this._hasMore() || this.state.isLoadingTail) {
            //没有更多数据了 或者  已经在加载中。。。。
            return
        }
        cachedResults.nextPage = cachedResults.nextPage + 1;
        var page = cachedResults.nextPage;
        this._fetchData(page);
    },

    //是否还有更多数据  新数据
    _hasMore() {
        return false;
    },

    _didSelectDetail() {
        this.props.navigator.push({
            title: '详情',
            component: ShopDetail,
            backButtonIcon: Image.propTypes.source,
            passProps:{
                tabBar: {
                    hide: () => this.props.tabBar.hide(),
                    show: () => this.props.tabBar.show()
                }
            }
        });
    },

    //展示列表
    _renderRow(rowData,sectionID,rowID,highlightRow){
        console.log('一共有：' + rowData.length);
        return(
            <TouchableOpacity onPress={this._didSelectDetail} activeOpacity={0.5}>
                <View style={styles.cellViewStyle}>
                    <Image source={{uri: 'https://imgsa.baidu.com/news/q%3D100/sign=8eb105ab2234349b72066a85f9eb1521/b8389b504fc2d5622ea9345ced1190ef77c66cda.jpg'}} style={styles.imageStyle}/>
                    <View style={styles.cellViewStyle1}>
                        <View>
                            <Text style={styles.topTitleStyle} numberOfLines={1}>{rowData.industry}</Text>
                            <Text style={styles.topSubtitleStyle} numberOfLines={2}>{rowData.remark}</Text>
                        </View>

                        <View style={styles.distanceViewStyle}>
                            <Image source={{uri: 'guiji'}} style={{width: 20, height: 20}}/>
                            <Text>{rowData.distance.substr(0,4)} km</Text>
                        </View>
                    </View>

                </View>
            </TouchableOpacity>
        );
    },

    //组件安装完毕以后  进行异步数据获取
    componentDidMount () {
        this._fetchData(1)
    },

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
        marginBottom:10,
    },

    topSubtitleStyle: {
        fontSize:14,
        width:width - 120,
        marginBottom:10,
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