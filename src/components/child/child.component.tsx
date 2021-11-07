import { BiUser } from 'react-icons/bi';
import { AiFillEdit } from 'react-icons/ai';
import { AiFillLike } from 'react-icons/ai';
import { AiFillDislike } from 'react-icons/ai';
import { MdDeleteForever } from 'react-icons/md';

import { IChild } from '../../interface/obj';
import moment from 'moment';

export const Child = ({
  data,
  users,
  setUsers,
  setComment,
  setReplyComment,
  setEditComment,
  inputRef,
  deleteHandler,
  editHandler,
  likeHandler,
  disLikeHandler,
  replyHandler,
}: IChild) => {
  return (
    <div>
      <div key={data.id} className="widget__comment--child">
        <div className="widget__comment--parent">
          <div className="widget__comment--parent-icon">
            <BiUser />
          </div>
          <div className="widget__comment--parent-comment">
            <div className="widget__comment--parent-comment-user">
              <div className="widget__comment--parent-comment-user-left">
                <h1 className="widget__comment--parent-comment-user-left-name">{data.name}</h1>
                <h1 className="widget__comment--parent-comment-user-left-stamp">
                  {moment(data.date).fromNow()}
                </h1>
              </div>
              <div className="widget__comment--parent-comment-user-right">
                <div
                  className="widget__comment--parent-comment-user-right-edit"
                  onClick={() =>
                    editHandler(data.id, users, setUsers, setComment, setEditComment, inputRef)
                  }
                >
                  <AiFillEdit />
                </div>
                <div
                  className="widget__comment--parent-comment-user-right-delete"
                  onClick={() => deleteHandler(data.id, users, setUsers)}
                >
                  <MdDeleteForever />
                </div>
              </div>
            </div>
            <div className="widget__comment--parent-comment-message">{data.comment}</div>
            <div className="widget__comment--parent-comment-like">
              <div className="widget__comment--parent-comment-like-like">
                <h1 className="widget__comment--parent-comment-like-like-count">{data.like}</h1>
                <div
                  className="widget__comment--parent-comment-like-like-icon"
                  onClick={() => likeHandler(data.id, users, setUsers)}
                >
                  <AiFillLike />
                </div>
              </div>
              <div className="widget__comment--parent-comment-like-dislike">
                <h1 className="widget__comment--parent-comment-like-dislike-count">
                  {data.disLike}
                </h1>
                <div
                  className="widget__comment--parent-comment-like-dislike-icon"
                  onClick={() => disLikeHandler(data.id, users, setUsers)}
                >
                  <AiFillDislike />
                </div>
              </div>
              <div className="widget__comment--parent-comment-like-reply">
                <h1
                  className="widget__comment--parent-comment-like-reply-in"
                  onClick={() => replyHandler(data.id, inputRef, setReplyComment)}
                >
                  Reply
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        {data.child.map((data) => (
          <Child
            key={data.id}
            data={data}
            users={users}
            setUsers={setUsers}
            setComment={setComment}
            setReplyComment={setReplyComment}
            setEditComment={setEditComment}
            inputRef={inputRef}
            deleteHandler={deleteHandler}
            editHandler={editHandler}
            likeHandler={likeHandler}
            disLikeHandler={disLikeHandler}
            replyHandler={replyHandler}
          />
        ))}
      </div>
    </div>
  );
};
