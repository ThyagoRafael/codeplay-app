import { colors } from "@/constants/colors";
import { StyleSheet, Text, View } from "react-native";

export default function Notifications() {
	return (
		<View style={styles.container}>
			<Text>Página Notifications</Text>
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
