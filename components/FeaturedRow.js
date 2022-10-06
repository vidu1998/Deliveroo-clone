import React,{useEffect,useState} from 'react';
import { View, Text, ScrollView } from 'react-native';
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import RestrurantCard from './RestrurantCard';
import sanityClient from '../sanity';

export default function FeaturedRow({id,title,description}) {
  const [restrurants, setRestrurant] = useState([]);
  
  
  console.log(id);


  useEffect(() => {
    sanityClient
      .fetch(
        `
      *[_type == "featured" && _id == $id] {
        ...,
        restaurants[]->{
          ...,
          dishes[]->,
          type-> {
            name
          }
        },
      }[0]
    `,
        { id }
      )
      .then((data) => {
        console.log("restaurants:", data?.restaurants);
        setRestrurant(data?.restaurants);
      })
      .catch((err) => {
        console.log("Err at Featured Row:", err);
      });
  }, [id]);
  
  
  return (
    <View>
    <View className='mt-4 flex-row items-center justify-between px-4'>
      <Text className="font-bold text-lg">{title}</Text>
      <ArrowRightIcon color="#00CCBB"></ArrowRightIcon>
      </View>
      <Text className='text-xs text-gray-500 px-4'>{description}</Text>
      <ScrollView
      horizontal
      contentContainerStyle={{
        paddingHorizontal:15
      }}
      showsHorizontalScrollIndicator={false}
      className="pt-4"
      >
      {/* Restrurant cards */}


      {restrurants?.map((restrurant)=>{
        return (
        <RestrurantCard
        key={restrurant._id}
       id={restrurant._id}
    imgUrl={restrurant.image}
    title={restrurant.name}
    rating={restrurant.rating}
    genre={restrurant.type?.name}
    address={restrurant.address}
    short_description={restrurant.short_description}
    dishes={restrurant.dishes}
    long={restrurant.long}
    lat={restrurant.lat}
      
      ></RestrurantCard>
        );
      })}
      
    
      </ScrollView>
     </View>
  );
}
