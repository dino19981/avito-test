import React from 'react';
import Preloader from '../../components/Preloader/Preloader';
import useNewsActions from '../../hooks/useNewsAction';
import { useTypedSelector } from '../../hooks/useTypeSelector';
import 'antd/dist/antd.css';
import Table from './Table/Table';
import { useUpdateNews } from '../../hooks/customHooks/useUpdateNews';

export default function News() {
  const { news, isLoaded } = useTypedSelector((state) => state.news);
  const [typeNews, setTypeNews] = useUpdateNews();
  const { getNews } = useNewsActions();

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
