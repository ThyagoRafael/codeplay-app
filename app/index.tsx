import ShowPasswordButton from "@/components/ShowPasswordButton";
import { colors } from "@/constants/colors";
import { router } from "expo-router";
import { useState } from "react";
import { Alert, Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import Logo from "../assets/images/logo.png";

export default function LoginScreen() {
	const [registry, setRegistry] = useState<string>("");
	const [validRegistry, setValidRegistry] = useState<boolean>(true);
	const [password, setPassword] = useState<string>("");
	const [showPassword, setShowPassword] = useState<boolean>(false);

	const handleChangeRegistry = (text: string) => {
		const newText = text.replace(/[^0-9]/g, "");
		setRegistry(newText);

		const registryRegex = /^[0-9]{5,7}$/;
		setValidRegistry(registryRegex.test(newText));
	};

	const handleLogin = () => {
		if (!registry || !validRegistry || !password) {
			return Alert.alert("Atenção", "Digite uma matrícula e/ou senha válida!");
		}
		router.replace("/(tabs)/home/page");
	};

	return (
		<View style={styles.container}>
			<Image source={Logo} style={styles.logo} />

			<View style={styles.formContainer}>
				<View style={styles.inputContainer}>
					<Text style={styles.label}>Matrícula</Text>
					<TextInput
						style={styles.input}
						placeholder="Entre com sua matrícula"
						value={registry}
						onChangeText={handleChangeRegistry}
						keyboardType="numeric"
						maxLength={7}
					/>
					{!validRegistry && <Text style={styles.small}>Digite uma matrícula válida</Text>}
				</View>

				<View style={styles.inputContainer}>
					<Text style={styles.label}>Senha</Text>
					<View style={styles.passwordContainer}>
						<TextInput
							style={[styles.input, { flex: 1 }]}
							placeholder="Insira sua senha"
							secureTextEntry={!showPassword}
							value={password}
							onChangeText={setPassword}
							maxLength={150}
						/>
						<ShowPasswordButton showPassword={showPassword} setShowPassword={setShowPassword} />
					</View>
				</View>

				<View style={styles.forgotButtonContainer}>
					<Pressable
						onPress={() => router.push("/(forgot-password)/get-email/page")}
						style={styles.forgotButton}
					>
						<Text style={styles.forgotButtonText}>Esqueceu sua Senha?</Text>
					</Pressable>
				</View>
			</View>

			<Pressable style={styles.loginButton} onPress={handleLogin}>
				<Text style={styles.loginButtonText}>Entrar</Text>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		paddingHorizontal: 24,
		backgroundColor: colors.mainBackgroundColor,
	},
	logo: {
		width: 80,
		height: 80,
		resizeMode: "contain",
	},
	formContainer: {
		width: "100%",
		backgroundColor: "#fff",
		borderRadius: 10,
		padding: 16,
		marginTop: 20,
		borderWidth: 1,
		borderColor: colors.borderColor,
		gap: 12,
	},
	inputContainer: {
		gap: 8,
	},
	label: {
		fontSize: 16,
		fontWeight: "600",
	},
	input: {
		backgroundColor: colors.inputBackgroundColor,
		borderRadius: 8,
		paddingHorizontal: 12,
		paddingVertical: 10,
	},
	small: {
		fontSize: 12,
		color: "#f00",
	},
	passwordContainer: {
		flexDirection: "row",
		alignItems: "center",
	},

	forgotButtonContainer: {
		alignItems: "flex-end",
	},
	forgotButton: {
		paddingVertical: 10,
		alignItems: "flex-end",
	},
	forgotButtonText: {
		color: colors.primaryColor,
		fontWeight: "500",
	},
	loginButton: {
		backgroundColor: colors.primaryColor,
		width: "100%",
		paddingVertical: 14,
		borderRadius: 8,
		marginTop: 24,
	},
	loginButtonText: {
		textAlign: "center",
		color: "#fff",
		fontWeight: "700",
		fontSize: 16,
	},
});
