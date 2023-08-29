import React, { useEffect, useState } from "react";
import CurrentUserInfo from "../../util/Token"

function UserProfile({ newName, newBio }) {
	const [srcImg, setSrcImg] = useState();
	const user = CurrentUserInfo();
	const [visible, setVisible] = useState(true);

	useEffect(() => {
		if (user.photo == null) {
			setSrcImg("file:///home/daris/Pictures/Picka.jpeg");
		} else {
			setSrcImg(user.photo);
		}
		console.log(user);
	})

	const handleEditClick = (ev) => {
		ev.preventDefault();
		window.location = '/user/profil#setting'
		setVisible(false);
	};

  return (
    <div>
        <div className="mt-5 row justify-content-center w-100">
          <section id="profil" className="h-100 gradient-custom-2">
            <div className="container py-5 h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col col-lg-9 col-xl-7">
                  <div className="card">
                    <div
                      className="rounded-top bg-dark text-white d-flex flex-row"
                      style={{ backgroundColor: "#000", height: "200px" }}
                    >
                      <div
                        className="ms-4 mt-5 d-flex flex-column rounded float-start w-25"
                      >
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
						// src="../../img/Harena-anime1.png"
						// src={srcImg}
                          alt="Generic placeholder image"
                          className="img-fluid img-thumbnail mt-4 mb-2 z-1"
                        />
                        <button
                          type="button"
                          id="edit-profil"
                          className="btn btn-outline-dark z-1"
                          data-mdb-ripple-color="dark"
						  onClick={handleEditClick}
                        >
                          Edit profile
                        </button>
                      </div>
                      <div className="ms-3 mt-5 pt-5">
                        <h5 id="profil-name" className="mt-5">{user.username}</h5>
                      </div>
                    </div>
                    <div
                      className="p-4 text-black bg-body-tertiary"
                    >
                      <div className="d-flex justify-content-end text-center py-1">
                        <div>
                          <p className="mb-1 h5">542</p>
                          <p className="small text-muted mb-0">Photos</p>
                        </div>
                        <div className="px-3">
                          <p className="mb-1 h5">1,5k</p>
                          <p className="small text-muted mb-0">Followers</p>
                        </div>
                        <div>
                          <p className="mb-1 h5">478</p>
                          <p className="small text-muted mb-0">Following</p>
                        </div>
                      </div>
                    </div>
                    <div className="card-body p-4 text-black">
						{
							<div className="mb-5">
								<p className="lead fw-normal mb-1">Bio</p>
								<div
								className="p-4 bg-body-tertiary"
								>
								<p id="biography" className="font-italic mb-0">
									{user.bio}
								</p>
								</div>
							</div>
						}
                      
                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <p className="lead fw-normal mb-0">Recent photos</p>
                        <p className="mb-0">
                          <a href="#!" className="text-muted">
                            Show all
                          </a>
                        </p>
                      </div>
                      <div className="row g-2">
                        <div className="col mb-2">
                          <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp"
                            alt="image 1"
                            className="w-100 rounded-3"
                          />
                        </div>
                        <div className="col mb-2">
                          <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp"
                            alt="image 1"
                            className="w-100 rounded-3"
                          />
                        </div>
                      </div>
                      <div className="row g-2">
                        <div className="col">
                          <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(108).webp"
                            alt="image 1"
                            className="w-100 rounded-3"
                          />
                        </div>
                        <div className="col">
                          <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(114).webp"
                            alt="image 1"
                            className="w-100 rounded-3"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* <!--setting edit profile--> */}
          <section className="row g-3 w-75 needs-validation mb-5 p-4">
			<form
				id="setting"
				className="w-50 mx-auto"
				hidden={visible}
			>
				<div className="row">
				<div className="mb-3">
					<label htmlFor="username" className="form-label">
					New name
					</label>
					<input
					type="text"
					className="form-control"
					placeholder="Write the new name here"
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="password" className="form-label">
					Password
					</label>
					<input
					type="text"
					className="form-control"
					placeholder="Enter your password here"
					/>
				</div>
				<div className="form-floating">
					<textarea
					className="form-control"
					placeholder="Leave a bio here"
					></textarea>
					<label
					htmlFor="bio"
					className="mx-2"
					>
					Write a bio my profile
					</label>
				</div>
				</div>
				<div className="col-12">
				<button className="btn btn-primary" id="confirm" type="submit">
					Submit Profil Edit
				</button>
				</div>
			</form>
		  </section>
        </div>
    </div>
  );
}

export default UserProfile;
