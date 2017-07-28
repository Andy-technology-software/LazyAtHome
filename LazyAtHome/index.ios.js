/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    AsyncStorage
} from 'react-native';

/*************引入Main*************/
var Main = require('./Component/Main/NewMain');

/*************引入登录页*************/
var Login = require('./Component/LoginAndRegist/Login');


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

var LazyAtHome = React.createClass({
    getInitialState: function() {
        return {
            logined: false
        };
    },

    render() {
        if (this.state.logined){
            return(
                <Main />
            )
        }
        return(
            <Login afterLogin={this._afterLogin} />
        );
    },

    _afterLogin() {
        var that = this

        that.setState({
            logined: true
        })
    },

    componentDidMount() {
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
            if (ret.phone.length){
                this.setState({
                    logined: true
                })
            }else {
                this.setState({
                    logined: false
                })
            }
        }).catch(err => {
            // any exception including data not found
            // goes to catch()
            console.warn(err.message);
            this.setState({
                logined: true
            })
            switch (err.name) {
                case 'NotFoundError':
                    // TODO;
                    break;
                case 'ExpiredError':
                    // TODO
                    break;
            }
        });
        
    },
});

AppRegistry.registerComponent('LazyAtHome', () => LazyAtHome);
