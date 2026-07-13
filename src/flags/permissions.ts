export const permissionFlags = {
    Administrator: 1n << 0n,
    ManageSpace: 1n << 1n,
    ManageChannels: 1n << 2n,
    ManageRoles: 1n << 3n,
    ManageWebhooks: 1n << 4n,
    ManageExpressions: 1n << 5n,
    CreateExpressions: 1n << 6n,
    ViewAuditLog: 1n << 7n,
    ViewSpaceInsights: 1n << 8n,

    KickMembers: 1n << 9n,
    BanMembers: 1n << 10n,
    ModerateMembers: 1n << 11n,
    MuteMembers: 1n << 12n,
    DeafenMembers: 1n << 13n,
    MoveMembers: 1n << 14n,
    ManageNicknames: 1n << 15n,
    CreateInvites: 1n << 16n,

    ViewChannel: 1n << 17n,
    SendMessages: 1n << 18n,
    ReadMessageHistory: 1n << 19n,
    ManageMessages: 1n << 20n,
    PinMessages: 1n << 21n,
    EmbedLinks: 1n << 22n,
    AttachFiles: 1n << 23n,
    SendTTSMessages: 1n << 24n,
    SendVoiceMessages: 1n << 25n,
    SendPolls: 1n << 26n,
    BypassSlowmode: 1n << 27n,
    MentionEveryone: 1n << 28n,
    AddReactions: 1n << 29n,

    ManageThreads: 1n << 30n,
    CreatePublicThreads: 1n << 31n,
    CreatePrivateThreads: 1n << 32n,
    SendMessagesInThreads: 1n << 33n,

    UseExternalEmojis: 1n << 34n,
    UseExternalStickers: 1n << 35n,
    UseExternalSounds: 1n << 36n,
    UseExternalApps: 1n << 37n,

    Connect: 1n << 38n,
    Speak: 1n << 39n,
    Stream: 1n << 40n,
    UseVAD: 1n << 41n,
    PrioritySpeaker: 1n << 42n,
    RequestToSpeak: 1n << 43n,
    UseSoundboard: 1n << 44n,
    UseEmbeddedActivities: 1n << 45n,

    ChangeNickname: 1n << 46n,
    UseApplicationCommands: 1n << 47n,

    ManageEvents: 1n << 48n,
    CreateEvents: 1n << 49n,
} as const satisfies Record<string, bigint>;

export type PermissionFlag = keyof typeof permissionFlags;
export type PermissionFlags = typeof permissionFlags;
