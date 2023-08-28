import React from 'react'
import CurrentUserInfo from '../../util/Token';
import { addPost } from '../../apis/post/post.api';
import { useForm } from 'react-hook-form';

export default function CreatePost() {
    const { register, handleSubmit, formState: { errors }, } = useForm({});

	const user = CurrentUserInfo();
	
    const onSubmit = (data) => {
		const _data = {
			userId: user.id,
			title: data.title,
			content: data.content,
		}
		console.log(_data);
        addPost(data)
			.then(res => console.log(res))
			.catch(e => console.log('Error server : ' + e));
    };

	return (
		<div className="mt-5 mx-auto w-50 d-flex gap-3 gap-sm-5 p-3 p-sm-5 share-post">
			<img
				className="rounded-circle"
				src={user.photo}
				alt="Profile"
				width="50"
				height="50"
			/>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="w-100 position-relative d-flex flex-column gap-3 align-items-end"
			>

				<input 
					type="text"
					name="title"
					className="form-control"
					placeholder="Title post"
					{...register("title", { required: true })}
					/>
				<textarea
					name="content"
					cols="30"
					rows="2"
					placeholder="Write something here"
					className="form-control"
					{...register("content", { required: true })}
				></textarea>
				<button type="submit" className="btn btn-primary">create </button>
			</form>
		</div>
	)
}
