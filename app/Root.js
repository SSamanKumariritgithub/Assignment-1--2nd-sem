/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {Component} from 'react';
 import {View,StyleSheet,Text,StatusBar, SafeAreaView,TouchableOpacity, TextInput,} from 'react-native';
 

 export default class Root extends Component{
   constructor(props){
    super(props);
    this.state ={
        passCode : ['','','','']
       

        
 
       };
    }  
   
    _onPressNumber = nu => {
        
        let tempCode = this.state.passCode;
        for(var i=0; i<tempCode.length; i++){
            if(tempCode[i]=='' ){
                tempCode[i] = nu;
                
                break;
            }else{
                continue;
            }
        }
        this.setState({passCode: tempCode});
    };
  
    _onPressCancel =() => {
        let tempCode = this.state.passCode;
        for (var i = tempCode.length-1; i>=0; i--){
            if(tempCode [i]!= ''){
                tempCode[i] = '';
                break;
            }else{
                continue
            }
        }
        this.setState({passCode: tempCode});
    }

 
    render(){
        let Codexnumbers = [
            {no:1},
            {no:2},
            {no:3},
            {no:4},
            {no:5},
            {no:6},
            {no:7},
            {no:8},
            {no:9},
            {no:''},
            {no:0}
        ];
     return (

        <View style = {styles.contain}>
            <View>
                <Text style = {styles.Text }>Enter Your Pin Code </Text>
                
            </View>
           <View style = {styles.numberContainer}>
           {
            this.state.passCode.map(p =>{
                let style = p != ''? styles.Codex2:styles.Codex1;
                return  <View style = {style}></View>;

            })
           }
           
           </View>

       <View style ={styles.numContain}>

       { Codexnumbers.map(nu => {
            return (<TouchableOpacity 
                onPress = {() => this._onPressNumber(nu.no)}>
                <View 
                style = {styles.number} 
                key = {nu.no}>
                
                <Text style = {styles.numberText}>{nu.no}</Text>
                </View>
                </TouchableOpacity>

            );
        })}
        
           
            <TouchableOpacity
            onPress = {()=>this._onPressCancel()}>
            <View style = {styles.delete}>
                <Text style = {styles.numberText}>⌫</Text>
                </View>
            </TouchableOpacity>
            </View> 
           
            </View>
        
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
    fontSize: 24,
    justifyContent:'center',
    fontFamily: 'Roboto-Black',
    color: '#8d9ac8',
    marginTop: 140,
    marginBottom:50,
    marginHorizontal: 70,
   },

   number:{
    margin: 7,
    width: 80,
    height: 80,
    borderRadius: 75,
    backgroundColor: '#e3edf4',
    opacity:10,
    justifyContent: 'center',
    alignItems: 'center'
    
   },

   numberText:{
    fontSize:20,
    fontFamily: 'Roboto-Black'
    
   },

   numContain:{
    flexDirection:'row',
    flexWrap:'wrap',
    marginTop : 10,
    marginBottom:20,
    marginHorizontal:40,
    marginVertical:70,
    width: 282,
    heigh:348,
    alignItems:'center',
    justifyContent: 'center',
   },

   delete: {
    backgroundColor: '#dff0ea',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginHorizontal: 35,
   },
   
   numberContainer:{
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
    marginHorizontal: 110,
    marginBottom: 50,
   },

   Codex1:{
    marginStart:20,
    width : 9,
    height : 9,
    borderRadius: 9,
    backgroundColor: '#dff0ea',
    margin: 8,
   },

   Codex2:{
    marginStart:20,
    width : 9,
    height : 9,
    borderRadius: 9,
    backgroundColor: '#4391d4',
    margin: 8,
   }




 });