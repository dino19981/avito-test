import { INews } from "../types/types";

export const HEAD_URL = 'https://hacker-news.firebaseio.com/v0/';

export async function getIdNews() {
  const res = await fetch(`${HEAD_URL}newstories.json?print=pretty`);
  const data = await res.json();
  data.length = 100;
  return data
}

export async function getLastNews(arr: number[]) {
  const promises = arr.map((item) => fetch(`${HEAD_URL}item/${item}.json?print=pretty`));
  const responses = await Promise.all(promises);
  const news = await Promise.all((responses.map((item) => item.json())));
  return news;
}