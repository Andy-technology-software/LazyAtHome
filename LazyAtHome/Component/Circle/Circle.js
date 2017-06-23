/**
 * Created by lingnet on 2017/6/23.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

var Circle = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                <Text></Text>
            </View>
        );
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8f8f8',
    }
});

module.exports = Circle;