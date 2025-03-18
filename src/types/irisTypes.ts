
import { JSX } from "react";

export interface IrisShape {
    id: number;
    title: string;
    svg: JSX.Element;
}

export interface UserSettings {
    leftIrisShape: IrisShape;
    rightIrisShape: IrisShape;
    leftIrisColor: string;
    rightIrisColor: string;
    eyeSize: number;
    pupilSize: number;
}
