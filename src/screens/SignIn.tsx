import { VStack, Image, Center, Text, Heading, ScrollView } from "@gluestack-ui/themed" //VStack coloca elementos no flex-direction: column

import BackgroundImg from '@assets/background.png'
import Logo from "@assets/logo.svg"

import { Input } from "@components/Input"
import { Button } from "@components/Button"

export function SignIn() {
    return (
        <ScrollView contentContainerStyle={{flexGrow: 1}} showsVerticalScrollIndicator={false} bg="$gray700">
            <VStack flex={1} bg="$gray700">
                <Image
                    source={BackgroundImg}
                    defaultSource={BackgroundImg}
                    alt="Pessoas treinando"
                    h={624}
                    w='$full'
                    position="absolute"
                />
                <VStack flex={1} px="$10" pb="$16">
                    <Center my='$24'>
                        <Logo />

                        <Text color="$gray100" fontSize="$sm">
                            Treine sua mente e o seu corpo.
                        </Text>
                    </Center>

                    <Center gap="$2">

                        <Heading color='$gray100'>Acesse a sua conta</Heading>

                        <Input placeholder="E-mail" keyboardType="email-address" autoCapitalize="none" />

                        <Input placeholder="Senha" secureTextEntry /* isto deixa a senha com asteriscos*/ />

                        <Button title="Acessar" />

                    </Center>

                    <Center flex={1} justifyContent="flex-end" mt="$4">

                        <Text color="$gray100" fontSize="$sm" mb="$3" fontFamily="$body">
                            Ainda não tem acesso?
                        </Text>

                        <Button title="Criar conta" variant="outline" />
                    </Center>

                </VStack>

            </VStack>

        </ScrollView>
    )
}