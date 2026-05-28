export const messageFlags = {
    Ephemeral: 1n << 0n,
    System: 1n << 1n,
};

export type MessageFlag = keyof typeof messageFlags;
export type MessageFlags = typeof messageFlags;
