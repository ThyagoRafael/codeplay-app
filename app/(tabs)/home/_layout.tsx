import { Stack } from "expo-router";

export default function HomeLayout() {
	return (
		<Stack>
			<Stack.Screen name="page" options={{ headerShown: false }} />
			<Stack.Screen name="topics/[courseId]" options={{ headerShown: false }} />
			<Stack.Screen name="contents/[topicId]" options={{ headerShown: false }} />
		</Stack>
	);
}
