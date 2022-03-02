import React, { useEffect, useRef, useState } from 'react';
import { getIdNews, getLastNews } from '../../API/API';
import Preloader from '../../components/Preloader/Preloader';
import SingleNews from '../../components/SingleNews/SingleNews';
import useNewsActions from '../../hooks/useNewsAction';
import { useTypedSelector } from '../../hooks/useTypeSelector';
import 'antd/dist/antd.css';
import Table from './Table/Table';

export default function News() {
  const { news, isLoaded } = useTypedSelector((state) => state.news);
  const idInterval: { current: NodeJS.Timeout | null } = useRef(null);
  const { getNews } = useNewsActions();
  const [typeNews, setTypeNews] = useState('newstories');

  useEffect(() => {
    idInterval.current = setInterval(() => {
      getNews(typeNews);
    }, 60000);
    return () => {
      clearInterval(idInterval.current!);
    };
  }, []);

  useEffect(() => {
    getNews(typeNews);
  }, [typeNews]);

  if (!news.length) return <Preloader />;
  return (
    <main className="main">
      <div className="news__buttons">
        <button className="news__update button" onClick={() => setTypeNews('topstories')}>
          Top news
        </button>
        <button className="news__update button" onClick={() => setTypeNews('beststories')}>
          best news
        </button>
        <button className="news__update button" onClick={() => setTypeNews('newstories')}>
          last news
        </button>
        <button className="news__update button" onClick={() => getNews(typeNews)}>
          Update news
        </button>
      </div>
      <Table news={news} />
      {!isLoaded && <Preloader />}
    </main>
  );
}
