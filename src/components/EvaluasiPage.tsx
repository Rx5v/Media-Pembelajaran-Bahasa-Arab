import React from "react";
import LinkBasedPage from "./LinkBasedPage";
import type { NotificationProps } from "../App";

const EvaluasiPage: React.FC<NotificationProps> = ({ showNotification }) => (
  <LinkBasedPage
    title="EVALUASI"
    placeholder="Masukkan link Google Form evaluasi..."
    icon="📊"
    showNotification={showNotification}
  />
);

export default EvaluasiPage;
