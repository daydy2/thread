import { useRef, useContext } from "react";
import { ScrollView, StyleSheet, Platform, RefreshControl } from "react-native";
import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import Lottie from "lottie-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThreadsContext } from "../../context/thread-context";
import { createRandomUser } from "../../utils/generate-dummy-data";
import ThreadsItem from "../../components/ThreadsItem";

export default function TabOneScreen() {
  const animationRef = useRef<Lottie>(null);
  const threads = useContext(ThreadsContext);

  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 10,
          paddingTop: Platform.select({
            android: 30,
          }),
        }}
        refreshControl={
          <RefreshControl
            refreshing={false}
            tintColor={"transparent"}
            onRefresh={() => {
              animationRef.current?.play();
            }}
          />
        }
      >
        <Lottie
          ref={animationRef}
          source={require("../../lottie-animations/threads.json")}
          loop={false}
          autoPlay={true}
          style={{
            width: 90,
            height: 90,
            alignSelf: "center",
          }}
        />
        {threads.map((thread, index) => (
          <ThreadsItem key={index} {...thread} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
