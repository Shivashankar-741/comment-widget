import { Dispatch, MutableRefObject, SetStateAction } from 'react';
import { IReply, IUser } from 'types';

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
    setComment: Dispatch<SetStateAction<string>>
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
