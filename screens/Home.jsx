import { Image, SafeAreaView, Text, View, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { ChevronDownIcon, UserIcon, AdjustmentsVerticalIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import Categories from '../components/Categories'
import FeaturedRow from '../components/FeaturedRow'
import client from "../sanity"



const Home = () => {
    const navigation = useNavigation()
    const [featuredCategories, setFeaturedCategories]= useState()

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown:false
        })
    }, [])

    useEffect(()=>{
        client.fetch()
    },[])

  return (
    <>
        <SafeAreaView className="bg-black" >
        <View className="bg-white pt-2">
        <View className='flex-row pb-3 items-center mx-4 space-x-2 bg-white'>
            <Image className="h-7 w-7 bg-gray-300 p-4 rounded-full" source={{
                uri: "https://links.papareact.com/wru"
            }}/>
            <View className="flex-1">
                <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
                <Text className="font-bold text-xl">Current Location
                    <ChevronDownIcon size={20} color="00CCBB" />
                </Text>
            </View>
            <UserIcon size={35} color="00CCBB"/>
        </View>

        {/* Search */}

        <View className="flex-row items-center space-x-2 pb-2 mx-4">
            <View className='flex-row space-x-2 flex-1 bg-gray-200 p-3 items-center'>
                <MagnifyingGlassIcon color="gray" size={20}/>
                <TextInput placeholder='Restaurants and cuisines' keyboardType='default' />
            </View>
            <AdjustmentsVerticalIcon color="00CCBB" size={30}/>
        </View>

        {/* Body */} 
        <ScrollView className="bg-gray-100" contentContainerStyle>
            {/* Categories */}
            <Categories/>
            {/* Featured Row */}
            <FeaturedRow 
                title="Featured"
                description="Paid placements from our partners"
                id={789}
            />
            <FeaturedRow 
                title="Tasty Discounts"
                description="Everyone's been enjoying these juicy discounts!"
                id={456}
            />
            <FeaturedRow 
                title="Offers near you!"
                description="Why not support your local restaurant tonight!"
                id={123}
            />
        </ScrollView>

        </View>
        </SafeAreaView>
    </>
  )
}

export default Home