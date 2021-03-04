import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet, Image } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class Danhsach extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    const { route } = this.props
    const item = route?.params?.item
    const { posterss = [], posterVV = [], title, price } = item
    return (
      <View style={styles.container}>
        <View style={styles.containerTouchalne}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Detail')
            }}
            activeOpacity={0.3}>
            <Text style={styles.textClose}> Close </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.containerImage}>
          <ScrollView
            horizontal={true}
            scrollEventThrottle={16}>
            {posterss.map(word => {
              return (
                <View style={styles.viewImage}>
                  <Image
                    style={styles.image}
                    source={{ uri: word.s }}
                    resizeMode="contain"
                  />
                </View>
              )
            })}
          </ScrollView>
          <ScrollView
            horizontal={true}
            scrollEventThrottle={16}>
            {posterVV.map(word => {
              return (
                <View style={styles.viewImage}>
                  <Image
                    style={styles.image}
                    source={{ uri: word.s }}
                    resizeMode="contain"
                  />
                </View>
              )
            })}
          </ScrollView>
        </View>
        <View style={styles.containerTitle}>
          <Text style={styles.textTitle}> Tên khách sạn :{title.s}</Text>
          <Text style={styles.textTitle}> Giá Phòng chỉ :{price.s} đ</Text>
          <Ionicons
            style={styles.textIonicons}
            color={'#FF33FF'}
            size={30}
            name="ios-phone-portrait-outline"
          > : 0347776208</Ionicons>
          <Ionicons
            style={styles.textIonicons}
            color={'#FF33FF'}
            size={30}
            name="ios-qr-code-outline"
          > : 88889999</Ionicons>
          <Ionicons
            style={styles.textIonicons}
            color={'#FF33FF'}
            size={30}
            name="ios-car-sport-outline"
          > : 0388 595 388</Ionicons>
        </View>
        <View style={styles.conyainerOut}>
          <Text style={styles.textOut}>
            Chúc Quý Khách Có Một Kỳ Nghỉ Vui Vẻ, Hạnh Phúc Bên Người Thân
            </Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: '#DDDDDD'
  },
  containerTouchalne: {
    flexDirection: 'row', justifyContent: 'center',
    backgroundColor: 'white',
    marginTop: 20,
    width: 60, height: 40, alignItems: 'center',
    shadowOffset: { width: 4, height: 7 },
    shadowColor: 'black',
    shadowOpacity: 0.5,
    elevation: 3,
    borderRadius: 6,
    marginLeft: 350
  },
  textClose: {
    fontSize: 18, color: 'blue',
    shadowOffset: { width: 4, height: 7 },
    shadowColor: 'black',
    shadowOpacity: 0.5,
    elevation: 3,
  },
  containerImage: {
    flexDirection: 'row', justifyContent: 'center'
  },
  image: {
    width: 150, height: 100,
    margin: 10
  },
  viewImage: {
    marginTop: 20,
    backgroundColor: 'white',
    height: 150,
    shadowOffset: {
      width: 5, height: 10
    },
    shadowColor: 'black',
    shadowOpacity: 0.5,
    borderRadius: 6,
    margin: 10,
  },
  containerTitle: {
    flex: 0.5, marginTop: 20,
    backgroundColor: 'white',
    shadowOffset: {
      width: 5, height: 10
    },
    shadowColor: 'black',
    shadowOpacity: 0.5,
    borderRadius: 6,
    margin: 10,
    flexDirection: 'column'
  },
  textTitle: {
    marginTop: 20, marginHorizontal: 20, fontSize: 18,
    color: '#66CC00',
    shadowOffset: {
      width: 5, height: 10
    },
    shadowColor: 'black',
    shadowOpacity: 0.5
  },
  textIonicons: {
    marginTop: 20, marginHorizontal: 20, fontSize: 20,
    color: '#66CC00',
    shadowOffset: {
      width: 5, height: 10
    },
    shadowColor: 'black',
    shadowOpacity: 0.5
  },
  conyainerOut: {
    backgroundColor: 'white', flex: 0.3, marginTop: 20,
    shadowOffset: {
      width: 5, height: 10
    },
    shadowColor: 'black',
    shadowOpacity: 0.5,
    borderRadius: 20, justifyContent: 'center', alignItems: 'center', marginHorizontal: 10
  },
  textOut: {
    fontSize: 20, marginTop: 5, textAlign: 'center',
    marginHorizontal: 10, color: '#0000FF',
    shadowOffset: {
      width: 5, height: 10
    },
    shadowColor: 'black',
    shadowOpacity: 0.5,
  }
})
{/* <View style={{ flex: 1 }}>
      //   <View style={{ flexDirection: 'row', justifyContent: 'flex-end', margin: 10 }}>
      //     <TouchableOpacity 
          onPress={() => {  */}
{/* //         this.props.navigation.navigate('Detail')
      //       }}
      //       activeOpacity={0.2}>
      //       <Text style={{ color: 'blue' }}> DONG </Text>
      //     </TouchableOpacity>
      //   </View>
      //   <View style={{ flex: 0.3, backgroundColor: '#DCDCDC' }}>
      //     <ScrollView */}
{/* //       scrollEventThrottle={16}
      //       horizontal={true}>
      //       {posterss.map(word => { */}
{/* //         return (
      //           <Image */}
{/* //             style={styles.imagesss}
      //             source={{ uri: word.s }} />
      //         )
      //       })}
      //     </ScrollView>
      //     <ScrollView */}
{/* //       scrollEventThrottle={16}
      //       horizontal={true}>
      //       {posterVV.map(word => { */}
{/* //         return (
      //           <Image */}
{/* //             style={styles.imagesss}
      //             source={{ uri: word.s }} />
      //         )
      //       })}
      //     </ScrollView>
      //   </View>
      //   <View style={{ flex: 1, backgroundColor: 'white', margin: 10 }}>
      //     <ScrollView>
      //       {this.renderItem('https://img.icons8.com/clouds/2x/super-mario.png', '..........')}
      //       {this.renderItem('https://img.icons8.com/clouds/2x/mac-os.png', '.........')}
      //       {this.renderItem('https://img.icons8.com/clouds/2x/folder-invoices.png', '.........')}
      //       {this.renderItem('https://img.icons8.com/clouds/2x/folder-invoices.png', '.........')}
      //       {this.renderItem('https://img.icons8.com/clouds/2x/folder-invoices.png', '.........')}
      //       {this.renderItem('https://img.icons8.com/clouds/2x/folder-invoices.png', '.........')}
      //       {this.renderItem('https://img.icons8.com/clouds/2x/folder-invoices.png', '.........')}
      //       {this.renderItem('https://img.icons8.com/clouds/2x/folder-invoices.png', '.........')}
      //       {this.renderItem('https://img.icons8.com/clouds/2x/folder-invoices.png', '.........')}
      //       {this.renderItem('https://img.icons8.com/clouds/2x/folder-invoices.png', '.........')}

      //     </ScrollView>

      //   </View>
      // </View> */}