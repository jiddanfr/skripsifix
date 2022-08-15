import React, { Component, useRef, useState } from 'react';
import {View, StatusBar, Text,  FlatList, TextInput, ImageBackground} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import DrawerLayout from 'react-native-gesture-handler/DrawerLayout';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Madoka } from 'react-native-textinput-effects';
import database from './database.json';
import firestore from '@react-native-firebase/firestore';


class Home extends Component {
    // getData = async () => {
    //   const JawabulMasail = await firestore().collection("JawabulMasail").get();
    //   const allData = JawabulMasail.docs.map((doc) => 
    //   Object.assign({id: doc.id}, doc.data(), )
    //   );
    //   this.setState({data: allData, dataTampil: allData});
    // }

    constructor(props) {
      super(props);
      this.state = {
        text: '',
        data: database
       };
    }
  
    // constructor(props) {
    //   super(props);
      
    //   this.state = {
    //     data: [],
    //     dataTampil: [],
    //     search:'',
        
    // };
    // }

    // componentDidMount () {
    //   this.getData();
    // }   

    // search = () =>{
    //   let data = this.state.data;
    //   let search = this.state.search;
  
    //   data = data.filter((item) => 
    //     item.tittle.toLowerCase().includes(search.toLowerCase()),
    //   );
  
    //   this.setState({dataTampil: data})
    // };

    search = () =>{
      let data = database;

      data = data.filter(item => item.tittle.toLocaleLowerCase().includes(this.state.text.toLocaleLowerCase()))

      this.setState({
        data: data
      })
    }   

    drawerMenuNavigation = (route) => {
      this.drawer.closeDrawer();
      this.props.navigation.navigate(route);
    }

    renderDrawer = () => {
      return(
        <View style={{marginTop: 20, marginLeft: 10}}>
          <View style={{ height:40}}>
            <ImageBackground source={require('../src/images/logojawabulcrop.png')} style={{width: '100%', height: '100%'}}></ImageBackground>
          </View>
          <View style={{flexDirection:'column', marginTop: 30}}>
          <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}
          onPress={() => this.drawerMenuNavigation('Home')}
          >
            <Icon name="home" size={30} color="#1B2430" style={{marginRight: 10}} />
            <Text style={{fontSize: 20, fontWeight: 'bold', color: "#1B2430", marginLeft: 10}}>Home</Text>
            
          </TouchableOpacity>
          <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}
          onPress={() => this.drawerMenuNavigation('About')}>
            <Icon name="user" size={30} color="#1B2430" style={{marginRight: 10}} />
            <Text style={{fontSize: 20, fontWeight: 'bold', color: "#1B2430", marginLeft: 10}}>About</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}
           onPress={() => this.props.navigation.navigate('Bab')}>
            <Icon name="book" size={30} color="#1B2430" style={{marginRight: 10}} />
            <Text style={{fontSize: 20, fontWeight: 'bold', color: "#1B2430", marginLeft: 10}}>BAB</Text>
          </TouchableOpacity> */}
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
          <View style={{flex: 1}}>
            
            <LinearGradient colors={['#FEF9A7','#FAC213']} style={{flex:1 }} start={{x: 0, y: 0}} end={{x: 1, y: 0}}>
            <StatusBar
             barStyle="light-content"
             backgroundColor={'transparent'}
             translucent
             />
            <View style={{padding: 20, backgroundColor: "#E5890A", elevation: 1, flexDirection: 'row', alignItems: 'center', marginTop: 50, marginLeft: 10, marginRight: 10, borderRadius: 10}}>
            <Icon name="bars" size={30} color="#1B2430" style={{marginRight: 20}} onPress={() => this.drawer.openDrawer()} />
            <View style={{flex: 1}}>
              <Text style={{textAlign: 'center', color: "#1B2430",  fontWeight: 'bold', fontSize: 20}}>JAWABUL MASAIL</Text>
            </View>
          
          </View>
          <View style={{marginHorizontal: 20, marginVertical: 10}}>
          <Madoka
              label={'Ketik untuk mencari judul'}
              // this is used as active border color
              // borderColor={'#E5890A'}
              // active border height
              // borderHeight={3}
              // inputPadding={16}
              // this is used to set backgroundColor of label mask.
              // please pass the backgroundColor of your TextInput container.
              

              // onChangeText={(text) => this.setState({search: text}, () => this.search())}
              // value={this.state.search}
              onChangeText={text => this.setState({text: text})}
            value={this.state.text}
              onKeyPress={() => this.search()}
            />

          </View>
          
          {/* <FlatList
            data={this.state.dataTampil}
            renderItem={({ item }) => 
            <TouchableOpacity style={{borderWidth: 1, borderRadius: 3, marginHorizontal: 20, marginVertical: 5, padding: 9, flexDirection: 'row', alignItems:'center'}}
            onPress={() => this.props.navigation.navigate('Detail', {tittle: item.tittle, detail: item.detail})}>
              <View style={{flex: 1}}>              
              <Text style={{fontSize: 15, fontWeight: 'bold'}}>{item.tittle}</Text>
              </View>              
              <Icon name="chevron-right" size={20} color="#E5890A" style={{marginRight: 10}} />              
            </TouchableOpacity>
          }            
          /> */}

        <FlatList
            data={this.state.data}
            renderItem={({ item }) => 
            <TouchableOpacity style={{backgroundColor: "#FAFAFA", borderWidth: 1, borderRadius: 5, marginHorizontal: 10, marginVertical: 5, padding: 10, flexDirection: 'row', alignItems:'center'}}
            onPress={() => this.props.navigation.navigate('Detail', {tittle: item.tittle, detail: item.detail})}>
              <View style={{flex: 1}}>              
              <Text style={{color: '#1B2430', fontSize: 15, fontWeight: 'bold'}}>{item.tittle}</Text>
              </View>              
              <Icon name="chevron-right" size={20} color="#E5890A" style={{marginRight: 10}} />              
            </TouchableOpacity>
          }
            keyExtractor={item => item.tittle}
          />
          </LinearGradient>
  
      </View>
      </DrawerLayout>
          
      );
    }
  }
  
  export default Home;