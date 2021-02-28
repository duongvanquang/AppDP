import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import CartActions from './redux/cart'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",

    };
  }
  componentDidCatch(){
    const setProduct = this.props
    axios.get('https://appdatphong.herokuapp.com/AppDP')
    .then(function(response){
        console.log(response.data.Login)
        setProduct(response.data.Login)
    })
    .catch(function(error){
        console.log(error)
    })
    .then(function (){

    })
}
  render() {
    const { username } = this.state
    return (
      <View style={{
        flex: 0.3,
        width: '100%',
        height: 150,
        justifyContent: 'space-evenly'
      }} >
        <TextInput
          underlineColorAndroid="transparent"
          placeholder="Etermail"
          style={{
            height: 60,
            borderWidth: 1,
            marginHorizontal: 10,
            paddingHorizontal: 10,
            fontSize: 20
          }}
          value={username}
          onChangeText={(username) =>
            this.setState({ username: username })
          }
        />
        <TextInput
          underlineColorAndroid="transparent"
          placeholder="password"
          secureTextEntry={true}
          style={{
            height: 60,
            borderWidth: 1,
            marginHorizontal: 10,
            paddingHorizontal: 10,
            fontSize: 20
          }}
          onChangeText={(password) =>
            this.setState({ password: password })
          }
        />
        <TouchableOpacity
          onPress={() => {
            const { setUserName } = this.props
            setUserName(username)
            this.props.navigation.replace("Trang chủ")
          }}>

          <View style={{
            backgroundColor: 'blue',
            marginHorizontal: 10,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center', paddingHorizontal: 10
          }}>
            <Text style={{ color: "black", fontSize: 20, justifyContent: 'center' }}> Đăng nhập </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("ĐĂNG KÝ")
          }} >
          <View style={{
            backgroundColor: 'pink',
            marginHorizontal: 10,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center', paddingHorizontal: 10
          }}>
            <Text style={{ color: "black", fontSize: 20, justifyContent: 'center' }}> ĐĂNG KÝ </Text>
          </View>
          </TouchableOpacity>
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
          setProduct: (product) => (dispatch(CartActions.setProduct(product))),
          setUserName: userName => dispatch(
      CartActions.setUserName(userName)
    ),
  });
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);