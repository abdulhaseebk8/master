//This is an example code for Bottom Navigation//
import React from 'react';
//import react in our code.
import {
  StyleSheet,
    SafeAreaView,
    FlatList,
    View,
    Image,
    TouchableOpacity,Text,AsyncStorage,Button
} from 'react-native';
//import all the basic component we have used

export default class ProfileScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        data: [],
        refreshing: true,
        nav:props.navigation,
        userid:''

    }
}
displayData = async ()=>{  
  try{  
    AsyncStorage.setItem('user',data.item.url) 
    // this.setState({abc:user})

  }  
  catch(error){  
    alert(error)  
  }  
}  
componentDidMount() {
    this.fetchCats();
}

fetchCats() {
    this.setState({ refreshing: true });
    fetch('https://api.thecatapi.com/v1/images/search?limit=10&page=1')
        .then(res => res.json())
        .then(resJson => {
            this.setState({ data: resJson });
            console.log(resJson);

            this.setState({ refreshing: false });
        }).catch(e => console.log(e));
}

renderItemComponent = (data) =>
    <TouchableOpacity style={styles.container}    onPress={() =>  this.state.nav.navigate('Product',{"userid":data.item.id})}>
        <Image style={styles.image} source={{ uri: data.item.url }} />
        <Text >{data.item.id}</Text>
       
    </TouchableOpacity>

ItemSeparator = () => <View style={{
    height: 2,
    backgroundColor: "rgba(0,0,0,0.5)",
    marginLeft: 10,
    marginRight: 10,
}}
/>

handleRefresh = () => {
    this.setState({ refreshing: false }, () => { this.fetchCats() }); // call fetchCats after setting the state
}

  //Detail Screen to show from any Open detail button
  render() {
    return (
      <View>
     
        <FlatList
            data={this.state.data}
            renderItem={item => this.renderItemComponent(item)}
            keyExtractor={item => item.id.toString()}
            // ItemSeparatorComponent={this.ItemSeparator}
            refreshing={this.state.refreshing}
            onRefresh={this.handleRefresh}
          
            
          />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    height: 300,
    margin: 10,
    backgroundColor: '#FFF',
    borderRadius: 6,
  },
  image: {
    height: '100%',
    borderRadius: 4,
  },
});