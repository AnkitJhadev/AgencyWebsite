import { handleContactSubmission } from "@/server/modules/contact/contact.controller";

export const runtime = "nodejs";

export const POST = handleContactSubmission;
