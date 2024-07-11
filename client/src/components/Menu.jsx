import React from 'react';

const Menu = () => {
  const posts = [
    {
      id: 1,
      title: 'Exploring the Mountains',
      description: 'A journey through the mountainous regions.',
      image: 'https://picsum.photos/seed/picsum1/200/300'
    },
    {
      id: 2,
      title: 'City Lights',
      description: 'The vibrant life in the city at night.',
      image: 'https://picsum.photos/seed/picsum2/200/300'
    },
    {
      id: 3,
      title: 'Sunny Beach',
      description: 'Relaxing by the sunny beach during summer.',
      image: 'https://picsum.photos/seed/picsum3/200/300'
    },
    {
      id: 4,
      title: 'Forest Trail',
      description: 'Walking through the serene forest trail.',
      image: 'https://picsum.photos/seed/picsum4/200/300'
    },
    {
      id: 5,
      title: 'Desert Adventure',
      description: 'Exploring the vast desert landscapes.',
      image: 'https://picsum.photos/seed/picsum5/200/300'
    },
    {
      id: 6,
      title: 'Ocean Waves',
      description: 'The calming waves of the ocean.',
      image: 'https://picsum.photos/seed/picsum6/200/300'
    },
    {
      id: 7,
      title: 'Autumn Leaves',
      description: 'The beauty of autumn leaves falling.',
      image: 'https://picsum.photos/seed/picsum7/200/300'
    },
    {
      id: 8,
      title: 'Snowy Peaks',
      description: 'The majestic snowy mountain peaks.',
      image: 'https://picsum.photos/seed/picsum8/200/300'
    },
    {
      id: 9,
      title: 'Countryside Road',
      description: 'A peaceful drive through the countryside.',
      image: 'https://picsum.photos/seed/picsum9/200/300'
    },
    {
      id: 10,
      title: 'Lake View',
      description: 'A beautiful view of the lake at sunset.',
      image: 'https://picsum.photos/seed/picsum10/200/300'
    }
  ];

  return (
    <div className="menu">
      <h1>Other Posts You May Like</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id} className="post-item">
            <img src={post.image} alt={post.title} className="post-image" />
            <h2 className="post-title">{post.title}</h2>
            <p className="post-description">{post.description}</p>
            <button className="read-more">Read More</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
