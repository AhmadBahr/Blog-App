import { useState } from 'react';
import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Write = () => {
  const [value, setValue] = useState('');
  const [title, setTitle] = useState('');
  const [img, setImg] = useState(null);
  const [cat, setCat] = useState('');
  const [status, setStatus] = useState('Draft');
  const [visibility, setVisibility] = useState('Public');

  const handleImageChange = (e) => {
    setImg(e.target.files[0]);
  };

  const handleClick = e => {
    e.preventDefault();
  }

  return (
    <div className='add'>
      <div className='content'>
        <input 
          type="text" 
          placeholder='Title' 
          onChange={(e) => setTitle(e.target.value)} 
        />
        <div className='editorContainer'>
          <ReactQuill 
            className='editor' 
            theme="snow" 
            value={value} 
            onChange={setValue} 
          />
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

        <button onClick={handleClick}>Publish</button>
        <button>Save as Draft</button>
        <button>Update</button>
      </div>

      <div className='menu'>
        <h1>Category</h1>
        <div>
          <input 
            type="radio" 
            id="art" 
            name="category" 
            value="art" 
            onChange={(e) => setCat(e.target.value)} 
          />
          <label htmlFor="art">Art</label>
        </div>
        <div>
          <input 
            type="radio" 
            id="science" 
            name="category" 
            value="science" 
            onChange={(e) => setCat(e.target.value)} 
          />
          <label htmlFor="science">Science</label>
        </div>
        <div>
          <input 
            type="radio" 
            id="technology" 
            name="category" 
            value="technology" 
            onChange={(e) => setCat(e.target.value)} 
          />
          <label htmlFor="technology">Technology</label>
        </div>
        <div>
          <input 
            type="radio" 
            id="cinema" 
            name="category" 
            value="cinema" 
            onChange={(e) => setCat(e.target.value)} 
          />
          <label htmlFor="cinema">Cinema</label>
        </div>
        <div>
          <input 
            type="radio" 
            id="design" 
            name="category" 
            value="design" 
            onChange={(e) => setCat(e.target.value)} 
          />
          <label htmlFor="design">Design</label>
        </div>
        <div>
          <input 
            type="radio" 
            id="food" 
            name="category" 
            value="food" 
            onChange={(e) => setCat(e.target.value)} 
          />
          <label htmlFor="food">Food</label>
        </div>
      </div>
    </div>
  );
};

export default Write;
