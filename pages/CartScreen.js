//This is an example code for Bottom Navigation//
import React from 'react';
//import react in our code.
import {
  Text,
  View,
  TouchableOpacity,TextInput,
  StyleSheet,Picker,Image, ImageBackground,Dimensions
} from 'react-native';
import { Card } from 'native-base';

import { SearchBar,Button } from 'react-native-elements';
import {
    AntDesign, Feather, FontAwesome5,
    FontAwesome,Entypo,MaterialCommunityIcons,MaterialIcons,EvilIcons
  } from '@expo/vector-icons';
//import all the basic component we have used
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
export default class Cartcreen extends React.Component {
  
  constructor() {  
    super();  
    this.state = { screenWidth: "", screenHeight: "" }  
    }  
    getScreenSize = () => {  
      const screenWidth = Math.round(Dimensions.get('window').width);  
      const screenHeight = Math.round(Dimensions.get('window').height);  
      this.setState({ screenWidth: screenWidth, screenHeight: screenHeight })  
      }  
  //Detail Screen to show from any Open detail button
  render() {
  
    return (
      <View style={styles.mainview}>
      
          <TouchableOpacity activeOpacity={0.7}  onPress={() =>{this.props.navigation.navigate("Home")}}>
      <View style={styles.backicon}>
       <EvilIcons
            name="chevron-left"
            size={33}
            color="#028BBF"
            style={{marginTop:hp('0.20%')}}


          ></EvilIcons>
          <Text style={{ fontSize:wp("4.5%"),marginTop:hp('0.35%')}}>Back</Text>
          </View>
          </TouchableOpacity>
       
      <View style={{backgroundColor:'white'}}>
      <ImageBackground style={styles.backgroundimage} source={require('../assets/sofaimageone.jpg')}></ImageBackground>
      </View>
      <View>
      <Text style={{fontSize:hp('3%'),fontWeight:'bold',color:"	#404040"}}>Sofa Baleria </Text>

      </View>
      <View style={styles.buttonandreview}>
      <Button
containerStyle={{marginTop:hp('0.25%')}}
buttonStyle={{color:'white',backgroundColor:'orange',alignItems:'center',width:wp('13%'),height:hp('1%')}}
titleStyle={{color:'blue',alignItems:'center',color:'white',fontSize:hp('1.5%')}}
  title="4.5 ★"
/>
       <Text style={{marginLeft:hp('1%'),color:'#A9A9A9',fontWeight:'bold'}}>1034 Ratings | 104 Reviews</Text>

      </View>

      <View style={styles.rentportion}>
      <Text style={{fontSize:hp('3%'),fontWeight:'bold',color:'grey'}}>Rent</Text>
      <Text style={{fontSize:hp('3%'),fontWeight:'bold',color:'grey',marginLeft:wp('50%')}}>₹799/Month</Text>
      
</View>
 <View style={styles.refundableportion}>
      <Text style={{fontSize:hp('2%'),color:'black',color:'#D3D3D3',fontWeight:'bold'}}>Refundable Deposit</Text>
      <Text style={{fontSize:hp('2%'),color:'#D3D3D3',marginLeft:wp('29%'),fontWeight:'bold'}}>₹1899/Month</Text>
      
</View>
<Card style={styles.uppercard}>
<View style={{flexDirection:'row'}}>
<Text style={{fontSize:hp('2%'),color:'white',fontWeight:'bold',marginTop:hp('2%'),marginLeft:wp('3%')}}>{`Get 10% off on this product\nby using coupon code RENT10\n\nView All Offers`}</Text>
<AntDesign
style={{marginLeft:wp('20%'),marginTop:hp('4%')}}
 name="gift"
 size={50}
color="blue" />

</View>

</Card>
<View style={styles.sizeportion}>
<Text style={{fontSize:hp('3%'),fontWeight:'bold',color:'grey'}}>Select Size</Text>
<TouchableOpacity
      style={{  marginLeft:hp('6%'),width:wp('10%'),height:hp('5%'),justifyContent: 'center',alignItems: 'center',padding: 10,borderRadius: 100,backgroundColor: '#F0E3E0',borderColor:'blue',borderWidth:hp('0.2')}}>
        <Text style={{fontSize:hp('1.2%')}}>6x3</Text>
      </TouchableOpacity>
      <TouchableOpacity
      style={{  marginLeft:hp('2.1%'),width:wp('10%'),height:hp('5%'),justifyContent: 'center',alignItems: 'center',padding: 10,borderRadius: 100,backgroundColor: '#F0E3E0'}}>
        <Text style={{fontSize:hp('1.5%')}}>6x4</Text>
      </TouchableOpacity>
      <TouchableOpacity
      style={{  marginLeft:hp('2.1%'),width:wp('10%'),height:hp('5%'),justifyContent: 'center',alignItems: 'center',padding: 10,borderRadius: 100,backgroundColor: '#F0E3E0'}}>
        <Text style={{fontSize:hp('1.5%')}}>6x5</Text>
      </TouchableOpacity>
      <TouchableOpacity
      style={{  marginLeft:hp('2.1%'),width:wp('10%'),height:hp('5%'),justifyContent: 'center',alignItems: 'center',padding: 10,borderRadius: 100,backgroundColor: '#F0E3E0'}}>
        <Text style={{fontSize:hp('1.5%')}}>6x6</Text>
      </TouchableOpacity>


</View>
<View style={{flexDirection:'row',marginTop:hp('2%')}}>
 
<Text style={{fontSize:hp('3%'),fontWeight:'bold',color:'grey',marginTop:hp('0.4%')}}>Select Tenure</Text>

<TextInput style={{ borderColor:'blue',borderLeftWidth: 0.5,borderRightWidth: 0.5,borderTopWidth:0.5,borderBottomWidth:0.5,height:hp('5%'),marginLeft:wp('5%'),width:wp('50%'),padding:hp('0.8%'),marginBottom:hp('1%')}} placeholder={"Please Enter your Tenure"}/>

</View>
<View style={styles.lowerview}
>
<View style={{flexDirection:'row'}}><Text style={{color:'white',marginLeft:hp('2%'),marginTop:hp('3%'),fontSize:hp('2.5%'),fontWeight:'bold'}}>{`Rent\n₹5039 for 36Months`}</Text>
<Button
containerStyle={{width:wp('40%'),height:hp('5%'),marginLeft:wp('5%'),marginBottom:hp('12%'),marginTop:hp('4%')}}
buttonStyle={{color:'white',backgroundColor:'white',alignItems:'center'}}
titleStyle={{color:'blue',alignItems:'center'}}
  title="Add to Cart"
/>
</View>



</View>

      </View>
       
    );
  }
}
const styles = StyleSheet.create({
mainview:{marginLeft:wp('2%'),marginRight:wp('2%')
},
backicon:{flexDirection:'row',marginTop:hp('3%')
},
backgroundimage:{height:hp('29%'),width:wp('95%'),marginTop:hp('0.5%'),marginRight:wp('5%') 
},
buttonandreview:{flexDirection:'row',marginTop:hp('1%')},
rentportion:{flexDirection:'row',marginTop:hp('2%')},
refundableportion:{flexDirection:'row',marginTop:hp('2%')},
uppercard:{height:hp('12.5%'),width:wp('91%'),marginTop:hp('3%'),backgroundColor:'#C0B7DB',marginLeft:wp('1%')
},
sizeportion:{flexDirection:'row',marginTop:hp('2%')
},
lowerview:{marginTop:hp('1%'),marginBottom:hp('1%'),backgroundColor:'#89cff0',height:hp('13.5%')
}



});