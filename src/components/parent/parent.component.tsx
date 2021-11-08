import { IParent } from 'types';
import { Layout } from 'components';

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
  );
};
