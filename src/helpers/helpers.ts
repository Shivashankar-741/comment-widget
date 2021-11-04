import { IObj } from '../obj';
import { v4 as uuidv4 } from 'uuid';
import { Dispatch, SetStateAction } from 'react';

export const likeAndDisLikeHelper = (id: string, users: IObj[], action: string) => {
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

export const newCommentHelper = (
  comment: string,
  setComment: Dispatch<SetStateAction<string>>,
  users: IObj[],
  setUsers: Dispatch<React.SetStateAction<IObj[]>>
) => {
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
};

export const editCommentHelper = (
  comment: string,
  setComment: Dispatch<SetStateAction<string>>,
  users: IObj[],
  setUsers: Dispatch<React.SetStateAction<IObj[]>>,
  setCommentEdit: Dispatch<React.SetStateAction<boolean>>
) => {
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
};
