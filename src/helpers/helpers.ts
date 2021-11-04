import { IReply, IUser } from '../interface/obj';
import { v4 as uuidv4 } from 'uuid';
import { Dispatch, SetStateAction } from 'react';

export const likeAndDisLikeHelper = (id: string, users: IUser[], action: string) => {
  return users.reduce((acc: IUser[], user: IUser) => {
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
  users: IUser[],
  setUsers: Dispatch<React.SetStateAction<IUser[]>>
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
  users: IUser[],
  setUsers: Dispatch<React.SetStateAction<IUser[]>>,
  commentEdit: Dispatch<React.SetStateAction<boolean>>
) => {
  const u = users.reduce((acc: IUser[], user: IUser) => {
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
  commentEdit(false);
  setComment('');
};

export const replyCommentHelper = (
  replyComment: IReply,
  setReplyComment: Dispatch<React.SetStateAction<IReply>>
) => {
  const { id: parentId } = replyComment;
  console.log(parentId);
  // setReplyComment({ isReply: false, id: '' });
};
