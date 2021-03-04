import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
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
  render() {
    const { userName } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.up}>
          <Ionicons
            style={{
              shadowOffset: { width: 4, height: 10 },
              shadowColor: 'black',
              shadowOpacity: 0.5,
              elevation: 3,
            }}
            size={100}
            color={'#FF9999'}
            name="person-outline">
          </Ionicons>
          <Text style={styles.textTitle}>{userName}</Text>
        </View>
        <ScrollView>
          <View style={styles.down}>
            <View style={styles.ass}>
              <Ionicons
                size={80}
                color={'#FF0000'}
                name="ios-mail-open-outline">
              </Ionicons>
              <View style={styles.textbutton}>
                <Text style={styles.textdown}> Thư Điện Tử</Text>
              </View>
            </View>
            <View style={styles.ass}>
              <Ionicons
                size={80}
                color={'#FFCC33'}
                name="person-circle-outline">
              </Ionicons>
              <View style={styles.textbutton}>
                <Text style={styles.textdown}>Thông cá nhân</Text>
              </View>
            </View>
            <View style={styles.ass}>
              <Ionicons
                size={80}
                color={'#99FF33'}
                name="ios-calculator-outline">
              </Ionicons>
              <View style={styles.textbutton}>
                <Text style={styles.textdown}>Số Điện Thoại</Text>
              </View>
            </View>
            <View style={styles.ass}>
              <Ionicons
                size={80}
                color={'#FF33CC'}
                name="ios-fitness-outline">
              </Ionicons>
              <View style={styles.textbutton}>
                <Text style={styles.textdown}>Sở Thích </Text>
              </View>
            </View>
            <View style={styles.ass}>
              <Ionicons
                size={80}
                color={'#0000DD'}
                name="ios-partly-sunny-outline">
              </Ionicons>
              <View style={styles.textbutton}>
                <Text style={styles.textdown}>Thời Tiết</Text>
              </View>
            </View>
          </View>
        </ScrollView>
        <View style={styles.Out}>
          <TouchableOpacity
            style={styles.opacity}
            activeOpacity={0.3}
            onPress={() => {
              this.props.navigation.navigate("Đăng nhập")
            }}>
            <Text style={styles.textTitleOut}>Đăng Xuất</Text>
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
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  up: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#CCFFFF',
    shadowOffset: { width: 4, height: 10 },
    shadowColor: 'black',
    shadowOpacity: 0.5,
    elevation: 3,
    marginTop: Platform.OS == 'android' ? 30 : null

  },
  textTitle: {
    color: '#0000CC',
    fontSize: 25,
    textAlign: 'center',
    shadowOffset: { width: 4, height: 10 },
    shadowColor: 'black',
    shadowOpacity: 0.5,
    elevation: 3,
  },
  down: {
    flex: 8,
    flexDirection: 'column',
  },
  Out: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  opacity: {
    width: 300,
    height: 45,
    borderRadius: 6,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(221,97,97)'
  },
  textTitleOut: {
    color: 'white',
    fontSize: 20
  },
  ass: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 20,
    borderColor: '#dddddd',
    shadowOffset: { width: 4, height: 10 },
    shadowColor: 'black',
    shadowOpacity: 0.5,
    elevation: 3,
  },
  textbutton: {
    marginLeft: 20
  },
  textdown: {
    color: 'rgb(234,97,97)',
    fontSize: 20
  }

})

