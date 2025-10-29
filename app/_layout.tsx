import { Stack } from "expo-router";

export default function MainLayout() {
	return (
		<Stack>
			<Stack.Screen name="index" options={{ headerShown: false }} />
			<Stack.Screen name="(forgot-password)/get-email/page" options={{ headerShown: false }} />
			<Stack.Screen name="(forgot-password)/verify-code/page" options={{ headerShown: false }} />
			<Stack.Screen name="(forgot-password)/new-password/page" options={{ headerShown: false }} />
			<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
		</Stack>
	);
}
