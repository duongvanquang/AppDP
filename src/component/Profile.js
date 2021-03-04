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
    const Divider = (props) => {
      return <View {...props}>
        <View style={styles.line}></View>
        <Text style={styles.textOr}> OR </Text>
        <View style={styles.line}></View>
      </View>
    }
    return (
      <View style={{ flex: 1 }}>
        <ScrollView
          scrollEventThrottle={16}>
          <View style={{ flex: 1, paddingTop: 20 }}>
            <Text style={styles.textscv}> What can we help you find ? </Text>
          </View>
          <View style={styles.viewImage}>
            <ScrollView horizontal={true}>
              {posters.map(word => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      this.props.navigation.navigate('Detail', { item: word })
                    }}>
                    <View style={styles.Image}>
                      <Image
                        source={{ uri: word.s }}
                        style={styles.image}
                      />
                    </View>
                  </TouchableOpacity>
                )
              })}
            </ScrollView>
          </View>
          <View style={{ flex: 1, marginTop: 5 }}>
            <Text style={styles.textTitle}> Gia Vip</Text>
          </View>
        </ScrollView>
        <Divider style={styles.divider}></Divider>
        <View style={styles.viewImage}>
          <ScrollView horizontal={true}>
            {posterV.map(word => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.navigate('Detail', { item: word })
                  }}>
                  <View style={styles.Image}>
                    <Image
                      source={{ uri: word.s }}
                      style={styles.image}
                    />
                  </View>
                </TouchableOpacity>
              )
            })}
          </ScrollView>
        </View>
        <View style={{ flex: 1, marginTop: 20 }}>
          <Text style={styles.textTitle}> Gia Thuong</Text>
        </View>
        <View style={styles.viewImage}>
          <ScrollView horizontal={true}>
            {Voucher.map(word => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.navigate('Voucher', { item: word })
                  }}>
                  <View style={styles.Image}>
                    <Image
                      source={{ uri: word.s }}
                      style={styles.image}
                    />
                  </View>
                </TouchableOpacity>
              )
            })}
          </ScrollView>
        </View>
        <View style={{ flex: 1, marginTop: 20 }}>
          <Text style={styles.textTitle}> Voucher </Text>
        </View>
      </View>
    );
  }
}
const { height, width } = Dimensions.get('screen')
const heightImage = Math.round(width / 2)
const widthImage = Math.round(width / 2)

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

  image: {
    width: widthImage,
    height: heightImage,
    alignSelf: 'center',
    borderRadius: 10,
    justifyContent: 'space-evenly',
    marginHorizontal: 10
  },
  textscv: {
    fontSize: 24, fontWeight: '500',
    paddingHorizontal: 20,
    shadowOpacity: 0.5,
    shadowColor: 'black',
    shadowOffset: {
      width: 3, height: 6
    }
  },
  viewImage: {
    marginLeft: 20,
    borderWidth: 0.5,
    borderColor: '#dddddd',
    marginTop: 20,
    width: null,
    height: 300,
    shadowOpacity: 0.5,
    shadowColor: 'black',
    shadowOffset: {
      width: 3, height: 6,
    },
    flexDirection: 'row', justifyContent: 'center'
  },
  viewTextTitle: {
    flex: 1,
    paddingLeft: 10,
    paddingTop: 20
  },
  textTitle: {
    fontSize: 18, textAlign: 'center',
    color: 'rgb(234,97,97)'
  },
  line: {
    height: 1,
    flex: 2,
    backgroundColor: 'black'
  },
  divider: {
    flexDirection: 'row',
    width: 280,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 80

  },
  Image: {
    marginTop: 20,
    backgroundColor: 'white',
    height: 250,
    shadowOffset: {
      width: 5, height: 10
    },
    shadowColor: 'black',
    shadowOpacity: 0.5,
    borderRadius: 6,
    margin: 10,
  }

})
