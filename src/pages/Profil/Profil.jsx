import React, { useState } from 'react';

function UserProfile({newName, newBio}) {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [settingsVisible, setSettingsVisible] = useState(false);

  const handleEditClick = () => {
    setSettingsVisible(true);
  };

  const handleConfirmClick = () => {
    setName(newName);
    setBio(newBio);
    setTimeout(() => {
      setSettingsVisible(false);
    }, 1000);
  };

  return (
    <div>
      <button id="edit-profil" onClick={handleEditClick}>
        Edit Profile
      </button>
      {settingsVisible ? (
        <div id="setting">
          <input
            id="formGroupExampleInput"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <textarea
            id="floatingTextarea2"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          ></textarea>
          <button id="confirm" onClick={handleConfirmClick}>
            Confirm
          </button>
        </div>
      ) : (
        <div id="profil">
          <h5 id="profil-name">{name}</h5>
          <p id="biography">{bio}</p>
        </div>
      )}
    </div>
  );
}

export default UserProfile;
