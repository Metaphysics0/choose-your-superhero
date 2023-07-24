import { buildSuperheroApiUrl } from "@/lib/superhero-api";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const searchText = searchParams.get("text");

  const response = await fetch(buildSuperheroApiUrl(`search/${searchText}`));
  const data = (await response.json()) as ISearchByNameResponse;

  return NextResponse.json(data);
}
