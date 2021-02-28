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
    const { Voucher = [], title, price, code } = item
    return (
      <View style={{ flex: 1, }}>
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
      </View>
    );
  }
}
const { height, width } = Dimensions.get('screen')
const widthImage = Math.round(width / 1)
const heightImage = Math.round(width / 1.3)

const styles = StyleSheet.create({
  imagessss: {
    width: widthImage,
    height: heightImage,
    justifyContent: 'center',
    borderRadius: 10

  }

})
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
