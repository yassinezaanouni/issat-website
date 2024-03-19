import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export const roles = v.union(
  v.literal("student"),
  v.literal("teacher"),
  v.literal("admin"),
);

export default defineSchema({
  users: defineTable({
    tokenIdentifier: v.string(),
    fullName: v.optional(v.string()),
    type: v.optional(roles),
    pictureUrl: v.optional(v.string()),
  }).index("by_token", ["tokenIdentifier"]),
});
