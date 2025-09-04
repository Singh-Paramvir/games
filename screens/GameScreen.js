import React, { useEffect, useState } from "react";
import { View, Platform } from "react-native";
import { WebView } from "react-native-webview";
import StaticServer from "react-native-static-server";
import RNFS from "react-native-fs";

export default function GameScreen({ route }: any) {
  const { gameName } = route.params;
  const [url, setUrl] = useState("");

  useEffect(() => {
    const localPath = `${RNFS.MainBundlePath}/games/${gameName}`; // iOS
    const androidPath = `/android_asset/games/${gameName}`; // Android

    const server = new StaticServer(
      8080,
      Platform.OS === "android" ? androidPath : localPath,
      { localOnly: true }
    );

    server.start().then((servedUrl) => {
      setUrl(servedUrl);
    });

    return () => server.stop();
  }, [gameName]);

  if (!url) return <View style={{ flex: 1, backgroundColor: "#000" }} />;

  return (
    <WebView
      source={{ uri: `${url}/index.html` }}
      originWhitelist={["*"]}
      javaScriptEnabled={true}
      domStorageEnabled={true}
    />
  );
}
