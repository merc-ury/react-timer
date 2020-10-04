export interface ITimer {
    id: number;
    title: string;
    description?: string;
    interval: number;
    isActive: boolean;
}