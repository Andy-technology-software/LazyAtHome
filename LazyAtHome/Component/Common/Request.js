/**
 * Created by lingnet on 2017/6/23.
 */
'use strict'

import queryString from 'query-string';
import _ from 'lodash';
import config from './Config';

var Request = {}

Request.get = function (url, params) {
    if (params) {
        url += '?' + queryString.stringify(params)
    }
    return fetch(url)
        .then((response) => response.json())
        // .then((response) => Mock.mock(response))
},

    Request.post = function (url, body) {
        var options = _.extend(config.header,{
            body: JSON.stringify(body)
        })

        return fetch(url, options)
            .then((response) => response.json())
            // .then((response) => Mock.mock(response))
    },

    module.exports = Request