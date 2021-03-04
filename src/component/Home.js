import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Platform, StatusBar } from 'react-native';
import { FlatList, ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import Profile from './Profile';
import Ionicons from 'react-native-vector-icons/Ionicons';
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
    this.startHeaderHeight = 80
    if (Platform.OS == 'android') {
      this.startHeaderHeight = 100 + StatusBar.currentHeight
    }
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
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Filter')
            }}
            style={styles.containerView}>
            <Ionicons
              style={{ marginRight: 10 }}
              color={'#CCCC66'}
              size={30}
              name="ios-search-outline" />
            <TextInput
              underlineColorAndroid="transparent"
              placeholder="Search"
              placeholderTextColor="grey"
              style={{ flex: 1, fontWeight: '500', backgroundColor: 'white' }}
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
    flex: 0.9,
    backgroundColor: 'white',
    
  },
  container: {
    justifyContent: 'center',
    flex: 0.2,
    height: this.startHeaderHeight,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#dddddd'

  },
  containerView: {
    flexDirection: 'row', padding: 10,
    backgroundColor: 'white',
    marginHorizontal: 20,
    shadowOffset: { width: 0, height: 0 },
    shadowColor: 'black',
    shadowOpacity: 0.2,
    elevation: 1,
    marginTop: Platform.OS == 'android' ? 30 : null
  }
})

  // < View style = {{ flexDirection: 'row', justifyContent: 'flex-start' }}>
  //         <TouchableOpacity
  //           activeOpacity={0.2}
  //           style={{
  //             flexDirection: 'row',
  //             height: 40,
  //             width: 250,
  //             marginTop: 2,
  //             marginHorizontal: 5,
  //             borderWidth: 0.4,
  //             borderRadius: 4,
  //             backgroundColor: 'white',
  //           }}>
  //         </TouchableOpacity>
  //         <TouchableOpacity onPress={() => {
  //           this.props.navigation.navigate('Filter')
  //         }}>
  //           <Image
  //             style={{
  //               height: 40,
  //               width: 30
  //             }}
  //             source={{ uri: 'https://img.icons8.com/nolan/2x/search.png' }}
  //           />
  //         </TouchableOpacity>
  //       </View >
