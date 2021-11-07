import { Dispatch, MutableRefObject, SetStateAction } from 'react';

export interface IUser {
  name: string | null;
  comment: string;
  id: string;
  like: number;
  disLike: number;
  date: Date;
  child: IUser[];
  isEdit: boolean;
}

export interface IReply {
  isReply: boolean;
  id: string;
}

export const replyObj = {
  isReply: false,
  id: '',
};

export interface IChild {
  data: IUser;
  users: IUser[];
  setUsers: Dispatch<React.SetStateAction<IUser[]>>;
  setComment: Dispatch<SetStateAction<string>>;
  setReplyComment: Dispatch<React.SetStateAction<IReply>>;
  setEditComment: Dispatch<React.SetStateAction<boolean>>;
  inputRef: MutableRefObject<HTMLInputElement | null>;
  deleteHandler: (
    id: string,
    users: IUser[],
    setUsers: Dispatch<React.SetStateAction<IUser[]>>
  ) => void;
  editHandler: (
    id: string,
    users: IUser[],
    setUsers: Dispatch<React.SetStateAction<IUser[]>>,
    setComment: Dispatch<SetStateAction<string>>,
    setEditComment: Dispatch<React.SetStateAction<boolean>>,
    inputRef: MutableRefObject<HTMLInputElement | null>
  ) => void;
  likeHandler: (
    id: string,
    users: IUser[],
    setUsers: Dispatch<React.SetStateAction<IUser[]>>
  ) => void;
  disLikeHandler: (
    id: string,
    users: IUser[],
    setUsers: Dispatch<React.SetStateAction<IUser[]>>
  ) => void;
  replyHandler: (
    id: string,
    inputRef: MutableRefObject<HTMLInputElement | null>,
    setReplyComment: Dispatch<React.SetStateAction<IReply>>
  ) => void;
}

export interface IParent {
  user: IUser;
  users: IUser[];
  setUsers: Dispatch<React.SetStateAction<IUser[]>>;
  setComment: Dispatch<SetStateAction<string>>;
  setReplyComment: Dispatch<React.SetStateAction<IReply>>;
  setEditComment: Dispatch<React.SetStateAction<boolean>>;
  inputRef: MutableRefObject<HTMLInputElement | null>;
  deleteHandler: (
    id: string,
    users: IUser[],
    setUsers: Dispatch<React.SetStateAction<IUser[]>>
  ) => void;
  editHandler: (
    id: string,
    users: IUser[],
    setUsers: Dispatch<React.SetStateAction<IUser[]>>,
    setComment: Dispatch<SetStateAction<string>>,
    setEditComment: Dispatch<React.SetStateAction<boolean>>,
    inputRef: MutableRefObject<HTMLInputElement | null>
  ) => void;
  likeHandler: (
    id: string,
    users: IUser[],
    setUsers: Dispatch<React.SetStateAction<IUser[]>>
  ) => void;
  disLikeHandler: (
    id: string,
    users: IUser[],
    setUsers: Dispatch<React.SetStateAction<IUser[]>>
  ) => void;
  replyHandler: (
    id: string,
    inputRef: MutableRefObject<HTMLInputElement | null>,
    setReplyComment: Dispatch<React.SetStateAction<IReply>>
  ) => void;
}

export interface IInput {
  users: IUser[];
  setUsers: Dispatch<React.SetStateAction<IUser[]>>;
  comment: string;
  setComment: Dispatch<SetStateAction<string>>;
  editComment: boolean;
  setEditComment: Dispatch<React.SetStateAction<boolean>>;
  replyComment: IReply;
  setReplyComment: Dispatch<React.SetStateAction<IReply>>;
  inputRef: MutableRefObject<HTMLInputElement | null>;
  changeHandler: (
    e: React.ChangeEvent<HTMLInputElement>,
    comment: string,
    setComment: Dispatch<SetStateAction<string>>,
    users: IUser[],
    setUsers: Dispatch<React.SetStateAction<IUser[]>>
  ) => void;
  keyPressHandler: (
    e: React.KeyboardEvent<HTMLInputElement>,
    comment: string,
    setComment: Dispatch<SetStateAction<string>>,
    users: IUser[],
    setUsers: Dispatch<React.SetStateAction<IUser[]>>,
    editComment: boolean,
    setEditComment: Dispatch<React.SetStateAction<boolean>>,
    replyComment: IReply,
    setReplyComment: Dispatch<React.SetStateAction<IReply>>
  ) => void;
}
