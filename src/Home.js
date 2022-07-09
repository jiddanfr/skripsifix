import React, { Component, useRef, useState } from 'react';
import {View, StatusBar, Text,  FlatList, TextInput, ImageBackground} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import DrawerLayout from 'react-native-gesture-handler/DrawerLayout';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Hoshi } from 'react-native-textinput-effects';
import firestore from '@react-native-firebase/firestore';


class Home extends Component {
    getData = async () => {
      const JawabulMasail = await firestore().collection('JawabulMasail').get();
      const allData = JawabulMasail.docs.map((doc) => 
      Object.assign({id: doc.id}, doc.data(), )
      );
      this.setState({data: allData, dataTampil: allData});
      console.log(allData)
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
    
   

    renderDrawer = () => {
      return(
        <View style={{marginTop: 20, marginLeft: 10}}>
          <View style={{ height:40}}>
            <ImageBackground source={require('../src/images/logojawabulcrop.png')} style={{width: '100%', height: '100%'}}></ImageBackground>
          </View>
          <View style={{flexDirection:'column', marginTop: 30}}>
          <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}
          onPress={() => this.props.navigation.navigate('map', {map: item.map})}>
            <Icon name="home" size={30} color="#1B2430" style={{marginRight: 10}} />
            <Text style={{fontSize: 20, fontWeight: 'bold', color: "#1B2430", marginLeft: 10}}>Home</Text>
            
          </TouchableOpacity>
          <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
            <Icon name="user" size={30} color="#1B2430" style={{marginRight: 10}} />
            <Text style={{fontSize: 20, fontWeight: 'bold', color: "#1B2430", marginLeft: 10}}>About</Text>
          </TouchableOpacity>
          </View>
          
        
        </View>
      )
    } 

    

    render() {    
      return (
        

        <DrawerLayout
        ref={drawer => {
          this.drawer = drawer;
        }}
          drawerWidth={340}
          drawerPosition={DrawerLayout.positions.Left}
          drawerType="front"
          drawerBackgroundColor="#ddd"
          renderNavigationView={this.renderDrawer}
          onDrawerSlide={this.handleDrawerSlide}>
          <View style={{flex: 1, backgroundColor:"#FAFAFA"}}>
            <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#9D5C0D" />
            <View style={{padding: 20, backgroundColor: "#E5890A", elevation: 1, flexDirection: 'row', alignItems: 'center' }}>
            <Icon name="bars" size={30} color="#FAFAFA" style={{marginRight: 20}} onPress={() => this.drawer.openDrawer()} />
            <View style={{flex: 1}}>
              <Text style={{textAlign: 'center', color: "#FAFAFA",  fontWeight: 'bold', fontSize: 20}}>JAWABUL MASAIL</Text>
            </View>
          
          </View>
          <View style={{marginHorizontal: 20, marginVertical: 10}}>
          <Hoshi
              label={'Ketik untuk mencari judul'}
              // this is used as active border color
              borderColor={'#E5890A'}
              // active border height
              borderHeight={3}
              inputPadding={16}
              // this is used to set backgroundColor of label mask.
              // please pass the backgroundColor of your TextInput container.
              backgroundColor={'#F5F5F5'}

              onChangeText={(text) => this.setState({search: text}, () => this.search())}
              value={this.state.search}
              onKeyPress={() => this.search()}
            />

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
      </DrawerLayout>
          
      );
    }
  }
  
  export default Home;