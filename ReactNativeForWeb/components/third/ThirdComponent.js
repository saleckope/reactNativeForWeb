import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  Image,
  StyleSheet,
} from 'react-native';

export class ThirdComponent extends Component {
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
        <View style={styles.listButton} />
        <Text>
          <Text style={styles.boldText}>{ `${text.title}:` }</Text>
          { text.desc }
        </Text>
      </View>
    );
  }

  render() {
    const list = [
      { title: 'Az eredmény kiszámíthatósága', desc: 'Mindig van az igazság egyik forrása, a bolt, anélkül, hogy zavartan tudnánk arról, hogyan szinkronizáljuk az aktuális állapotot az alkalmazásokkal és az alkalmazások más részeivel.' },
      { title: 'Karbantarthatóság', desc: 'A kiszámítható eredmény és a szigorú struktúra megkönnyíti a kód fenntartását.' },
      { title: 'Szervezet', desc: 'A Redux szigorúbb a kód megtervezésénél, ami következetesebbé és egyszerűbbé teszi a kódot a csapat számára.' },
      { title: 'Server renderelés', desc: 'Ez nagyon hasznos, különösen a kezdeti rendereléshez, így jobb felhasználói élményhez vagy keresőoptimalizáláshoz. Csak adja át a kiszolgálón létrehozott boltot az ügyfél oldalára.' },
      { title: 'Fejlesztői eszközök', desc: 'A fejlesztők valós időben nyomon követhetik az alkalmazásban zajló összes dolgot, az akcióktól az állami változásokig.' },
      { title: 'Közösségi és ökoszisztéma', desc: 'Ez óriási plusz, ha tanulni, vagy bármilyen könyvtárat vagy keretet használni. A Redux mögött álló közösség még vonzóbbá teszi a használatát.' },
      { title: 'A tesztelés egyszerű', desc: 'A tesztelhető kód elsõ szabálya olyan kis függvények írása, amelyek csak egy dolog, és amelyek függetlenek. A Redux kódja főként olyan funkciók, amelyek csak: kis, tiszta és elszigetelt.' },
    ];

    const imageURL = 'https://camo.githubusercontent.com/9de527b9432cc9244dc600875b46b43311918b59/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6d656469612d702e736c69642e65732f75706c6f6164732f3336343831322f696d616765732f323438343739302f415243482d5265647578322d657874656e6465642d7265616c2d6465636c657261746976652e676966';

    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>
          Redux
        </Text>
        <Text style={styles.welcome}>
        A Redux egy nyílt forráskódú JavaScript könyvtár, amelyet az alkalmazásállapot kezelésére terveztek.
        Ez elsősorban (de nem kötelezően) a React-tal együtt használható a felhasználói felületek felépítéséhez.
        </Text>
        <Image
          source={{ uri: imageURL }}
          style={styles.image}  
        />
        <Text style={styles.subtitle2}>Jellemzői</Text>
        { this.renderClientServerList(list) }
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
    width: 400,
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
    marginBottom: 10,
  },
  listButton: {
    width: 6,
    height: 6,
    backgroundColor: 'black',
    borderRadius: 20,
    marginRight: 10,
  },
  boldText: {
    fontWeight: 'bold',
  },
});