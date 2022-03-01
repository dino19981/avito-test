import React, { useEffect, useState } from 'react';
import { getIdNews, getLastNews } from '../../API/API';
import Preloader from '../../components/Preloader/Preloader';
import SingleNews from '../../components/SingleNews/SingleNews';
import useNewsActions from '../../hooks/useNewsAction';
import { useTypedSelector } from '../../hooks/useTypeSelector';
import { columns } from '../../utils/data';
import 'antd/dist/antd.css';
import { Table } from 'antd';

export default function News() {
  const { news } = useTypedSelector((state) => state.news);
  const { getNews } = useNewsActions();
  async function func() {
    await getNews();
    console.log(news);
  }

  useEffect(() => {
    getNews();
  }, []);
  if (!news.length) return <Preloader />;
  return (
    <div>
      <button onClick={func}>qwe</button>
      <Table columns={columns} dataSource={news} />
    </div>
  );
}
