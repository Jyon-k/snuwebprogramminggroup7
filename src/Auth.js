/*
 * Authentication module
 *
 * Hook authentication key automatically and add it to header.
 */
/* eslint-disable react/jsx-filename-extension */

class Auth {
    login = (__id, __psw) => {
        return new Promise((resolve) => {
            var request = require('request');
            var loginData = {
                id: __id,
                psw: __psw
            }
            request.post({
                url: 'http://localhost:3001',
                form: loginData
            }, function (err, res) {
                if (err) console.log(err)
                else {
                    resolve(res.body);
                }
            });
        })
    };

    register = (checkBoxNumber, ocrNumber) => {
        return new Promise((resolve) => {
            var request = require('request');
            var registerData = {
                cb: checkBoxNumber,
                ocr: ocrNumber
            }
            request.post({
                url: 'http://localhost:3001',
                form: registerData
            }, function (err, res) {
                if (err) console.log(err)
                else resolve(res.body.body);
            });
        })
    }
}

export default Auth;