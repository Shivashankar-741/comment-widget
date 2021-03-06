import { IReply, IUser } from 'types';
import { v4 as uuidv4 } from 'uuid';
import { Dispatch, SetStateAction } from 'react';

export const likeAndDisLikeHelper = (
  id: string,
  users: IUser[],
  setUsers: Dispatch<React.SetStateAction<IUser[]>>,
  action: string
) => {
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

  // let acc: IUser[];
  // function child(users: IUser[]) {
  //   users.forEach((user) => {
  //     if (user.id === id) {
  //       if (action === 'like') {
  //         user.like++;
  //       } else if (action === 'disLike') {
  //         user.disLike++;
  //       }
  //     } else if (user.child.length) {
  //       child(user.child);
  //     }
  //   });
  // }
  // child(users);
  // return users;
  // setUsers(users);
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
          parentName: null,
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
  // const u = users.reduce((acc: IUser[], user: IUser) => {
  //   if (user.isEdit) {
  //     user.comment = comment;
  //     user.isEdit = false;
  //     acc.push(user);
  //   } else {
  //     acc.push(user);
  //   }
  //   return acc;
  // }, []);
  // setUsers(u);

  function child(users: IUser[]) {
    users.forEach((user) => {
      if (user.isEdit) {
        user.comment = comment;
        user.isEdit = false;
      } else if (user.child.length) {
        child(user.child);
      }
    });
  }
  child(users);
  setUsers(users);

  commentEdit(false);
  setComment('');
};

export const replyCommentHelper = (
  replyComment: IReply,
  setReplyComment: Dispatch<React.SetStateAction<IReply>>,
  comment: string,
  setComment: Dispatch<SetStateAction<string>>,
  users: IUser[],
  setUsers: Dispatch<React.SetStateAction<IUser[]>>
) => {
  const { id: parentId, name: parentName } = replyComment;

  let childComment: IUser;

  if (!(comment.length > 200) && comment !== '') {
    let name = prompt('Drop your name here');
    if (name) {
      childComment = {
        name,
        comment,
        id: uuidv4(),
        like: 0,
        disLike: 0,
        date: new Date(),
        child: [],
        isEdit: false,
        parentName,
      };
    }
    setComment('');
  } else {
    alert('Your comment length should be less than 200 :(');
  }

  // const u = users?.reduce((acc: IUser[], user: IUser) => {
  //   if (user.id === parentId) {
  //     if (!!childComment) user?.child.push(childComment);
  //     acc?.push(user);
  //   } else {
  //     acc?.push(user);
  //   }
  //   return acc;
  // }, []);

  // setUsers(u);

  function child(users: IUser[], id: string) {
    users.forEach((user) => {
      if (user && user.id === id) {
        user.child.push(childComment);
      } else if (user && user.child.length) {
        child(user.child, id);
      }
    });
  }

  child(users, parentId);

  setUsers(users);
  setReplyComment({ isReply: false, id: '', name: null });
};
