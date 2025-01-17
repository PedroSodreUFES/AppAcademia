import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

import { gluestackUIConfig } from "../../config/gluestack-ui.config";

import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";

import { Box } from "@gluestack-ui/themed";

export function Routes() {
    const theme = DefaultTheme;
    theme.colors.background = gluestackUIConfig.tokens.colors.gray700; //definiu a cor de fundo de forma global

    return (
        <Box flex={1} bg="$gray700">
            <NavigationContainer theme={theme}>
                <AuthRoutes />
            </NavigationContainer>
        </Box>
    );
}