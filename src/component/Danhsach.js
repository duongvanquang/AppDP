import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet, Image } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

export default class Danhsach extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    const { route } = this.props
    const item = route?.params?.item
    const { posterss = [] ,posterVV = []} = item
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end', margin: 10 }}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Detail')
            }}
            activeOpacity={0.2}>
            <Text style={{ color: 'blue' }}> DONG </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 0.3, backgroundColor: '#DCDCDC' }}>
          <ScrollView
            scrollEventThrottle={16}
            horizontal={true}>
            {posterss.map(word => {
              return (
                <Image
                  style={styles.imagesss}
                  source={{ uri: word.s }} />
              )
            })}
          </ScrollView>
          <ScrollView
            scrollEventThrottle={16}
            horizontal={true}>
            {posterVV.map(word => {
              return (
                <Image
                  style={styles.imagesss}
                  source={{ uri: word.s }} />
              )
            })}
          </ScrollView>
        </View>
        <View style={{ flex: 1, backgroundColor: 'white', margin: 10 }}>
          <ScrollView>
            {this.renderItem('https://img.icons8.com/clouds/2x/super-mario.png', '..........')}
            {this.renderItem('https://img.icons8.com/clouds/2x/mac-os.png', '.........')}
            {this.renderItem('https://img.icons8.com/clouds/2x/folder-invoices.png', '.........')}
            {this.renderItem('https://img.icons8.com/clouds/2x/folder-invoices.png', '.........')}
            {this.renderItem('https://img.icons8.com/clouds/2x/folder-invoices.png', '.........')}
            {this.renderItem('https://img.icons8.com/clouds/2x/folder-invoices.png', '.........')}
            {this.renderItem('https://img.icons8.com/clouds/2x/folder-invoices.png', '.........')}
            {this.renderItem('https://img.icons8.com/clouds/2x/folder-invoices.png', '.........')}
            {this.renderItem('https://img.icons8.com/clouds/2x/folder-invoices.png', '.........')}
            {this.renderItem('https://img.icons8.com/clouds/2x/folder-invoices.png', '.........')}

          </ScrollView>

        </View>
      </View>
    );
  }
}
const { height, width } = Dimensions.get('screen')
const heightImage = Math.round(width / 2)
const widthImage = Math.round(width / 1.1)
const styles = StyleSheet.create({
  imagesss: {
    width: 250,
    height: 300,
    alignSelf: 'center',
    justifyContent: 'space-evenly',
    marginHorizontal: 10,

  }
})