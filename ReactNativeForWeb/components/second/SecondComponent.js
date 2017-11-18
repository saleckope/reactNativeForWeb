import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  Image,
  StyleSheet,
} from 'react-native';

export class SecondComponent extends Component {
  renderClientServerList(content) {
    return (
      <View style={styles.list}>
        { content.map((text, index) => this.renderListRow(text, index)) }
      </View>
    );
  }

  renderListRow(text, index) {
    return (
      <View key={index} style={styles.listRoW}>
        <View style={styles.listButton} /><Text>{ text }</Text>
      </View>
    );
  }

  render() {
    const clienList = [
      'Kéréseket, lekérdezéseket küld a szervernek',
      'A választ a szervertől fogadja.',
      'Egyszerre általában csak kisszámú szerverhez kapcsolódik',
    ];

    const clientText = '';

    const serverList = [
      'Passzív, a kliensektől várja a kéréseket',
      'A kéréseket, lekérdezéseket feldolgozza, majd visszaküldi a választ',
      'Általában nagyszámú klienshez kapcsolódik egyszerre',
      'Általában nem áll közvetlen kapcsolatban a felhasználóval',
    ];

    const serverText = 'A kiszolgáló vagy szerver (angolul server) olyan (általában nagy teljesítményű) számítógépet, illetve szoftvert jelent, ami más gépek számára a rajta tárolt vagy előállított adatok felhasználását, a kiszolgáló hardver erőforrásainak (például nyomtató, háttértárolók, processzor) kihasználását, illetve más szolgáltatások elérését teszi lehetővé;'

    const imageURL = 'http://cms.sulinet.hu/get/d/444ac096-56a6-4cee-882c-816eec227f69/1/5/b/Large/R-1-3737kep-nagy.jpg';

    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>
          Kliens és szerver
        </Text>
        <Text style={styles.subtitle}>Kliens</Text>
        <Text style={styles.welcome}>
          A kliens (angolul client) olyan számítógép amely hozzáfér egy (távoli) szolgáltatáshoz,
          amelyet egy számítógép hálózathoz tartozó másik gép nyújt.
          A kifejezést először önálló programmal nem rendelkező végkészülékekre illetve terminálokra
          alkalmazták amelyek legfontosabb szerepe az volt, hogy a hálózaton keresztül kapcsolatba lépjenek
          az időosztással működő nagyszámítógépekkel és elérhetővé tegyék azok szolgáltatásait.
        </Text>
        <Text style={styles.subtitle2}>Jellemzői</Text>
        { this.renderClientServerList(clienList) }
        <Image
          source={{ uri: imageURL }}
          style={styles.image}  
        />
        <Text style={styles.subtitle}>Szerver</Text>
        <Text style={styles.welcome}>
          { serverText }
        </Text>
        <Text style={styles.subtitle2}>Jellemzői</Text>
        { this.renderClientServerList(serverList) }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  image: {
    height: 300,
    width: 300,
    alignSelf: 'center',
    margin: 30,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  subtitle2: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 10,
  },
  list: {
    marginLeft: 10,
  },
  listRoW: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  listButton: {
    width: 6,
    height: 6,
    backgroundColor: 'black',
    borderRadius: 20,
    marginRight: 10,
  },
});