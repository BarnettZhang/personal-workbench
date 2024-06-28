import useClipboard from "vue-clipboard3";
import { hexToRgb } from "@/utils/color.js";

export async function nativePick(window, e) {
  const val = e ? e.target.value : null;
  if (!val) {
    const eyeDropper = new window.EyeDropper(); // 初始化一个EyeDropper对象
    try {
      const colorResult = await eyeDropper.open(); // 开始拾取颜色
      const hex = { value: "" };
      const rgb = { value: "" };
      hex.value = colorResult.sRGBHex;
      rgb.value = hexToRgb(colorResult.sRGBHex);

      const { toClipboard } = useClipboard();
      new window.Notification("取到颜色噜！点击复制色值！", {
        body: `HEX: ${hex.value}, RGB: ${rgb.value}`,
      }).onclick = () => {
        toClipboard(hex.value);
      };
      return [hex, rgb];
    } catch (e) {
      console.log(e);
    }
  }
}
