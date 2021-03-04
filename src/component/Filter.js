import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
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
      <View style={styles.container}>
        <View style={styles.containerView}>
          <Text style={styles.textTitle}>{title}</Text>
          <TouchableOpacity
            style={styles.viewTouchable}
            onPress={() => {
              this.setState({ [number]: !choose })
            }}>{choose && <View style={styles.viewChoose}>
            </View>}
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.containerW}>
        <ScrollView>
          <View style={{ flex: 1, paddingHorizontal: 15 }}>
            {this.renderItem('Tất cả', 'all')}
            {this.renderItem('khách sạn giá Vip', 'Vip')}
            {this.renderItem('Khách sạn giá Thường', 'Thuong')}
          </View>
        </ScrollView>
        <View style={styles.containerXN}>
          <TouchableOpacity
            style={styles.textTouchble}
            onPress={() => {
              const { all, Vip, Thuong } = this.state
              this.props.filterMode({ all, Vip, Thuong })
              this.props.navigation.navigate('Trang chủ')
            }}>
            <Text style={styles.textXN}> Xac Nhan </Text>
          </TouchableOpacity>
        </View>
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
const styles = StyleSheet.create({
  container: {
    flex: 1, flexDirection: 'column',
    justifyContent: 'space-evenly', marginTop: 10,
  },
  containerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white', height: 40, width: null,
    borderRadius: 10, borderWidth: 0.2,
    marginRight: 5, alignItems: 'center',
    shadowOffset: {
      width: 5, height: 10,

    },
    shadowColor: 'black',
    shadowOpacity: 0.5
  },
  textTitle: {
    fontSize: 18, color: 'rgb(234,97,97)',
    shadowOffset: {
      width: 3, height: 6
    },
    shadowColor: 'black',
    shadowOpacity: 0.5, marginHorizontal: 10
  },
  viewChoose: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#00FF33',
    alignItems: 'center',
    justifyContent: 'center'
  },
  viewTouchable: {
    width: 30, backgroundColor: 'blue',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    alignItems: 'center', height: 30,
    borderColor: 'gray'
  },
  containerXN: {
    flex: 0.2, justifyContent: 'flex-start', alignItems: 'center'
  },
  containerW: {
    flex: 1, backgroundColor: '#99FFCC'
  },
  textTouchble: {
    backgroundColor: 'rgb(234,97,97)',
    height: 50, width: 280,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {
      width: 3, height: 6
    },
    shadowColor: 'black',
    shadowOpacity: 0.5,
    marginHorizontal: 10
    , borderRadius: 20
  },
  textXN: {
    color: 'white', fontSize: 25, shadowOffset: {
      width: 3, height: 6
    },
    shadowColor: 'black',
    shadowOpacity: 0.5,
  }
})


