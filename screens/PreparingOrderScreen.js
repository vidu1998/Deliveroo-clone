import { View, Text ,SafeAreaView} from 'react-native'
import React,{useEffect} from 'react'
import *  as Animtable from 'react-native-animatable'
import * as Progress from 'react-native-progress';
import { useNavigation } from '@react-navigation/native';

const PreparingOrderScreen = () => {
const navigation=useNavigation()
useEffect(() => {
 setTimeout(()=>{navigation.navigate("DeliveryScreen")},4000)
}, [])
  return (
   <SafeAreaView className='bg-white flex-1 justify-center items-center '>
    <Animtable.Image
      source={require("../assets/OrderProcess.gif")}
      animation="slideInUp"
      iterationCount={1}
      className="h-96 w-96"
    ></Animtable.Image>
     <Animtable.Text
     animation="slideInUp"
     iterationCount={1}
     className="text-lg my-10  text-black font-bold text-center"
     >
     Waiting for Restaurant to Accept your Order!
     </Animtable.Text>
     <Progress.Circle size={60} indeterminate={true} color="black"/>

   </SafeAreaView>
  )
}

export default PreparingOrderScreen