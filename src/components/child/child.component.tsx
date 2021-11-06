export const obj = () => {};

// export const childFn = ({ data }: { data: IUser }) => (
//   <div key={data.id} className="widget__comment--child">
//     <div className="widget__comment--parent">
//       <div className="widget__comment--parent-icon">
//         <BiUser />
//       </div>
//       <div className="widget__comment--parent-comment">
//         <div className="widget__comment--parent-comment-user">
//           <div className="widget__comment--parent-comment-user-left">
//             <h1 className="widget__comment--parent-comment-user-left-name">{data.name}</h1>
//             <h1 className="widget__comment--parent-comment-user-left-stamp">
//               {moment(data.date).fromNow()}
//             </h1>
//           </div>
//           <div className="widget__comment--parent-comment-user-right">
//             <div
//               className="widget__comment--parent-comment-user-right-edit"
//               onClick={() =>
//                 editHandler(data.id, users, setUsers, setComment, setEditComment, inputRef)
//               }
//             >
//               <AiFillEdit />
//             </div>
//             <div
//               className="widget__comment--parent-comment-user-right-delete"
//               // onClick={deleteChildHandler}
//             >
//               <MdDeleteForever />
//             </div>
//           </div>
//         </div>
//         <div className="widget__comment--parent-comment-message">{comment}</div>
//         <div className="widget__comment--parent-comment-like">
//           <div className="widget__comment--parent-comment-like-like">
//             <h1 className="widget__comment--parent-comment-like-like-count">0</h1>
//             <div
//               className="widget__comment--parent-comment-like-like-icon"
//               onClick={() => likeHandler(data.id, users, setUsers)}
//             >
//               <AiFillLike />
//             </div>
//           </div>
//           <div className="widget__comment--parent-comment-like-dislike">
//             <h1 className="widget__comment--parent-comment-like-dislike-count">0</h1>
//             <div
//               className="widget__comment--parent-comment-like-dislike-icon"
//               onClick={() => disLikeHandler(data.id, users, setUsers)}
//             >
//               <AiFillDislike />
//             </div>
//           </div>
//           <div className="widget__comment--parent-comment-like-reply">
//             <h1
//               className="widget__comment--parent-comment-like-reply-in"
//               onClick={() => replyHandler(data.id, inputRef, setReplyComment)}
//             >
//               Reply
//             </h1>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// );
