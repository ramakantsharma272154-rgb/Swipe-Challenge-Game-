import React,{useEffect,useState} from "react";
import {View,Text} from "react-native";
import { supabase } from "../supabase";

export default function Leaderboard(){

const [scores,setScores]=useState([])

useEffect(()=>{

load()

},[])

const load=async()=>{

let { data } = await supabase
.from("leaderboard")
.select("*")
.order("score",{ascending:false})
.limit(10)

setScores(data)

}

return(

<View>

<Text>🏆 Leaderboard</Text>

{scores.map((s,i)=>(
<Text key={i}>{s.name} - {s.score}</Text>
))}

</View>

)

}
