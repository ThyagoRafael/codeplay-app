import mockData from "@/assets/mocks/data/db.json";
import BackButton from "@/components/BackButton";
import { colors } from "@/constants/colors";
import { LinearGradient } from "expo-linear-gradient";
import { router, useLocalSearchParams } from "expo-router";
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

export default function Topics() {
	const [hasScrolled, setHasScrolled] = useState<boolean>(false);
	const { courseId, courseName } = useLocalSearchParams();
	const topics = mockData.topics.filter((topic) => topic.idCourse === Number(courseId));

	const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
		const offsetY = event.nativeEvent.contentOffset.y;
		setHasScrolled(offsetY > 5);
	};

	const handleNavigate = (topicId: number, topicName: string) => {
		router.push({ pathname: "/home/contents/[topicId]", params: { topicId, topicName, courseName } });
	};

	return (
		<View style={styles.container}>
			<View style={styles.headerContainer}>
				<BackButton />

				<Text style={styles.courseName}>{courseName}</Text>
			</View>

			<Text style={styles.title}>Tópicos</Text>

			<View style={{ flex: 1, width: "100%", position: "relative" }}>
				{hasScrolled && (
					<LinearGradient colors={["rgba(0,0,0,0.15)", "transparent"]} style={styles.scrollTopBorder} />
				)}
				<ScrollView
					contentContainerStyle={styles.topicsList}
					showsVerticalScrollIndicator={false}
					onScroll={handleScroll}
					scrollEventThrottle={16}
				>
					{topics.map((topic) => (
						<Pressable
							key={topic.id}
							style={styles.topicCard}
							onPress={() => handleNavigate(topic.id, topic.name)}
						>
							<View style={styles.topicHeader}>
								<View style={styles.topicIconContainer}>
									<Image
										source={require("@/assets/mocks/images/course_icon.png")}
										style={styles.topicIcon}
									/>
								</View>
								<Text style={styles.topicName}>{topic.name}</Text>
							</View>
						</Pressable>
					))}
				</ScrollView>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.mainBackgroundColor,
		paddingTop: 30,
		paddingHorizontal: 32,
	},
	headerContainer: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 20,
	},
	courseName: {
		width: "70%",
		fontSize: 18,
	},
	title: {
		fontSize: 24,
		textAlign: "center",
		marginBottom: 20,
		fontWeight: "600",
	},
	topicsList: {
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
	topicCard: {
		width: "100%",
		height: 80,
		borderWidth: 1,
		borderRadius: 10,
		backgroundColor: "#1787d5",
	},
	topicHeader: {
		flexDirection: "row",
		height: 80,
		alignItems: "center",
	},
	topicIconContainer: {
		width: "30%",
		alignItems: "center",
	},
	topicIcon: {
		width: "60%",
		objectFit: "contain",
	},
	topicName: {
		width: "70%",
		fontSize: 18,
		fontWeight: "600",
		color: colors.white,
	},
});
