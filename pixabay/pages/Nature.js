import React, { useEffect, useState, useContext } from "react";
import { View, Image, FlatList, Text } from "react-native";
import { getData } from "../model/requires";    
import { styles } from "../styles/Main";
import AppContext from "../context";
export function Nature({navigation}){
    const [data, setData] = useState(null);
    const {token} = useContext(AppContext);
    async function fetchData() {
      if(token){
        const result = await getData(
          `https://pixabay.com/api/?key=${token}&q=nature&image_type=photo`
        );
        setData(result);
      }
      }
    useEffect(() => {
        fetchData();
      }, []);
    function renderItem({ item }) {
        return (
          <View style={styles.imageContainer}>
            <Image source={{ uri: item.largeImageURL }} style={styles.image} />
          </View>
        );
      }
    return(
      <View>
      {!data ? 
        <View style={{alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%'}}>
          <Text style={{fontSize: 20}}>Loading...</Text>
        </View>
       :
      <FlatList
      data={data}
      numColumns={2}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
      contentContainerStyle={styles.listContainer}
    />
      }
    </View>
    )
}