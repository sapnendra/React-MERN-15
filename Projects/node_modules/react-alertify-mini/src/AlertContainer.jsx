import React, { useEffect, useState, useRef } from "react";
import { onAlertChange, removeAlert } from "./alertStore";

const colors = {
  success: "#4caf50",
  error: "#f44336",
  warning: "#ff9800"
};

const DEFAULT_DURATION = 2000;

const AlertItem = ({ alert, onRemove }) => {
  const duration = alert.duration || DEFAULT_DURATION;
  const createdAt = alert.createdAt || Date.now();
  
  const [progress, setProgress] = useState(100);
  const [isVisible, setIsVisible] = useState(false);
  const startTimeRef = useRef(null);
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);
  const isRemovingRef = useRef(false);

  useEffect(() => {
    setIsVisible(true);
    isRemovingRef.current = false;
    
    // Calculate initial progress based on elapsed time
    const now = Date.now();
    const initialElapsed = Math.max(0, now - createdAt);
    const initialProgress = Math.max(0, Math.min(100, 100 - (initialElapsed / duration) * 100));
    
    setProgress(initialProgress);
    startTimeRef.current = createdAt;

    // Update progress every 16ms (~60fps) for smooth animation
    intervalRef.current = setInterval(() => {
      if (isRemovingRef.current) return;
      
      const currentTime = Date.now();
      const elapsed = currentTime - startTimeRef.current;
      const remaining = Math.max(0, 100 - (elapsed / duration) * 100);
      
      setProgress(remaining);

      if (remaining <= 0) {
        isRemovingRef.current = true;
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
        setIsVisible(false);
        timeoutRef.current = setTimeout(() => {
          onRemove(alert.id);
        }, 300);
      }
    }, 16); // ~60fps

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [alert.id, duration, createdAt, onRemove]);

  return (
    <div
      style={{
        ...styles.alertBox,
        backgroundColor: colors[alert.type],
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateX(0)" : "translateX(100%)",
        transition: "opacity 0.3s ease, transform 0.3s ease"
      }}
    >
      <div style={styles.message}>{alert.message}</div>
      <div style={styles.progressBarContainer}>
        <div
          style={{
            ...styles.progressBar,
            width: `${progress}%`
          }}
        />
      </div>
    </div>
  );
};

const AlertContainer = () => {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const unsubscribe = onAlertChange(setAlerts);
    return unsubscribe;
  }, []);

  const handleRemove = (id) => {
    removeAlert(id);
  };

  return (
    <div style={styles.container}>
      {alerts.map((alert) => (
        <AlertItem key={alert.id} alert={alert} onRemove={handleRemove} />
      ))}
    </div>
  );
};

const styles = {
  container: {
    position: "fixed",
    top: "20px",
    right: "20px",
    zIndex: 9999,
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    pointerEvents: "none",
  },
  alertBox: {
    padding: "12px 16px",
    color: "#fff",
    fontWeight: "700",
    borderRadius: "6px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
    minWidth: "250px",
    fontSize: "18px",
    pointerEvents: "auto",
    position: "relative",
    overflow: "hidden"
  },
  message: {
    position: "relative",
    zIndex: 1
  },
  progressBarContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "3px",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    overflow: "hidden"
  },
  progressBar: {
    height: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.8)"
  }
};

export default AlertContainer;

