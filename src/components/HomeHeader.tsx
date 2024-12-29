import { Heading, HStack, Text, VStack, Icon } from "@gluestack-ui/themed";
import { UserPhoto } from "./UsePhoto";
import { LogOut } from "lucide-react-native";

/* 
VStack = flex: column
Hstack = flex: row
*/

export function HomeHeader() {
    return (
        <HStack bg="$gray600" pt="$16" pb="$5" px="$8" alignItems="center" gap="$4">
            <UserPhoto source={{uri: "https://github.com/PedroSodreUFES.png"}} alt="Imagem do usuário" h="$16" w="$16"/>
            
            <VStack flex={1}>
                <Text color="$gray100" fontSize="$sm">Olá,</Text>
                <Heading color="$gray100" fontSize="$md">Pedro Sodré</Heading>
            </VStack>

            <Icon as ={LogOut} color="$gray200" size="xl"/>

        </HStack>
    );
};