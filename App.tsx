import React, {type PropsWithChildren} from 'react';
import {View, StyleSheet, Text, Image, ScrollView} from 'react-native';

const App = () => {
  return (
    <ScrollView>
      <View style={styles.contenedorBanner}>
        <Image
          source={require('./src/assets/img/bg.jpg')}
          style={styles.banner}
        />
      </View>
      <View style={styles.contenedor}>
        <Text style={styles.titulo}>Que hacer en paris</Text>
        <ScrollView horizontal style={styles.scrollbarContainer}>
          <View>
            <Image
              source={require('./src/assets/img/actividad1.jpg')}
              style={styles.ciudad}
            />
          </View>
          <View>
            <Image
              source={require('./src/assets/img/actividad2.jpg')}
              style={styles.ciudad}
            />
          </View>
          <View>
            <Image
              source={require('./src/assets/img/actividad3.jpg')}
              style={styles.ciudad}
            />
          </View>
          <View>
            <Image
              source={require('./src/assets/img/actividad4.jpg')}
              style={styles.ciudad}
            />
          </View>
          <View>
            <Image
              source={require('./src/assets/img/actividad5.jpg')}
              style={styles.ciudad}
            />
          </View>
        </ScrollView>

        <Text style={styles.titulo}>Los Mejores Alojamientos</Text>
        <View>
          <View>
            <Image
              source={require('./src/assets/img/mejores1.jpg')}
              style={styles.mejores}
            />
          </View>
          <View>
            <Image
              source={require('./src/assets/img/mejores2.jpg')}
              style={styles.mejores}
            />
          </View>
          <View>
            <Image
              source={require('./src/assets/img/mejores3.jpg')}
              style={styles.mejores}
            />
          </View>
        </View>

        <Text style={styles.titulo}>Hospedaje en LA</Text>
        <View style={styles.listado}>
          <View style={styles.listadoItem}>
            <Image
              source={require('./src/assets/img/hospedaje1.jpg')}
              style={styles.mejores}
            />
          </View>
          <View style={styles.listadoItem}>
            <Image
              source={require('./src/assets/img/hospedaje2.jpg')}
              style={styles.mejores}
            />
          </View>
          <View style={styles.listadoItem}>
            <Image
              source={require('./src/assets/img/hospedaje3.jpg')}
              style={styles.mejores}
            />
          </View>
          <View style={styles.listadoItem}>
            <Image
              source={require('./src/assets/img/hospedaje4.jpg')}
              style={styles.mejores}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contenedor: {marginHorizontal: 10},
  contenedorBanner: {
    flexDirection: 'row',
  },
  banner: {
    height: 250,
    flex: 1,
  },
  titulo: {
    fontWeight: '400',
    fontSize: 24,
    marginVertical: 20,
  },
  scrollbarContainer: {
    //marginRight: -10,
  },

  ciudad: {
    width: 250,
    height: 300,
    marginRight: 10,
  },
  mejores: {
    width: '100%',
    height: 200,
    marginVertical: 5,
  },
  listado: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  listadoItem: {
    flexBasis: '49%',
  },
});

export default App;
