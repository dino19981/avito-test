import React from 'react';
import { INews } from '../../types/types';

type TSingleNews = {
  data: INews;
};

export default function SingleNews({ data }: TSingleNews) {
  const { id, url } = data;
  return <div>{url}</div>;
}
