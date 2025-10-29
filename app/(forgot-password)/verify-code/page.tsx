import BackButton from "@/components/BackButton";
import { Link, useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function VerifyCodeScreen() {
	const router = useRouter();
	const [code, setCode] = useState(["", "", "", "", ""]);

	const handleChange = (text: string, index: number) => {
		const newCode = [...code];
		newCode[index] = text;
		setCode(newCode);
	};

	return (
		<View style={styles.container}>
			<BackButton />

			<Text style={styles.title}>Esqueceu a senha</Text>

			<View style={styles.card}>
				<Text style={styles.label}>Insira o código de recuperação</Text>
				<Text style={styles.subtitle}>
					Enviamos um link de recuperação para o e-mail citado. Insira o código de 5 dígitos que foi
					enviado.
				</Text>

				<View style={styles.codeContainer}>
					{code.map((digit, index) => (
						<TextInput
							key={index}
							style={styles.codeInput}
							maxLength={1}
							keyboardType="numeric"
							value={digit}
							onChangeText={(text) => handleChange(text, index)}
						/>
					))}
				</View>
			</View>

			<Link href={"/(forgot-password)/new-password/page"} style={styles.button}>
				<Text style={styles.buttonText}>Verificar Código</Text>
			</Link>

			<Text style={styles.resendText}>
				Não recebeu o e-mail?
				<Pressable onPress={() => router.back()}>
					<Text style={styles.link}>Solicite Novamente</Text>
				</Pressable>
			</Text>
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
	codeContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	codeInput: {
		width: 48,
		height: 48,
		backgroundColor: "#f2f3f5",
		textAlign: "center",
		borderRadius: 8,
		fontSize: 18,
		fontWeight: "600",
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
	resendText: {
		textAlign: "center",
		marginTop: 16,
		color: "#555",
		width: "100%",
	},
	link: {
		color: "#2E6FF2",
		fontWeight: "600",
		marginLeft: 3,
	},
});
