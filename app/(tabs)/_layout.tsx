import { Tabs } from "expo-router";
import { useEffect } from "react";
import { Alert, BackHandler } from "react-native";

export default function TabsLayout() {
	useEffect(() => {
		const onBackPress = () => {
			Alert.alert("Sair do aplicativo", "Deseja realmente sair?", [
				{ text: "Cancelar" },
				{ text: "Sair", onPress: () => BackHandler.exitApp() },
			]);
			return true;
		};

		const subscription = BackHandler.addEventListener("hardwareBackPress", onBackPress);

		return () => subscription.remove();
	}, []);

	return (
		<Tabs>
			<Tabs.Screen name="home/page" options={{ title: "Início", headerShown: false }} />
			<Tabs.Screen name="bullseye/page" options={{ title: "Bullseye", headerShown: false }} />
			<Tabs.Screen name="notifications/page" options={{ title: "Notificações", headerShown: false }} />
			<Tabs.Screen name="profile/page" options={{ title: "Perfil", headerShown: false }} />
		</Tabs>
	);
}
