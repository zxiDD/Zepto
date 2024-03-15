import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./src/screens/login";
import Otp from "./src/screens/otp";
import MyTabs from "./src/screens/Home/bottomTabNavigator";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="OTP" component={Otp} />
        <Stack.Screen name="Bottom-Tabs" component={MyTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
