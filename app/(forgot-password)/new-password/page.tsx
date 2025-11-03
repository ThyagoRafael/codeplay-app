import ShowPasswordButton from "@/components/ShowPasswordButton";
import { router } from "expo-router";
import { useState } from "react";
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function NewPasswordScreen() {
	const [newPassword, setNewPassword] = useState("");
	const [validNewPassword, setValidNewPassword] = useState<boolean>(true);
	const [confirmNewPassword, setConfirmNewPassword] = useState("");
	const [validConfirmNewPassword, setValidConfirmNewPassword] = useState<boolean>(true);
	const [showNewPassword, setShowNewPassword] = useState(false);
	const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);

	const handleChangeNewPassword = (text: string) => {
		setNewPassword(text);

		const newPasswordRegex =
			/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[.,@\\?$!#%&*\-_])[A-Za-z\d.,@\\?$!#%&*\-_]{8,60}$/;
		setValidNewPassword(newPasswordRegex.test(text));

		setValidConfirmNewPassword(text === confirmNewPassword);
	};

	const handleChangeConfirmNewPassword = (text: string) => {
		setConfirmNewPassword(text);

		setValidConfirmNewPassword(text === newPassword);
	};

	const handleSaveNewPassword = () => {
		if (!newPassword || !validNewPassword) {
			return Alert.alert("Atenção", "Digite uma senha válida!");
		}

		if (!confirmNewPassword || !validConfirmNewPassword) {
			return Alert.alert("Atenção", "As senhas não se coincidem!");
		}

		handleNavigate();
	};

	const handleNavigate = () => {
		router.replace("/");
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Esqueceu a senha</Text>

			<View style={styles.card}>
				<Text style={styles.label}>Crie uma nova senha</Text>
				<Text style={styles.subtitle}>Digite uma nova senha.</Text>

				<View style={styles.newPasswordContainer}>
					<Text style={styles.label}>Nova senha</Text>
					<View style={styles.passwordContainer}>
						<TextInput
							style={styles.input}
							secureTextEntry={!showNewPassword}
							placeholder="Insira sua nova senha"
							value={newPassword}
							onChangeText={handleChangeNewPassword}
							maxLength={150}
						/>
						<ShowPasswordButton showPassword={showNewPassword} setShowPassword={setShowNewPassword} />
					</View>
					{!validNewPassword && <Text style={styles.small}>Digite uma senha válida!</Text>}

					<View style={styles.passwordList}>
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
							secureTextEntry={!showConfirmNewPassword}
							placeholder="Confirme sua nova senha"
							value={confirmNewPassword}
							onChangeText={handleChangeConfirmNewPassword}
							maxLength={150}
						/>
						<ShowPasswordButton
							showPassword={showConfirmNewPassword}
							setShowPassword={setShowConfirmNewPassword}
						/>
					</View>
					{!validConfirmNewPassword && <Text style={styles.small}>As senhas não se coincidem!</Text>}
				</View>
			</View>

			<Pressable style={styles.button} onPress={handleSaveNewPassword}>
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
		marginTop: 24,
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
		flex: 1,
	},
	small: {
		fontSize: 12,
		color: "#f00",
		marginTop: 4,
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
	passwordList: {
		marginTop: 12,
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
