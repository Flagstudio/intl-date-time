webpackJsonp([38],{s3bG:function(e,a,t){var n;n=function(){"use strict";var e;function a(e){return e.charAt(0).toUpperCase()+e.slice(1)}var t={name:"et",messages:{_default:function(e){return a(e)+" ei oma sobivat väärtust."},after:function(e,t){var n=t[0];return a(e)+" peab olema hiljem kui "+n+"."},alpha:function(e){return a(e)+" võib sisaldada ainult tähti."},alpha_dash:function(e){return a(e)+" võib sisaldada ainult tähti, numbreid, kriipse ja alakriipse."},alpha_num:function(e){return a(e)+" võib sisaldada ainult tähti ja numbreid."},alpha_spaces:function(e){return a(e)+" võib sisaldada ainult tähti ja tühikuid."},before:function(e,t){var n=t[0];return a(e)+" peab olema varem kui "+n+"."},between:function(e,t){var n=t[0],i=t[1];return a(e)+" peab jääma vahemikku "+n+" kuni "+i+"."},confirmed:function(e){return a(e)+" on kontrollist erinev."},credit_card:function(e){return a(e)+" ei oma sobivat väärtust."},date_between:function(e,t){var n=t[0],i=t[1];return a(e)+" peab olema vahemikus "+n+" kuni "+i+"."},date_format:function(e,t){var n=t[0];return a(e)+" peab olema kujul "+n+"."},decimal:function(e,t){void 0===t&&(t=[]);var n=t[0];return void 0===n&&(n="*"),a(e)+" peab olema number ja võib sisaldada "+("*"===n?"komakohta":n+" numbrit pärast koma")+"."},digits:function(e,t){var n=t[0];return a(e)+" peab koosnema täpselt "+n+"-st numbrist."},dimensions:function(e,t){var n=t[0],i=t[1];return a(e)+" peab olema "+n+" korda "+i+" pikslit suur."},email:function(e){return a(e)+" peab olema e-maili aadress."},excluded:function(e){return a(e)+" ei oma sobivat väärtust."},ext:function(e){return a(e)+" peab olema sobiv fail."},image:function(e){return a(e)+" peab olema pilt."},included:function(e){return a(e)+" ei oma sobivat väärtust."},ip:function(e){return a(e)+" peab olema IP-aadress."},max:function(e,t){var n=t[0];return a(e)+" ei tohi olla pikem kui "+n+" tähemärki."},max_value:function(e,t){var n=t[0];return a(e)+" peab olema "+n+" või väisem."},mimes:function(e){return a(e)+" peab olema sobivat tüüpi fail."},min:function(e,t){var n=t[0];return a(e)+" peab olema vähemalt "+n+" tähemärki pikk."},min_value:function(e,t){var n=t[0];return a(e)+" peab olema "+n+" või suurem."},numeric:function(e){return a(e)+" võib sisaldada ainult numbreid."},regex:function(e){return a(e)+" pole sobival kujul."},required:function(e){return a(e)+" on nõutud väli."},size:function(e,t){var n=t[0];return a(e)+" peab olema väiksem kui "+function(e){var a=1024,t=0==(e=Number(e)*a)?0:Math.floor(Math.log(e)/Math.log(a));return 1*(e/Math.pow(a,t)).toFixed(2)+" "+["Byte","KB","MB","GB","TB","PB","EB","ZB","YB"][t]}(n)+"."},url:function(e){return a(e)+" peab olema URL."}},attributes:{}};return"undefined"!=typeof VeeValidate&&VeeValidate.Validator.localize(((e={})[t.name]=t,e)),t},e.exports=n()}});