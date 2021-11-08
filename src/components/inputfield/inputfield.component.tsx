import { FaUsers } from 'react-icons/fa';
import { IInput } from 'types';

export const Inputfield = ({
  comment,
  changeHandler,
  setComment,
  users,
  setUsers,
  keyPressHandler,
  editComment,
  setEditComment,
  replyComment,
  setReplyComment,
  inputRef,
}: IInput) => {
  return (
    <div className="widget__input">
      <div className="widget__input--icon">
        <FaUsers />
      </div>
      <div className="widget__input--field">
        <input
          type="text"
          className="widget__input--field-in"
          placeholder="Join the discussion..."
          value={comment}
          onChange={(e) => changeHandler(e, setComment)}
          onKeyPress={(e) =>
            keyPressHandler(
              e,
              comment,
              setComment,
              users,
              setUsers,
              editComment,
              setEditComment,
              replyComment,
              setReplyComment
            )
          }
          ref={inputRef}
        />
      </div>
    </div>
  );
};
