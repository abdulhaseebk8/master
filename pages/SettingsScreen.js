//This is an example code for Bottom Navigation//
import React from 'react';
//import react in our code.
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,AsyncStorage,Alert,Button,Image
} from 'react-native';
//import all the basic component we have used
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class SettingsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        data: [],
        refreshing: true,
        nav:props.navigation.state,usename:''
      
    }
	console.log("props",this.props.navigation.state.params.userid,this.props.navigation.state.params.userurl,this.props.navigation.state.params.userheight)
}

// async  componentDidMount() {
//   const { params } = this.nav.state;
   
//   const userid = params ? params.userid : null;


// }


async componentDidMount() {
  const usernameGet = await AsyncStorage.getItem('width');
  console.log(usernameGet)
  if (usernameGet) {
    this.setState({ username: usernameGet });
  } else {
    this.setState({ username: false });
  }
}

displayData = async ()=>{  
  try{  
    let user = await AsyncStorage.getItem('width');  
    // this.setState({abc:user})
    alert(this.state.nav.key);  
  }  
  catch(error){  
    alert(error)  
  }  
}  
  //Setting Screen to show in Setting Option
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
           <Image style={{marginLeft:wp('5%'),height:hp('20%'),width:wp('28%'),marginRight:wp('2%')}} source={{ uri: this.props.navigation.state.params.userurl }} />

        {/* <Text
          style={{
     
            fontSize: 25
          }}>
          Setting!
        </Text> */}
        <Text style={{fontWeight: 'bold'}}> {this.props.navigation.state.params.userid} </Text>
        <Text style={{fontWeight: 'bold'}}> {this.props.navigation.state.params.userurl} </Text>
        <Text style={{fontWeight: 'bold'}}> {this.props.navigation.state.params.userheight} </Text>
        <Text style={{fontWeight: 'bold'}}> {this.state.username} </Text>




      
      </View>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 300,
    marginTop: 16,
  },
  image: {
    height: '5%',
  
  },
});