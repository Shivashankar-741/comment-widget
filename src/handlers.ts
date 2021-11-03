export const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
  console.log(e.target.value);
};

export const pressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
  if (e.key === 'Enter') {
    let name = prompt('drop your name here');
    console.log(name);
  }
};

export const likeHandler = () => {};

export const disLikeHandler = () => {};

export const replyHandler = () => {};

export const editHandler = () => {};

export const deleteHandler = () => {};
