import BackButton from "@/components/BackButton";
import { Link } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function ForgotPasswordScreen() {
	const [email, setEmail] = useState("");

	return (
		<View style={styles.container}>
			<BackButton />

			<Text style={styles.title}>Esqueceu a senha</Text>

			<View style={styles.card}>
				<Text style={styles.label}>Insira seu e-mail</Text>
				<Text style={styles.subtitle}>
					Caso o e-mail esteja registrado, será enviado um código de recuperação.
				</Text>
				<TextInput
					style={styles.input}
					placeholder="Insira seu e-mail"
					value={email}
					onChangeText={setEmail}
				/>
			</View>

			<Link href={"/(forgot-password)/verify-code/page"} style={styles.button}>
				<Text style={styles.buttonText}>Enviar código de recuperação</Text>
			</Link>
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
	},
	subtitle: {
		color: "#555",
		fontSize: 13,
		marginTop: 4,
		marginBottom: 10,
	},
	input: {
		backgroundColor: "#f2f3f5",
		borderRadius: 8,
		padding: 10,
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
});
