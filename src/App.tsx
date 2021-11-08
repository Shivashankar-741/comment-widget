import { useRef, useState } from 'react';
import './styles/App.css';
import { IUser, IReply } from 'types';
import { handler } from 'handlers';
import { Child, Parent, Inputfield } from 'components';
import { replyObj } from 'utils';

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
          changeHandler={handler.changeHandler}
          setComment={setComment}
          users={users}
          setUsers={setUsers}
          keyPressHandler={handler.keyPressHandler}
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
                deleteHandler={handler.deleteHandler}
                editHandler={handler.editHandler}
                likeHandler={handler.likeHandler}
                disLikeHandler={handler.disLikeHandler}
                replyHandler={handler.replyHandler}
              />

              {/* child */}
              {user?.child.map(
                (data) =>
                  data && (
                    <Child
                      key={data.id}
                      data={data}
                      users={users}
                      setUsers={setUsers}
                      setComment={setComment}
                      setReplyComment={setReplyComment}
                      setEditComment={setEditComment}
                      inputRef={inputRef}
                      deleteHandler={handler.deleteHandler}
                      editHandler={handler.editHandler}
                      likeHandler={handler.likeHandler}
                      disLikeHandler={handler.disLikeHandler}
                      replyHandler={handler.replyHandler}
                    />
                  )
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
