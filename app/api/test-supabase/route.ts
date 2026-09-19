import { NextResponse } from "next/server";

import { getSupabase } from "@/lib/supabase";


export async function GET() {

  const { data, error } = await getSupabase()
    .from("orders")
    .select("*");


  if (error) {
    return NextResponse.json(
      {
        error,
      },
      {
        status: 500,
      }
    );
  }


  return NextResponse.json({
    success: true,
    data,
  });

}