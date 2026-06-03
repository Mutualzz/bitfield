export const readStateFlags = {
    Muted: 1n << 0n,
};

export type ReadStateFlag = keyof typeof readStateFlags;
export type ReadStateFlags = typeof readStateFlags;
