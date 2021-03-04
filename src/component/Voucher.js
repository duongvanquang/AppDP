import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { View, Text, Image, StyleSheet } from 'react-native';
import Clipboard from '@react-native-community/clipboard';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import CartActions from './redux/cart'

class Voucher extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    const { route } = this.props
    const item = route?.params?.item
    const {title, price, code } = item
    return (
      <View style={styles.container}>
        <View style={styles.containerImage}>
          <Image
            style={styles.textImage}
            source={{ uri: item.s }}
          />
        </View>
        <View style={styles.containerTitle}>
          <Text style={styles.textTitle}>{title}</Text>
        </View>
        <View style={styles.containerTitle}>
          <Text style={styles.textTitle}>{price}</Text>
        </View>
        <View style={styles.containerTitle}>
          <TouchableOpacity onPress={() => 
            Clipboard.setString(JSON.stringify(item))
          }>
            <Text style={styles.textTitle}>CoppyVoucher</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.conyainerOut}>
          <Text style={styles.textOut}>
            Chúc Quý Khách Có Một Kỳ Nghỉ Vui Vẻ, Hạnh Phúc Bên Người Thân
            </Text>
        </View>
      </View>
    );
  }
}
const { height, width } = Dimensions.get('screen')
const widthImage = Math.round(width / 2)
const heightImage = Math.round(width / 2)

const mapStateToProps = (state) => {
  return ({
    cart: state?.cart?.cart,
  })
}
const mapDispatchToProps = (dispatch) => {
  return ({
    addCart: (product) => (dispatch(CartActions.addCart(product))),
  });
}
export default connect(mapStateToProps, mapDispatchToProps)(Voucher);

const styles = StyleSheet.create({
  container: {
    flex: 1, flexDirection: 'column',
  },
  textImage: {
    width: widthImage,
    height: heightImage,
    marginTop: 20,
    backgroundColor: 'white', marginBottom: 10, borderRadius: 10
  },
  containerImage: {
    flexDirection: 'row',
    backgroundColor: 'white', shadowOffset: {
      width: 5, height: 10
    },
    shadowColor: 'black',
    shadowOpacity: 0.5,
    justifyContent: 'center',
    borderRadius: 20,
    marginTop: 20
  },
  containerTitle: {
    marginTop: 20,
    backgroundColor: 'white',
    width: null, height: 60,
    justifyContent: 'center',
    alignItems: 'center', marginHorizontal: 20, shadowOffset: {
      width: 5, height: 10
    },
    shadowColor: 'black',
    shadowOpacity: 0.5,
    justifyContent: 'center',
    borderRadius: 10,
  },
  textTitle: {
    fontSize: 18, color: '#990000', textAlign: 'center',
    shadowOffset: {
      width: 5, height: 10
    },
    shadowColor: 'black',
    shadowOpacity: 0.5,
  },
  conyainerOut: {
    flex:0.8,
    width:null,height:40,
    backgroundColor: 'white',
      marginTop: 100,
    shadowOffset: {
      width: 5, height: 10
    },
    shadowColor: 'black',
    shadowOpacity: 0.5,
    borderRadius: 20, justifyContent: 'center', 
    alignItems: 'center', marginHorizontal: 10
  },
  textOut: {
    fontSize: 20, textAlign: 'center',
    marginHorizontal: 10, color: '#0000FF',
    shadowOffset: {
      width: 5, height: 10
    },
    shadowColor: 'black',
    shadowOpacity: 0.5,
  }
})

{/* <View style={{ flex: 1, }}>
        <View style={{ flex: 0.4, backgroundColor: 'white' }}>
          <Image
            source={{ uri: item.s }}
            style={styles.imagessss} />
        </View>
        <View style={{ flex: 0.6, backgroundColor: '#81F7F3' }}>
          <View style={{ borderWidth: 1, margin: 5 }}>
            <Text style={{ margin: 20, fontSize: 20 }}>{title}</Text>
          </View>
          <View style={{ borderWidth: 1, margin: 5 }}>
            <Text style={{ margin: 20, fontSize: 20 }}>{price}</Text>
          </View>
          <View style={{ borderWidth: 1, margin: 5 }}>
            <TouchableOpacity onPress = { () =>
              Clipboard.setString(JSON.stringify(item))
            }>
              <Text style={{ margin: 20, fontSize: 20 }}>CoppyVoucher</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View> */}