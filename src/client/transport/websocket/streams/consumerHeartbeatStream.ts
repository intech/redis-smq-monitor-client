export type TConsumerHeartbeatStreamPayload = {
    timestamp: number;
    data: {
        ram: { usage: NodeJS.MemoryUsage; free: number; total: number };
        cpu: { user: number; system: number; percentage: string };
    };
};