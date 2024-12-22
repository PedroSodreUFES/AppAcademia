import { View, StatusBar } from 'react-native';
import { useFonts, Roboto_700Bold, Roboto_400Regular } from '@expo-google-fonts/roboto';
import { GluestackUIProvider, Text } from '@gluestack-ui/themed'; //Text da biblioteca

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_700Bold, Roboto_400Regular })

  return (
    <GluestackUIProvider>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#202024" }}>


        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="transparent"
        />

        {fontsLoaded ? <Text>App da academia!</Text> : <View />}
      </View>
    </GluestackUIProvider>
  );
}