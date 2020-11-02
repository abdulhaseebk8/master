//This is an example code for Bottom Navigation//
import React from 'react';
//import react in our code.
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,AsyncStorage,Alert,Button
} from 'react-native';
//import all the basic component we have used

export default class SettingsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        data: [],
        refreshing: true,
        nav:props.navigation
      
    }
}

// async  componentDidMount() {
//   const { params } = this.nav.state;
   
//   const userid = params ? params.userid : null;


// }




displayData = async ()=>{  
  try{  
    let user = await AsyncStorage.getItem('user');  
    // this.setState({abc:user})
    alert(user);  
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
                <Text style={{fontWeight: 'bold'}}> {this.props.navigation.getParam('userid')} </Text>

        <Text
          style={{
            marginTop: 50,
            fontSize: 25
          }}>
          Setting!
        </Text>
        <TouchableOpacity onPress ={this.displayData}>  
          <Text>Click to display data</Text>  
        </TouchableOpacity>  
    

        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
          <TouchableOpacity
            style={styles.button}
            onPress={
              () => this.props.navigation.navigate('Home')
            }>
            <Text>Go to Home Tab</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={
              () => this.props.navigation.navigate('Details')
            }>
            <Text>Open Detail Screen</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={
              () => this.props.navigation.navigate('Profile')
            }>
            <Text>Open Profile Screen</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={
              () => this.props.navigation.navigate('Cart')
            }>
            <Text>Open Cart Screen</Text>
          </TouchableOpacity>
          <Button
    title="Login"
     onPress={() =>  this.props.navigation.navigate('Home',{"abc":'hellooooooo'})}
    
    />
        </View>
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
});