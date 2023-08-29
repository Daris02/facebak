import React from 'react'

export default function Reaction({like, dislike}) {
  return (
    <div>
        <div className="d-flex justify-content-between">
            <div>{like.length === 0 ? "" : "👍 "+like.length}</div>
            <div>{dislike.length === 0 ? "" : "👎 "+dislike.length}</div>
        </div>
    </div>
  )
}
