import React,{useState} from "react";
import {View,Text,PanResponder,StyleSheet} from "react-native";

import Card from "./components/Card";
import GameOver from "./components/GameOver";
import { cards } from "./data";
import { playSwipeSound } from "./utils/sound";

export default function App(){

const [index,setIndex]=useState(0)
const [score,setScore]=useState(0)

const current = cards[index % cards.length]

const panResponder = PanResponder.create({

onMoveShouldSetPanResponder:()=>true,

onPanResponderRelease:(evt,gesture)=>{

if(gesture.dx>120){

if(current.type==="good"){
setScore(score+1)
}

playSwipeSound()

setIndex(index+1)

}

if(gesture.dx<-120){

if(current.type==="junk"){
setScore(score+1)
}

playSwipeSound()

setIndex(index+1)

}

}

})

if(index>20){

return <GameOver score={score}/>

}

return(

<View style={styles.container}>

<Text style={styles.score}>Score: {score}</Text>

<View {...panResponder.panHandlers}>
<Card item={current}/>
</View>

</View>

)

}

const styles=StyleSheet.create({

container:{
flex:1,
justifyContent:"center",
alignItems:"center",
backgroundColor:"#eee"
},

score:{
fontSize:28,
marginBottom:20
}

})
