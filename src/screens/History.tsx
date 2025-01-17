import { ScreenHeader } from "@components/ScreenHeader";
import { VStack, Text, Heading } from "@gluestack-ui/themed";
import { HistoryCard } from "@components/HistoryCard";

import { useState } from "react";

import { SectionList } from "react-native";

export function History() {

    const [exercises, setExercises] = useState([
        {
            title: "22.07.24",
            data: ["Puxada frontal", "Remada unilateral"],
        },
        {
            title: "23.07.24",
            data: ["Puxada frontal"],
        },
    ]);

    return(
        <VStack flex={1}>
            <ScreenHeader title="Histórico de exercícios" />

            <SectionList  sections={exercises} 
                          keyExtractor={item => item}
                          renderItem={() => <HistoryCard />}
                          renderSectionHeader={({section}) => (
                            <Heading color="$gray200" fontFamily="$heading" fontSize="$md" mt="$10" mb="$3">
                                {section.title}
                                </Heading>
                          )}
                          style = {{paddingHorizontal: 32}}
                          contentContainerStyle= {/* se a lista estiver vazia centraliza o texto abaixo*/
                            exercises.length === 0 && {flex: 1, justifyContent: "center"}
                          }
                          ListEmptyComponent={() => (
                            <Text color="$gray100" textAlign="center">Não há exercícios registrados aind. Vamos fazer exercícios hoje?</Text>
                          )}
                          showsVerticalScrollIndicator={false}/>
        </VStack>

    )
}