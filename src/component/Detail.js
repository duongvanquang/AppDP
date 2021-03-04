import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Lightbox from 'react-native-lightbox';
import { connect } from 'react-redux';
import CartActions from './redux/cart';
import Ionicons from 'react-native-vector-icons/Ionicons';
const { height, width } = Dimensions.get('screen')

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            count: 1
        };
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
            <View style={styles.container}>
                <View style={styles.containerTitle}>
                    <Text style={styles.textTitle}>{title.s}</Text>
                </View>

                <TouchableOpacity
                    style={styles.viewTouchble}
                    activeOpacity={0.2}
                >
                    <Image
                        style={styles.textImage}
                        source={{ uri: item.s }}
                    />
                </TouchableOpacity>
                <View >
                    <ScrollView
                        scrollEventThrottle={16}
                        horizontal={true}>
                        {posterss.map(item => {
                            const widthImg = open ? width : 150;
                            return (
                                <View style={styles.viewLightBox}>
                                    <Lightbox
                                        onOpen={() => this.setState({ open: true })}
                                        onClose={() => this.setState({ open: false })}
                                        underlayColor="white">
                                        <Image
                                            style={{ height: widthImg, width: widthImg, margin: 5, margonTop: 10 }}
                                            source={{ uri: item.s }}
                                            resizeMode="contain"
                                        />
                                    </Lightbox>
                                </View>
                            )
                        })}
                    </ScrollView>
                </View>
                <View >
                    <ScrollView
                        scrollEventThrottle={16}
                        horizontal={true}>
                        {posterVV.map(item => {
                            const widthImg = open ? width : 150;
                            return (
                                <View style={styles.viewLightBox}>
                                    <Lightbox
                                        onOpen={() => this.setState({ open: true })}
                                        onClose={() => this.setState({ open: false })}
                                        underlayColor="white">
                                        <Image
                                            style={{ height: widthImg, width: widthImg, margin: 5, margonTop: 10 }}
                                            source={{ uri: item.s }}
                                            resizeMode="contain"
                                        />
                                    </Lightbox>
                                </View>
                            )
                        })}
                    </ScrollView>
                </View>
                <View style={styles.viewChitiet}>
                    <View style={styles.viewTTC}>
                        <Text style={styles.textTTC}>THÔNG TIN CHUNG </Text>
                        <View style={styles.containerColor}>
                            <Ionicons
                                name="ios-call-outline"
                                color={'rgb(234,97,97)'}
                                size={20}
                            >
                                <Text style={styles.textNumber}> : 09876354 </Text>
                            </Ionicons>
                        </View>
                        <View style={styles.containerColor}>
                            <Ionicons
                                name="ios-wifi-outline"
                                color={'rgb(234,97,97)'}
                                size={30}
                            >
                                <Text style={styles.textNumber}> : 123456789DVQ </Text>
                            </Ionicons>
                        </View>
                        <View style={styles.containerColor}>
                            <Ionicons
                                name="ios-ear-outline"
                                color={'rgb(234,97,97)'}
                                size={30}
                            >
                                <Text style={styles.textNumber}> Luôn luôn lắng nghe </Text>
                            </Ionicons>
                        </View>
                    </View>
                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigation.navigate('Thông Tin Chi Tiết', { item })
                        }}
                        activeOpacity={0.2}
                        style={styles.viewTTC} >
                        <Text style={styles.textTTC}> XEM CHI TIẾT</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.viewTT}>
                    <View style={styles.viewUi}>
                        <Text style={styles.textGia}>Giá/Phòng/Đêm Từ</Text>
                        <Text style={styles.textGia} >{item.price.s}  đ</Text>
                        <Text style={styles.textGia} >Giá cuối cùng</Text>
                    </View>
                    <View style  = {styles.viewD}>
                        <TouchableOpacity onPress = {() =>{
                            this.props.addCart(item)
                            this.props.navigation.navigate('Price', { item:item })
                        }}>
                            <Text style={styles.textGia}> Đặt </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}
//const { height,width} = Dimensions.get('screen')
const heightImage = Math.round(width / 2)
const widthImage = Math.round(width / 1.2)
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
    },
    container: {
        flex: 1,
        backgroundColor: '#DDDDDD',
        flexDirection: 'column'
    },
    containerTitle: {
        height: 40,
        width: null,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderEndWidth: 0.2,
        shadowOffset: {
            width: 5, height: 10
        },
        shadowColor: 'black',
        shadowOpacity: 0.5,
        marginTop: 10,
        borderRadius: 6
    },
    textTitle: {
        fontSize: 18, color: 'rgb(234,97,97)',
        shadowOffset: {
            width: 5, height: 10
        },
        shadowColor: 'black',
        shadowOpacity: 0.5,
    },
    textImage: {
        width: widthImage,
        height: heightImage,
        borderRadius: 10,
        justifyContent: 'space-evenly',
        marginHorizontal: 10,
        alignSelf: 'center',
    },
    viewTouchble: {
        marginTop: 20, justifyContent: 'center', alignItems: 'center',
        borderRadius: 10,
        borderEndWidth: 0.2,
        shadowOffset: {
            width: 5, height: 10
        },
        shadowColor: 'black',
        shadowOpacity: 0.5,
    },
    viewLightBox: {
        marginTop: 20,
        backgroundColor: 'white',
        height: 160,
        shadowOffset: {
            width: 5, height: 10
        },
        shadowColor: 'black',
        shadowOpacity: 0.5,
        borderRadius: 6,
        margin: 10,

    },
    viewChitiet: {
        flex: 0.6,
        backgroundColor: 'white',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 10,
        shadowOffset: {
            width: 5, height: 10
        },
        shadowColor: 'black',
        shadowOpacity: 0.5,
        borderRadius: 10
    },
    viewTTC: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center', marginTop: 10,
        shadowOffset: {
            width: 5, height: 10
        },
        shadowColor: 'black',
        shadowOpacity: 0.5,

    },
    textTTC: {
        fontSize: 15,
        color: 'blue',
        marginLeft: 5, textAlign: 'center', marginHorizontal: 10
    },
    containerColor: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: 10
    },
    textNumber: {
        fontSize: 20,
        textAlign: 'center'
    },
    viewTT: {
        flex: 0.3, backgroundColor: 'white', marginTop: 10,
        flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
        shadowOffset: {
            width: 5, height: 10
        },
        shadowColor: 'black',
        shadowOpacity: 0.5, borderRadius: 15, borderWidth: 0.3
    },
    viewUi: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginLeft: 20,
        shadowOffset: {
            width: 5, height: 10
        },
        shadowColor: 'black',
        shadowOpacity: 0.5
    },
    textGia: {
        fontSize: 16, color: '#339900', marginTop: 5
    },
    viewD:{
        height:100,
        width:100,
        backgroundColor:'#FFFF00',
        marginRight:5,justifyContent:'center',alignItems:'center',
        shadowOffset: {
            width: 5, height: 10
        },
        shadowColor: 'black',
        shadowOpacity: 0.5, borderRadius:10
    }

})


