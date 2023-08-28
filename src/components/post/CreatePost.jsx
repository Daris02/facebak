import React from 'react'

export default function CreatePost() {
  return (
    <div className="d-flex gap-3 gap-sm-5 p-3 p-sm-5 share-post">
          <img
            className="rounded-circle"
            src={profileShare}
            alt="Profile"
            width="50"
            height="50"
          />
          <form
            action="#"
            className="w-100 position-relative d-flex flex-column gap-3 align-items-end"
          >
            <textarea
              name=""
              id=""
              cols="30"
              rows="2"
              placeholder="Write something here"
              className="form-control"
            ></textarea>
            <input type="text" className="form-control" placeholder="link of photo here..."/>
            <button type="submit" className="btn btn-primary">create </button>
          </form>
        </div>
  )
}
