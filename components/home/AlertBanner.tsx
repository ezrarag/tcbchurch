import { AlertDoc } from "@/lib/types";
import { AlertTriangle, Info, BellOff } from "lucide-react";

interface AlertBannerProps {
  alert: AlertDoc | null;
}

export function AlertBanner({ alert }: AlertBannerProps) {
  if (!alert) return null;

  const bgStyle =
    alert.severity === "urgent"
      ? "bg-red-900 text-red-50 border-red-700"
      : alert.severity === "warning"
      ? "bg-amber-100 text-amber-900 border-amber-400"
      : "bg-blue-900 text-blue-50 border-blue-700";

  const Icon = alert.severity === "urgent" ? BellOff : alert.severity === "warning" ? AlertTriangle : Info;

  return (
    <div className={`w-full py-3 px-4 border-b ${bgStyle}`} role="region" aria-label="Church Announcement Alert">
      <div className="max-w-7xl mx-auto flex items-center gap-3">
        <Icon className="w-5 h-5 flex-shrink-0" />
        <p className="text-sm font-medium leading-normal">{alert.message}</p>
      </div>
    </div>
  );
}
