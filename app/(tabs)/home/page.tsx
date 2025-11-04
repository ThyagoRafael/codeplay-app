import mockData from "@/assets/mocks/data/db.json";
import { colors } from "@/constants/colors";
import { LinearGradient } from "expo-linear-gradient";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function Home() {
	return (
		<View style={styles.container}>
			<View style={styles.userCard}>
				<Text style={styles.className}>{mockData.user.class}</Text>

				<View style={styles.userDataContainer}>
					<View style={styles.userImageContainer}>
						<Image source={require("@/assets/mocks/images/foto_perfil.jpg")} style={styles.userImage} />
					</View>
					<View style={styles.userDescriptionContainer}>
						<Text style={styles.descriptionTitle}>Bem-Vindo, {mockData.user.name}!</Text>
						<View style={styles.progressContainer}>
							<View style={styles.progressDescription}>
								<Text style={styles.progressLabel}>Progresso total</Text>
								<Text style={styles.progressLabel}>{mockData.user.learningProgress}%</Text>
							</View>
							<View style={styles.progressBarContainer}>
								<View style={styles.progressBar}></View>
							</View>
						</View>
					</View>
				</View>
				<LinearGradient colors={["rgba(0,0,0,0.2)", "transparent"]} style={styles.shadowBottom} />
			</View>

			<View style={styles.coursesList}>
				{mockData.courses.map((course) => (
					<Pressable key={course.id} style={styles.courseButton}>
						<View style={styles.courseIconContainer}>
							<Image
								source={require("@/assets/mocks/images/course_icon.png")}
								style={styles.courseIcon}
							/>
						</View>
						<Text style={styles.courseName}>{course.name}</Text>
					</Pressable>
				))}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		backgroundColor: colors.mainBackgroundColor,
		paddingVertical: 48,
		paddingHorizontal: 32,
	},
	userCard: {
		width: "100%",
		backgroundColor: "#ccf2cb",
		borderWidth: 1,
		borderRadius: 10,
		padding: 16,
		marginBottom: 80,
	},
	className: {
		fontWeight: "300",
		marginBottom: 2,
	},
	userDataContainer: {
		flexDirection: "row",
	},
	userImageContainer: {
		width: "40%",
		alignItems: "center",
	},
	userImage: {
		width: 70,
		height: 70,
		borderRadius: 50,
		objectFit: "cover",
	},
	userDescriptionContainer: {
		width: "60%",
		justifyContent: "space-between",
	},
	descriptionTitle: {
		fontSize: 20,
		fontWeight: "600",
	},
	progressContainer: {
		gap: 2,
	},
	progressDescription: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	progressLabel: {
		fontWeight: "400",
	},
	progressBarContainer: {
		width: "100%",
		height: 4,
		backgroundColor: "#d9d9d9",
		borderRadius: 4,
	},
	progressBar: {
		width: `${mockData.user.learningProgress}%`,
		height: "100%",
		backgroundColor: "#8f8f8f",
		borderRadius: 4,
	},
	shadowBottom: {
		position: "absolute",
		bottom: -10,
		left: 0,
		right: 0,
		height: 10,
		borderRadius: 10,
	},
	coursesList: {
		width: "100%",
		gap: 30,
	},
	courseButton: {
		width: "100%",
		height: 80,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		borderWidth: 1,
		borderRadius: 10,
		backgroundColor: "#1787d5",
	},
	courseIconContainer: {
		width: "30%",
		alignItems: "center",
	},
	courseIcon: {
		width: "60%",
		objectFit: "contain",
	},
	courseName: {
		width: "70%",
		fontSize: 18,
		fontWeight: "600",
		color: colors.white,
	},
});
