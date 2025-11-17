import React from "react";

export interface NotificationType {
  message: string;
  type: "success" | "error";
}

interface NotificationProps {
  notification: NotificationType | null;
}

const Notification: React.FC<NotificationProps> = ({ notification }) => {
  if (!notification) return null;

  const baseStyle =
    "fixed top-7 right-7 z-[100] max-w-sm rounded-xl px-6 py-4 font-semibold text-white shadow-2xl animate-fadeInUp";
  const styles = {
    success: "bg-gradient-to-r from-cyan-400 to-blue-600",
    error: "bg-gradient-to-r from-red-500 to-red-600",
  };

  return (
    <div
      className={`${baseStyle} ${styles[notification.type] || styles.success}`}
    >
      {notification.message}
    </div>
  );
};

export default Notification;
