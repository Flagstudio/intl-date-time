webpackJsonp([22],{"+K8c":function(n,t,r){var e;e=function(){"use strict";var n,t={name:"mn",messages:{_default:function(n){return n+"-н утга буруу байна."},after:function(n,t){return n+"-н утга "+t[0]+"-с бага "+(t[1]?"эсвэл тэнцүү ":"")+"байх ёстой."},alpha:function(n){return n+"-н утга зөвхөн үсэг агуулах боломжтой."},alpha_dash:function(n){return n+"-н утга зөвхөн үсэг, дундуур зураас, доогуур зураас агуулах боломжтой."},alpha_num:function(n){return n+"-н утга зөвхөн тоо болон үсэг агуулах боломжтой."},alpha_spaces:function(n){return n+"-н утга зөвхөн үсэг болон зай агуулах боломжтой."},before:function(n,t){return n+"-н утга "+t[0]+"-с өмнө "+(t[1]?"эсвэл тэнцүү ":"")+"байх ёстой."},between:function(n,t){return n+"-н утга зөвхөн "+t[0]+"-с "+t[1]+" -ны хооронд байх ёстой."},confirmed:function(n){return n+"-н утга буруу байна."},credit_card:function(n){return n+"-н утга зөв картын дугаар байх ёстой."},date_between:function(n,t){return n+"-н утга "+t[0]+" болон "+t[1]+"-ы хооронд байх шаардлагатай."},date_format:function(n,t){return n+"-н утга "+t[0]+" форматтай байна."},decimal:function(n,t){void 0===t&&(t=[]);var r=t[0];return void 0===r&&(r="*"),n+"-н утга зөвхөн тоо байх ба "+(r&&"*"!==r?r:"")+" бутархай тоо агуулах боломжтой."},digits:function(n,t){return n+"-н утга зөвхөн тоо байх ба яг  "+t[0]+" оронтой байна."},dimensions:function(n,t){return n+"-н хэмжээ "+t[0]+"x"+t[1]+" пикселээс хэтрэх байх шаардлагатай."},email:function(n){return n+"-н утга бодит майл байх ёстой."},excluded:function(n,t){return n+"-н утга "+t[0]+" байж болохгүй."},ext:function(n,t){return n+" заавал файл заавал "+t[0]+" форматтай байх ёстой."},image:function(n){return n+" заавал зураг байх ёстой."},included:function(n,t){return n+"-н утга заавал дараахын нэг нь байна. ("+t[0]+")"},integer:function(n){return n+"-н утга тоо байх ёстой."},ip:function(n){return n+"-н утга зөвхөн IP хаяг байна"},length:function(n,t){var r=t[0],e=t[1];return e?n+"-н урт нь "+r+" болон "+e+"-ны хооронд байна.":n+"-н урт нь "+r+" байна."},max:function(n,t){return n+"-н урт нь хамгийн ихдээ "+t[0]+" байна."},max_value:function(n,t){return n+"-н утга "+t[0]+"-с хэтрэхгүй байна."},mimes:function(n){return n+" зөвшөөрөгдөөгүй файл форматтай байна."},min:function(n,t){return n+"-н урт нь хамгийн багадаа "+t[0]+" байна."},min_value:function(n,t){return n+"-н утга "+t[0]+"-с багагүй байна."},numeric:function(n){return n+"-н утга зөвхөн тоо байна."},regex:function(n){return n+"-н утга буруу форматтай байна."},required:function(n){return n+"-н утга заавал байх ёстой."},required_if:function(n){return n+"-н утга заавал байх ёстой."},size:function(n,t){return n+" хэмжээ "+function(n){var t=1024,r=0==(n=Number(n)*t)?0:Math.floor(Math.log(n)/Math.log(t));return 1*(n/Math.pow(t,r)).toFixed(2)+" "+["Byte","KB","MB","GB","TB","PB","EB","ZB","YB"][r]}(t[0])+"-с хэтрэхгүй байна."},url:function(n){return n+" зөв URL хаяг биш байна."}},attributes:{}};return"undefined"!=typeof VeeValidate&&VeeValidate.Validator.localize(((n={})[t.name]=t,n)),t},n.exports=e()}});