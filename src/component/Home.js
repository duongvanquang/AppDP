import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Profile from './Profile';
import { connect } from 'react-redux';
import CartActions from './redux/cart'
const axios = require('axios')

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  renderProduct = ({ item }) => {
    const { navigation } = this.props
    return (<Profile navigation={navigation} item={item} />)
  }
  componentDidMount() {
    const { setProduct } = this.props
    axios.get('https://appdatphong.herokuapp.com/AppDP')
      .then(function (response) {
        console.log(response.data.AppDP);
        setProduct(response.data.AppDP)
      })
      .catch(function (error) {
        console.log(error)
      })
      .then(function () {

      });
  }
  render() {
    const { products } = this.props
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
          <TouchableOpacity
            activeOpacity={0.2}
            style={{
              flexDirection: 'row',
              height: 40,
              width: 250,
              marginTop: 2,
              marginHorizontal: 5,
              borderWidth: 0.4,
              borderRadius: 4,
              backgroundColor: 'white',
            }}>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('Filter')
          }}>
            <Image
              style={{
                height: 40,
                width: 30
              }}
              source={{ uri: 'https://img.icons8.com/nolan/2x/search.png' }}
            />
          </TouchableOpacity>
        </View>
        <FlatList
          style={styles.viewlatlist}
          data={products}
          renderItem={this.renderProduct}
        //keyExtractor={(Profile) => Profile.id.toString()}
        />

      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return ({
    products: state.cart.products,

  });
};
const mapDispatchToProps = (dispatch) => { //eslint-disable-line
  return ({
    dispatch,
    addCart: (product) => (dispatch(CartActions.addCart(product))),
    setProduct: (product) => (dispatch(CartActions.setProduct(product)))
  });
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
const styles = StyleSheet.create({
  viewlatlist: {
    flex: 1,
    marginHorizontal: 5,
    backgroundColor: '#DCDCDC'
  }
})
