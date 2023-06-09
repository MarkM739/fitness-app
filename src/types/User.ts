import { BodyMeasurementLog } from ".";
export interface User {
    id: string;
    name: string;
    lastName: string;
    username: string;
    password: string;
    measurements: BodyMeasurementLog;
}