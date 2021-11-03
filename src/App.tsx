import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import { FaUsers } from 'react-icons/fa';
import { BiUser } from 'react-icons/bi';
import { AiFillEdit } from 'react-icons/ai';
import { AiFillLike } from 'react-icons/ai';
import { AiFillDislike } from 'react-icons/ai';
import { MdDeleteForever } from 'react-icons/md';
import { obj } from './obj';
import { changeHandler, pressHandler } from './handlers';

function App() {
  const [comment, setComment] = useState(obj);
  console.log(comment, setComment);

  return (
    <div className="App">
      <div className="widget">
        <div className="widget__input">
          <div className="widget__input--icon">
            <FaUsers />
          </div>
          <div className="widget__input--field">
            <input
              type="text"
              className="widget__input--field-in"
              placeholder="Join the discussion..."
              onChange={changeHandler}
              onKeyPress={pressHandler}
            />
          </div>
        </div>
        <div className="widget__comment">
          {/* grandparent */}
          <div className="widget__comment-grandparent">
            {/* parent */}
            <div className="widget__comment--parent">
              <div className="widget__comment--parent-icon">
                <BiUser />
              </div>
              <div className="widget__comment--parent-comment">
                <div className="widget__comment--parent-comment-user">
                  <div className="widget__comment--parent-comment-user-left">
                    <h1 className="widget__comment--parent-comment-user-left-name">Clueless-Kun</h1>
                    <h1 className="widget__comment--parent-comment-user-left-stamp">7 hours ago</h1>
                  </div>
                  <div className="widget__comment--parent-comment-user-right">
                    <div className="widget__comment--parent-comment-user-right-edit">
                      <AiFillEdit />
                    </div>
                    <div className="widget__comment--parent-comment-user-right-delete">
                      <MdDeleteForever />
                    </div>
                  </div>
                </div>
                <div className="widget__comment--parent-comment-message">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus minus
                  assumenda recusandae eaque, consequuntur ipsam vero expedita quas reiciendis modi,
                  reprehenderit magnam. Vitae magni repellat minus voluptatibus, id accusantium
                  culpa.
                </div>
                <div className="widget__comment--parent-comment-like">
                  <div className="widget__comment--parent-comment-like-like">
                    <h1 className="widget__comment--parent-comment-like-like-count">0</h1>
                    <div className="widget__comment--parent-comment-like-like-icon">
                      <AiFillLike />
                    </div>
                  </div>
                  <div className="widget__comment--parent-comment-like-dislike">
                    <h1 className="widget__comment--parent-comment-like-dislike-count">0</h1>
                    <div className="widget__comment--parent-comment-like-dislike-icon">
                      <AiFillDislike />
                    </div>
                  </div>
                  <div className="widget__comment--parent-comment-like-reply">
                    <h1 className="widget__comment--parent-comment-like-reply-in">Reply</h1>
                  </div>
                </div>
              </div>
            </div>
            {/* child */}
            <div className="widget__comment--child">
              <div className="widget__comment--parent">
                <div className="widget__comment--parent-icon">
                  <BiUser />
                </div>
                <div className="widget__comment--parent-comment">
                  <div className="widget__comment--parent-comment-user">
                    <div className="widget__comment--parent-comment-user-left">
                      <h1 className="widget__comment--parent-comment-user-left-name">
                        Clueless-Kun
                      </h1>
                      <h1 className="widget__comment--parent-comment-user-left-stamp">
                        7 hours ago
                      </h1>
                    </div>
                    <div className="widget__comment--parent-comment-user-right">
                      <div className="widget__comment--parent-comment-user-right-edit">
                        <AiFillEdit />
                      </div>
                      <div className="widget__comment--parent-comment-user-right-delete">
                        <MdDeleteForever />
                      </div>
                    </div>
                  </div>
                  <div className="widget__comment--parent-comment-message">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus minus
                    assumenda recusandae eaque, consequuntur ipsam vero expedita quas reiciendis
                    modi, reprehenderit magnam. Vitae magni repellat minus voluptatibus, id
                    accusantium culpa.
                  </div>
                  <div className="widget__comment--parent-comment-like">
                    <div className="widget__comment--parent-comment-like-like">
                      <h1 className="widget__comment--parent-comment-like-like-count">0</h1>
                      <div className="widget__comment--parent-comment-like-like-icon">
                        <AiFillLike />
                      </div>
                    </div>
                    <div className="widget__comment--parent-comment-like-dislike">
                      <h1 className="widget__comment--parent-comment-like-dislike-count">0</h1>
                      <div className="widget__comment--parent-comment-like-dislike-icon">
                        <AiFillDislike />
                      </div>
                    </div>
                    <div className="widget__comment--parent-comment-like-reply">
                      <h1 className="widget__comment--parent-comment-like-reply-in">Reply</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* child */}
            <div className="widget__comment--child">
              <div className="widget__comment--parent">
                <div className="widget__comment--parent-icon">
                  <BiUser />
                </div>
                <div className="widget__comment--parent-comment">
                  <div className="widget__comment--parent-comment-user">
                    <div className="widget__comment--parent-comment-user-left">
                      <h1 className="widget__comment--parent-comment-user-left-name">
                        Clueless-Kun
                      </h1>
                      <h1 className="widget__comment--parent-comment-user-left-stamp">
                        7 hours ago
                      </h1>
                    </div>
                    <div className="widget__comment--parent-comment-user-right">
                      <div className="widget__comment--parent-comment-user-right-edit">
                        <AiFillEdit />
                      </div>
                      <div className="widget__comment--parent-comment-user-right-delete">
                        <MdDeleteForever />
                      </div>
                    </div>
                  </div>
                  <div className="widget__comment--parent-comment-message">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus minus
                    assumenda recusandae eaque, consequuntur ipsam vero expedita quas reiciendis
                    modi, reprehenderit magnam. Vitae magni repellat minus voluptatibus, id
                    accusantium culpa.
                  </div>
                  <div className="widget__comment--parent-comment-like">
                    <div className="widget__comment--parent-comment-like-like">
                      <h1 className="widget__comment--parent-comment-like-like-count">0</h1>
                      <div className="widget__comment--parent-comment-like-like-icon">
                        <AiFillLike />
                      </div>
                    </div>
                    <div className="widget__comment--parent-comment-like-dislike">
                      <h1 className="widget__comment--parent-comment-like-dislike-count">0</h1>
                      <div className="widget__comment--parent-comment-like-dislike-icon">
                        <AiFillDislike />
                      </div>
                    </div>
                    <div className="widget__comment--parent-comment-like-reply">
                      <h1 className="widget__comment--parent-comment-like-reply-in">Reply</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* child */}
            <div className="widget__comment--child">
              <div className="widget__comment--parent">
                <div className="widget__comment--parent-icon">
                  <BiUser />
                </div>
                <div className="widget__comment--parent-comment">
                  <div className="widget__comment--parent-comment-user">
                    <div className="widget__comment--parent-comment-user-left">
                      <h1 className="widget__comment--parent-comment-user-left-name">
                        Clueless-Kun
                      </h1>
                      <h1 className="widget__comment--parent-comment-user-left-stamp">
                        7 hours ago
                      </h1>
                    </div>
                    <div className="widget__comment--parent-comment-user-right">
                      <div className="widget__comment--parent-comment-user-right-edit">
                        <AiFillEdit />
                      </div>
                      <div className="widget__comment--parent-comment-user-right-delete">
                        <MdDeleteForever />
                      </div>
                    </div>
                  </div>
                  <div className="widget__comment--parent-comment-message">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus minus
                    assumenda recusandae eaque, consequuntur ipsam vero expedita quas reiciendis
                    modi, reprehenderit magnam. Vitae magni repellat minus voluptatibus, id
                    accusantium culpa.
                  </div>
                  <div className="widget__comment--parent-comment-like">
                    <div className="widget__comment--parent-comment-like-like">
                      <h1 className="widget__comment--parent-comment-like-like-count">0</h1>
                      <div className="widget__comment--parent-comment-like-like-icon">
                        <AiFillLike />
                      </div>
                    </div>
                    <div className="widget__comment--parent-comment-like-dislike">
                      <h1 className="widget__comment--parent-comment-like-dislike-count">0</h1>
                      <div className="widget__comment--parent-comment-like-dislike-icon">
                        <AiFillDislike />
                      </div>
                    </div>
                    <div className="widget__comment--parent-comment-like-reply">
                      <h1 className="widget__comment--parent-comment-like-reply-in">Reply</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* grandparent */}
          <div className="widget__comment-grandparent">
            {/* parent */}
            <div className="widget__comment--parent">
              <div className="widget__comment--parent-icon">
                <BiUser />
              </div>
              <div className="widget__comment--parent-comment">
                <div className="widget__comment--parent-comment-user">
                  <div className="widget__comment--parent-comment-user-left">
                    <h1 className="widget__comment--parent-comment-user-left-name">Clueless-Kun</h1>
                    <h1 className="widget__comment--parent-comment-user-left-stamp">7 hours ago</h1>
                  </div>
                  <div className="widget__comment--parent-comment-user-right">
                    <div className="widget__comment--parent-comment-user-right-edit">
                      <AiFillEdit />
                    </div>
                    <div className="widget__comment--parent-comment-user-right-delete">
                      <MdDeleteForever />
                    </div>
                  </div>
                </div>
                <div className="widget__comment--parent-comment-message">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus minus
                  assumenda recusandae eaque, consequuntur ipsam vero expedita quas reiciendis modi,
                  reprehenderit magnam. Vitae magni repellat minus voluptatibus, id accusantium
                  culpa.
                </div>
                <div className="widget__comment--parent-comment-like">
                  <div className="widget__comment--parent-comment-like-like">
                    <h1 className="widget__comment--parent-comment-like-like-count">0</h1>
                    <div className="widget__comment--parent-comment-like-like-icon">
                      <AiFillLike />
                    </div>
                  </div>
                  <div className="widget__comment--parent-comment-like-dislike">
                    <h1 className="widget__comment--parent-comment-like-dislike-count">0</h1>
                    <div className="widget__comment--parent-comment-like-dislike-icon">
                      <AiFillDislike />
                    </div>
                  </div>
                  <div className="widget__comment--parent-comment-like-reply">
                    <h1 className="widget__comment--parent-comment-like-reply-in">Reply</h1>
                  </div>
                </div>
              </div>
            </div>
            {/* child */}
            <div className="widget__comment--child">
              <div className="widget__comment--parent">
                <div className="widget__comment--parent-icon">
                  <BiUser />
                </div>
                <div className="widget__comment--parent-comment">
                  <div className="widget__comment--parent-comment-user">
                    <div className="widget__comment--parent-comment-user-left">
                      <h1 className="widget__comment--parent-comment-user-left-name">
                        Clueless-Kun
                      </h1>
                      <h1 className="widget__comment--parent-comment-user-left-stamp">
                        7 hours ago
                      </h1>
                    </div>
                    <div className="widget__comment--parent-comment-user-right">
                      <div className="widget__comment--parent-comment-user-right-edit">
                        <AiFillEdit />
                      </div>
                      <div className="widget__comment--parent-comment-user-right-delete">
                        <MdDeleteForever />
                      </div>
                    </div>
                  </div>
                  <div className="widget__comment--parent-comment-message">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus minus
                    assumenda recusandae eaque, consequuntur ipsam vero expedita quas reiciendis
                    modi, reprehenderit magnam. Vitae magni repellat minus voluptatibus, id
                    accusantium culpa.
                  </div>
                  <div className="widget__comment--parent-comment-like">
                    <div className="widget__comment--parent-comment-like-like">
                      <h1 className="widget__comment--parent-comment-like-like-count">0</h1>
                      <div className="widget__comment--parent-comment-like-like-icon">
                        <AiFillLike />
                      </div>
                    </div>
                    <div className="widget__comment--parent-comment-like-dislike">
                      <h1 className="widget__comment--parent-comment-like-dislike-count">0</h1>
                      <div className="widget__comment--parent-comment-like-dislike-icon">
                        <AiFillDislike />
                      </div>
                    </div>
                    <div className="widget__comment--parent-comment-like-reply">
                      <h1 className="widget__comment--parent-comment-like-reply-in">Reply</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* child */}
            <div className="widget__comment--child">
              <div className="widget__comment--parent">
                <div className="widget__comment--parent-icon">
                  <BiUser />
                </div>
                <div className="widget__comment--parent-comment">
                  <div className="widget__comment--parent-comment-user">
                    <div className="widget__comment--parent-comment-user-left">
                      <h1 className="widget__comment--parent-comment-user-left-name">
                        Clueless-Kun
                      </h1>
                      <h1 className="widget__comment--parent-comment-user-left-stamp">
                        7 hours ago
                      </h1>
                    </div>
                    <div className="widget__comment--parent-comment-user-right">
                      <div className="widget__comment--parent-comment-user-right-edit">
                        <AiFillEdit />
                      </div>
                      <div className="widget__comment--parent-comment-user-right-delete">
                        <MdDeleteForever />
                      </div>
                    </div>
                  </div>
                  <div className="widget__comment--parent-comment-message">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus minus
                    assumenda recusandae eaque, consequuntur ipsam vero expedita quas reiciendis
                    modi, reprehenderit magnam. Vitae magni repellat minus voluptatibus, id
                    accusantium culpa.
                  </div>
                  <div className="widget__comment--parent-comment-like">
                    <div className="widget__comment--parent-comment-like-like">
                      <h1 className="widget__comment--parent-comment-like-like-count">0</h1>
                      <div className="widget__comment--parent-comment-like-like-icon">
                        <AiFillLike />
                      </div>
                    </div>
                    <div className="widget__comment--parent-comment-like-dislike">
                      <h1 className="widget__comment--parent-comment-like-dislike-count">0</h1>
                      <div className="widget__comment--parent-comment-like-dislike-icon">
                        <AiFillDislike />
                      </div>
                    </div>
                    <div className="widget__comment--parent-comment-like-reply">
                      <h1 className="widget__comment--parent-comment-like-reply-in">Reply</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* child */}
            <div className="widget__comment--child">
              <div className="widget__comment--parent">
                <div className="widget__comment--parent-icon">
                  <BiUser />
                </div>
                <div className="widget__comment--parent-comment">
                  <div className="widget__comment--parent-comment-user">
                    <div className="widget__comment--parent-comment-user-left">
                      <h1 className="widget__comment--parent-comment-user-left-name">
                        Clueless-Kun
                      </h1>
                      <h1 className="widget__comment--parent-comment-user-left-stamp">
                        7 hours ago
                      </h1>
                    </div>
                    <div className="widget__comment--parent-comment-user-right">
                      <div className="widget__comment--parent-comment-user-right-edit">
                        <AiFillEdit />
                      </div>
                      <div className="widget__comment--parent-comment-user-right-delete">
                        <MdDeleteForever />
                      </div>
                    </div>
                  </div>
                  <div className="widget__comment--parent-comment-message">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus minus
                    assumenda recusandae eaque, consequuntur ipsam vero expedita quas reiciendis
                    modi, reprehenderit magnam. Vitae magni repellat minus voluptatibus, id
                    accusantium culpa.
                  </div>
                  <div className="widget__comment--parent-comment-like">
                    <div className="widget__comment--parent-comment-like-like">
                      <h1 className="widget__comment--parent-comment-like-like-count">0</h1>
                      <div className="widget__comment--parent-comment-like-like-icon">
                        <AiFillLike />
                      </div>
                    </div>
                    <div className="widget__comment--parent-comment-like-dislike">
                      <h1 className="widget__comment--parent-comment-like-dislike-count">0</h1>
                      <div className="widget__comment--parent-comment-like-dislike-icon">
                        <AiFillDislike />
                      </div>
                    </div>
                    <div className="widget__comment--parent-comment-like-reply">
                      <h1 className="widget__comment--parent-comment-like-reply-in">Reply</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* grandparent */}
          <div className="widget__comment-grandparent">
            {/* parent */}
            <div className="widget__comment--parent">
              <div className="widget__comment--parent-icon">
                <BiUser />
              </div>
              <div className="widget__comment--parent-comment">
                <div className="widget__comment--parent-comment-user">
                  <div className="widget__comment--parent-comment-user-left">
                    <h1 className="widget__comment--parent-comment-user-left-name">Clueless-Kun</h1>
                    <h1 className="widget__comment--parent-comment-user-left-stamp">7 hours ago</h1>
                  </div>
                  <div className="widget__comment--parent-comment-user-right">
                    <div className="widget__comment--parent-comment-user-right-edit">
                      <AiFillEdit />
                    </div>
                    <div className="widget__comment--parent-comment-user-right-delete">
                      <MdDeleteForever />
                    </div>
                  </div>
                </div>
                <div className="widget__comment--parent-comment-message">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus minus
                  assumenda recusandae eaque, consequuntur ipsam vero expedita quas reiciendis modi,
                  reprehenderit magnam. Vitae magni repellat minus voluptatibus, id accusantium
                  culpa.
                </div>
                <div className="widget__comment--parent-comment-like">
                  <div className="widget__comment--parent-comment-like-like">
                    <h1 className="widget__comment--parent-comment-like-like-count">0</h1>
                    <div className="widget__comment--parent-comment-like-like-icon">
                      <AiFillLike />
                    </div>
                  </div>
                  <div className="widget__comment--parent-comment-like-dislike">
                    <h1 className="widget__comment--parent-comment-like-dislike-count">0</h1>
                    <div className="widget__comment--parent-comment-like-dislike-icon">
                      <AiFillDislike />
                    </div>
                  </div>
                  <div className="widget__comment--parent-comment-like-reply">
                    <h1 className="widget__comment--parent-comment-like-reply-in">Reply</h1>
                  </div>
                </div>
              </div>
            </div>
            {/* child */}
            <div className="widget__comment--child">
              <div className="widget__comment--parent">
                <div className="widget__comment--parent-icon">
                  <BiUser />
                </div>
                <div className="widget__comment--parent-comment">
                  <div className="widget__comment--parent-comment-user">
                    <div className="widget__comment--parent-comment-user-left">
                      <h1 className="widget__comment--parent-comment-user-left-name">
                        Clueless-Kun
                      </h1>
                      <h1 className="widget__comment--parent-comment-user-left-stamp">
                        7 hours ago
                      </h1>
                    </div>
                    <div className="widget__comment--parent-comment-user-right">
                      <div className="widget__comment--parent-comment-user-right-edit">
                        <AiFillEdit />
                      </div>
                      <div className="widget__comment--parent-comment-user-right-delete">
                        <MdDeleteForever />
                      </div>
                    </div>
                  </div>
                  <div className="widget__comment--parent-comment-message">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus minus
                    assumenda recusandae eaque, consequuntur ipsam vero expedita quas reiciendis
                    modi, reprehenderit magnam. Vitae magni repellat minus voluptatibus, id
                    accusantium culpa.
                  </div>
                  <div className="widget__comment--parent-comment-like">
                    <div className="widget__comment--parent-comment-like-like">
                      <h1 className="widget__comment--parent-comment-like-like-count">0</h1>
                      <div className="widget__comment--parent-comment-like-like-icon">
                        <AiFillLike />
                      </div>
                    </div>
                    <div className="widget__comment--parent-comment-like-dislike">
                      <h1 className="widget__comment--parent-comment-like-dislike-count">0</h1>
                      <div className="widget__comment--parent-comment-like-dislike-icon">
                        <AiFillDislike />
                      </div>
                    </div>
                    <div className="widget__comment--parent-comment-like-reply">
                      <h1 className="widget__comment--parent-comment-like-reply-in">Reply</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* child */}
            <div className="widget__comment--child">
              <div className="widget__comment--parent">
                <div className="widget__comment--parent-icon">
                  <BiUser />
                </div>
                <div className="widget__comment--parent-comment">
                  <div className="widget__comment--parent-comment-user">
                    <div className="widget__comment--parent-comment-user-left">
                      <h1 className="widget__comment--parent-comment-user-left-name">
                        Clueless-Kun
                      </h1>
                      <h1 className="widget__comment--parent-comment-user-left-stamp">
                        7 hours ago
                      </h1>
                    </div>
                    <div className="widget__comment--parent-comment-user-right">
                      <div className="widget__comment--parent-comment-user-right-edit">
                        <AiFillEdit />
                      </div>
                      <div className="widget__comment--parent-comment-user-right-delete">
                        <MdDeleteForever />
                      </div>
                    </div>
                  </div>
                  <div className="widget__comment--parent-comment-message">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus minus
                    assumenda recusandae eaque, consequuntur ipsam vero expedita quas reiciendis
                    modi, reprehenderit magnam. Vitae magni repellat minus voluptatibus, id
                    accusantium culpa.
                  </div>
                  <div className="widget__comment--parent-comment-like">
                    <div className="widget__comment--parent-comment-like-like">
                      <h1 className="widget__comment--parent-comment-like-like-count">0</h1>
                      <div className="widget__comment--parent-comment-like-like-icon">
                        <AiFillLike />
                      </div>
                    </div>
                    <div className="widget__comment--parent-comment-like-dislike">
                      <h1 className="widget__comment--parent-comment-like-dislike-count">0</h1>
                      <div className="widget__comment--parent-comment-like-dislike-icon">
                        <AiFillDislike />
                      </div>
                    </div>
                    <div className="widget__comment--parent-comment-like-reply">
                      <h1 className="widget__comment--parent-comment-like-reply-in">Reply</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* child */}
            <div className="widget__comment--child">
              <div className="widget__comment--parent">
                <div className="widget__comment--parent-icon">
                  <BiUser />
                </div>
                <div className="widget__comment--parent-comment">
                  <div className="widget__comment--parent-comment-user">
                    <div className="widget__comment--parent-comment-user-left">
                      <h1 className="widget__comment--parent-comment-user-left-name">
                        Clueless-Kun
                      </h1>
                      <h1 className="widget__comment--parent-comment-user-left-stamp">
                        7 hours ago
                      </h1>
                    </div>
                    <div className="widget__comment--parent-comment-user-right">
                      <div className="widget__comment--parent-comment-user-right-edit">
                        <AiFillEdit />
                      </div>
                      <div className="widget__comment--parent-comment-user-right-delete">
                        <MdDeleteForever />
                      </div>
                    </div>
                  </div>
                  <div className="widget__comment--parent-comment-message">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus minus
                    assumenda recusandae eaque, consequuntur ipsam vero expedita quas reiciendis
                    modi, reprehenderit magnam. Vitae magni repellat minus voluptatibus, id
                    accusantium culpa.
                  </div>
                  <div className="widget__comment--parent-comment-like">
                    <div className="widget__comment--parent-comment-like-like">
                      <h1 className="widget__comment--parent-comment-like-like-count">0</h1>
                      <div className="widget__comment--parent-comment-like-like-icon">
                        <AiFillLike />
                      </div>
                    </div>
                    <div className="widget__comment--parent-comment-like-dislike">
                      <h1 className="widget__comment--parent-comment-like-dislike-count">0</h1>
                      <div className="widget__comment--parent-comment-like-dislike-icon">
                        <AiFillDislike />
                      </div>
                    </div>
                    <div className="widget__comment--parent-comment-like-reply">
                      <h1 className="widget__comment--parent-comment-like-reply-in">Reply</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
