import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Lightbox from 'react-native-lightbox';
import { connect } from 'react-redux';
import CartActions from './redux/cart'
const { height, width } = Dimensions.get('screen')

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            count: 1
        };
    }
    renderItem = (uri, title) => {
        return (
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                <Image
                    style={{ width: 50, height: 50, margin: 10 }}
                    source={{ uri }} />
                <Text style={{ color: 'red', fontSize: 15 }}>{title}</Text>
            </View>
        )
    }

    render() {
        const { open } = this.state
        const { route } = this.props
        const item = route?.params?.item
        const { addPlusCart } = this.props
        const { title, posters = [], description,
            price, posterV = [], posterss = [],
            posterVV = [], poster, Voucher = [] } = item
        return (
            <View style={{ flex: 1 }}>
                <View style={{
                    alignItems: 'center',
                    marginHorizontal: 5, flex: 0.8
                }}>
                    <Text style={{
                        color: 'red',
                        marginTop: 10, marginBottom: 15,
                        fontSize: 20
                    }}> {title.s} </Text>
                    <TouchableOpacity
                        activeOpacity={0.2}
                    >
                        <Image style={styles.imagee}
                            source={{ uri: item.s }}
                        />

                    </TouchableOpacity>
                    <ScrollView horizontal={true}>
                        {posterss.map(item => {
                            const widthImg = open ? width : 150
                            return (
                                <Lightbox
                                    onOpen={() => this.setState({ open: true })}
                                    onClose={() => this.setState({ open: false })}
                                    underlayColor="white">
                                    <Image
                                        style={{ height: widthImg, width: widthImg, margin: 5 }}
                                        source={{ uri: item.s }}
                                        resizeMode="contain"
                                    />
                                </Lightbox>
                            )
                        })}
                    </ScrollView>
                    <TouchableOpacity>
                        <Image
                            source={{ uri: item.s }}
                        />
                    </TouchableOpacity>
                    <ScrollView
                        horizontal={true}>
                        {posterVV.map(item => {
                            const widthImg = open ? width : 150
                            return (
                                <Lightbox
                                    onOpen={() => this.setState({ open: true })}
                                    onClose={() => this.setState({ open: false })}
                                    underlayColor="white">
                                    <Image
                                        style={{ height: widthImg, width: widthImg, margin: 5 }}
                                        source={{ uri: item.s }}
                                        resizeMode="contain"
                                    />
                                </Lightbox>
                            );
                        })}
                    </ScrollView>
                </View>
                <View style={{ flex: 0.6, backgroundColor: 'white' }}>
                    <ScrollView scrollEventThrottle={16}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10 }}>
                            <Text style={{ color: 'blue', fontSize: 15 }}> THÔNG TIN CHUNG </Text>
                            <TouchableOpacity
                                onPress={() => {
                                    this.props.navigation.navigate('Thông Tin Chi Tiết', { item })
                                }}
                                activeOpacity={0.3}>
                                <Text style={{ color: 'blue', fontSize: 15 }}> XEM CHI TIẾT</Text>
                            </TouchableOpacity>
                        </View>
                        {this.renderItem('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrs4it8VM5Q-P8Sf-9oYj1ztIAz5ChIWY7hg&usqp=CAU', '.....')}
                        {this.renderItem('https://cdn2.iconfinder.com/data/icons/social-media-and-payment/64/-09-256.png', '...................')}
                        {this.renderItem('https://cdn2.iconfinder.com/data/icons/social-media-and-payment/64/-09-256.png', '.............................')}

                    </ScrollView>
                </View>
                <View style={{
                    flex: 0.1, backgroundColor: '#DCDCDC',
                    flexDirection: 'row', justifyContent: 'space-between', marginBottom: 30
                }}>
                    <View style={{ flexDirection: 'column', justifyContent: 'space-evenly', marginHorizontal: 5 }}>
                        <Text style={{ color: 'black', fontSize: 15 }}>Giá/Phòng/Đêm Từ</Text>
                        <Text style={{ color: 'red', fontSize: 20, fontWeight: '500' }}>{price.s}</Text>
                        <Text style={{ color: 'black', fontStile: 15 }}>Giá cuối cùng</Text>
                    </View>
                    <View style={{ backgroundColor: 'blue', width: 120, marginHorizontal: 10, borderRadius: 5, alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity onPress={() => {
                            this.props.addCart(item)
                            this.props.navigation.navigate('Price', { item:item })
                        }}
                            activeOpacity={0.2}>
                            <Text style={{ color: 'white', fontSize: 30, fontWeight: 'bold' }}> Đặt </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}
//const { height,width} = Dimensions.get('screen')
const heightImage = Math.round(width / 2)
const widthImage = Math.round(width / 1.1)
const mapStateToProps = (state) => {
    return ({
        cart: state?.cart?.cart
    });
}
const mapDispatchToProps = (dispatch) => { //eslint-disable-line
    return ({
        addCart: (product) => (dispatch(CartActions.addCart(product))),
        addPlusCart: (product, count) => (dispatch(CartActions.addPlusCart(product, count))),

    });
};
export default connect(mapStateToProps, mapDispatchToProps)(Detail)
const styles = StyleSheet.create({
    imagee: {
        width: widthImage,
        height: heightImage,
        alignSelf: 'center',
        borderRadius: 10,
        justifyContent: 'space-evenly',
        marginHorizontal: 10
    }
})
