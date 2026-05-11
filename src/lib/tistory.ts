export interface TistoryPost {
  title: string;
  link: string;
  pubDate: string;
}

export async function fetchLatestPosts(): Promise<TistoryPost[]> {
  try {
    const TISTORY_ID = "artist0904";
    const RSS_URL = `https://${TISTORY_ID}.tistory.com/rss`;


    const response = await fetch(
        `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(RSS_URL)}`
    );
    const data = await response.json();

    if (data.status === "ok") {
      return data.items.slice(0, 3).map((item: any) => ({
        title: item.title,
        link: item.link,
        pubDate: item.pubDate.split(' ')[0],
      }));
    }
    return [];
  } catch (error) {
    console.error("RSS를 가져오는데 실패했습니다:", error);
    return [];
  }
}