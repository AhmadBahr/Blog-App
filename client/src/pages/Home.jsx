import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const posts = [
    {
      id: 1,
      title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      description: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      img: "https://randomwordgenerator.com/img/picture-generator/53e5d6424251a914f1dc8460962e33791c3ad6e04e5074407c2e7bd09f45cd_640.jpg"
    },
    {
      id: 2,
      title: "qui est esse",
      description: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
      img: "https://randomwordgenerator.com/img/picture-generator/55e4dc4b4353a814f1dc8460962e33791c3ad6e04e5074417d2e7ed6964dc2_640.jpg"
    },
    {
      id: 3,
      title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      description: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
      img: "https://randomwordgenerator.com/img/picture-generator/57e2d5444851a414f1dc8460962e33791c3ad6e04e50744172287ad2914fc4_640.jpg"
    },
    {
      id: 4,
      title: "eum et est occaecati",
      description: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
      img: "https://randomwordgenerator.com/img/picture-generator/5fe8d0424f5ab10ff3d8992cc12c30771037dbf85254794e732873d1924d_640.jpg"
    },
    {
      id: 5,
      title: "nesciunt quas odio",
      description: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
      img: "https://randomwordgenerator.com/img/picture-generator/52e9dc404d51b10ff3d8992cc12c30771037dbf852547940772c7fdd9149_640.jpg"
    },
    {
      id: 6,
      title: "dolorem eum magni eos aperiam quia",
      description: "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae",
      img: "https://randomwordgenerator.com/img/picture-generator/vuitton-lim-QjsHLCRKE-U-unsplash.jpg"
    },
    {
      id: 7,
      title: "magnam facilis autem",
      description: "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas",
      img: "https://randomwordgenerator.com/img/picture-generator/5fe8d0424f5ab10ff3d8992cc12c30771037dbf85254794e732873d1924d_640.jpg"
    },
    {
      id: 8,
      title: "dolorem dolore est ipsam",
      description: "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae",
      img: "https://randomwordgenerator.com/img/picture-generator/54e7dd454d5aa514f1dc8460962e33791c3ad6e04e507440742e7dd59f4dc3_640.jpg"
    },
    {
      id: 9,
      title: "nesciunt iure omnis dolorem tempora et accusantium",
      description: "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas",
      img: "https://randomwordgenerator.com/img/picture-generator/55e9d14a4957b10ff3d8992cc12c30771037dbf85254794075297bdd9f45_640.jpg"
    },
    {
      id: 10,
      title: "optio molestias id quia eum",
      description: "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error",
      img: "https://randomwordgenerator.com/img/picture-generator/54e4d7434256a414f1dc8460962e33791c3ad6e04e5074417c2f7dd59748c3_640.jpg"
    }
  ];

  return (
    <div className='home'>
      <div className='posts'>
        {posts.map(post => (
          <div className='post' key={post.id}>
            <img src={post.img} alt={post.title} />
            <div className='content'>
              <Link to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{post.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
