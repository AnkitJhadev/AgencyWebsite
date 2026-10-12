import "server-only";
import { NextResponse } from "next/server";

export const ok = () => NextResponse.json({ success: true });

export const fail = (status: number, error: string, fields?: Record<string, string>) =>
  NextResponse.json(fields ? { error, fields } : { error }, { status });
