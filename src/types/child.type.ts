import { Dispatch, MutableRefObject, SetStateAction } from 'react';
import { IReply, IUser } from 'types';

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
