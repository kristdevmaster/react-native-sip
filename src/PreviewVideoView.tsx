import { requireNativeComponent } from "react-native";

const View = requireNativeComponent<{ deviceId: number; objectFit: "contain" | "cover" }>("PjSipPreviewVideoView");

export default View;
