import React, { useRef, useState } from 'react';
import './styles/App.css';
import { FaUsers } from 'react-icons/fa';
import { BiUser } from 'react-icons/bi';
import { AiFillEdit } from 'react-icons/ai';
import { AiFillLike } from 'react-icons/ai';
import { AiFillDislike } from 'react-icons/ai';
import { MdDeleteForever } from 'react-icons/md';
import { IUser, IReply, replyObj } from './interface/obj';
import {
  changeHandler,
  keyPressHandler,
  likeHandler,
  disLikeHandler,
  editHandler,
  deleteHandler,
  sortByRecentHandler,
  sortByLikesHandler,
  replyHandler,
} from './handlers/handlers';
import moment from 'moment';

function App() {
  const [comment, setComment] = useState<string>('');
  const [editComment, setEditComment] = useState<boolean>(false);
  const [replyComment, setReplyComment] = useState<IReply>(replyObj);
  const [users, setUsers] = useState<IUser[] | []>([]);
  const inputRef = useRef<HTMLInputElement | null>(null);

  console.log(users);

  return (
    <div className="App">
      <div className="widget">
        <div className="widget__input">
          <div className="widget__input--icon">
            <FaUsers />
          </div>
          <div className="widget__input--field">
            <input
              type="text"
              className="widget__input--field-in"
              placeholder="Join the discussion..."
              value={comment}
              onChange={(e) => changeHandler(e, comment, setComment, users, setUsers)}
              onKeyPress={(e) =>
                keyPressHandler(
                  e,
                  comment,
                  setComment,
                  users,
                  setUsers,
                  editComment,
                  setEditComment,
                  replyComment,
                  setReplyComment
                )
              }
              ref={inputRef}
            />
          </div>
        </div>
        <div className="widget__comment">
          {/* grandparent */}
          {users.map((user) => (
            <div key={user.id} className="widget__comment-grandparent">
              {/* parent */}
              <div className="widget__comment--parent">
                <div className="widget__comment--parent-icon">
                  <BiUser />
                </div>
                <div className="widget__comment--parent-comment">
                  <div className="widget__comment--parent-comment-user">
                    <div className="widget__comment--parent-comment-user-left">
                      <h1 className="widget__comment--parent-comment-user-left-name">
                        {user.name}
                      </h1>
                      <h1 className="widget__comment--parent-comment-user-left-stamp">
                        {moment(user.date).fromNow()}
                      </h1>
                    </div>
                    <div className="widget__comment--parent-comment-user-right">
                      <div
                        className="widget__comment--parent-comment-user-right-edit"
                        onClick={() =>
                          editHandler(
                            user.id,
                            users,
                            setUsers,
                            setComment,
                            setEditComment,
                            inputRef
                          )
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
                      <h1 className="widget__comment--parent-comment-like-like-count">
                        {user.like}
                      </h1>
                      <div
                        className="widget__comment--parent-comment-like-like-icon"
                        onClick={() => likeHandler(user.id, users, setUsers)}
                      >
                        <AiFillLike />
                      </div>
                    </div>
                    <div className="widget__comment--parent-comment-like-dislike">
                      <h1 className="widget__comment--parent-comment-like-dislike-count">
                        {user.disLike}
                      </h1>
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
              {/* child */}
              {/* {user.child.map((data) => (
                <childFn data={data} />
              ))} */}
              {user?.child.map((user) => (
                <div key={user?.id} className="widget__comment--child">
                  <div className="widget__comment--parent">
                    <div className="widget__comment--parent-icon">
                      <BiUser />
                    </div>
                    <div className="widget__comment--parent-comment">
                      <div className="widget__comment--parent-comment-user">
                        <div className="widget__comment--parent-comment-user-left">
                          <h1 className="widget__comment--parent-comment-user-left-name">
                            {user?.name}
                          </h1>
                          <h1 className="widget__comment--parent-comment-user-left-stamp">
                            {moment(user?.date).fromNow()}
                          </h1>
                        </div>
                        <div className="widget__comment--parent-comment-user-right">
                          <div
                            className="widget__comment--parent-comment-user-right-edit"
                            onClick={() =>
                              editHandler(
                                user.id,
                                users,
                                setUsers,
                                setComment,
                                setEditComment,
                                inputRef
                              )
                            }
                          >
                            <AiFillEdit />
                          </div>
                          <div
                            className="widget__comment--parent-comment-user-right-delete"
                            // onClick={deleteChildHandler}
                          >
                            <MdDeleteForever />
                          </div>
                        </div>
                      </div>
                      <div className="widget__comment--parent-comment-message">{user?.comment}</div>
                      <div className="widget__comment--parent-comment-like">
                        <div className="widget__comment--parent-comment-like-like">
                          <h1 className="widget__comment--parent-comment-like-like-count">0</h1>
                          <div
                            className="widget__comment--parent-comment-like-like-icon"
                            onClick={() => likeHandler(user.id, users, setUsers)}
                          >
                            <AiFillLike />
                          </div>
                        </div>
                        <div className="widget__comment--parent-comment-like-dislike">
                          <h1 className="widget__comment--parent-comment-like-dislike-count">0</h1>
                          <div
                            className="widget__comment--parent-comment-like-dislike-icon"
                            onClick={() => disLikeHandler(user.id, users, setUsers)}
                          >
                            <AiFillDislike />
                          </div>
                        </div>
                        <div className="widget__comment--parent-comment-like-reply">
                          <h1
                            className="widget__comment--parent-comment-like-reply-in"
                            onClick={() => replyHandler(user.id, inputRef, setReplyComment)}
                          >
                            Reply
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
