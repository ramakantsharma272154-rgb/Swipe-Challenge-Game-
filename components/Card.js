import React from "react";
import {View,Text,Image,StyleSheet} from "react-native";

export default function Card({item}){

return(

<View style={styles.card}>

<Image source={{uri:item.image}} style={styles.image}/>

<Text style={styles.title}>{item.title}</Text>

<Text>Swipe Right = Good</Text>
<Text>Swipe Left = Junk</Text>

</View>

)

}

const styles=StyleSheet.create({

card:{
width:300,
height:420,
backgroundColor:"#fff",
borderRadius:20,
alignItems:"center",
justifyContent:"center"
},

image:{
width:260,
height:260,
borderRadius:10
},

title:{
fontSize:28,
fontWeight:"bold"
}

})
