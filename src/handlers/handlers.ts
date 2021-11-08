import { Dispatch, MutableRefObject, SetStateAction } from 'react';
import { IReply, IUser } from 'types';
import { helper } from 'helpers';

export const changeHandler = (
  e: React.ChangeEvent<HTMLInputElement>,
  setComment: Dispatch<SetStateAction<string>>
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
      helper.newCommentHelper(comment, setComment, users, setUsers);
    } else if (replyComment?.isReply) {
      helper.replyCommentHelper(
        replyComment,
        setReplyComment,
        comment,
        setComment,
        users,
        setUsers
      );
    } else {
      helper.editCommentHelper(comment, setComment, users, setUsers, setEditComment);
    }
  }
};

export const likeHandler = (
  id: string,
  users: IUser[],
  setUsers: Dispatch<React.SetStateAction<IUser[]>>
) => {
  const likedUsers = helper.likeAndDisLikeHelper(id, users, setUsers, 'like');
  setUsers(likedUsers);
};

export const disLikeHandler = (
  id: string,
  users: IUser[],
  setUsers: Dispatch<React.SetStateAction<IUser[]>>
) => {
  const disLikedUsers = helper.likeAndDisLikeHelper(id, users, setUsers, 'disLike');
  setUsers(disLikedUsers);
};

export const replyHandler = (
  id: string,
  name: string | null,
  inputRef: MutableRefObject<HTMLInputElement | null>,
  setReplyComment: Dispatch<React.SetStateAction<IReply>>
) => {
  inputRef.current?.focus();
  setReplyComment({ isReply: true, id, name });
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
  let u: IUser | undefined;

  function childTwo(users: IUser[], id: string, ind: number) {
    users.forEach((user: IUser) => {
      if (user.id === id) {
        return user.child.splice(ind, 1);
      } else if (user.child.length) {
        childTwo(user.child, id, ind);
      }
    });
  }

  function child(users: IUser[]) {
    users.forEach((user: IUser, ind) => {
      if (user?.id === id) {
        if (u === undefined) {
          return users.splice(ind, 1);
        } else {
          childTwo(users, u.id, ind);
        }
      } else if (user?.child.length) {
        u = user;
        child(user?.child);
      }
      u = undefined;
    });
  }
  child(users);
  // setUsers(users);
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
