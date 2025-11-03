import BackButton from "@/components/BackButton";
import { router } from "expo-router";
import { useRef, useState } from "react";
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function VerifyCodeScreen() {
	const [code, setCode] = useState<string[]>(["", "", "", "", ""]);
	const [validCode, setValidCode] = useState<boolean>(true);
	const inputsRef = useRef<(TextInput | null)[]>([]);

	const handleChange = (text: string, index: number) => {
		const newText = text.replace(/[^0-9]/g, "");

		const newCode = [...code];
		newCode[index] = newText;
		setCode(newCode);

		setValidCode(newCode.join("").length === 5);

		if (newText && index < inputsRef.current.length - 1) {
			inputsRef.current[index + 1]?.focus();
		}
	};

	const handleBackspace = (e: any, index: number) => {
		if (e.nativeEvent.key === "Backspace") {
			if (code[index] !== "") {
				const newCode = [...code];
				newCode[index] = "";
				setCode(newCode);
			} else if (index > 0) {
				inputsRef.current[index - 1]?.focus();
			}
		}
	};

	const handleVerifyCode = () => {
		if (code.every((element) => element === "") || !validCode) {
			return Alert.alert("Atenção", "Digite um código válido!");
		}

		// Chamada pro back pra verificação do código

		handleNavigate();
	};

	const handleNavigate = () => {
		router.dismissAll();
		router.replace("/(forgot-password)/new-password/page");
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
							ref={(el) => {
								inputsRef.current[index] = el;
							}}
							onChangeText={(text) => handleChange(text, index)}
							onKeyPress={(e) => handleBackspace(e, index)}
						/>
					))}
				</View>
				{!validCode && <Text style={styles.small}>Digite um código válido!</Text>}
			</View>

			<Pressable style={styles.button} onPress={handleVerifyCode}>
				<Text style={styles.buttonText}>Verificar Código</Text>
			</Pressable>

			<View style={styles.resendTextContainer}>
				<Text style={styles.resendText}>Não recebeu o e-mail?</Text>
				<Pressable onPress={() => router.back()}>
					<Text style={styles.link}>Solicite Novamente</Text>
				</Pressable>
			</View>
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
	resendTextContainer: {
		justifyContent: "center",
		marginTop: 16,
		width: "100%",
		flexDirection: "row",
		gap: 3,
	},
	resendText: {
		color: "#555",
	},
	link: {
		color: "#2E6FF2",
		fontWeight: "600",
	},
});
