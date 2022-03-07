export interface INews {
  by: string
  descendants: number
  id: number
  score: number
  time: number
  title: string
  type: string
  url: string
  kids?: number[]
}

export interface IComment {
  by: string
  id: number
  kids: number[]
  parent: number
  text: string
  time: number
  type: string
}

export enum newsTypes {
  UPDATE_NEWS = 'UPDATE_NEWS',
  GET_SINGLE_NEWS = 'GET_SINGLE_NEWS',
  END_LOADING = 'END_LOADING',
  START_LOADING = 'START_LOADING',
}

export type TActionNews = TActionAllNews | TSingleNews | TLoading

export type TActionAllNews = {
  type: newsTypes.UPDATE_NEWS
  payload: INews[]
}

type TSingleNews = {
  type: newsTypes.GET_SINGLE_NEWS
  payload: INews
}

type TLoading = {
  type: newsTypes.START_LOADING
}

export type TNewsState = {
  news: INews[]
  singleNews: INews
  isLoaded: boolean
}