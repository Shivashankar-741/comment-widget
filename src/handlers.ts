import { Dispatch, MutableRefObject, SetStateAction } from 'react';
import { IObj } from './obj';
import { v4 as uuidv4 } from 'uuid';

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
      if (!(comment.length > 200) && comment !== '') {
        let name = prompt('Drop your name here');
        if (name) {
          setUsers([
            ...users,
            {
              name,
              comment,
              id: uuidv4(),
              like: 0,
              disLike: 0,
              date: new Date(),
              child: [],
              isEdit: false,
            },
          ]);
        }
        setComment('');
      } else {
        alert('Your comment length should be less than 200 :(');
      }
    } else {
      const u = users.reduce((acc: IObj[], user: IObj) => {
        if (user.isEdit) {
          user.comment = comment;
          user.isEdit = false;
          acc.push(user);
        } else {
          acc.push(user);
        }
        return acc;
      }, []);
      setUsers(u);
      setCommentEdit(false);
      setComment('');
    }
  }
};

const likeAndDisLikeHandler = (id: string, users: IObj[], action: string) => {
  return users.reduce((acc: IObj[], user: IObj) => {
    if (user.id === id) {
      if (action === 'like') {
        user.like++;
      } else if (action === 'disLike') {
        user.disLike++;
      }
      acc.push(user);
    } else {
      acc.push(user);
    }
    return acc;
  }, []);
};

export const likeHandler = (
  id: string,
  users: IObj[],
  setUsers: Dispatch<React.SetStateAction<IObj[]>>
) => {
  const likedUsers = likeAndDisLikeHandler(id, users, 'like');
  setUsers(likedUsers);
};

export const disLikeHandler = (
  id: string,
  users: IObj[],
  setUsers: Dispatch<React.SetStateAction<IObj[]>>
) => {
  const disLikedUsers = likeAndDisLikeHandler(id, users, 'disLike');
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
