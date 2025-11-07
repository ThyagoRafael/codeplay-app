import mockData from "@/assets/mocks/data/db.json";
import { colors } from "@/constants/colors";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { useState } from "react";
import {
	Image,
	type NativeScrollEvent,
	type NativeSyntheticEvent,
	Pressable,
	ScrollView,
	StyleSheet,
	Text,
	View,
} from "react-native";

export default function Home() {
	const [hasScrolled, setHasScrolled] = useState<boolean>(false);

	const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
		const offsetY = event.nativeEvent.contentOffset.y;
		setHasScrolled(offsetY > 5); // ativa quando o usuário rola um pouquinho
	};

	const handleNavigate = (courseId: number, courseName: string) => {
		router.push({ pathname: "/home/topics/[courseId]", params: { courseId, courseName } });
	};

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
					</View>
				</View>
				<LinearGradient colors={["rgba(0,0,0,0.2)", "transparent"]} style={styles.shadowBottom} />
			</View>

			<View style={{ flex: 1, width: "100%", position: "relative" }}>
				{hasScrolled && (
					<LinearGradient colors={["rgba(0,0,0,0.15)", "transparent"]} style={styles.scrollTopBorder} />
				)}
				<ScrollView
					contentContainerStyle={styles.coursesList}
					showsVerticalScrollIndicator={false}
					onScroll={handleScroll}
					scrollEventThrottle={16}
				>
					{mockData.courses.map((course) => (
						<Pressable
							key={course.id}
							style={styles.courseButton}
							onPress={() => handleNavigate(course.id, course.name)}
						>
							<View style={styles.courseIconContainer}>
								<Image
									source={require("@/assets/mocks/images/course_icon.png")}
									style={styles.courseIcon}
								/>
							</View>
							<Text style={styles.courseName}>{course.name}</Text>
						</Pressable>
					))}
					<LinearGradient
						colors={["transparent", "rgba(0,0,0,0.15)"]}
						style={styles.scrollBottomBorder}
					/>
				</ScrollView>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		backgroundColor: colors.mainBackgroundColor,
		paddingTop: 48,
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
		justifyContent: "center",
	},
	descriptionTitle: {
		fontSize: 20,
		fontWeight: "600",
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
		gap: 38,
		paddingBottom: 30,
	},
	scrollTopBorder: {
		position: "absolute",
		top: 0,
		left: 0,
		right: 0,
		height: 4,
		zIndex: 10,
	},
	scrollBottomBorder: {
		top: 0,
		left: 0,
		right: 0,
		height: 4,
		zIndex: 10,
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
