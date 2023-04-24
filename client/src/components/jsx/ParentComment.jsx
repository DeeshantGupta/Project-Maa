import React from "react";
import {useParams} from "react-router-dom" ;
import { GiMicrophone } from "react-icons/gi";
import { MdDelete } from "react-icons/md";
import "../css/ParentCommentStyles.css";

const ParentComment = ({ myself , msg }) => {

  const {id} = useParams();

  return (
    <>
      {msg.from == id ? (
        <div className="parent_comment_container_posts">
          <div className="parent_comment_box_posts">
            <div className="parent_comment_left_section_posts">
              <img
                src="https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                alt="person"
              />
            </div>

            <div className="parent_comment_right_section_posts">
              <div className="parent_comment_right_top_section_posts">
                <div className="parent_message_container_posts">
                  <div className="parent_message_bottom_section_posts">
                    <h3>{msg.name}</h3>
                    {/* <input type="text" value="We're still unable to understand your concern. Could you elaborate on your concern with more information so that we can assist you accordingly?" /> */}
                    <p>
                     {msg.message}
                    </p>
                  </div>
                </div>

                <div className="parent_info_container_posts">
                  {/* <MdDelete className="parent_info_icon_posts" /> */}
                </div>
              </div>

              {/* <div className="parent_comment_right_bottom_section_posts">
                <h6>Like</h6>
                <h6>Reply</h6>
                <p>27.07.2023</p>
              </div> */}
            </div>
          </div>
        </div>
      ) : (
        <div className="parent_comment_container_posts">
          <div className="parent_comment_box2_posts">
            <div className="parent_comment_left_section_posts">
              <img
               src="https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                alt="person"
              />
            </div>

            <div className="parent_comment_right_section_posts">
              <div className="parent_comment_right_top_section2_posts">
                <div className="parent_message_container2_posts">
                  <div className="parent_message_bottom_section_posts">
                    <h3>{msg.name}</h3>
                    {/* <input type="text" value="We're still unable to understand your concern. Could you elaborate on your concern with more information so that we can assist you accordingly?" /> */}
                    <p>
                      {msg.message}
                    </p>
                  </div>
                </div>

                <div className="parent_info_container_posts">
                  {/* <MdDelete className="parent_info_icon_posts" /> */}
                </div>
              </div>

              {/* <div className="parent_comment_right_bottom_section2_posts">
                <h6>Like</h6>
                <h6>Reply</h6>
                <p>27.07.2023</p>
              </div> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ParentComment;
