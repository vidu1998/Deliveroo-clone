import React from "react";
import { View, Text,ScrollView, TouchableOpacity,Image } from "react-native";


export default function CategoryCard({imgUrl,title }) {
  return (
  <TouchableOpacity className='relative mr-2'>
    <Image source={{uri:imgUrl}}
    className='h-20 w-20 rounded'
    ></Image>
    <Text className='absolute bottom-1 left-1 text-white text-bold'>{title}</Text>
  </TouchableOpacity>
  );
}
