import React from 'react';
import SingleNews from '../../../components/SingleNews/SingleNews';
import { INews } from '../../../types/types';

type TTable = {
  news: INews[];
};

export default function Table({ news }: TTable) {
  return (
    <div className="ant-table-wrapper">
      <div className="ant-spin-nested-loading">
        <div className="ant-spin-container">
          <div className="ant-table">
            <div className="ant-table-container">
              <div className="ant-table-content">
                <table>
                  <colgroup></colgroup>
                  <thead className="ant-table-thead">
                    <tr>
                      <th className="ant-table-cell">News</th>
                      <th className="ant-table-cell">Ratio</th>
                      <th className="ant-table-cell">Nickname</th>
                      <th className="ant-table-cell">Data</th>
                    </tr>
                  </thead>
                  <tbody className="ant-table-tbody">
                    {news.map((item) => (
                      <SingleNews data={item} key={item.id} />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
