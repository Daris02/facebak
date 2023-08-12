import React from "react";
import "./App.css";
import Avatar from "../../public/Harena-anime1.png";
import {
  faBan,
  faBookmark,
  faEllipsis,
  faFlag,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp, faComment } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Post() {
  return (
    <>
      <div className="d-flex flex-column gap-5 md-7">
        <div className="post-single-box p-3 p-sm-5">
          <div className="pb-5 top-area">
            <div className="d-flex justify-content-between">
              <div className="d-flex align-items-center gap-2">
                <div className="avatar position-relative">
                  <img
                    className="rounded-circle"
                    src={Avatar}
                    alt="Profile"
                    width="48"
                    height="48"
                  />
                </div>
                <div className="text-start">
                  <h6 className="m-0">Harena Sarobidy</h6>
                  <span className="text-secondary">Active</span>
                </div>
              </div>
              <div className="dropdown-center">
                <button
                  className="dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {" "}
                  <FontAwesomeIcon
                    className="text-secondary"
                    icon={faEllipsis}
                  />
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <a
                      class="dropdown-item d-flex gap-2 align-items-center"
                      href="#"
                    >
                      <FontAwesomeIcon icon={faBookmark} />
                      <span>Save post</span>
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item d-flex gap-2 align-items-center"
                      href="#"
                    >
                      <FontAwesomeIcon icon={faBan} />
                      <span>Hide post</span>
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item d-flex gap-2 align-items-center"
                      href="#"
                    >
                      <FontAwesomeIcon icon={faFlag} />
                      <span>Report post</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-wrap overflow-hidden text-start w-100">
              {/*<p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Aliquam voluptatibus quis, saepe a perspiciatis accusantium
                aliquid incidunt eveniet autem possimus. Magnam aut provident,
                labore atque saepe sed placeat debitis ipsa!
  </p>*/}
            </div>
          </div>
          <div className="like-comment-share py-5 d-flex align-items-center flex-wrap gap-3 gap-md-0 justify-content-between">
            <button className="d-flex align-items-center gap-1 gap-sm-2 text-secondary">
              <FontAwesomeIcon icon={faThumbsUp} />
              Like
            </button>
            <button className="d-flex align-items-center gap-1 gap-sm-2 text-secondary">
              <FontAwesomeIcon icon={faComment} />
              Comment
            </button>
            <button className="d-flex align-items-center gap-1 gap-sm-2 text-secondary">
              <FontAwesomeIcon icon={faShare} />
              Share
            </button>
          </div>
          <form action="#" className="my-0">
            <div className="d-flex mt-5 gap-3">
              <input
                type="text"
                placeholder="write a comment..."
                className="form-control"
                required
              />
              <div className="d-flex">
                <button className="btn btn-primary px-2 px-sm-5 px-lg-6">
                  <FontAwesomeIcon icon={faShare} />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
