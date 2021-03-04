import axios from 'axios';
import React, { Component } from 'react';
import { View, Text,TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style  = {styles.container}>
        <View style = {styles.signup}>
          <Ionicons 
          color='#00CC00'
          size={100}
          name="checkmark-done-outline">
          </Ionicons>
          <Text style ={styles.textTitle}>
            Chúc Mừng bạn đã đăng ký thành công
            </Text>
        </View>
        <View style = {styles.signUpTitle}>
          <TouchableOpacity 
          onPress={()=>{
            this.props.navigation.replace("Đăng nhập")
          }}
          style={styles.containerOpacity}>
            <Text style={styles.textSU}> Đồng ý </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column',
    backgroundColor:'#CCFFCC'
  },
  signup:{
    flex:3,
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column'

  },
  signUpTitle:{
    flex:7,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'

  },
  textTitle:{
    color:'#0033FF',
    fontSize:23,
    textAlign:'center'
  },
  containerOpacity:{
    width: 300,
    height: 45,
    borderRadius: 6,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0000DD'
  },
  textSU:{
    color:'white',
    fontSize:18
  }
})
