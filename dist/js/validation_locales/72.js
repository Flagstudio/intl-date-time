webpackJsonp([12],{"+/GF":function(n,t,r){var e;e=function(){"use strict";var n,t={name:"ru",messages:{_default:function(n){return"Значение поля "+n+" недопустимо."},after:function(n,t){var r=t[0];return"В поле "+n+" должна быть дата после "+(t[1]?"или равная ":"")+r+"."},alpha:function(n){return"Поле "+n+" может содержать только буквы."},alpha_dash:function(n){return"Поле "+n+" может содержать только буквы, цифры и дефис."},alpha_num:function(n){return"Поле "+n+" может содержать только буквы и цифры."},alpha_spaces:function(n){return"Поле "+n+" может содержать только буквы и пробелы."},before:function(n,t){var r=t[0];return"В поле "+n+" должна быть дата до "+(t[1]?"или равная ":"")+r+"."},between:function(n,t){return"Поле "+n+" должно быть между "+t[0]+" и "+t[1]+"."},confirmed:function(n,t){return"Поле "+n+" не совпадает с "+t[0]+"."},credit_card:function(n){return"Поле "+n+" должно быть действительным номером карты"},date_between:function(n,t){return"Поле "+n+" должно быть между "+t[0]+" и "+t[1]+"."},date_format:function(n,t){return"Поле "+n+" должно быть в формате "+t[0]+"."},decimal:function(n,t){void 0===t&&(t=[]);var r=t[0];return void 0===r&&(r="*"),"Поле "+n+" должно быть числовым и может содержать"+("*"===r?" десятичные числа":" "+r+" десятичных чисел")+"."},digits:function(n,t){return"Поле "+n+" должно быть числовым и точно содержать "+t[0]+" цифры."},dimensions:function(n,t){return"Поле "+n+" должно быть "+t[0]+" пикселей на "+t[1]+" пикселей."},email:function(n){return"Поле "+n+" должно быть действительным электронным адресом."},excluded:function(n){return"Поле "+n+" должно быть допустимым значением."},ext:function(n,t){return"Поле "+n+" должно быть действительным файлом. ("+t.slice(0)+")"},image:function(n){return"Поле "+n+" должно быть изображением."},included:function(n){return"Поле "+n+" должно быть допустимым значением."},integer:function(n){return"Поле "+n+" должно быть целым числом."},ip:function(n){return"Поле "+n+" должно быть действительным IP-адресом."},length:function(n,t){var r=t[0],e=t[1];return e?"Длина поля "+n+" должна быть между "+r+" и "+e+".":"Длина поля "+n+" должна быть "+r+"."},max:function(n,t){return"Поле "+n+" не может быть более "+t[0]+" символов."},max_value:function(n,t){return"Поле "+n+" должно быть "+t[0]+" или менее."},mimes:function(n,t){return"Поле "+n+" должно иметь допустимый тип файла. ("+t.slice(0)+")"},min:function(n,t){return"Поле "+n+" должно быть не менее "+t[0]+" символов."},min_value:function(n,t){return"Поле "+n+" должно быть "+t[0]+" или больше."},numeric:function(n){return"Поле "+n+" должно быть числом."},regex:function(n){return"Поле "+n+" имеет ошибочный формат."},required:function(n){return"Поле "+n+" обязательно для заполнения."},size:function(n,t){return"Поле "+n+" должно быть меньше, чем "+function(n){var t=1024,r=0==(n=Number(n)*t)?0:Math.floor(Math.log(n)/Math.log(t));return 1*(n/Math.pow(t,r)).toFixed(2)+" "+["Byte","KB","MB","GB","TB","PB","EB","ZB","YB"][r]}(t[0])+"."},url:function(n){return"Поле "+n+" имеет ошибочный формат URL."}},attributes:{}};return"undefined"!=typeof VeeValidate&&VeeValidate.Validator.localize(((n={})[t.name]=t,n)),t},n.exports=e()}});