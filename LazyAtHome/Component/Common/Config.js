/**
 * Created by lingnet on 2017/6/23.
 */
'use strict'

module.exports = {
    header:{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    },
    api:{
        base:'http://os.ehuizhan.com.cn/app/',
        // base:'http://localhost:1234/',
        FAXIANXINPIN:'find!nearby.action',
        FAXIANLIUYANBAN:'find!findguestbook.action',
        comment:'api/comments',
        signup:'api/u/signup',
        verify:'api/u/verify',
        update:'api/u/update',
        signature:'api/signature'
    }
}