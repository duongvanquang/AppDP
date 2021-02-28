import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import CartActions from './redux/cart'

 class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  renderItem = (title, number) => {
    const choose = this.state[number]
    return (
      <View style={{ flexDirection: 'row', borderWidth: 1, justifyContent: 'space-between', borderBottomWidth: 1, margin: 5 }}>
        <View style={{ flexDirection: 'row', alignContent: 'center', justifyContent: 'space-between' }}>
          <Text style={{ fontSize: 20 }}>{title}</Text>
        </View>
        <TouchableOpacity
          style={{
            borderRadius: 15,
            width: 30,
            justifyContent: 'center',
            alignItems: 'center',
            height: 30,
            borderWidth: 2,
            marginTop: 10,
            borderColor: 'gray'
          }}
          onPress={() => {
            this.setState({ [number]: !choose })
          }}>{choose && <View style={{
            borderRadius: 10,
            backgroundColor: 'blue',
            width: 20,
            height: 20,
          }}></View>}
        </TouchableOpacity>

      </View>
    );
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <View style={{ flex: 1, paddingHorizontal: 15 }}>
            {this.renderItem('Tất cả', 'all')}
            {this.renderItem('khách sạn giá Vip','Vip')}
            {this.renderItem('Khách sạn giá Thường','Thuong')}
          </View>
        </ScrollView>
        <TouchableOpacity
          style={{
            backgroundColor: 'green',
            height: 60,
            justifyContent: 'center',
            alignItems: 'center'
          }}
          onPress={() => {
            const { all ,Vip, Thuong} = this.state
            this.props.filterMode({ all, Vip, Thuong})
            this.props.navigation.navigate('Trang chủ')
          }}>
          <Text style={{ color: 'red', fontSize: 30 }}> Xac Nhan </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return ({
    cart: state?.cart?.cart

  });
};
const mapDispatchToProps = (dispatch) => { //eslint-disable-line
  return ({
    filterMode: (product) => (dispatch(CartActions.filterMode(product)))
  });
};
export default connect(mapStateToProps, mapDispatchToProps)(Filter)
