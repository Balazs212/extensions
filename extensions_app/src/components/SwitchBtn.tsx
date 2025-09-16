import { Switch } from "@/components/ui/switch";
import { useState } from "react";

export function SwitchBtn() {
  const [enabled, setEnabled] = useState(false);

  return (
<div className="flex items-center space-x-3">
  <div
    onClick={() => setEnabled(!enabled)}
    className={`customSwitch relative h-6 w-12 cursor-pointer rounded-full transition-colors duration-200 ${
      enabled ? "bg-red-500" : "bg-gray-700"
    }`}
  >
    <div
      className="absolute top-0 left-0 h-6 w-6 rounded-full bg-white shadow-md transition-transform duration-200"
      style={{ transform: enabled ? "translateX(24px)" : "translateX(0)" }}
    />
  </div>
</div>



  );
}
