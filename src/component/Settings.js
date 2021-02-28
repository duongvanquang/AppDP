import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import CartActions from './redux/cart'



const person = require('./person.png')
const persons = require('./person.png')
class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  renderItem = (uri = {}, title) => {
    return (
      <View style={{ flex: 0.7, flexDirection: 'column', justifyContent: 'space-evenly' }}>
        <View style={{ flexDirection: 'row' }}>
          <Image
            style={{ width: 50, height: 50, margin: 10 }}
            source={person} />
          <Text style={{ color: 'red', fontSize: 15 }}>{title}</Text>

        </View>
      </View>
    );
  }

  render() {
    const { userName } = this.props
    return (
      <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#DCDCDC' }}>
        <View style={{
          flex: 0.2, backgroundColor: 'red',
          alignContent: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          marginHorizontal: 10,
          justifyContent: 'space-evenly',
          borderWidth: 1, borderRadius: 10,
          margin: 5
        }}>
          <Image
            style={{ width: 100, height: 100, resizeMode: 'contain' }}
            source={persons}
          />
          <Text style={{
            color: 'white', fontSize: 25,
            fontWeight: 'bold', marginTop: 20
          }}>{userName}</Text>
        </View>
        <View style={{ margin: 10, flex: 0.7, backgroundColor: 'white', justifyContent: 'space-evenly', marginHorizontal: 5 }}>
          <ScrollView>
            {this.renderItem('persons', '.....')}
            {this.renderItem('person', '..............')}
            {this.renderItem('person', '..............')}
            {this.renderItem('person', '..............')}
            {this.renderItem('person', '..............')}
            {this.renderItem('person', '..............')}
            {this.renderItem('person', '..............')}
            {this.renderItem('person', '..............')}
          </ScrollView>
        </View>
        <View style={{ flex: 0.1, alignContent: 'center', justifyContent: 'center', alignItems: 'center', }}>
          <TouchableOpacity 
          onPress = {() =>{
            this.props.navigation.navigate('Đăng nhập')
          }}
          activeOpacity = {0.2}
          >
            <Text style={{ color: 'red', fontSize: 20 }}> Đăng Xuất </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return ({
    userName: state.cart.userName
  });
};
const mapDispatchToProps = (dispatch) => { //eslint-disable-line
  return ({
    dispatch,
    addCart: (product) => (dispatch(CartActions.addCart(product))),
  });
};
export default connect(mapStateToProps, mapDispatchToProps)(Settings);
