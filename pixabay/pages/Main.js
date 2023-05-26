import { View, Text, TextInput, TouchableWithoutFeedback, Keyboard } from "react-native";
import { styles } from "../styles/Main";
export function Main({navigation}){
    return(
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>
              <Text style={styles.text}>Enter your token:</Text>
              <TextInput placeholder="Token" style={{borderColor: 'black', borderWidth: 1, width: '80%', height: 30}}></TextInput>
            </View>
          </TouchableWithoutFeedback>
      )
}