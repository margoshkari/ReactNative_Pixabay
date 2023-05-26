import { View, Text, TextInput, TouchableWithoutFeedback, Keyboard } from "react-native";
import { styles } from "../styles/Main";
import { useContext } from "react";
import AppContext from "../context";
export function Main({navigation}){
  const {token, setToken} = useContext(AppContext);
    return(
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>
              <Text style={styles.text}>Enter your token:</Text>
              <TextInput 
              placeholder="Token" 
              style={{borderColor: 'black', borderWidth: 1, width: '80%', height: 30}}
              value={token}
              onChangeText={(token) => setToken(token)}
              ></TextInput>
            </View>
          </TouchableWithoutFeedback>
      )
}