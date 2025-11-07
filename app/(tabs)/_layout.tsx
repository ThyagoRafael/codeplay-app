import { colors } from "@/constants/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
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
		<Tabs
			screenOptions={{
				tabBarStyle: { backgroundColor: colors.darkPrimaryColor, height: 75 },
				tabBarActiveTintColor: colors.white,
				tabBarInactiveTintColor: colors.gray,
			}}
		>
			<Tabs.Screen
				name="home"
				options={{
					title: "Início",
					headerShown: false,
					tabBarIcon: ({ focused, color, size }) => {
						if (focused) {
							return <Ionicons name="home" color={color} size={size} />;
						}

						return <Ionicons name="home-outline" color={color} size={size} />;
					},
				}}
			/>
			<Tabs.Screen
				name="bullseye/page"
				options={{
					title: "Bullseye",
					headerShown: false,
					tabBarIcon: ({ focused, color, size }) => {
						if (focused) {
							return <MaterialCommunityIcons name="bullseye-arrow" color={color} size={size} />;
						}

						return <MaterialCommunityIcons name="bullseye" color={color} size={size} />;
					},
				}}
			/>
			<Tabs.Screen
				name="notifications/page"
				options={{
					title: "Notificações",
					headerShown: false,
					tabBarIcon: ({ focused, color, size }) => {
						if (focused) {
							return <Ionicons name="notifications" color={color} size={size} />;
						}

						return <Ionicons name="notifications-outline" color={color} size={size} />;
					},
				}}
			/>
			<Tabs.Screen
				name="profile/page"
				options={{
					title: "Perfil",
					headerShown: false,
					tabBarIcon: ({ focused, color, size }) => {
						if (focused) {
							return <MaterialCommunityIcons name="account-circle" color={color} size={size} />;
						}

						return <MaterialCommunityIcons name="account-circle-outline" color={color} size={size} />;
					},
				}}
			/>
		</Tabs>
	);
}
