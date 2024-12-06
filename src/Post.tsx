import { useState } from "react";

import photo1 from '../public/1.jpeg'
import photo2 from '../public/2.jpeg'
import photo3 from '../public/5.jpeg'

const Post = () => {

  const [postForm, setPostForm] = useState(false);

  const [changingImage, setChangingImage] = useState(photo1);
  const [changingTitle, setChangingTitle] = useState('Nature');
  const [chaningingDescription, setChangingDescription] = useState('driving around with the windows down screaming to music');
  const [person1, setPerson1] = useState('Jackie Ron');
  const [person2, setPerson2] = useState('Janie Doe');
  const [changingComment1, setChangingComment1] = useState('Wow! Coool ❤️❤️');
  const [changingComment2, setChangingComment2] = useState('❤️');
  const [reactionCount1, setReactionCount1] = useState(13);
  const [reactionCount2, setReactionCount2] = useState(9);
  const [reactionCount3, setReactionCount3] = useState(14);

  // Post form
  const [postedImage, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");


  const handleImageChange = (event: any) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);

    console.log("Form Submitted", { title, description, postedImage });

  };


  return (
    <div style={{ display: 'flex', overflow: 'hidden', height: '92vh' }}>
      <div style={{ width: '20%', overflowY: 'scroll', minHeight: '92vh', }}>
        <br />
        <div style={{ height: '250px', width: '100%', border: '10px solid white' }}
          onClick={() => {
            setChangingImage(photo1);
            setChangingTitle('Nature');
            setChangingDescription('driving around with the window screaming to music');
            setPerson1('Jackie Ron');
            setPerson2('Janie Doe');
            setChangingComment1('Wow! Coool ❤️❤️');
            setChangingComment2('❤️');
          }}

        >
          <img src={photo1} alt="" style={{ width: '100%', height: '100%' }} />
        </div>
        <br />
        <div style={{ height: '250px', width: '100%', background: 'blue', border: '10px solid white' }}
          onClick={() => {
            setChangingImage(photo2);
            setChangingTitle('Travel');
            setChangingDescription("Back in the clouds🌨️");
            setPerson1('John Jacobs');
            setPerson2('Elvis Elanes');
            setChangingComment1(':)');
            setChangingComment2('Such a great photo...');
          }}
        >
          <img src={photo2} alt="" style={{ width: '100%', height: '100%' }} />
        </div>
        <br />
        <div style={{ height: '250px', width: '100%', background: 'red', border: '10px solid white' }}
          onClick={() => {
            setChangingImage(photo3);
            setChangingTitle('Ireland');
            setChangingDescription('What a beautiful day to be alive');
            setPerson1('Bryan Bettie');
            setPerson2('Paul Scholes');
            setChangingComment1('Nice capture 😍😍😍');
            setChangingComment2('Awesome!');
          }}
        >
          <img src={photo3} alt="" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>

      {/* Middle section */}

      <div
        style={{
          width: '65%',
          minHeight: '92vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
          overflowY: 'scroll'
        }}
      >
        <div
          style={{
            width: '100%',
            maxWidth: '600px',
            backgroundColor: '#fff',
            borderRadius: '10px',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
            overflow: 'hidden',
          }}
        >
          {/* Post Photo */}
          <div
            style={{
              width: '100%',
              height: '300px',
            }}
          >
            <img src={changingImage} alt="" style={{ width: '100%', height: '100%', padding: '10px 150px' }} />
          </div>

          {/* Post Content */}
          <div style={{ padding: '15px' }}>
            <h2 style={{ margin: '0 0 10px', fontSize: '18px', color: '#333' }}>
              {changingTitle}
            </h2>
            <p style={{ margin: '0 0 15px', fontSize: '14px', color: '#555' }}>
              {chaningingDescription}
            </p>
          </div>

          {/* Reactions */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '10px 15px',
              borderTop: '1px solid #eee',
              backgroundColor: '#f9f9f9',
            }}
          >
            <div style={{ display: 'flex', gap: '10px' }}>
              <button
                style={{
                  backgroundColor: 'rgba(184, 104, 117, 0.2)',
                  border: 'none',
                  borderRadius: '5px',
                  padding: '5px 10px',
                  cursor: 'pointer',
                  color: 'rgba(184, 104, 117, 1)',
                  fontSize: '14px',
                }}
                onClick={() => {
                  if (changingImage == photo1) {
                    setReactionCount1(reactionCount1 + 1);
                  } else if (changingImage == photo2) {
                    setReactionCount2(reactionCount2 + 1);
                  } else if (changingImage == photo3) {
                    setReactionCount3(reactionCount3 + 1);
                  }
                }}
              >
                👍 Like
              </button>
              <button
                style={{
                  backgroundColor: 'rgba(184, 104, 117, 0.2)',
                  border: 'none',
                  borderRadius: '5px',
                  padding: '5px 10px',
                  cursor: 'pointer',
                  color: 'rgba(184, 104, 117, 1)',
                  fontSize: '14px',
                }}
                onClick={() => {
                  if (changingImage == photo1) {
                    setReactionCount1(reactionCount1 + 1);
                  } else if (changingImage == photo2) {
                    setReactionCount2(reactionCount2 + 1);
                  } else if (changingImage == photo3) {
                    setReactionCount3(reactionCount3 + 1);
                  }
                }}
              >
                ❤️ Love
              </button>
              <button
                style={{
                  backgroundColor: 'rgba(184, 104, 117, 0.2)',
                  border: 'none',
                  borderRadius: '5px',
                  padding: '5px 10px',
                  cursor: 'pointer',
                  color: 'rgba(184, 104, 117, 1)',
                  fontSize: '14px',
                }}
                onClick={() => {
                  if (changingImage == photo1) {
                    setReactionCount1(reactionCount1 + 1);
                  } else if (changingImage == photo2) {
                    setReactionCount2(reactionCount2 + 1);
                  } else if (changingImage == photo3) {
                    setReactionCount3(reactionCount3 + 1);
                  }
                }}
              >
                😆 Haha
              </button>
              <button
                style={{
                  backgroundColor: 'rgba(184, 104, 117, 0.2)',
                  border: 'none',
                  borderRadius: '5px',
                  padding: '5px 10px',
                  cursor: 'pointer',
                  color: 'rgba(184, 104, 117, 1)',
                  fontSize: '14px',
                }}
                onClick={() => {
                  if (changingImage == photo1) {
                    setReactionCount1(reactionCount1 + 1);
                  } else if (changingImage == photo2) {
                    setReactionCount2(reactionCount2 + 1);
                  } else if (changingImage == photo3) {
                    setReactionCount3(reactionCount3 + 1);
                  }
                }}
              >
                😮 Wow
              </button>
            </div>
            <span style={{ fontSize: '14px', color: '#777' }}>{
              changingImage == photo1 ? reactionCount1 : changingImage == photo2 ? reactionCount2 : changingImage == photo3 ? reactionCount3 : 0
            } reactions</span>
          </div>

          {/* Comments Section */}
          <div style={{ padding: '15px', borderTop: '1px solid #eee' }}>
            <h3 style={{ margin: '0 0 10px', fontSize: '16px', color: '#333' }}>
              Comments
            </h3>
            <div style={{ marginBottom: '10px' }}>
              <strong style={{ fontSize: '14px', color: '#555' }}>You:</strong>{' '}
              <span style={{ fontSize: '14px', color: '#777' }}>
                {changingComment2}
              </span>
            </div>
            <div style={{ marginBottom: '10px' }}>
              <strong style={{ fontSize: '14px', color: '#555' }}>{person1}:</strong>{' '}
              <span style={{ fontSize: '14px', color: '#777' }}>
                {changingComment1}
              </span>
            </div>
            <div style={{ marginBottom: '10px' }}>
              <strong style={{ fontSize: '14px', color: '#555' }}>{person2}:</strong>{' '}
              <span style={{ fontSize: '14px', color: '#777' }}>
                {changingComment2}
              </span>
            </div>
            {
              changingImage == photo1 &&
              <div>
                <textarea
                  placeholder="Add a comment..."
                  style={{
                    width: '100%',
                    padding: '10px',
                    fontSize: '14px',
                    borderRadius: '5px',
                    border: '1px solid #ddd',
                    outline: 'none',
                    resize: 'none',
                  }}
                ></textarea>
                <button
                  style={{
                    marginTop: '10px',
                    padding: '5px 15px',
                    backgroundColor: 'rgba(184, 104, 117, 1)',
                    border: 'none',
                    color: '#fff',
                    borderRadius: '5px',
                    cursor: 'pointer',
                  }}
                >
                  Post Comment
                </button>
              </div>
            }
            {
              changingImage == photo2 &&
              <div>
                <textarea
                  placeholder="Add a comment..."
                  style={{
                    width: '100%',
                    padding: '10px',
                    fontSize: '14px',
                    borderRadius: '5px',
                    border: '1px solid #ddd',
                    outline: 'none',
                    resize: 'none',
                  }}
                ></textarea>
                <button
                  style={{
                    marginTop: '10px',
                    padding: '5px 15px',
                    backgroundColor: 'rgba(184, 104, 117, 1)',
                    border: 'none',
                    color: '#fff',
                    borderRadius: '5px',
                    cursor: 'pointer',
                  }}
                >
                  Post Comment
                </button>
              </div>
            }
            {
              changingImage == photo3 &&
              <div>
                <textarea
                  placeholder="Add a comment..."
                  style={{
                    width: '100%',
                    padding: '10px',
                    fontSize: '14px',
                    borderRadius: '5px',
                    border: '1px solid #ddd',
                    outline: 'none',
                    resize: 'none',
                  }}
                ></textarea>
                <button
                  style={{
                    marginTop: '10px',
                    padding: '5px 15px',
                    backgroundColor: 'rgba(184, 104, 117, 1)',
                    border: 'none',
                    color: '#fff',
                    borderRadius: '5px',
                    cursor: 'pointer',
                  }}
                >
                  Post Comment
                </button>
              </div>
            }
          </div>
        </div>
      </div>

      {
        !postForm &&
        <div style={{ width: '30%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
          <div style={{ cursor: 'pointer' }}
            onClick={() => { setPostForm(true) }}
          >
            <svg width="200px" height="200px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.75 9C12.75 8.58579 12.4142 8.25 12 8.25C11.5858 8.25 11.25 8.58579 11.25 9L11.25 11.25H9C8.58579 11.25 8.25 11.5858 8.25 12C8.25 12.4142 8.58579 12.75 9 12.75H11.25V15C11.25 15.4142 11.5858 15.75 12 15.75C12.4142 15.75 12.75 15.4142 12.75 15L12.75 12.75H15C15.4142 12.75 15.75 12.4142 15.75 12C15.75 11.5858 15.4142 11.25 15 11.25H12.75V9Z" fill="rgba(184, 104, 117, 1)" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0574 1.25H11.9426C9.63424 1.24999 7.82519 1.24998 6.41371 1.43975C4.96897 1.63399 3.82895 2.03933 2.93414 2.93414C2.03933 3.82895 1.63399 4.96897 1.43975 6.41371C1.24998 7.82519 1.24999 9.63422 1.25 11.9426V12.0574C1.24999 14.3658 1.24998 16.1748 1.43975 17.5863C1.63399 19.031 2.03933 20.1711 2.93414 21.0659C3.82895 21.9607 4.96897 22.366 6.41371 22.5603C7.82519 22.75 9.63423 22.75 11.9426 22.75H12.0574C14.3658 22.75 16.1748 22.75 17.5863 22.5603C19.031 22.366 20.1711 21.9607 21.0659 21.0659C21.9607 20.1711 22.366 19.031 22.5603 17.5863C22.75 16.1748 22.75 14.3658 22.75 12.0574V11.9426C22.75 9.63423 22.75 7.82519 22.5603 6.41371C22.366 4.96897 21.9607 3.82895 21.0659 2.93414C20.1711 2.03933 19.031 1.63399 17.5863 1.43975C16.1748 1.24998 14.3658 1.24999 12.0574 1.25ZM3.9948 3.9948C4.56445 3.42514 5.33517 3.09825 6.61358 2.92637C7.91356 2.75159 9.62177 2.75 12 2.75C14.3782 2.75 16.0864 2.75159 17.3864 2.92637C18.6648 3.09825 19.4355 3.42514 20.0052 3.9948C20.5749 4.56445 20.9018 5.33517 21.0736 6.61358C21.2484 7.91356 21.25 9.62177 21.25 12C21.25 14.3782 21.2484 16.0864 21.0736 17.3864C20.9018 18.6648 20.5749 19.4355 20.0052 20.0052C19.4355 20.5749 18.6648 20.9018 17.3864 21.0736C16.0864 21.2484 14.3782 21.25 12 21.25C9.62177 21.25 7.91356 21.2484 6.61358 21.0736C5.33517 20.9018 4.56445 20.5749 3.9948 20.0052C3.42514 19.4355 3.09825 18.6648 2.92637 17.3864C2.75159 16.0864 2.75 14.3782 2.75 12C2.75 9.62177 2.75159 7.91356 2.92637 6.61358C3.09825 5.33517 3.42514 4.56445 3.9948 3.9948Z" fill="rgba(184, 104, 117, 1)" />
            </svg>
          </div>
          <div style={{ color: 'rgba(184, 104, 117, 1)', fontWeight: '400' }}>
            Add Post
          </div>
        </div>
      }
      {
        postForm &&
        (
          <div
            style={{
              width: "30%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              padding: "20px",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
              borderRadius: "10px",
              backgroundColor: "#fff",
            }}
          >
            <form
              style={{ width: "100%", display: "flex", flexDirection: "column" }}
              onSubmit={handleSubmit}
            >
              <h2 style={{ textAlign: "center", marginBottom: "20px", color: 'rgba(184, 104, 117, 1)' }}>Add Post</h2>
              <div style={{ marginBottom: "15px" }}>
                <label style={{ display: "block", marginBottom: "5px" }}>Upload Image</label>
                <input type="file" accept="image/*" onChange={handleImageChange} />
              </div>
              <div style={{ marginBottom: "15px" }}>
                <label style={{ display: "block", marginBottom: "5px" }}>Title</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "10px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                  }}
                  placeholder="Enter image title"
                />
              </div>
              <div style={{ marginBottom: "15px" }}>
                <label style={{ display: "block", marginBottom: "5px" }}>Description</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "10px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                    minHeight: "100px",
                  }}
                  placeholder="Enter image description"
                ></textarea>
              </div>
              <button
                type="submit"
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "5px",
                  border: "none",
                  backgroundColor: "rgba(184, 104, 117, 1)",
                  color: "#fff",
                  cursor: "pointer",
                }}
              >
                Create Post
              </button>
            </form>
            <br />
            <button
              style={{
                width: "50%",
                padding: "10px",
                borderRadius: "5px",
                border: "none",
                backgroundColor: "rgba(184, 104, 117, 0.5)",
                color: "#fff",
                cursor: "pointer",
              }}
              onClick={() => setPostForm(false)}
            >
              go back
            </button>
          </div>
        )
      }
    </div>
  );
};

export default Post;

