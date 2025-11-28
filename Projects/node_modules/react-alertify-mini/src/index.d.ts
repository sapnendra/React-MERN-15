import { Component } from "react";

export interface AlertType {
  success: (message: string) => void;
  error: (message: string) => void;
  warning: (message: string) => void;
}

export declare const alert: AlertType;

export declare class AlertContainer extends Component {}

