import React, { useEffect, useState } from "react";
import { faBan, faBookmark, faEllipsis, faFlag, faShare, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp, faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { addReaction, deleteReaction, getReactionByIdPost } from "../apis/reaction/reaction.api";
import CurrentUserInfo from "../util/Token";
import { getCommentByIdPost } from "../apis/comment/comment.api";

export default function Post({ post }) {
	const [like, setLike] = useState([]);
	const [comment, setComment] = useState([]);
	const [isDropdownVisible, setDropdownVisible] = useState(false);

	useEffect(() => {
		getReactionByIdPost(post.id)
			.then(data => {
				setLike(data);
			})
			.catch(err => console.log(err));
		
    }, [post.id, post.reaction]);

	useEffect(() => {
		getCommentByIdPost(post.id)
			.then(data => {
				console.log(data);
				setComment(data);
			})
			.catch(err => console.log(err));
		
    }, [post.id, post.reaction]);

	const handleUpdateReaction = (ev) => {
		ev.preventDefault();
		const user = CurrentUserInfo();
		let haveReaction = false;

		for (let i = 0; i < like.length; i++) {
			if (like[i].userId == user.id) {
				haveReaction = true;
				deleteReaction(user.id, post.id);
			}
		}

		if (haveReaction == false) {
			addReaction(user.id, post.id, "LIKE");
		}
	}

	const handleVisible = (ev) => {
		ev.preventDefault();
		setDropdownVisible(!isDropdownVisible)
	}

  	return (
		<div className="col-8d-flex flex-column gap-5 md-7">
			<div className="post-single-box p-3 p-sm-5">
				<div className="pb-5 top-area">
					<div className="d-flex justify-content-between">
						<div className="d-flex align-items-center gap-2">
							<div className="avatar position-relative">
								<img
									className="rounded-circle"
									src={post.user.photo}
									alt="Profile"
									width="48"
									height="48"
								/>
							</div>
							<div className="text-start">
								<h6 className="m-0">{post.user.username}</h6>
								<span className="text-secondary">Active</span>
							</div>
						</div>
						<div className="dropdown-center">
							<button
							className="btn dropdown-toggle"
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
							<ul className="dropdown-menu">
								<li>
									<a
									className="dropdown-item d-flex gap-2 align-items-center"
									href="#"
									>
									<FontAwesomeIcon icon={faBookmark} />
									<span>Save post</span>
									</a>
								</li>
								<li>
									<a
									className="dropdown-item d-flex gap-2 align-items-center"
									href="#"
									>
									<FontAwesomeIcon icon={faBan} />
									<span>Hide post</span>
									</a>
								</li>
								<li>
									<a
									className="dropdown-item d-flex gap-2 align-items-center"
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
					<p className="my-3">{post.content}</p>
					</div>
				</div>
					{like.length === 0 ? "" : "👍 "+like.length}
				<div className="like-comment-share d-flex align-items-center flex-wrap gap-3 gap-md-0 justify-content-between">
					<button onClick={handleUpdateReaction} className="btn d-flex align-items-center gap-1 gap-sm-2 text-secondary">
						<FontAwesomeIcon icon={faThumbsUp} />
						Like
					</button>
					<button className="btn d-flex align-items-center gap-1 gap-sm-2 text-secondary"
						onClick={handleVisible}
					>
						<FontAwesomeIcon icon={faComment} />
						Comment
					</button>
					<button className="btn d-flex align-items-center gap-1 gap-sm-2 text-secondary">
						<FontAwesomeIcon icon={faShare} />
						Share
					</button>
				</div>
				{
					isDropdownVisible && (
						<div className="dropdown-content">
							<div className="container">
								{
									comment && (comment.map(com => (
										<div key={com.id} com={com}>
											<h5>{com.user.username}</h5>
											<p>
												{com.content}
											</p>
										</div>
									)))
								}
							</div>
						</div>
					)
				}
				<form action="#" className="my-0">
					<div className="d-flex gap-3">
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
  	);
}
