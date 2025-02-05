import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  placeholder,
  TextInput,
  phone,
  setPhone,
  handlePress,
  borderRadius,
  TouchableOpacity,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AntDesign from "@expo/vector-icons/AntDesign";


export default function App() {
  return (
    
    <View style={styles.signuppage}>
      <View style={styles.signup}>
        <Image
          source={require("./assets/signup.png")}
          style={styles.signupimage}
        />
      </View>

      <View style={styles.login}>
        <View>
          <Text style={styles.bold1}>All your favorites from your native!</Text>
        </View>

        <View style={styles.box1}>
          <View style={styles.containerr}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => alert("This is Your SHIPHIT")}
            >
              <Text style={styles.buttonText}>SignUp</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <View style={styles.container}>
            <TextInput
              style={styles.input}
              placeholder="+91|Enter phone number"
              keyboardType="phone-pad" // Opens number keypad
              maxLength={10} // Limits to 10 digits
              value={phone}
              onChangeText={setPhone}
            /></View>

           <View>
            <View style={styles.text}>  

             <Text style={styles.flex}>
              By Continuing, you agree to our <Text style={styles.colortext1}>Terms of Service,</Text>
            </Text>

           
             <Text style={styles.flex1}>
              <Text style={styles.colortext2}>Privacy policies </Text> & <Text style={styles.colortext3}> Content policies.</Text>
            </Text>
           </View>
          
            <View style={styles.btn}>
            <Button title="continue" onPress={handlePress} />
            </View>
 
            <View style={styles.skip}>
            <Text>
              Skip for now{" "}
              <View style={styles.arrow}>
              <AntDesign name="arrowright" size={24} color="black" />
              </View>
              </Text>
              </View>
            
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  signuppage: {
    height: "65%",
    backgroundColor: "#6246D2",
    width: "100%",
  },
  signup: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  signupimage: {
    width: "125%",
    height: "125%",
  },
  login:{
    justifyContent:"center",
    alignItems:"center",
  },
  bold1:{
    fontSize:22,
  },
  buttonText:{
     borderRadius:50,
      backgroundColor: "pink",
      paddingVertical: 12,
      paddingHorizontal:30,
      padding:8,
  },
  containerr:{
    alignItems:"center",
     borderRadius:50,
      backgroundColor: "pink",
      paddingVertical:3,
      paddingHorizontal:3,
      padding:3,
      marginTop:5,
  },
  container:{
    alignItems:"center",
      borderRadius:50,
      paddingVertical:3,
      paddingHorizontal:3,
      padding:3,
      marginTop:8,
      borderWidth:3, 
      borderColor: "whitesmoke",
  },
  flex:{
    fontSize:14,
    fontWeight:306,
  },
   flex1:{
    fontSize:14,
    fontWeight:306,
  },
   text:{
    marginTop:8,
   },
   btn:{
    marginTop:5,

   },
   skip:{
    alignItems:"center",
    marginTop:8,
   },
   arrow:{
    alignItems:"center",
    marginTop:10,
   },
   colortext1:{
    color:"#6246D2",
   },
    colortext2:{
    color:"#6246D2",
   },
    colortext3:{
    color:"#6246D2",
   },
  
});
