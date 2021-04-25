import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './style';

export default App = () => {
  /*
    Değişken ve Sabitler 

    değişken let 
    sabit const 

    let sayi;

    isimlendirme kuralları

    1- türkçe karakter (ıçşüöğ kullanılamaz), boşluk ve özel karakter (*?/&%$) içeremez
    2- rakam ile başlamaz
    3- yazılım dili için kullnılan özel terimleri değiken veya sabit isimlendrimede kullanamayız (bool, not, null)
    4- case sensitive (büyğk küçük harf duyarlılığı babaadi ile babaAdi aynı değildir. iki farklı değişkendir!) 

    Notasyonlar 
    Camel  (değişken ve metot tanımlarken) babaAdi veya babaDogumTarihi
    Pascal ( class - module tanımlarken kulanırız) FaktoriyelGetir OgrenciEkle
    Operatörler

    Atama Operatörü
    = += -= *= /= %=

    Aritmetik Operatörler
    + - * / %
    
    Mantıksal Operatörler

    ve veya değil 
    && || ! 

    let evliMi=true
    !evliMi

    Karşılaştırma Operatörleri

    == != <= >=

    arttırma ve azaltma Operatörleri

    i++ ( i değişkenini 1 arttırır) i-- (i değişkenini 1 azaltır!)

    Karar İfadeleri

    if else 
    switch case

    Döngüler

    let sayiListe=[5,20,30,50,43]
    
    
    */

  let randomSayi = Math.floor(Math.random() * 10);

  const faktoriyel = value => {
    let f = 1;
    for (let index = 1; index <= value; index++) {
      f *= index;
    }
    return f;
  };

  const tekMiCiftMi = value => {
    if (value % 2 == 0) {
      return 'Çift Sayıdır!';
    } else {
      return 'Tek Sayıdır!';
    }
  };

  let list = [];

  for (let index = 0; index < 10; index++) {
    list.push(Math.floor(Math.random() * 100));
  }

  for (let index = 0; index < list.length; index++) {
    console.log(index + '. eleman: ' + list[index]);
  }

  for (const sayi in list) {
    console.log(sayi);
  }

  return (
    <View style={{backgroundColor: '#f00', flex: 1}}>
      <Text style={styles.textStyle}>
        {randomSayi}! = {faktoriyel(randomSayi)}
      </Text>

      <Text style={styles.textStyle}>
        {randomSayi} bir {tekMiCiftMi(randomSayi)}
      </Text>

      <Text style={styles.textStyle}>
        {randomSayi % 2 == 0
          ? randomSayi + ' Çift Sayıdır'
          : randomSayi + ' Tek Sayıdır!'}
      </Text>
      {list.map((value) => (
        <Text style={styles.textStyle}>{value}</Text>
      ))}
    </View>
  );
};
