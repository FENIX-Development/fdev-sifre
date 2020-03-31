class Sifre {
  constructor(kod) {
    this.kod = kod
  }
}

var anahtarlar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
var anahtarlar2 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'


const sifre = [
  
  new Sifre(anahtarlar)
  
];

const sifre2 = [
  
  new Sifre(anahtarlar2)
  
];

const yeniSifre = sifre[Math.floor(Math.random() * sifre.length)].kod
const yeniSifre2 = sifre2[Math.floor(Math.random() * sifre2.length)].kod


function sifreOlustur(deger) {
  
  var altyapi = ''
  
  for (var i = 0; i < deger; i++) {
    altyapi += yeniSifre[Math.floor(Math.random() * yeniSifre.length)]
  }
  
  return altyapi
  
}

function sifreOlustur2(deger) {
  
  var altyapi = ''
  
  for (var i = 0; i < deger; i++) {
    altyapi += yeniSifre2[Math.floor(Math.random() * yeniSifre2.length)]
  }
  
  return altyapi
  
}

module.exports = ({uzunluk: deger, sayı: degisken}) => {
  if(!degisken) throw new TypeError('\'sayı\' değeri fonksiyonda gerekli. \'var\' yada \'yok\' olarak belirtiniz.')
  if(degisken == 'yok') { 
    return sifreOlustur(deger)
  }
  else if(degisken == 'var') {
    return sifreOlustur2(deger)
  }
}
