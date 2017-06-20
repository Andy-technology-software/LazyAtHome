/**
 * Created by xurenqiang on 2017/6/21.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    WebView
} from 'react-native';

class SelectAddWebView extends Component{
    constructor(props){
        super(props);
        this.state = {
            url: this.props.url,
            isError: false
        }
    }
    render() {
        return (
            <View style={styles.container}>
                {
                    this.state.isError
                        ?
                            <View style={styles.errorInfoStyle}>
                                <Text style={{fontSize: 16, fontWeight: '300'}}>网络有问题,刷新试试！！</Text>
                            </View>
                        :
                            <WebView
                                source={{uri: this.state.url}}
                                //错误提示
                                onError={this._showError.bind(this)}
                                //加载效果
                                startInLoadingState={true}
                            />
                }

            </View>
        );
    }

    _showError(){
        this.setState({
            isError: true
        })
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },

    errorInfoStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

module.exports = SelectAddWebView;