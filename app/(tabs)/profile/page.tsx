import { colors } from "@/constants/colors";
import { router } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Profile() {
	return (
		<View style={styles.container}>
			<Text>Página Profile</Text>
			<Button title="Sair da conta" onPress={() => router.replace("/")} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: colors.mainBackgroundColor,
	},
});
