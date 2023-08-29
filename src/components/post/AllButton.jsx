import React from 'react'
import { faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp, faComment } from "@fortawesome/free-solid-svg-icons";
import Reaction from './Reaction';
import { addReaction, deleteReaction } from "../../apis/reaction/reaction.api";
import CurrentUserInfo from '../../util/Token';

const user = CurrentUserInfo();

export default function AllButton({post, like, dislike, setLike, setDislike, handleVisible,FontAwesomeIcon}) {
  
	const handleUpdateReactionLike = (ev) => {
		ev.preventDefault();

		for (let i = 0; i < dislike.length; i++) {
			if (dislike[i].userId === user.id) {
				// launch delete dislike for add like
				deleteReaction(user.id, post.id)
					.then(res => {
						let newDislike = [...dislike].filter(elem => elem.userId != user.id);
						setDislike(newDislike)
					})
					.catch(err => console.log(err));
				//
				addReaction(user.id, post.id, "LIKE")
					.then(res => setLike([...like, res]))
					.catch(err => console.log(err));
				return null;
			}
		}

		if (like.length === 0) {
			addReaction(user.id, post.id, "LIKE")
				.then(res => setLike([...like, res]))
				.catch(err => console.log(err));
			return null;
		}

		for (let i = 0; i < like.length; i++) {
			if (like[i].userId === user.id) {
				console.log(like[i]);
				deleteReaction(user.id, post.id)
					.then(res => {
						let newLike = [...like].filter(elem => elem.userId != user.id);
						setLike(newLike)
					})
					.catch(err => console.log(err));
				return null;
			} else {
				addReaction(user.id, post.id, "LIKE")
					.then(res => setLike([...like, res]))
					.catch(err => console.log(err));
				return null;
			}
		}
	}

	const handleUpdateReactionDislike = (ev) => {
		ev.preventDefault();
		console.log(dislike);


		for (let i = 0; i < like.length; i++) {
			if (like[i].userId === user.id) {
				// launch delete like for add dislike
				deleteReaction(user.id, post.id)
					.then(res => {
						let newLike = [...like].filter(elem => elem.userId != user.id);
						setLike(newLike)
					})
					.catch(err => console.log(err));
				//
				addReaction(user.id, post.id, "DISLIKE")
					.then(res => setDislike([...dislike, res]))
					.catch(err => console.log(err));
				return null;
			}
		}

		if (dislike.length === 0) {
			addReaction(user.id, post.id, "DISLIKE")
				.then(res => setDislike([...dislike, res]))
				.catch(err => console.log(err));
			return null;
		}

		for (let i = 0; i < dislike.length; i++) {
			if (dislike[i].userId === user.id) {
				deleteReaction(user.id, post.id)
					.then(res => {
						let newDislike = [...dislike].filter(elem => elem.userId != user.id);
						setDislike(newDislike)
					})
					.catch(err => console.log(err));
					return null;
			} else {
				addReaction(user.id, post.id, "DISLIKE")
					.then(res => setDislike([...dislike, res]))
					.catch(err => console.log(err));
				return null;
			}
		}
	}

	return (
    <div>
		<Reaction
			post={post}
			like={like}
			dislike={dislike}
			/>
		<div className="like-comment-share d-flex align-items-center flex-wrap gap-3 gap-md-0 justify-content-between">
			<button onClick={handleUpdateReactionLike} className="btn d-flex align-items-center gap-1 gap-sm-2 text-secondary">
				<FontAwesomeIcon icon={faThumbsUp} />
				Like
			</button>
			<button className="btn d-flex align-items-center gap-1 gap-sm-2 text-secondary"
				onClick={handleVisible}
			>
				<FontAwesomeIcon icon={faComment} />
				Comment
			</button>
			<button onClick={handleUpdateReactionDislike} className="btn d-flex align-items-center gap-1 gap-sm-2 text-secondary">
				<FontAwesomeIcon icon={faThumbsDown} />
				Dislike
			</button>
		</div>
    </div>
  )
}
