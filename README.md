# FDEV-SIFRE

Çok basit bir şekilde, kendi şifrenizi oluşturun.


[![](http://img.shields.io/npm/v/fdev-sifre.svg) ![](http://img.shields.io/npm/dm/fdev-sifre.svg)](https://www.npmjs.org/package/fdev-sifre)


## Kurulum

    $ npm install fdev-sifre

## Kullanım


```javascript
const sifre = require("fdev-sifre");

let sifrem = sifre({
    uzunluk:10,
    sayı: 'var'
})

console.log(sifrem)
```
