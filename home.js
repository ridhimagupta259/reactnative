import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state={
        text: ' ',
        input: ' '
    };
    
  }
  onChangeText(text){
   
  }

  
  render() {
    
    return (
      <View style={styles.container}>
        <View style ={[styles.child,{backgroundColor:'black'},{width:80}]}/>

 
      </View>
    );
  }
  componentDidMount() {
    console.warn('Hello I am ComponentDidMount');
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  child:{

    height: 50,
    //width:50,
    backgroundColor:'blue'
    alignItems:"flex-start",
    flex=0.25
  }
});

export default Home;