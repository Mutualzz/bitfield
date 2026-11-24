import { userFlags, type UserFlag } from "./flags/user";

export const badgeFlags = [
  "Founder",
  "Staff",
  "Employee",
  "Developer",
  "CommunityHelper",
  "BugHunter",
  "Tester",
  "Artist",
  "Creator",
  "EarlySupporter",
] as const satisfies readonly UserFlag[];

export type BadgeFlag = (typeof badgeFlags)[number];

export const alwaysVisibleBadges = [
  "Staff",
  "Employee",
] as const satisfies readonly BadgeFlag[];

export interface BadgeSettings {
  order: readonly string[];
  hidden: readonly string[];
}

export const isBadgeFlag = (value: string): value is BadgeFlag =>
  (badgeFlags as readonly string[]).includes(value);

export const isAlwaysVisibleBadge = (badge: BadgeFlag) =>
  (alwaysVisibleBadges as readonly BadgeFlag[]).includes(badge);

export const getOrderedBadges = (
  flags: bigint,
  order: readonly string[] = [],
): BadgeFlag[] => {
  const earned = badgeFlags.filter(
    (flag) => (flags & userFlags[flag]) === userFlags[flag],
  );
  const preferred = order.filter(
    (badge): badge is BadgeFlag => isBadgeFlag(badge) && earned.includes(badge),
  );
  return [...new Set([...preferred, ...earned])];
};

export const getUserBadges = (
  flags: bigint,
  settings?: BadgeSettings | null,
): BadgeFlag[] =>
  getOrderedBadges(flags, settings?.order).filter(
    (badge) => isAlwaysVisibleBadge(badge) || !settings?.hidden.includes(badge),
  );

export const normalizeBadgeSettings = (
  settings: BadgeSettings | null | undefined,
): { order: BadgeFlag[]; hidden: BadgeFlag[] } | null => {
  if (!settings) return null;
  const order = [...new Set(settings.order.filter(isBadgeFlag))];
  const hidden = [
    ...new Set(
      settings.hidden
        .filter(isBadgeFlag)
        .filter((badge) => !isAlwaysVisibleBadge(badge)),
    ),
  ];
  return order.length === 0 && hidden.length === 0 ? null : { order, hidden };
};
