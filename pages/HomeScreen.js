
//This is an example code for Bottom Navigation//
import React from 'react';
//import react in our code.
import {
  Text,
  View,
  TouchableOpacity,TextInput,
  StyleSheet,Picker,Image
} from 'react-native';
import { Card } from 'native-base';

import { SearchBar } from 'react-native-elements';
import {
    AntDesign, Feather, FontAwesome5,
    FontAwesome,Entypo,MaterialCommunityIcons,MaterialIcons
  } from '@expo/vector-icons';
//import all the basic component we have used
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class HomeScreen extends React.Component {
    state = {city: '', search: '',}
    updateUser = (city) => {
       this.setState({ city: city })
    }
   
  //Profile Screen to show from Open profile button
  render() {
  
    return (
      <View>
 <View style={styles.background}>
   <Text style={styles.title}>Rentickle</Text>
   <Picker style={styles.picker} selectedValue = {this.state.city} onValueChange = {this.updateCity}>
               <Picker.Item label = "Gurgaon" value = "gurgaon" />
              
            </Picker>
            <View style={styles.iconview}>
            <FontAwesome5
              name="search"
              color="#AEAEAE"
              size={16}
              style={{ marginLeft: "3%",
    marginRight: "3%",
    marginBottom: "2%",
    marginTop:hp('2.5%')}}
            ></FontAwesome5>
            <TextInput
              style={styles.searchinput}
              placeholder="Search by Furniture,appliances etc."
              
            ></TextInput>
            </View>
   
 </View>

 <View style={{marginTop:hp('1%')}}>
 <Text style={styles.categories}>Our Categories</Text>
 <Card style={styles.card}>
 <View>
 <View style={{  flexDirection: "row",
    

    justifyContent: "space-between",
    height: hp('7%'),
   marginLeft:wp("5%"),
   marginRight:wp("10%"),
   }}>
     
     <FontAwesome5
              name="bed"
              color="#588BAE"
              size={20}
              style={{ 
    marginRight: "3%",
    marginBottom: "2%",
    marginTop:hp('2.5%')}}
            ></FontAwesome5>
           

<FontAwesome5
              name="restroom"
              color="#588BAE"
              size={20}
              style={{ marginLeft: "3%",
    marginRight: "2%",
    marginBottom: "2%",
    marginTop:hp('2.5%')}}
    
            ></FontAwesome5>

            <Entypo
              name="video-camera"
              color="#588BAE"
              size={20}
              style={{ marginLeft: "3%",
    marginRight: "3%",
    marginBottom: "2%",
    marginTop:hp('2.5%')}}
            ></Entypo>


   </View>
   <View style={{flexDirection:'row'}} >
           <Text style={{fontSize:hp('2%'),color:'grey',marginLeft:wp('1%')}}>Bed Room</Text>
           <Text style={{marginLeft:hp('9%'),fontSize:hp('2%'),color:'grey'}}>Living room</Text>
           <Text style={{marginLeft:hp('7%'),fontSize:hp('2%'),color:'grey',marginRight:wp('1%')}}>DSLR Camera</Text>

            </View>

            <View style={styles.lowercardicons}>
     
     <MaterialCommunityIcons
              name="washing-machine"
              color="#588BAE"
              size={20}
              style={{
    marginRight: "3%",
    marginBottom: "2%",
    marginTop:hp('2.5%')}}
            ></MaterialCommunityIcons>
           

<MaterialIcons
              name="storage"
              color="#588BAE"
              size={20}
              style={{ marginLeft: "3%",
    marginRight: "2%",
    marginBottom: "2%",
    marginTop:hp('2.5%')}}
    
            ></MaterialIcons>

            <Feather
              name="package"
              color="#588BAE"
              size={20}
              style={{ marginLeft: "3%",
    marginRight: "3%",
    marginBottom: "2%",
    marginTop:hp('2.5%')}}
            ></Feather>


   </View>
   <View style={{flexDirection:'row',marginBottom:hp('2%')}} >
           <Text style={{fontSize:hp('2%'),color:'grey',marginLeft:wp('1%')}}>Appliances</Text>
           <Text style={{marginLeft:hp('10%'),fontSize:hp('2%'),color:'grey'}}>Storage</Text>
           <Text style={{marginLeft:hp('10%'),fontSize:hp('2%'),color:'grey',marginRight:wp('1%')}}>Packages</Text>

            </View>
            </View>
            </Card>

            <Text style={styles.trendingtext}>Trending Products</Text>
            <View style={{flexDirection:'row',marginTop:hp('1%')}}
            >
            <TouchableOpacity  onPress={
              () => this.props.navigation.navigate('Cart')
            }>          
             <Image style={{marginLeft:wp('2%'),height:hp('14%'),width:wp('28%')}} source={require('../assets/sofaimage.jpg')} />
            </TouchableOpacity>

           <Image style={{marginLeft:wp('5%'),height:hp('14%'),width:wp('28%')}} source={require('../assets/dining.jpg')} />
           <Image style={{marginLeft:wp('5%'),height:hp('14%'),width:wp('28%'),marginRight:wp('2%')}} source={require('../assets/fabric.jpg')} />


            </View>
            <View style={styles.images}>
            <Text style={{color:'grey'}}>Sofa Baleria</Text>
            <Text style={{color:'grey',marginLeft:wp('15%')}}>Dining Table</Text>
            <Text style={{color:'grey',marginLeft:wp('15%')}}>Fabric Sofa</Text>


            
            </View>
            <View style={{flexDirection:'row',marginLeft:wp('2%')}}>
            <Text style={{color:'grey'}}>₹849/Month</Text>
            <Text style={{color:'grey',marginLeft:wp('15%')}}>₹949/Month</Text>
            <Text style={{color:'grey',marginLeft:wp('14%')}}>₹999/Month</Text>


            
            </View>
            <Text style={{fontSize:hp('2%'),color:"	#404040",fontWeight:'bold',marginLeft:wp('2%'),marginTop:hp('1%')}}>Recently Viewed Products</Text>


 </View>
 

      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    height:hp('35%'),width:wp('100%'),backgroundColor:'#89cff0'
  },
  title: {
    fontSize:hp('5%'),color:'white',fontWeight:'bold',marginTop:hp('10%'),marginLeft:wp('5%')
  },
  picker:{marginLeft:hp('2%'),marginRight:hp('32%'),color:'white',fontSize:hp('10%')
},
iconview:{  flexDirection: "row",
    
backgroundColor: "#eaeef0",
justifyContent: "space-between",
height: hp('7%'),
marginLeft:wp("5%"),
marginRight:wp("5%"),
marginTop:hp("2%")
},
searchinput:{ width:wp("80%"),paddingRight:wp("8%"),fontSize:wp("4%") },
categories:{fontSize:hp('2%'),color:"#404040",fontWeight:'bold',marginLeft:wp('2%')},
card:{marginTop:hp('1%'),marginLeft:wp('3%'),marginRight:wp('3%'),backgroundColor:"#F7EEED"},
lowercardicons:{  flexDirection: "row",
    

justifyContent: "space-between",
height: hp('7%'),
marginLeft:wp("5%"),
marginRight:wp("10%"),
marginTop:hp("2%")
},
trendingtext:{fontSize:hp('2%'),color:"#404040",fontWeight:'bold',marginLeft:wp('2%'),marginTop:hp('1%')
},
images:{flexDirection:'row',marginTop:hp('0.5%'),marginLeft:wp('2%')}
});