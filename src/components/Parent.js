import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import Playground from './Playground';

 
export default class Parent extends Component {

    constructor(props) {
        super(props) 
        this.state = { 
            color : "red", 
            press : false
        }
    }  

    componentDidMount(){
       // console.log(this.state.color);
        
    } 

    onAction() {

        this.refs.playground.onToggle(this.state.color); 
        
        if(this.state.color === "red"){ 
            this.setState({color : "green"});
        } 
        else{
            this.setState({color : "red"});
        }

        this.setState({press : true});
    
    }

    render(){
        
        return(
            (this.state.press)?(
                <View style={styles.container}>
                
                <Playground ref={"playground"}/>
                
                <TouchableOpacity
                
                    onPress = {()=> this.onAction()}  >
                    <Text style={styles.button}>
                        Press Me
                    </Text>
                </TouchableOpacity>

                <Text style={styles.preview}>
                        Button clicked! Color is now {this.state.color}
                </Text>
               
            </View>
            ):(
                <View style={styles.container}>
                
                <Playground ref={"playground"}/>
                
                <TouchableOpacity
                
                    onPress = {()=> this.onAction()}  >
                    <Text style={styles.button}>
                        Press Me
                    </Text>
                </TouchableOpacity>
                
            </View>
            )
            
            
        )
    }
}

const styles = StyleSheet.create({
    container: {
      
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "pink"
    },
    welcome: {
      fontSize: 20,
      textAlign: "center",
      margin: 10
    },
    instructions: {
      textAlign: "center",
      color: "#333333",
      marginBottom: 5
    },
    button :{
      backgroundColor: "black",
      color:"white"
      
    },
    preview :{
        backgroundColor: "white",
        color:"black"
        
      }
  });