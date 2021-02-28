import React, { Component } from 'react';
import { View, Text, Dimensions, Image } from 'react-native';
import { FlatList, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import Lightbox from 'react-native-lightbox';
import { connect } from 'react-redux';
import CartActions from './redux/cart'
import Clipboard from '@react-native-community/clipboard';
import Voucher from './Voucher';
const { height, width } = Dimensions.get('screen')
const heightImage = Math.round(width / 2)
const widthtImage = Math.round(width / 2)

class Price extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            count: 1,
            text: '',
            item: {}
        };

    }
    render() {
        const Voucher = this.state.item
        const cart = this.props.cart
        let sum = 0
        cart.forEach(pro => {
            sum += pro.price.s * (pro?.count || 1)
        })
        const discount = Voucher?.discount || 0
        sum = sum - sum * discount
        const { userName } = this.props
        const { route } = this.props
        const item = route?.params?.item
        const { posterss = [], posterVV = [], title, price } = item
        const { open } = this.state
        const widthImg = open ? width : 150
        return (
            <View style={{ flex: 1, backgroundColor: '#DCDCDC', flexDirection: 'row' }}>
                <View>
                    <FlatList
                        style={{ flex: 1, marginHorizontal: 5 }}
                        data={this.props.cart}
                        renderItem={({ item }) => (
                            <View style={{ flex: 1, flexDirection: 'column' }}>
                                <Lightbox onOpen={() => this.setState({ open: true })}
                                    onClose={() => this.setState({ open: false })}
                                    underlayColor="white">
                                    <View style={{ justifyContent: 'center', alignContent: 'center' }}>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                            <Image
                                                style={{ height: widthImg, width: widthImg, margin: 5 }}
                                                source={{ uri: item.s }}
                                                resizeMode="contain"
                                            />
                                           
                                            <View style={{ justifyContent: 'center', alignContent: 'center', margin: 20 }}>
                                            <Text style={{ color: 'blue', fontSize: 20 }}>{item.title.s}</Text>
                                            <Text style={{ color: 'red', fontSize: 20 }}>{item.price.s}</Text>
                                            </View>
                                        </View>
                                    </View>
                                </Lightbox>
                                <View style={{ backgroundColor: 'red', width: 120, height: 40, borderRadius: 5, alignContent: 'center', justifyContent: 'center', alignItems: 'center' }}>
                                    <TouchableOpacity
                                        activeOpacity={0.2}
                                        onPress={() => {
                                            this.props.removeCart(item)
                                            // this.props.navigation.navigate('Booking')
                                        }}
                                    >
                                        <Text style={{ color: 'white', fontSize: 20 }}>DELETE</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{
                                    flex: 1, backgroundColor: 'white',
                                    margin: 20, height: 30, width: 200,
                                    flexDirection: 'row',
                                    justifyContent: 'space-evenly', borderWidth: 0.2
                                }}>
                                    <TextInput
                                        onChangeText={text => { this.setState({ text }) }}
                                        value={this.state.text}
                                        style={{ margin: 5 }}
                                        placeholder="Enter Your Voucher">
                                    </TextInput>
                                    <TouchableOpacity
                                        onPress={async () => {
                                            const text = await Clipboard.getString();
                                            const item = JSON.parse(text)
                                            this.setState({ text: item.code, item })
                                        }
                                        }>
                                        <Text style={{ color: 'red', fontSize: 20 }}>Part</Text>
                                    </TouchableOpacity>

                                </View>
                            </View>
                        )}
                        ListHeaderComponent={() => (<View height={5} />)}
                        ListFooterComponent={() => (<View height={5} />)} />
                    <View style={{ flex: 1, backgroundColor: '#E0F8F7', margin: 5, justifyContent: 'center' }}>
                        <Text style={{ color: 'black', fontSize: 20 }}> Thông tin liên hệ</Text>
                        <View style={{ backgroundColor: 'white', height: 50, width: 300, borderWidth: 0.2, borderRadius: 5, justifyContent: 'center', alignItems: 'center', marginTop: 15 }}>
                            <Text style={{ color: '#5882FA', fontSize: 20 }}>{userName}</Text>
                        </View>
                        <View style={{ backgroundColor: 'white', height: 50, width: 300, borderWidth: 0.2, borderRadius: 5, justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                            <Text style={{ color: '#5882FA', fontSize: 20 }}>{userName}</Text>
                        </View>
                        <View style={{ backgroundColor: 'white', height: 50, width: 300, borderWidth: 0.2, borderRadius: 5, justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                            <Text style={{ color: '#5882FA', fontSize: 20 }}>{userName}</Text>
                        </View>
                        <View style={{ backgroundColor: 'white', height: 50, width: 300, borderWidth: 0.2, borderRadius: 5, justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                            <Text style={{ color: '#5882FA', fontSize: 20 }}>{userName}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                            <Text style={{ color: '#FFBF00', fontSize: 20 }}>Thanh toán khi nhận phòng</Text>
                            <Text style={{ color: '#FFBF00', fontSize: 20 }}>Tổng:{sum} đ</Text>
                        </View>
                    </View>
                    <View style={{ flex: 0.2 }}>
                        <TouchableOpacity
                            onPress={() => {
                                this.props.removeAllCart()
                                this.props.navigation.navigate('Home')
                            }}
                            activeOpacity={0.2}>
                            <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#F6CEF5', borderRadius: 10 }}>
                                <Text style={{ color: '#819FF7', fontSize: 30 }}>Đồng Ý</Text>
                            </View>
                        </TouchableOpacity>

                    </View>
                </View>

            </View>
        );
    }
}
//const {height, width} = Dimensions.get('screen')
const mapStateToProps = (state) => {
    return ({
        cart: state?.cart?.cart,
        userName: state.cart.userName
    })
}
const mapDispatchToProps = (dispatch) => {
    return ({
        dispatch,
        removeCart: (item) => (dispatch(CartActions.removeCart(item))),
        removeAllCart: (item) => (dispatch(CartActions.removeAllCart(item)))
    });
}
export default connect(mapStateToProps, mapDispatchToProps)(Price);