import { Dispatch, MutableRefObject, SetStateAction } from 'react';
import { IObj } from '../obj';
import { likeAndDisLikeHelper, newCommentHelper, editCommentHelper } from '../helpers/helpers';

export const changeHandler = (
  e: React.ChangeEvent<HTMLInputElement>,
  comment: string,
  setComment: Dispatch<SetStateAction<string>>,
  users: IObj[],
  setUsers: Dispatch<React.SetStateAction<IObj[]>>
) => {
  setComment(e.target.value);
};

export const keyPressHandler = (
  e: React.KeyboardEvent<HTMLInputElement>,
  comment: string,
  setComment: Dispatch<SetStateAction<string>>,
  users: IObj[],
  setUsers: Dispatch<React.SetStateAction<IObj[]>>,
  commentEdit: boolean,
  setCommentEdit: Dispatch<React.SetStateAction<boolean>>
) => {
  if (e.key === 'Enter') {
    if (!commentEdit) {
      newCommentHelper(comment, setComment, users, setUsers);
    } else {
      editCommentHelper(comment, setComment, users, setUsers, setCommentEdit);
    }
  }
};

export const likeHandler = (
  id: string,
  users: IObj[],
  setUsers: Dispatch<React.SetStateAction<IObj[]>>
) => {
  const likedUsers = likeAndDisLikeHelper(id, users, 'like');
  setUsers(likedUsers);
};

export const disLikeHandler = (
  id: string,
  users: IObj[],
  setUsers: Dispatch<React.SetStateAction<IObj[]>>
) => {
  const disLikedUsers = likeAndDisLikeHelper(id, users, 'disLike');
  setUsers(disLikedUsers);
};

export const replyHandler = () => {};

export const editHandler = (
  id: string,
  users: IObj[],
  setUsers: Dispatch<React.SetStateAction<IObj[]>>,
  setComment: Dispatch<SetStateAction<string>>,
  setCommentEdit: Dispatch<React.SetStateAction<boolean>>,
  inputRef: MutableRefObject<HTMLInputElement | null>
) => {
  let comment = users.find((user) => user.id === id);
  if (comment) {
    comment.isEdit = true;
    setComment(comment.comment);
    setCommentEdit(true);
    inputRef.current?.focus();
  }
};

export const deleteHandler = (
  id: string,
  users: IObj[],
  setUsers: Dispatch<React.SetStateAction<IObj[]>>
) => {
  users = users.filter((user) => user.id !== id);
  setUsers(users);
};
