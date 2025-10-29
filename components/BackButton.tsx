import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import { Pressable, StyleSheet } from "react-native";

export default function BackButton() {
	return (
		<Pressable onPress={() => router.back()} style={styles.button}>
			<Ionicons name="chevron-back-circle-outline" size={30} color="#2E6FF2" />
		</Pressable>
	);
}

const styles = StyleSheet.create({
	button: {
		alignItems: "flex-start",
		paddingRight: 10,
		paddingVertical: 20,
	},
});
