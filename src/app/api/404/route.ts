import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json(
    { error: 'ページが見つかりません' },
    { status: 404 }
  );
}