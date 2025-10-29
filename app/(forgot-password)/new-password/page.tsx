import BackButton from "@/components/BackButton";
import { router } from "expo-router";
import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function VerifyCodeScreen() {
	const [newPassword, setNewPassword] = useState("");
	const [confirmNewPassword, setConfirmNewPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);

	const handleNavigate = () => {
		router.dismissAll();
		router.replace("/");
	};

	return (
		<View style={styles.container}>
			<BackButton />

			<Text style={styles.title}>Esqueceu a senha</Text>

			<View style={styles.card}>
				<Text style={styles.label}>Crie uma nova senha</Text>
				<Text style={styles.subtitle}>Digite uma nova senha.</Text>

				<View style={styles.newPasswordContainer}>
					<Text style={styles.label}>Nova senha</Text>
					<View style={styles.passwordContainer}>
						<TextInput
							style={styles.input}
							secureTextEntry={!showPassword}
							placeholder="Insira sua nova senha"
							value={newPassword}
							onChangeText={setNewPassword}
						/>
						<Pressable onPress={() => setShowPassword(!showPassword)}>
							<Text style={styles.showPassword}>{showPassword ? "🙈" : "👁️"}</Text>
						</Pressable>
					</View>

					<View>
						<Text style={styles.info}>A senha deve conter:</Text>

						<View style={styles.listItem}>
							<Text style={styles.bullet}>{"\u2022"}</Text>
							<Text style={styles.info}>no mínimo, 8 caracteres,</Text>
						</View>

						<View style={styles.listItem}>
							<Text style={styles.bullet}>{"\u2022"}</Text>
							<Text style={styles.info}>1 letra maiúscula,</Text>
						</View>

						<View style={styles.listItem}>
							<Text style={styles.bullet}>{"\u2022"}</Text>
							<Text style={styles.info}>1 letra minúscula,</Text>
						</View>

						<View style={styles.listItem}>
							<Text style={styles.bullet}>{"\u2022"}</Text>
							<Text style={styles.info}>1 número, e</Text>
						</View>

						<View style={styles.listItem}>
							<Text style={styles.bullet}>{"\u2022"}</Text>
							<Text style={styles.info}>1 símbolo especial.</Text>
						</View>
					</View>
				</View>

				<View>
					<Text style={styles.label}>Confirme sua senha</Text>
					<View style={styles.passwordContainer}>
						<TextInput
							style={styles.input}
							secureTextEntry={!showConfirmPassword}
							placeholder="Confirme sua nova senha"
							value={confirmNewPassword}
							onChangeText={setConfirmNewPassword}
						/>
						<Pressable onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
							<Text style={styles.showPassword}>{showConfirmPassword ? "🙈" : "👁️"}</Text>
						</Pressable>
					</View>
				</View>
			</View>

			<Pressable style={styles.button} onPress={handleNavigate}>
				<Text style={styles.buttonText}>Confirmar nova senha</Text>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#f6f9ff",
		padding: 24,
		alignItems: "flex-start",
	},
	title: {
		fontSize: 22,
		fontWeight: "700",
		marginTop: 12,
	},
	card: {
		backgroundColor: "#fff",
		borderRadius: 10,
		padding: 16,
		marginTop: 20,
		borderWidth: 1,
		borderColor: "#e0e0e0",
		width: "100%",
	},
	label: {
		fontSize: 16,
		fontWeight: "600",
		marginBottom: 8,
	},
	subtitle: {
		color: "#555",
		fontSize: 13,
		marginTop: 2,
		marginBottom: 24,
	},
	input: {
		backgroundColor: "#f2f3f5",
		borderRadius: 8,
		paddingHorizontal: 12,
		paddingVertical: 10,
		marginBottom: 12,
		flex: 1,
	},
	button: {
		backgroundColor: "#2E6FF2",
		paddingVertical: 14,
		borderRadius: 8,
		marginTop: 30,
		width: "100%",
	},
	buttonText: {
		textAlign: "center",
		color: "#fff",
		fontWeight: "700",
		fontSize: 16,
	},
	showPassword: {
		marginLeft: 8,
		fontSize: 18,
	},
	passwordContainer: {
		flexDirection: "row",
		alignItems: "center",
	},
	listItem: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 1,
		marginTop: 1,
	},
	bullet: {
		fontSize: 18,
		marginRight: 8,
	},
	info: {
		color: "#555",
		fontSize: 13,
	},
	newPasswordContainer: {
		marginBottom: 16,
	},
});
