/**
 * Created by lingnet on 2017/6/23.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    TouchableOpacity,
    Image,
    AlertIOS,
    RefreshControl,
    ActivityIndicator
} from 'react-native';

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
};

//查看图片
var Lightbox = require('react-native-lightbox');
import Carousel from 'react-native-looped-carousel';

//加载动画
var Spinner = require('react-native-spinkit');

var Circle = React.createClass({
    //设置初始值
    getInitialState(){
        //设置数据源
        var ds = new ListView.DataSource({rowHasChanged:(r1, r2) => r1 !== r2});
        //设置返回数据
        return{
            isLoadingTail: false,
            dataSource:ds.cloneWithRows([]),
            isRefreshing: false,
            hasMoreData: true,
            //加载动画
            types: ['CircleFlip', 'WanderingCubes', 'ChasingDots'],
            size: 60,
            color: "#FF8C00",
            isVisible: true
        }
    },

    render() {
        return (
            <View style={{flex: 1, backgroundColor: 'white', marginBottom: 64}}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    refreshControl={
                      <RefreshControl
                        refreshing={this.state.isRefreshing}
                        onRefresh={() => this._onRefresh()}
                        tintColor="#ff6600"
                        title="拼命加载中..."
                      />
                    }

                    onEndReached={this._fetchMoreData}
                    onEndReachedThreshold={20}//即将滑到底部的时候 20是布局尺寸dp
                    renderFooter={this._renderFooter}
                    enableEmptySections = {true}
                >
                </ListView>

                <Spinner style={styles.spinner} isVisible={this.state.isVisible} size={this.state.size} type={'ChasingDots'} color={this.state.color}/>
            </View>
        );
    },

    //加载数据
    _fetchData(page){
        //修改请求状态
        if (page !== 1) {
            this.setState({
                isVisible: true,
                isLoadingTail:true
            })
        } else{
            this.setState({
                isVisible: true,
                isRefreshing: true
            })
        }

        var that = this;
        request.get(config.api.base + config.api.FAXIANLIUYANBAN, {
            pnum: page,
            jingdu: '120.16281373397624',
            weidu: '35.963475831545807',
            num: '5',
            userid: '1',
            id:'',
            info:''
        })
            .then((data) => {
                var temArr = [];
                if (data.result) {
                    //请求来的数据
                    temArr = JSON.parse(data.data)
                    console.log('留言板数据:' + data.data);
                    if (temArr.length != 5){
                        this.setState({
                            hasMoreData: false
                        })
                    }

                    if (page !== 1) {
                        //拿到已有的数据
                        var items = cachedResults.items.slice();
                        //对已有数据进行追加
                        items = items.concat(temArr);
                        //把新的数据存到缓存中
                        cachedResults.items = items;

                        that.setState({
                            isLoadingTail:false,
                            isVisible: false,
                            dataSource:that.state.dataSource.cloneWithRows(cachedResults.items)
                        })
                    } else{
                        //拿到已有的数据
                        var items = temArr;
                        //把新的数据存到缓存中
                        cachedResults.items = items;

                        that.setState({
                            isRefreshing:false,
                            isVisible: false,
                            dataSource:that.state.dataSource.cloneWithRows(cachedResults.items)
                        })
                    }
                }
            })
            .catch((error) => {
                this.setState({
                    isLoadingTail: false,
                    isVisible: false,
                })
                console.error(error);
            })
    },

    //下拉刷新
    _onRefresh(){
        // AlertIOS.alert('1');
        if (this.state.isRefreshing) {
            return
        }

        this._fetchData(1)
    },

    //上拉加载更多数据
    _fetchMoreData() {
        if (!this.state.hasMoreData || this.state.isLoadingTail) {
            //没有更多数据了 或者  已经在加载中。。。。
            return
        }
        cachedResults.nextPage = cachedResults.nextPage + 1;
        var page = cachedResults.nextPage;
        this._fetchData(page);
    },

    //上拉加载的视图
    _renderFooter(){
        if (!this.state.hasMoreData) {
            return(
                <View style={styles.loadingMore}>
                    <Text style={styles.loadingText}>没有更多了</Text>
                </View>
            )
        }

        if (!this.state.isLoadingTail) {
            return <View style={styles.loadingMore}/>
        }

        return <ActivityIndicator style={styles.loadingMore}/>
    },

    //点击进入详情
    _didSelectDetail() {
        this.props.navigator.push({
            title: '详情',
            component: ShopDetail,
            backButtonIcon: Image.propTypes.source
        });
    },

    //展示列表
    _renderRow(rowData,sectionID,rowID,highlightRow){
        var imagesArr= new Array(); //定义一数组
        imagesArr=rowData.imgs.split(",");

        console.log('图片数组：' + imagesArr.length);
        return(
            <View style={styles.cellViewStyle}>
                <View style={styles.headViewStyle}>
                    <Image source={{uri: rowData.uImg}} style={styles.imageStyle}/>
                </View>

                <View style={styles.rightViewStyle}>
                    <Text style={styles.nameTitleStyle}>{rowData.uNickname}</Text>
                    <Text style={styles.contentTitleStyle}>{rowData.content}</Text>

                    <View style={styles.imagesView}>
                        {this._renderImages(imagesArr)}
                    </View>

                    <View style={styles.timeAndComView}>
                        <Text style={styles.timeStyle}>20分钟前</Text>

                        <View style={styles.comStyle}>
                            <Text style={{fontSize:12,marginRight:5}}>{rowData.count}</Text>
                            <Image style={styles.pinglunImage} source={{uri: 'youxiang'}}/>
                        </View>

                    </View>
                </View>

            </View>
        );
    },

    //多个图片的展示
    _renderImages(imagesArr){
        console.log('传过来的图片' + imagesArr.length);
        //组件数组
        var itemArr = [];
        //遍历创建组件
        for (var i = 0; i < imagesArr.length; i++) {
            itemArr.push(
                <Lightbox key={i} renderContent={()=>this._renderCarousel()} underlayColor="white">
                    <Image
                        style={styles.imagesStyle}
                        source={{uri: imagesArr[i]}}
                    />
                </Lightbox>
                // <Image key={i} style={styles.imagesStyle} source={{uri: imagesArr[i]}}/>
            );
        }
        return itemArr;
    },

    //组件安装完毕以后  进行异步数据获取
    componentDidMount () {
        this._fetchData(1)
    },

    _renderCarousel (imageUrl) {
        return (
            <Carousel style={{ width: width, height: width }}>
                <Image
                    style={{flex: 1}}
                    resizeMode="contain"
                    source={{ uri: 'http://cdn.lolwot.com/wp-content/uploads/2015/07/20-pictures-of-animals-in-hats-to-brighten-up-your-day-1.jpg' }}
                />
            </Carousel>
        );
    },
});

const styles = StyleSheet.create({
    cellViewStyle: {
        flexDirection:'row',
        borderBottomWidth:0.5,
        borderBottomColor:'#d8d8d8',
    },

    headViewStyle: {
        marginLeft: 10,
        marginTop: 10,
        marginBottom: 10
    },

    imageStyle:{
        width:49,
        height:49,
        borderRadius:49/2,
    },

    rightViewStyle: {
        marginLeft:5,
        marginTop:15,
        marginRight: 71,
        flexDirection: 'column'
    },

    nameTitleStyle: {
        fontSize: 16,
        marginBottom:5,
        color:'#FFA042'
    },

    contentTitleStyle: {
        fontSize: 14,
        marginBottom:5,
        color: '#9D9D9D',
        lineHeight: 19
    },

    imagesView: {
        //多个cell在同一行显示
        flexWrap: 'wrap',
        //设置主轴方向
        flexDirection: 'row',
        marginBottom: 10
    },

    imagesStyle: {
        width: (width - 90)/3,
        height: (width - 90)/3,
        marginRight: 3,
        marginBottom: 5
    },

    timeAndComView: {
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    timeStyle: {
        fontSize: 12,
        color: '#8CEA00'
    },

    comStyle: {
        flexDirection: 'row'
    },

    pinglunImage: {
        width: 16,
        height: 16
    },

    loadingMore:{
        marginVertical:20,
    },

    loadingText:{
        color:'#777',
        textAlign:'center'
    },

    spinner: {
        position: 'absolute',
        left: width/2 - 30,
        top: height/2 - 90,
        bottom: 'auto',
    },
});

module.exports = Circle;