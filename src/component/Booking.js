import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { connect } from 'react-redux';

class Booking extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  renderProduct = ({ item }) => {
    return (
      <View style={styles.container}>
        <View style={styles.containerText}>
          <Text style={styles.textTitle}>Những phòng cần thanh toán</Text>
        </View>
        <View style = {styles.ViewTitle}>
          <Text style = {styles.textKK}>{item.map(i => i.title.s). join(',')}</Text>
        </View>
      </View>
    )

  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#A9F5F2' }}>
        <FlatList
          style={{ flex: 1 }}
          data={this.props.thongbaos}
          renderItem={this.renderProduct}
          ListHeaderComponent={() => (<View height={5} />)}
          ListFooterComponent={() => (<View height={5} />)}
        />
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return ({
    thongbaos: state?.cart?.thongbaos
  });
};
const mapDispatchToProps = (dispatch) => {
  return ({
    dispatch,
  });
};
export default connect(mapStateToProps, mapDispatchToProps)(Booking)

const styles = StyleSheet.create({
  container: {
    flex: 1, flexDirection: 'column',
    justifyContent: 'center', alignItems: 'center'
  },
  containerText: {
    backgroundColor: 'white', width: 300,
    height: 60, justifyContent: 'center',
    alignItems: 'center', borderRadius: 10, marginTop: 20, shadowOffset: {
      width: 5, height: 10
    },
    shadowColor: 'black',
    shadowOpacity: 0.5,
  },
  textTitle: {
    fontSize: 19, textAlign: 'center', color: 'blue',
    shadowOffset: {
      width: 5, height: 10
    },
    shadowColor: 'black',
    shadowOpacity: 0.5,
  },
  ViewTitle:{
    marginTop:20,backgroundColor:'white',width: 300,
    height: 100, justifyContent: 'center',
    alignItems: 'center', borderRadius: 10, marginTop: 20, shadowOffset: {
      width: 5, height: 10},
      shadowColor: 'black',
    shadowOpacity: 0.5,
    
  },
    textKK:
    {
      fontSize: 19, textAlign: 'center', color: 'red',
    shadowOffset: {
      width: 5, height: 10
    },
    shadowColor: 'black',
    shadowOpacity: 0.5,
    }
  
})

