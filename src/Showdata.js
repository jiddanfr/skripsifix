import React, { Component } from 'react';
import {View, StatusBar, Text, TextInput, FlatList, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import firestore from '@react-native-firebase/firestore';


class Showdata extends Component {
  getData = async () => {
    const JawabulMasail = await firestore().collection('JawabulMasail').get();
    const allData = JawabulMasail.docs.map((doc) => 
    Object.assign({id: doc.id}, doc.data(), )
    );
    this.setState({data: allData, dataTampil: allData});
    // console.log(allData)
    // console.log(JawabulMasail)
  }

    constructor(props) {
      super(props);

      this.state = {
        data: [],
        dataTampil: [],
        search:'',
        
    };
    }

    componentDidMount () {
      this.getData();
    }
   
    render() {
      const document = this.props.navigation.getParam('document', 'no-document');
      
      
      return (
          <View style={{flex: 1, backgroundColor:"#FAFAFA"}}>
            <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#9D5C0D" />
            <View style={{padding: 20, backgroundColor: "#E5890A", elevation: 1, flexDirection: "row" }}>
            <Icon name="arrow-left" size={30} color="#FAFAFA" style={{marginRight: 20}} onPress={() => this.props.navigation.pop()} />
            <Text style={{textAlign: 'center', color: "#FAFAFA", fontSize: 20, fontWeight: 'bold'}}>{document}</Text>
            </View>
            
            <FlatList
            data={this.state.dataTampil}
            renderItem={({ item }) => 
            <TouchableOpacity style={{borderWidth: 1, borderRadius: 3, marginHorizontal: 20, marginVertical: 5, padding: 9, flexDirection: 'row', alignItems:'center'}}
            onPress={() => this.props.navigation.navigate('Detail', {tittle: item.tittle, detail: item.detail})}>
              <View style={{flex: 1}}>
              <Text style={{fontSize:20, fontWeight: 'bold'}}>{item.tittle}</Text>
              </View>              
              <Icon name="chevron-right" size={20} color="#E5890A" style={{marginRight: 10}} />              
            </TouchableOpacity>
          }
          />
            
          </View>            
      );
    }
  }
  
  export default Showdata;