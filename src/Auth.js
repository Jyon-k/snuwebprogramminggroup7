/*
 * Authentication module
 *
 * Hook authentication key automatically and add it to header.
 */
/* eslint-disable react/jsx-filename-extension */

const login = (id, psw) => {
    return new Promise((resolve) => {
        var request = require('request');
        var loginData = {
            id: id,
            psw: psw
        }
        request.post({
            url: 'http://localhost:3001',
            form: loginData,
            json: true
        }, function (err, res) {
            if (err) console.log(err)
            else resolve(res.body.body);
        });
    })
}


export default login
