import { View, Text, TouchableWithoutFeedback } from "react-native";
import { styles } from "../styles/Main";
export function Main({navigation}){
    return(
        <View style={styles.container}>
          <Text style={styles.text}>Main</Text>
          <View style={styles.buttonContainer}>
            <TouchableWithoutFeedback onPress={()=>{navigation.navigate("Architecture")}}>
              <Text style={styles.button}>Architecture</Text>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={()=>{navigation.navigate("Motorcicle")}}>
              <Text style={styles.button}>Motorcicle</Text>
            </TouchableWithoutFeedback>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableWithoutFeedback onPress={()=>{navigation.navigate("Nature")}}>
              <Text style={styles.button}>Nature</Text>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={()=>{navigation.navigate("Space")}}>
              <Text style={styles.button}>Space</Text>
            </TouchableWithoutFeedback>
          </View>
        </View>
      )
}