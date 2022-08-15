import React, { Component } from 'react';
import {View, StatusBar, Text, TouchableOpacity, ImageBackground} from 'react-native';
import DrawerLayout from 'react-native-gesture-handler/DrawerLayout';
import Icon from 'react-native-vector-icons/FontAwesome';

class About extends Component {
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
          <StatusBar
             barStyle="dark-content"
             backgroundColor={'transparent'}
             translucent
             />
            <View style={{padding: 20, backgroundColor: "#E5890A", elevation: 1, flexDirection: 'row', alignItems: 'center', marginTop: 50, marginLeft: 10, marginRight: 10, borderRadius: 10}}>
            <Icon name="bars" size={30} color="#1B2430" style={{marginRight: 20}} onPress={() => this.drawer.openDrawer()} />
            <View style={{flex: 1}}>
              <Text style={{textAlign: 'center', color: "#1B2430",  fontWeight: 'bold', fontSize: 20}}>JAWABUL MASAIL</Text>
            </View>          
          </View>

          <View style={{margin: 20}}>
            <Text style={{color:'#1B2430', fontSize: 20,}}>Jawabul Masail</Text>
            <Text style={{color:'#1B2430', fontSize: 20,}}>Version beta</Text>
          </View>          
      </View>
      </DrawerLayout>          
      );
    }
  }
  
  export default About;