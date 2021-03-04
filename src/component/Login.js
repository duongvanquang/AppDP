
import axios from 'axios';
import { connect } from 'react-redux';
import CartActions from './redux/cart'
import React, { Component } from 'react';
import {
  View, Text,
  StyleSheet, TextInput, TouchableOpacity, TouchableWithoutFeedback
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }
  componentDidCatch() {
    const setProduct = this.props
    axios.get('https://appdatphong.herokuapp.com/AppDP')
      .then(function (response) {
        console.log(response.data.AppDP)
        setProduct(response.data.AppDP)
      })
      .catch(function (error) {
        console.log(error)
      })
      .then(function () {

      })
  }
  render() {
    const { username } = this.state
    const Divider = (props) => {
      return <View {...props}>
        <View style={styles.line}></View>
        <Text style={styles.textOr}> OR </Text>
        <View style={styles.line}></View>
      </View>
    }
    return (
      <View style={styles.container}>
        <View style={styles.up}>
          <Ionicons
            color={'rgb(221,97,97)'}
            name="ios-business-outline"
            size={100}>
          </Ionicons>
          <Text style={styles.title}>
            Chào mừng bạn đến dịch vụ của công ty chúng tôi
          </Text>
        </View>
        <View style={styles.down}>
          <View style={styles.textInputContainer}>
            <TextInput
              textContentType='emailAddress'
              keyboardType='email-address'
              placeholder="Enter your Email"
              style={styles.textInput}
              value={username}
              onChangeText={(username) =>
                this.setState({ username: username })
              }
            >
            </TextInput>
          </View>
          <View style={styles.textInputContainer}>
            <TextInput
              secureTextEntry={true}
              textContentType='emailAddress'
              keyboardType='email-address'
              placeholder="Enter your password"
              style={styles.textInput}
              onChangeText={(password) =>
                this.setState({ password: password })
              }
            >
            </TextInput>
          </View>
          <TouchableOpacity
            onPress={() => {
              const body = {
                userName: '',
                password: ''
              }
              axios({
                method: 'post',
                url: 'https://appdatphong.herokuapp.com/Login',
                data: body
              })
              .then( function(response){
                console.log(response);
              })
              .catch(function(error){
                console.log(error);
              })
              const { setUserName } = this.props
              setUserName(username)
              this.props.navigation.replace("Trang chủ")
            }}
            activeOpacity={0.3}
            style={styles.loginButton}>
            <Text style={styles.loginbuttontitle}>LOGIN</Text>
          </TouchableOpacity>
          <Divider style={styles.divider}></Divider>
          <TouchableOpacity
            onPress={() => {
              const body = {
                username: '',
                password: ''
              }
              axios({
                method: 'post',
                url: 'https://appdatphong.herokuapp.com/signup',
                data: body
              })
                .then(function (response) {
                  console.log(response);
                })
                .catch(function (error) {
                  console.log(error)
                })
              this.props.navigation.navigate("Đăng ký")
            }}
            style={styles.signkButton}>
            <Text style={styles.loginbuttontitle}>Signup</Text>
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
    setProduct: (product) => (dispatch(CartActions.setProduct(product))),
    setUserName: userName => dispatch(
      CartActions.setUserName(userName)
    ),
  });
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: 'rgb(234,195,176)'

  },
  up: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  down: {
    flex: 7,
    flexDirection: 'column',
    // backgroundColor: 'green'
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  title: {
    color: 'white',
    color: 'rgb(255,119,34)',
    textAlign: 'center',
    width: 400,
    fontSize: 23
  },
  textInputContainer: {
    paddingHorizontal: 10,
    borderRadius: 6,
    marginBottom: 20,
    borderWidth: 0.2,
    backgroundColor: 'rgba(255,255,255,0.2)'
  },
  textInput: {
    width: 280,
    height: 45,
  },
  loginButton: {
    width: 300,
    height: 45,
    borderRadius: 6,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(221,97,97)'
  },
  loginbuttontitle: {
    fontSize: 18,
    color: 'white'
  },
  signkButton: {
    width: 300,
    height: 45,
    backgroundColor: '#0000FF',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  line: {
    height: 1,
    flex: 2,
    backgroundColor: 'black'
  },
  textOr: {
    flex: 1,
    textAlign: 'center'
  },
  divider: {
    flexDirection: 'row',
    width: 280,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
