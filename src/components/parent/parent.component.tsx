import { BiUser } from 'react-icons/bi';
import { AiFillEdit } from 'react-icons/ai';
import { AiFillLike } from 'react-icons/ai';
import { AiFillDislike } from 'react-icons/ai';
import { MdDeleteForever } from 'react-icons/md';

import { IParent } from '../../interface/obj';
import moment from 'moment';

export const Parent = ({
  user,
  users,
  setUsers,
  setComment,
  setEditComment,
  setReplyComment,
  inputRef,
  editHandler,
  deleteHandler,
  likeHandler,
  disLikeHandler,
  replyHandler,
}: IParent) => {
  return (
    <div className="widget__comment--parent">
      <div className="widget__comment--parent-icon">
        <BiUser />
      </div>
      <div className="widget__comment--parent-comment">
        <div className="widget__comment--parent-comment-user">
          <div className="widget__comment--parent-comment-user-left">
            <h1 className="widget__comment--parent-comment-user-left-name">{user.name}</h1>
            <h1 className="widget__comment--parent-comment-user-left-stamp">
              {moment(user.date).fromNow()}
            </h1>
          </div>
          <div className="widget__comment--parent-comment-user-right">
            <div
              className="widget__comment--parent-comment-user-right-edit"
              onClick={() =>
                editHandler(user.id, users, setUsers, setComment, setEditComment, inputRef)
              }
            >
              <AiFillEdit />
            </div>
            <div
              className="widget__comment--parent-comment-user-right-delete"
              onClick={() => deleteHandler(user.id, users, setUsers)}
            >
              <MdDeleteForever />
            </div>
          </div>
        </div>
        <div className="widget__comment--parent-comment-message">{user.comment}</div>
        <div className="widget__comment--parent-comment-like">
          <div className="widget__comment--parent-comment-like-like">
            <h1 className="widget__comment--parent-comment-like-like-count">{user.like}</h1>
            <div
              className="widget__comment--parent-comment-like-like-icon"
              onClick={() => likeHandler(user.id, users, setUsers)}
            >
              <AiFillLike />
            </div>
          </div>
          <div className="widget__comment--parent-comment-like-dislike">
            <h1 className="widget__comment--parent-comment-like-dislike-count">{user.disLike}</h1>
            <div
              className="widget__comment--parent-comment-like-dislike-icon"
              onClick={() => disLikeHandler(user.id, users, setUsers)}
            >
              <AiFillDislike />
            </div>
          </div>
          <div className="widget__comment--parent-comment-like-reply">
            <h1
              onClick={() => replyHandler(user.id, inputRef, setReplyComment)}
              className="widget__comment--parent-comment-like-reply-in"
            >
              Reply
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
