import { StatusBar } from 'react-native';
import { useFonts, Roboto_700Bold, Roboto_400Regular } from '@expo-google-fonts/roboto';
import { Center, GluestackUIProvider, Text } from '@gluestack-ui/themed'; //Text da biblioteca
import { config } from './config/gluestack-ui.config';
import { Loading } from '@components/Loading';
import { SignUp } from '@screens/SignUp';


export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_700Bold, Roboto_400Regular })

  return (
    <GluestackUIProvider config={config}>

      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />

      {fontsLoaded ? 
      (<SignUp />): (<Loading />
    )}

    </GluestackUIProvider>
  );
}