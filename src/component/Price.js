import React, { Component } from 'react';
import { View, Text, Dimensions, Image, StyleSheet } from 'react-native';
import { FlatList, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import Lightbox from 'react-native-lightbox';
import { connect } from 'react-redux';
import CartActions from './redux/cart'
import Clipboard from '@react-native-community/clipboard';
import Voucher from './Voucher';
import axios from 'axios';
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
        const widthImg = open ? width : 180
        return (
            <View style={styles.container}>
                <View style={styles.containerText}>
                    <Text style={styles.containerTitle}> Những phòng đã chọn</Text>
                </View>
                <View style={{ flex: 1 }}>
                    <FlatList
                        // style={{ flex: 1 }}
                        data={this.props.cart}
                        renderItem={({ item }) => (
                            <View style={styles.containerItem}>
                                <Lightbox onOpen={() =>
                                    this.setState({ open: true })}
                                    onClose={() =>
                                        this.setState({ open: false })}
                                    underlayColor='white'
                                >
                                    <View style={styles.viewImage}>
                                        <View style={styles.textImage}>
                                            <Image
                                                style={{ height: widthImg, width: widthImg, margi: 5 }}
                                                source={{ uri: item.s }}
                                                resizeMode="contain"
                                            />
                                        </View>
                                        <View style={styles.viewTitle}>
                                            <Text style={styles.textTitle}>{item.title.s}</Text>
                                            <Text style={styles.textTitle}>{item.price.s}</Text>
                                        </View>
                                    </View>
                                </Lightbox>
                                <TouchableOpacity
                                    onPress={() => {
                                        this.props.removeCart(item)
                                    }}
                                    activeOpacity={0.3}
                                    style={styles.viewDelete}>
                                    <Text style={styles.textDelete}>DELETE</Text>
                                </TouchableOpacity>
                                <View style={styles.viewVoucher}>
                                    <TextInput
                                        onChangeText={text => { this.setState({ text }) }}
                                        value={this.state.text}
                                        style={styles.textInputVoucher}
                                        placeholder="Enter Your Voucher">
                                    </TextInput>
                                    <TouchableOpacity
                                        onPress={async () => {
                                            const text = await Clipboard.getString();
                                            const item = JSON.parse(text)
                                            this.setState({ text: item.code, item })
                                        }}
                                    >
                                        <Text style={styles.textPart}>Part</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )}
                    />
                </View>
                <View style={styles.viewUserName}>
                    <View style={styles.viewDome}>
                        <Text style={styles.textName}> Họ và Tên :{userName}</Text>
                        <Text style={styles.textName}>Thanh toán khi nhận phòng</Text>
                        <Text style={styles.textName}>{sum} đ </Text>
                    </View>
                    <View>
                        <TouchableOpacity
                            onPress={() => {
                                this.props.removeAllCart()
                                this.props.navigation.navigate('Home')
                            }}
                            activeOpacity={0.2}>
                            <View style={styles.viewPice}>
                                <Text style={styles.textD}>Đồng Ý</Text>
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white'

    },
    containerText: {
        justifyContent: 'center',
        flex: 0.1,
        height: this.startHeaderHeight,
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: '#dddddd'

    },
    containerTitle: {
        color: 'black',
        textAlign: 'center',
        width: 400,
        fontSize: 23,
        shadowOffset: { width: 4, height: 7 },
        shadowColor: 'black',
        shadowOpacity: 0.5,
        elevation: 3,
        borderRadius: 6
    },
    containerItem: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    viewImage: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderWidth: 0.5,
        borderColor: '#dddddd',
        marginTop: 20,
        shadowOffset: { width: 4, height: 7 },
        shadowColor: 'black',
        shadowOpacity: 0.5,
        elevation: 3,
        borderRadius: 6


    },
    textImage: {
        flexDirection: 'column',
        justifyContent: 'space-evenly'
    },
    viewTitle: {
        justifyContent: 'space-evenly',
        margin: 20
    },
    textTitle: {
        fontSize: 20,
        color: '#009900',
        textAlign: 'center'
    },
    viewDelete: {
        marginTop: 20,
        marginBottom: 10,

    },
    textDelete: {
        fontSize: 20,
        color: 'red',
        shadowOffset: { width: 4, height: 7 },
        shadowColor: 'black',
        shadowOpacity: 0.5,
        elevation: 3,
    }, textInputVoucher: {
        margin: 5, borderWidth: 0.2,
        height: 35, width: 200,
        paddingHorizontal: 10,
        borderRadius: 6
    },
    viewVoucher: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        shadowOffset: { width: 4, height: 7 },
        shadowColor: 'black',
        shadowOpacity: 0.5,
        elevation: 3,
    },
    textPart: {
        fontSize: 18,
        color: 'blue'
    },
    viewUserName: {
        flex: 0.5,
        backgroundColor: 'white',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 20,
        backgroundColor: 'white'
    },
    viewDome: {
        shadowOffset: { width: 4, height: 7 },
        shadowColor: 'pink',
        shadowOpacity: 0.5,
        elevation: 3,
    },
    textName: {
        fontSize: 20, color: '#FFCC33',
        shadowOffset: { width: 4, height: 7 },
        shadowColor: 'pink',
        shadowOpacity: 0.5,
        elevation: 3,
        marginTop: 10,
        textAlign: 'center'
    },
    viewPice: {
        marginTop: 20,
        backgroundColor: '#FFFF66',
        height: 40,
        width: 280,
        alignItems: 'center',
        justifyContent:'center',
        borderRadius: 8, shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowOffset: { width: 5, height: 10
        },
    },
    textD: {
        fontSize: 23,color:'#003333'
    }
})
