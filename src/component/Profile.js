import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet, Image } from 'react-native';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import CartActions from './redux/cart'



class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    const { item } = this.props
    const { title, poster, description, posters = [], posterV = [], Voucher = [] } = item
    return (
      <View >
         <View style={{ flex: 1 }}>
          <ScrollView horizontal={true}>
            {posters.map(word => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.navigate('Detail', { item: word })
                  }}
                  activeOpacity={0.4}
                  style={styles.container}>
                  <View style={{
                    marginTop: 10,
                    justifyContent: 'space-evenly',
                    alignItems: 'center', marginHorizontal: 5,
                    marginBottom: 10
                  }}>
                    <Text style={{ color: 'red', fontSize: 20 }}>{title.s}</Text>
                  </View>
                  <Image
                    source={{ uri: word.s }}
                    style={styles.image} />
                  <View style={{ alignItems: 'center', justifyContent: 'space-evenly' }}>
                    <Text style={{ color: '#AEB404', fontSize: 20, fontWeight: 'bold' }}> Gia Vip </Text>
                    <Text style={{ color: 'blue', fontSize: 15 }}> {description.s}</Text>
                  </View>
                </TouchableOpacity>
              )
            })}
          </ScrollView>
          <ScrollView horizontal={true}>
            {posterV.map(word => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.navigate('Detail', { item: word })
                  }}
                  activeOpacity={0.4}
                  style={styles.container}>
                  <View style={{
                    marginTop: 10,
                    justifyContent: 'space-evenly',
                    alignItems: 'center', marginHorizontal: 5,
                    marginBottom: 10
                  }}>
                    <Text style={{ color: 'red', fontSize: 20 }}>{title.s}</Text>
                  </View>
                  <Image
                    source={{ uri: word.s }}
                    style={styles.image} />
                  <View style={{ alignItems: 'center', justifyContent: 'space-evenly' }}>
                    <Text style={{ color: '#AEB404', fontSize: 20, fontWeight: 'bold' }}> Gia Thuong </Text>
                    <Text style={{ color: 'blue', fontSize: 15 }}> {description.s}</Text>
                  </View>
                </TouchableOpacity>
              )
            })}
          </ScrollView>
          <ScrollView horizontal={true}>
            {Voucher.map(word => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.navigate('Voucher', { item: word })
                  }}
                  activeOpacity={0.4}
                  style={styles.container}>
                  <View style={{
                    marginTop: 10,
                    justifyContent: 'space-evenly',
                    alignItems: 'center', marginHorizontal: 5,
                    marginBottom: 10
                  }}>
                  </View>
                  <Image
                    source={{ uri: word.s }}
                    style={styles.imageVoucher} />
                  <View style={{ alignItems: 'center', justifyContent: 'space-evenly' }}>
                    <Text style={{ color: '#AEB404', fontSize: 20, fontWeight: 'bold' }}> Voucher </Text>
                  </View>
                </TouchableOpacity>
              )
            })}
          </ScrollView>
      </View>
      </View>
    );
  }
}
const { height, width } = Dimensions.get('screen')
const heightImage = Math.round(width / 1.2)
const widthImage = Math.round(width / 1.2)

const mapStateToProps = (state) => {
  return ({

  });
};
const mapDispatchToProps = (dispatch) => { //eslint-disable-line
  return ({
    dispatch,
    addCart: (product) => (dispatch(CartActions.addCart(product))),
  });
};
export default connect(mapStateToProps, mapDispatchToProps)(Profile);

const styles = StyleSheet.create({
  textOpa: {
    flex: 1,
    justifyContent: 'space-evenly',
    backgroundColor: '#DCDCDC',
  },
  texttt: {
    fontSize: 18,
    color: 'red',
    marginTop: 5,
    alignContent: 'center'
  },
  image: {
    width: widthImage,
    height: heightImage,
    alignSelf: 'center',
    borderRadius: 10,
    justifyContent: 'space-evenly',
    marginHorizontal: 10
  },
  textcc: {
    color: 'blue',
    fontSize: 20
  },
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    backgroundColor: '#DCDCDC',
    marginHorizontal: 10
  },
  imageVoucher: {
    width: 300,
    height: 150,
    borderWidth: 0.5,
    borderRadius: 10

  }

})