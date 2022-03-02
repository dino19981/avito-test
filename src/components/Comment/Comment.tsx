import React, { ReactNode, useState } from 'react';
import DOMPurify from 'dompurify';
import { getComments } from '../../API/API';
import { IComment } from '../../types/types';
import { getDate, getTime } from '../../utils/utils';

type TChildren = {
  data: IComment;
  update: { setComments: (state: IComment[]) => void; kids?: number[] };
};

const ExampleComment = ({ data, update }: TChildren) => {
  const [comments, setComments] = useState<IComment[]>([]);
  const kids = data.kids;

  async function getMoreComments() {
    const comments = await getComments(data.kids);
    setComments(comments);
  }

  return (
    <div className="ant-comment">
      <div className="ant-comment-inner">
        <div className="ant-comment-avatar">
          <img src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />
        </div>
        <div className="ant-comment-content">
          <div className="ant-comment-content-author">
            <span className="ant-comment-content-author-name">
              <a>{data.by}</a>
            </span>
          </div>
          <div className="ant-comment-content-detail">
            <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(data.text) }} />
          </div>
          <div className="comment__date">
            <p className="comment__time">
              {getTime(data.time)} <span>{getDate(data.time)}</span>
            </p>
            <p className="comment__more" onClick={getMoreComments}>
              {data.kids && 'more...'}
            </p>
          </div>
        </div>
      </div>
      {comments.length ? (
        <div className="ant-comment-nestet">
          {comments.map((comment) => (
            <ExampleComment update={{ setComments, kids }} data={comment} key={comment.id} />
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default ExampleComment;
