import React, { Component } from 'react';
import {View, StatusBar, Text, TextInput, FlatList, ScrollView} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';





class Detail extends Component {
    constructor(props) {
      super(props);
    }
   
    render() {
      const tittle = this.props.navigation.getParam('tittle', 'no-tittle');
      const detail = this.props.navigation.getParam('detail', 'no-detail');
      return (
          <View style={{flex: 1, backgroundColor:"#FAFAFA"}}>
            <StatusBar
             barStyle="dark-content"
             backgroundColor={'transparent'}
             translucent
             />
            <View style={{padding: 20, backgroundColor: "#E5890A", elevation: 1, flexDirection: 'row', alignItems: 'center', marginTop: 50, marginLeft: 10, marginRight: 10, borderRadius: 10}}>
            <Icon name="arrow-left" size={30} color="#1B2430" style={{marginRight: 20}} onPress={() => this.props.navigation.pop()} />
            <Text style={{flex:1, textAlign: 'center', color: "#1B2430", fontSize: 21, fontWeight: 'bold'}}>{tittle}</Text>
            </View>
            <View style={{flex: 1, padding: 10}}>
              <ScrollView><Text style={{color:'#1B2430' ,fontSize: 19}}>{detail}</Text></ScrollView>  
            </View>
            

      </View>
          
          
      );
    }
  }
  
  export default Detail;