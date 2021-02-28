import React, { Component } from 'react';
import { View, Text } from 'react-native';
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
        <View style={{ borderBottomWidth: 1, paddingVertical: 10, paddingHorizontal: 16 }}>
          <Text style={{ color: 'red', fontSize: 17, fontWeight: 'bold' }}>Danh sách những phòng đã chọn </Text>
          <Text style={{ color: 'green', fontSize: 15, marginTop: 5 }}>Những phòng cần thanh toán : {item.map(i => i.title.s).join(', ')}</Text>
        </View>)
      
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
