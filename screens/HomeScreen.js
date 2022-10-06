import { View, Text,SafeAreaView,Image, TextInput, ScrollView} from "react-native";
import React, { useLayoutEffect,useEffect,useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { ChevronDownIcon,AdjustmentsVerticalIcon,UserIcon,MagnifyingGlassIcon } from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import sanityClient from "../sanity"
export default function HomeScreen() {

  const navigation=useNavigation();
  const [featuredCategories,setFeaturedCategories]= useState([]);

  useLayoutEffect(()=>{
    navigation.setOptions({
      headerTitle:"TESTING",
      headerShown:false,
    })
  },[])

  useEffect(() => {
   sanityClient.fetch(`
   *[_type=="featured"]{
    ...,
    restaurants[]->{
      ...,
      dishes[]->
  }
  }
   
   `).then(data=>{
    setFeaturedCategories(data)
   })
  }, [])

// console.log(featuredCategories);
  return (
    <SafeAreaView  className=" bg-white pt-6">
   
      <View className="flex-row pb-3 items-center mx-4 space-x-2 px-4">
        <Image 
        source={{
          uri: "https://links.papareact.com/wru"
        
        
        }} 
        className='h-7 w-7 bg-gray-300 py-4 rounded-full'
        ></Image>
         <View className='flex-1'>
        <Text className="font-bold text-gray-400 text-xs">Deliver now!</Text>
        <Text className="font-bold text-xl">Current Location
        <ChevronDownIcon size={20} color="#00CC88"></ChevronDownIcon>
        </Text>
        
      </View>
      <UserIcon size={35} color="#00CC88"></UserIcon>
      </View>
      <View className="flex-row items-center space-x-2 pb-2 mx-4">

        <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
         <MagnifyingGlassIcon color="gray" size={20} ></MagnifyingGlassIcon>
         <TextInput placeholder="Restrurants and Cruisines" keyboardType="default"></TextInput>
         
        </View>
        <AdjustmentsVerticalIcon color="#00CC88"/>
      </View>
      {/* body */}
      <ScrollView className="bg-gray-200"
      contentContainerStyle={{
        paddingBottom:100,
      }}>
      
        <Categories></Categories>

        {featuredCategories?.map((category) => (
          <FeaturedRow
            key={category._id}
            id={category._id}
            title={category.name}
            description={category.short_description}
          />
        ))}
        
      </ScrollView>
    </SafeAreaView>
  );
}
