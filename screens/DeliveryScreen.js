import { View, Text, SafeAreaView, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import * as Progress from 'react-native-progress';
import { useSelector } from 'react-redux'
import restaurantSlice, { selectRestaurant } from '../features/restaurantSlice'
import{XMarkIcon} from 'react-native-heroicons/solid'
import MapView,{Marker} from 'react-native-maps';
const DeliveryScreen = () => {
  const navigation=useNavigation();
  const Restaurant=useSelector(selectRestaurant);

  return (
    <View className="bg-[#00CCBB] flex-1">
      <SafeAreaView className="pt-12 z-50">
        <View className="flex-row justify-between items-center p-5">
        <TouchableOpacity onPress={()=>navigation.navigate("Home")}>
            <XMarkIcon color="white" size={30}></XMarkIcon>
        </TouchableOpacity>
            <Text className="font-light text-white text-lg">Order Help</Text>
        </View>
        <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md">
        <View className="flex-row justify-between">

        <View>
                <Text className="text-lg text-gray-400">Estimated Arrival</Text>
                <Text className="text-4xl font-bold">40-45 Minutes</Text>
            </View>
            <Image
            source={{
                uri:"https://media1.giphy.com/media/gsr9MG7bDvSRWWSD1Y/giphy.gif?cid=6c09b952zuwueh0tm1zhmxcydegrybcvtevdijmoltgv0urk&rid=giphy.gif&ct=s",
            }}
            className="h-20 w-20"
            ></Image>

        </View>
            <Progress.Bar size={30} color="#00CCBB" indeterminate={true}/>
            <Text className="mt-3 text-gray-500">
                Your Order at {Restaurant.title} is Being Prepared
            </Text>
        </View>
      </SafeAreaView>
      <MapView
      initialRegion={{
        latitude:Restaurant.lat,
        longitude:Restaurant.long,
        latitudeDelta:0.05,
        longitudeDelta:0.05,
      }}
      className="flex-1 -mt-10 z-0"
      mapType='mutedStandard'
      >
     <Marker
     coordinate={{
      latitude:Restaurant.lat,
      longitude:Restaurant.long,
     }}
     title={Restaurant.title}
     description={Restaurant.short_description}
     identifier="origin"
     pinColor='#00CCBB'
     
     ></Marker>

      </MapView>

      <SafeAreaView className="bg-white flex-row items-center space-x-5 h-28">
        <Image
        
        source={{
          uri:"https://links.papareact.com/wru",
        }}
        className="h-12 w-12 bg-gray-300 p-4 rounded-full ml-5"

        
        >
       
        </Image>
        <View className='flex-1'>
          <Text className='text-lg'>James</Text>
          <Text className='text-gray-400'>Your Rider</Text>
        </View>

       <Text className="text-[#00CCBB] text-lg mr-5 font-bold">Call</Text>
      </SafeAreaView>

    </View>
  )
}

export default DeliveryScreen