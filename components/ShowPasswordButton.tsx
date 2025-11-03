import AntDesign from "@expo/vector-icons/AntDesign";
import { Pressable, StyleSheet } from "react-native";

interface Props {
	showPassword: boolean;
	setShowPassword: (show: boolean) => void;
}

export default function ShowPasswordButton({ showPassword, setShowPassword }: Props) {
	return (
		<Pressable onPress={() => setShowPassword(!showPassword)} style={styles.showPasswordButton}>
			<AntDesign name={showPassword ? "eye" : "eye-invisible"} size={24} />
		</Pressable>
	);
}

const styles = StyleSheet.create({
	showPasswordButton: {
		marginLeft: 8,
	},
});
