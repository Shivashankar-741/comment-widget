import { Dispatch, MutableRefObject, SetStateAction } from 'react';
import { IReply, IUser } from '../interface/obj';
import {
  likeAndDisLikeHelper,
  newCommentHelper,
  editCommentHelper,
  replyCommentHelper,
} from '../helpers/helpers';

export const changeHandler = (
  e: React.ChangeEvent<HTMLInputElement>,
  comment: string,
  setComment: Dispatch<SetStateAction<string>>,
  users: IUser[],
  setUsers: Dispatch<React.SetStateAction<IUser[]>>
) => {
  setComment(e.target.value);
};

export const keyPressHandler = (
  e: React.KeyboardEvent<HTMLInputElement>,
  comment: string,
  setComment: Dispatch<SetStateAction<string>>,
  users: IUser[],
  setUsers: Dispatch<React.SetStateAction<IUser[]>>,
  editComment: boolean,
  setEditComment: Dispatch<React.SetStateAction<boolean>>,
  replyComment: IReply,
  setReplyComment: Dispatch<React.SetStateAction<IReply>>
) => {
  if (e.key === 'Enter') {
    if (!editComment && !replyComment.isReply) {
      // console.log('new comment');
      newCommentHelper(comment, setComment, users, setUsers);
    } else if (replyComment?.isReply) {
      // console.log('reply comment');
      replyCommentHelper(replyComment, setReplyComment, comment, setComment, users, setUsers);
    } else {
      // console.log('edit comment');
      editCommentHelper(comment, setComment, users, setUsers, setEditComment);
    }
  }
};

export const likeHandler = (
  id: string,
  users: IUser[],
  setUsers: Dispatch<React.SetStateAction<IUser[]>>
) => {
  // likeAndDisLikeHelper(id, users, setUsers, 'like');
  // const likedUsers = likeAndDisLikeHelper(id, users, setUsers, 'like');
  likeAndDisLikeHelper(id, users, setUsers, 'like');

  // setUsers(likedUsers);
};

export const disLikeHandler = (
  id: string,
  users: IUser[],
  setUsers: Dispatch<React.SetStateAction<IUser[]>>
) => {
  // const disLikedUsers = likeAndDisLikeHelper(id, users, setUsers, 'disLike');
  likeAndDisLikeHelper(id, users, setUsers, 'disLike');

  // setUsers(disLikedUsers);
};

export const replyHandler = (
  id: string,
  inputRef: MutableRefObject<HTMLInputElement | null>,
  setReplyComment: Dispatch<React.SetStateAction<IReply>>
) => {
  inputRef.current?.focus();
  setReplyComment({ isReply: true, id });
};

export const editHandler = (
  id: string,
  users: IUser[],
  setUsers: Dispatch<React.SetStateAction<IUser[]>>,
  setComment: Dispatch<SetStateAction<string>>,
  setEditComment: Dispatch<React.SetStateAction<boolean>>,
  inputRef: MutableRefObject<HTMLInputElement | null>
) => {
  let comment: IUser | undefined;

  function child(users: IUser[]) {
    users.forEach((user) => {
      if (user.id === id) {
        comment = user;
      } else if (user.child.length) {
        child(user.child);
      }
    });
  }
  child(users);

  console.log(comment);

  if (comment) {
    comment.isEdit = true;
    setComment(comment.comment);
    setEditComment(true);
    inputRef.current?.focus();
  }
};

export const deleteHandler = (
  id: string,
  users: IUser[],
  setUsers: Dispatch<React.SetStateAction<IUser[]>>
) => {
  users = users.filter((user) => user.id !== id);
  setUsers(users);
};

export const sortByRecentHandler = (
  users: IUser[],
  setUsers: Dispatch<React.SetStateAction<IUser[]>>
) => {
  const sortedComments = users.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  setUsers(sortedComments);
};

export const sortByLikesHandler = (
  users: IUser[],
  setUsers: Dispatch<React.SetStateAction<IUser[]>>
) => {
  const sortedComments = users.sort((a, b) => b.like - a.like);
  setUsers(sortedComments);
};

export const replyChildHandler = (childId: string) => {
  console.log(childId);
};
