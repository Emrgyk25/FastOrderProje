import { View, Text, Image, TextInput, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  ChevronDownIcon,
  UserIcon,
  SearchIcon,
  AdjustmentsIcon,
} from "react-native-heroicons/outline";

import FeaturedRow from "../components/FeaturedRow";
import sanityClient from "../sanity";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";


const HomeScreen = (props) => {
  const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState([]);
  function navigateToPage() {
    props.navigation.navigate('Profile');
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "featured"] {
          ..., 
          restaurant[]->{
            ...,
            dishes[]->
          }
        }
        `
      )
      .then((data) => {
        setFeaturedCategories(data);
      });
  }, []);

  // console.log(featuredCategories);

  return (
    <SafeAreaView className="bg-white pt-5">
      <View style={style.header}>
        <TouchableOpacity  ><Icon name="magnify" size={35} style={style.header_icon} />
        </TouchableOpacity>
        <Image
          source={require('../assets/fast.png')}
          style={style.image}
        />
        <TouchableOpacity onPress={navigateToPage} ><Icon name="account" size={35} style={style.header_icon2} />
        </TouchableOpacity>
      </View>



      {featuredCategories?.map((category) => (
        <FeaturedRow
          key={category._id}
          id={category._id}
          title={category.name}
          description={category.short_description}
        />
      ))}
      <View className="pb-36"></View>

    </SafeAreaView >
  );
};
const style = StyleSheet.create({
  header: {
    flexDirection: 'row',
    paddingVertical: 10,


  },
  container: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',

  },
  image: {
    width: 250,
    height: 50,
    marginLeft: 50


  },
  header_icon: {
    paddingHorizontal: 0,
  },
  header_icon2: {
    marginLeft: 40,
  },


});
export default HomeScreen;
