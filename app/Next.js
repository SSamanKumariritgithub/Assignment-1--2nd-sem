/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {Component} from 'react';
 import {View,StyleSheet,Text,StatusBar, SafeAreaView,TouchableOpacity, TextInput,} from 'react-native';
 import {fonts} from './Styles/fonts';
 import {Image} from './assert/Images';
 

 export default class Next extends Component{
   constructor(props){
    super(props);
    this.state ={
        passCode : ['','','',''],
        minutes: 1,
        seconds: 59

       };
    } 
    
    componentDidMount() {
        setInterval (() => {
         this.setState({minutes: this.state.minutes -1});
         if(this.minutes===0){
            clearInterval(this.setState.minutes)
            alert('Times Up ! Re enter the pin ')
            minutes: 0
         }
        }, 60000);
        setInterval (() => {
         this.setState({seconds: this.state.seconds -1});
         while(this.seconds===0){
             clearInterval(this.setState.seconds)
         }
        }, 1000);
     }
     
   
 
    render(){
  
     return (

        <><View style={styles.contain}>


             
         </View><View>
                 <Text style={styles.Text}>Maximum Attemps Reached </Text>

                 <Text style={styles.textStyle}>{this.state.minutes}:{this.state.seconds}</Text>
                 <Text style={styles.TextTwo}>To protect your information,
                 access has been locked for 5 minutes.
                 Comeback later and try again.</Text>

             </View></>    
                

         
        
        );
   }

 }
 
 const styles = StyleSheet.create({
   contain:{
     flex: 1,
     backgroundColor: '#fcfeff',
     justifyContent:'center',
     marginBottom: 60,
   },
   Text:{
    fontSize: 20,
    justifyContent: 'center',
    fontFamily: 'Roboto-Black',
    color: '#8d9ac8',
    marginTop: 2,
    marginBottom:130,
    marginHorizontal: 50,
   },

   TextTwo:{
    fontSize : 18,
    textAlign: 'center',
    marginBottom:170,
    marginTop: 120,

   },

   textStyle:{
    fontSize: 48,
    fontFamily: 'Roboto',
    color: '#0a0803',
    fontWeight: 'bold',
    textAlign: 'center',
    borderColor : '#000000',
    borderEndWidth: 1,

}


  
  
   
 





 });