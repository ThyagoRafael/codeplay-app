import BackButton from "@/components/BackButton";
import { router } from "expo-router";
import { useState } from "react";
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function GetEmailScreen() {
	const [email, setEmail] = useState("");
	const [validEmail, setValidEmail] = useState<boolean>(true);

	const handleChangeEmail = (text: string) => {
		setEmail(text);

		const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
		setValidEmail(emailRegex.test(text));
	};

	const handleSendCode = () => {
		if (!email || !validEmail) {
			return Alert.alert("Atenção", "Digite um email válido!");
		}

		router.push("/(forgot-password)/verify-code/page");
	};

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
					onChangeText={handleChangeEmail}
					keyboardType="email-address"
				/>
				{!validEmail && <Text style={styles.small}>Digite um email válido!</Text>}
			</View>

			<Pressable onPress={handleSendCode} style={styles.button}>
				<Text style={styles.buttonText}>Enviar código de recuperação</Text>
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
	small: {
		fontSize: 12,
		color: "#f00",
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
