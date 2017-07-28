/**
 * Created by lingnet on 2017/7/28.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    AlertIOS,
    ScrollView,
    TouchableOpacity,
    AsyncStorage
} from 'react-native';

import Storage from 'react-native-storage';

var storage = new Storage({
    // maximum capacity, default 1000
    size: 1000,

    // Use AsyncStorage for RN, or window.localStorage for web.
    // If not set, data would be lost after reload.
    storageBackend: AsyncStorage,

    // expire time, default 1 day(1000 * 3600 * 24 milliseconds).
    // can be null, which means never expire.
    defaultExpires: 1000 * 3600 * 24,

    // cache data in the memory. default is true.
    enableCache: true,

    // if data was not found in storage or expired,
    // the corresponding sync method will be invoked and return
    // the latest data.
    sync : {
        // we'll talk about the details later.
    }
})
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import {
    Kaede,
    Hoshi,
    Jiro,
    Isao,
    Madoka,
    Akira,
    Hideo,
    Kohana,
    Makiko,
    Sae,
    Fumi,
} from 'react-native-textinput-effects';

/*************引入Main*************/
var Main = require('../Main/NewMain');

var Login = React.createClass({
    getInitialState() {
        return {
            phone: '',
            password: '',
        }
    },

    render() {
        return (

            <ScrollView
                style={styles.container}
                contentContainerStyle={styles.content}
            >

                <View style={[styles.card2, { backgroundColor: '#b792a6' }]}>
                    <Kohana
                        style={{ backgroundColor: '#f9f5ed', marginBottom: 10}}
                        label={'账号'}
                        iconClass={FontAwesomeIcon}
                        iconName={'phone'}
                        iconColor={'#f4d29a'}
                        iconSize={20}
                        labelStyle={{ marginTop: 0, color: '#91627b' }}
                        inputStyle={{ color: '#91627b' }}
                        onChangeText={(text) => this.setState({
                            phone: text
                        })}
                        useNativeDriver
                    />
                    <Kohana
                        style={{ backgroundColor: '#f9f5ed', marginBottom: 10}}
                        label={'密码'}
                        iconClass={FontAwesomeIcon}
                        iconName={'phone'}
                        iconColor={'#ddd'}
                        labelStyle={{ color: '#91627b' }}
                        inputStyle={{ color: '#91627b' }}
                        onChangeText={(text) => this.setState({
                            password: text
                        })}
                        useNativeDriver
                    />

                    <TouchableOpacity activeOpacity={0.7} onPress={()=>{this._selectLogin()}}>
                        <View style={styles.buttonView}>
                            <Text style={styles.loginBtn}>登录</Text>
                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity activeOpacity={0.7} onPress={()=>{this._loadData()}}>
                        <View style={styles.buttonView}>
                            <Text style={styles.loginBtn}>获取</Text>
                        </View>
                    </TouchableOpacity>

                </View>

            </ScrollView>
        );
    },

    _selectLogin(){
        if (!this.state.phone.length){
            AlertIOS.alert('请输入手机号');
            return;
        }

        if (!this.state.password.length){
            AlertIOS.alert('请输入密码');
            return;
        }

        storage.save({
            key: 'loginState',   // Note: Do not use underscore("_") in key!
            data: {
                phone: this.state.phone,
                password: this.state.password,
                userid: 'andy',
                token: 'some token'
            },

            // if not specified, the defaultExpires will be applied instead.
            // if set to null, then it will never expire.
            expires: 1000 * 3600
        });

        this.props.afterLogin()
    },

    _loadData() {
        storage.load({
            key: 'loginState',

            // autoSync(default true) means if data not found or expired,
            // then invoke the corresponding sync method
            autoSync: true,

            // syncInBackground(default true) means if data expired,
            // return the outdated data first while invoke the sync method.
            // It can be set to false to always return data provided by sync method when expired.(Of course it's slower)
            syncInBackground: true,

            // you can pass extra params to sync method
            // see sync example below for example
            syncParams: {
                extraFetchOptions: {
                    // blahblah
                },
                someFlag: true,
            },
        }).then(ret => {
            // found data go to then()
            console.log(ret.userid);
            AlertIOS.alert(ret.phone);
        }).catch(err => {
            // any exception including data not found
            // goes to catch()
            console.warn(err.message);
            switch (err.name) {
                case 'NotFoundError':
                    // TODO;
                    break;
                case 'ExpiredError':
                    // TODO
                    break;
            }
        });
    }



});


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 0,
        backgroundColor: '#b792a6',
    },
    content: {
        // not cool but good enough to make all inputs visible when keyboard is active
        backgroundColor: '#b792a6'
    },

    card2: {
        padding: 16,
        marginTop: 100
    },

    title: {
        paddingBottom: 16,
        textAlign: 'center',
        color: '#404d5b',
        fontSize: 20,
        fontWeight: 'bold',
        opacity: 0.8,
    },

    buttonView: {
        height: 50,
        marginTop: 50,
        borderWidth: 0.5,
        borderColor: '#ffffff',
        justifyContent: 'center',
        marginBottom: 20
    },


    loginBtn: {
        textAlign: 'center',
        color: '#ffffff',
        fontSize: 16
    },


});

module.exports = Login;