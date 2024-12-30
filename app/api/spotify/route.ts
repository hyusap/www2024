import { NextRequest, NextResponse } from "next/server";
import querystring from "querystring";

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const CURRENTLY_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const RECENTLY_PLAYED_ENDPOINT = `https://api.spotify.com/v1/me/player/recently-played?limit=1`;

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: querystring.stringify({
      grant_type: "refresh_token",
      refresh_token,
    }),
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(
      `Failed to fetch access token: ${
        data.error_description || "Unknown error"
      }`,
    );
  }
  return data.access_token;
};

export async function GET(request: NextRequest) {
  try {
    const access_token = await getAccessToken();

    const response = await fetch(CURRENTLY_PLAYING_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    if (!response.ok) {
      throw new Error(
        `Failed to fetch currently playing: ${await response.text()}`,
      );
    }

    if (!response.body) {
      const response = await fetch(RECENTLY_PLAYED_ENDPOINT, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });

      if (!response.ok) {
        throw new Error(
          `Failed to fetch recently played: ${await response.text()}`,
        );
      }

      const data = await response.json();
      // return NextResponse.json(data);

      const responseData = {
        title: data.items[0].track.name.replace(/\(.*?\)/g, ""),
        artist: data.items[0].track.artists
          .map((artist: any) => artist.name)
          .join(", "),
        currentlyPlaying: false,
      };
      return NextResponse.json(responseData);
    }

    const data = await response.json();
    const responseData = {
      title: data.item.name,
      artist: data.item.artists[0].name,
      currentlyPlaying: true,
    };
    return NextResponse.json(responseData);
  } catch (error: any) {
    console.error(error);
    return new NextResponse(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}

export const revalidate = 0;
