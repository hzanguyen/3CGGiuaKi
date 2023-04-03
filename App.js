import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableWithoutFeedback
} from "react-native";
import { useState, useEffect } from "react";
import axios from "axios";
export default function App() {
  const ACCESS_KEY = "XphQSOcxpwn_5yKPE_vR4UD189Tpv33Besm-EyiJ3BY";
  const UNSPLASH_API_URL = "https://api.unsplash.com";

  const [text, setText] = useState();
  const [image, setImageUrl] = useState();

  const handleTextChange = (text) => {
    setText(text);
  };

  const handleImageChange = async () => {
    axios
      .get("https://api.unsplash.com/photos/random", {
        headers: {
          Authorization: "Client-ID XphQSOcxpwn_5yKPE_vR4UD189Tpv33Besm-EyiJ3BY"
        },
        params: {
          query: "food"
        }
      })
      .then((response) => {
        setImageUrl(response.data.urls.regular);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    handleImageChange();
  }, []);
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10
      }}
    >
      <TextInput
        style={{ marginBottom: 10, height: 40, width: 200, borderWidth: 1 }}
        onChangeText={handleTextChange}
        value={text}
        placeholder="Enter text here"
      />
      <TouchableWithoutFeedback onPress={handleImageChange}>
        <Image
          source={{ uri: image }}
          style={{ width: 300, height: 300, resizeMode: "contain" }}
        />
      </TouchableWithoutFeedback>
      <Image source={require
    ('./download.jpg')}></Image>
      <Text>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
