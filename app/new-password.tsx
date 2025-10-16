import { useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function VerifyCodeScreen() {
	const router = useRouter();
	const [newPassword, setNewPassword] = useState("");
	const [confirmNewPassword, setConfirmNewPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);

	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={() => router.back()}>
				<Text style={styles.backArrow}>←</Text>
			</TouchableOpacity>

			<Text style={styles.title}>Esqueceu a senha</Text>

			<View style={styles.card}>
				<Text style={styles.label}>Crie uma nova senha</Text>
				<Text style={styles.subtitle}>Digite uma nova senha.</Text>

				<View style={styles.newPassContainer}>
					<Text style={styles.label}>Nova senha</Text>
					<View style={styles.passwordContainer}>
						<TextInput
							style={styles.input}
							secureTextEntry={!showPassword}
							placeholder="Insira sua nova senha"
							value={newPassword}
							onChangeText={setNewPassword}
						/>
						<TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
							<Text style={styles.showPassword}>{showPassword ? "🙈" : "👁️"}</Text>
						</TouchableOpacity>
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
						<TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
							<Text style={styles.showPassword}>{showConfirmPassword ? "🙈" : "👁️"}</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>

			<TouchableOpacity style={styles.button} onPress={() => router.push("/")}>
				<Text style={styles.buttonText}>Confirmar nova senha</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#f6f9ff",
		padding: 24,
	},
	backArrow: {
		fontSize: 22,
		color: "#000",
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
	},
	buttonText: {
		textAlign: "center",
		color: "#fff",
		fontWeight: "700",
		fontSize: 16,
	},
	resendText: {
		textAlign: "center",
		marginTop: 16,
		color: "#555",
	},
	link: {
		color: "#2E6FF2",
		fontWeight: "600",
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
	newPassContainer: {
		marginBottom: 16,
	},
});
