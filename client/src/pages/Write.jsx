import { useState } from 'react';
import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Write = () => {
  const [value, setValue] = useState('');
  const [status, setStatus] = useState('Draft');
  const [visibility, setVisibility] = useState('Public');
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div className='add'>
      <div className='content'>
        <input type="text" placeholder='Title' />
        <div className='editorContainer'>
          <ReactQuill className='editor' theme="snow" value={value} onChange={setValue} />
        </div>
      </div>
      <div className='publish'>
        <label>Status:</label>
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="Draft">Draft</option>
          <option value="Published">Published</option>
        </select>

        <label>Visibility:</label>
        <select value={visibility} onChange={(e) => setVisibility(e.target.value)}>
          <option value="Public">Public</option>
          <option value="Private">Private</option>
        </select>

        <label>Upload Image:</label>
        <input type="file" onChange={handleImageChange} />

        <button>Publish</button>
        <button>Save as Draft</button>
        <button>Update</button>
      </div>

      <div className='menu'>
        <h1>Category</h1>
        <div>
          <input type="radio" id="art" name="category" value="art" />
          <label htmlFor="art">Art</label>
        </div>
        <div>
          <input type="radio" id="science" name="category" value="science" />
          <label htmlFor="science">Science</label>
        </div>
        <div>
          <input type="radio" id="technology" name="category" value="technology" />
          <label htmlFor="technology">Technology</label>
        </div>
        <div>
          <input type="radio" id="cinema" name="category" value="cinema" />
          <label htmlFor="cinema">Cinema</label>
        </div>
        <div>
          <input type="radio" id="design" name="category" value="design" />
          <label htmlFor="design">Design</label>
        </div>
        <div>
          <input type="radio" id="food" name="category" value="food" />
          <label htmlFor="food">Food</label>
        </div>
      </div>
    </div>
  );
};

export default Write;
