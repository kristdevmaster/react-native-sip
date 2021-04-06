import { requireNativeComponent } from "react-native";

const View = requireNativeComponent<{ windowId: string; objectFit: "contain" | "cover" }>("PjSipRemoteVideoView");

export default View;
