import { IParent } from 'types';
import { Layout } from 'components';

export const Child = ({
  user,
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
}: IParent) => {
  return (
    <div>
      <div key={user.id} className="widget__comment--child">
        <Layout
          user={user}
          users={users}
          setUsers={setUsers}
          setComment={setComment}
          setEditComment={setEditComment}
          setReplyComment={setReplyComment}
          inputRef={inputRef}
          editHandler={editHandler}
          deleteHandler={deleteHandler}
          likeHandler={likeHandler}
          disLikeHandler={disLikeHandler}
          replyHandler={replyHandler}
        />
      </div>
      <div>
        {user.child.map(
          (user) =>
            user && (
              <Child
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
            )
        )}
      </div>
    </div>
  );
};
