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
      const map = this.props.navigation.getParam('map', 'no-map');
      return (
          <View style={{flex: 1, backgroundColor:"#FAFAFA"}}>
            <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#9D5C0D" />
            <View style={{padding: 20, backgroundColor: "#E5890A", elevation: 1, flexDirection: "row" }}>
            <Icon name="arrow-left" size={30} color="#FAFAFA" style={{marginRight: 20}} onPress={() => this.props.navigation.pop()} />
            <Text style={{textAlign: 'center', color: "#FAFAFA", fontSize: 20, fontWeight: 'bold'}}>{tittle}</Text>
            </View>
            <View style={{flex: 1, padding: 10}}>
              <ScrollView><Text style={{fontSize: 18}}>{map}</Text></ScrollView>  
            </View>
            

      </View>
          
          
      );
    }
  }
  
  export default Detail;