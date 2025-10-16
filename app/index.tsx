import { Link } from "expo-router";
import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import Logo from "../assets/images/logo-codeplay-grande.png";

export default function LoginScreen() {
	const [matricula, setMatricula] = useState<string>("");
	const [senha, setSenha] = useState<string>("");
	const [showPassword, setShowPassword] = useState<boolean>(false);

	const mostrarDados = () => {
		alert(`Matrícula: ${matricula}, Senha: ${senha}`);
	};

	// const

	return (
		<View style={styles.container}>
			<Image source={Logo} style={styles.logo} />

			<View style={styles.formBox}>
				<Text style={styles.label}>Matrícula</Text>
				<TextInput
					style={styles.input}
					placeholder="Entre com sua matrícula"
					value={matricula}
					onChangeText={setMatricula}
					keyboardType="numeric"
					maxLength={8}
				/>

				<Text style={styles.label}>Senha</Text>
				<View style={styles.passwordContainer}>
					<TextInput
						style={[styles.input, { flex: 1 }]}
						placeholder="Insira sua senha"
						secureTextEntry={!showPassword}
						value={senha}
						onChangeText={setSenha}
					/>
					<Pressable onPress={() => setShowPassword(!showPassword)}>
						<Text style={styles.showPassword}>{showPassword ? "🙈" : "👁️"}</Text>
					</Pressable>
				</View>

				<Link href="/forgot-password" style={styles.forgotText}>
					Esqueceu sua Senha?
				</Link>
			</View>

			<Pressable style={styles.button} onPress={mostrarDados}>
				<Text style={styles.buttonText}>Entrar</Text>
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
		backgroundColor: "#f6f9ff",
	},
	logo: {
		width: 80,
		height: 80,
		resizeMode: "contain",
	},
	title: {
		fontSize: 26,
		fontWeight: "700",
		color: "#1E1E1E",
		marginVertical: 10,
	},
	formBox: {
		width: "100%",
		backgroundColor: "#fff",
		borderRadius: 10,
		padding: 16,
		marginTop: 20,
		borderWidth: 1,
		borderColor: "#c6c6ff",
	},
	label: {
		fontSize: 16,
		fontWeight: "600",
		marginBottom: 8,
	},
	input: {
		backgroundColor: "#f2f3f5",
		borderRadius: 8,
		paddingHorizontal: 12,
		paddingVertical: 10,
		marginBottom: 12,
	},
	passwordContainer: {
		flexDirection: "row",
		alignItems: "center",
	},
	showPassword: {
		marginLeft: 8,
		fontSize: 18,
	},
	forgotText: {
		alignSelf: "flex-end",
		color: "#0066ff",
		fontWeight: "500",
	},
	button: {
		backgroundColor: "#2E6FF2",
		width: "100%",
		paddingVertical: 14,
		borderRadius: 8,
		marginTop: 24,
	},
	buttonText: {
		textAlign: "center",
		color: "#fff",
		fontWeight: "700",
		fontSize: 16,
	},
});
