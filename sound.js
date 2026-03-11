import { Audio } from "expo-av";

export const playSwipeSound = async ()=>{

const { sound } = await Audio.Sound.createAsync(
require("../assets/swipe.mp3")
);

await sound.playAsync();

}
