import React, { Component } from 'react';
import {View, StatusBar, Text, TouchableOpacity, FlatList, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import firestore from '@react-native-firebase/firestore';

const bab1 = await firestore().collection('JawabulMasail').doc('ISLAMDANDASARNEGARAINDONESIA').get();

class Bab extends Component {
    constructor(props) {
      super(props);
    }

    
   
    render() {
      return (
          <View style={{flex: 1, backgroundColor:"#FAFAFA"}}>
            <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#9D5C0D" />
            <View style={{padding: 20, backgroundColor: "#E5890A", elevation: 1, flexDirection: "row" }}>
            <Icon name="arrow-left" size={30} color="#FAFAFA" style={{marginRight: 20}} onPress={() => this.props.navigation.pop()} />
            <Text style={{textAlign: 'center', color: "#FAFAFA", fontSize: 20, fontWeight: 'bold'}}>BAB</Text>
            </View>
            <View style={{flex: 1, padding: 10}}>
              <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Detail', {tittle: item.tittle, detail: item.detail})}>
                <Text style={{fontSize: 18}}>Islam Dan Nasionalisme</Text>
              </TouchableOpacity>
              <Text style={{fontSize: 18}}>Islam Dan Nasionalisme</Text>
              <Text style={{fontSize: 18}}>Pluralitas Dan Sosial Kemasyarakatan</Text>
              <Text style={{fontSize: 18}}>Piagam Madinah Sebagai Rujukan Berbangsa Dan Bernegara</Text>
              <Text style={{fontSize: 18}}>Ahlu as-Sunnah Wa al-Jama'ah</Text>
            </View>
            

      </View>
          
          
      );
    }
  }
  
  export default Bab;