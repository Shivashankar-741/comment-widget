import { useRef, useState } from 'react';
import './styles/App.css';
import { IUser, IReply, replyObj } from './interface/obj';
import {
  changeHandler,
  keyPressHandler,
  likeHandler,
  disLikeHandler,
  editHandler,
  deleteHandler,
  // sortByRecentHandler,
  // sortByLikesHandler,
  replyHandler,
} from './handlers/handlers';
import { Child } from './components/child/child.component';
import { Parent } from './components/parent/parent.component';
import { Inputfield } from './components/inputfield/inputfield';

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
        <Inputfield
          comment={comment}
          changeHandler={changeHandler}
          setComment={setComment}
          users={users}
          setUsers={setUsers}
          keyPressHandler={keyPressHandler}
          editComment={editComment}
          setEditComment={setEditComment}
          replyComment={replyComment}
          setReplyComment={setReplyComment}
          inputRef={inputRef}
        />
        <div className="widget__comment">
          {/* grandparent */}
          {users.map((user) => (
            <div key={user.id} className="widget__comment-grandparent">
              {/* parent */}
              <Parent
                key={user.id}
                user={user}
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

              {/* child */}
              {user.child.map((data) => (
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
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
