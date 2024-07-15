import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const [posts, setPosts] = useState([]);

  const cat = useLocation().search

    useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts${cat}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPosts();
  }, [cat]);

  // const posts = [
  //   {
  //     id: 1,
  //     title: "The Impact of Technology on Modern Education",
  //     description: "Technology has significantly transformed the landscape of modern education. With the advent of digital tools and resources, students now have access to a wealth of information at their fingertips. Online learning platforms, virtual classrooms, and interactive content have made education more accessible and engaging.",
  //     img: "https://randomwordgenerator.com/img/picture-generator/53e5d6424251a914f1dc8460962e33791c3ad6e04e5074407c2e7bd09f45cd_640.jpg"
  //   },
  //   {
  //     id: 2,
  //     title: "The Future of Artificial Intelligence in Healthcare",
  //     description: "Artificial Intelligence (AI) is revolutionizing healthcare by enhancing diagnostic accuracy, predicting patient outcomes, and personalizing treatment plans. AI-powered technologies are streamlining administrative tasks and improving patient care delivery.",
  //     img: "https://randomwordgenerator.com/img/picture-generator/55e4dc4b4353a814f1dc8460962e33791c3ad6e04e5074417d2e7ed6964dc2_640.jpg"
  //   },
  //   {
  //     id: 3,
  //     title: "Design Trends Shaping the Future of User Experience",
  //     description: "Innovative design trends such as augmented reality (AR), minimalistic interfaces, and voice user interfaces (VUI) are reshaping user experience (UX) design. These trends prioritize usability, accessibility, and engagement to create intuitive digital experiences.",
  //     img: "https://randomwordgenerator.com/img/picture-generator/57e2d5444851a414f1dc8460962e33791c3ad6e04e50744172287ad2914fc4_640.jpg"
  //   },
  //   {
  //     id: 4,
  //     title: "Climate Change and Sustainable Architecture",
  //     description: "Sustainable architecture practices are crucial in combating climate change. Green building techniques, energy-efficient designs, and renewable materials play a vital role in reducing carbon footprints and promoting environmental stewardship.",
  //     img: "https://randomwordgenerator.com/img/picture-generator/5fe8d0424f5ab10ff3d8992cc12c30771037dbf85254794e732873d1924d_640.jpg"
  //   },
  //   {
  //     id: 5,
  //     title: "The Rise of Plant-Based Diets",
  //     description: "Plant-based diets are gaining popularity due to their health benefits and environmental sustainability. These diets emphasize whole foods, fruits, vegetables, and grains while reducing the consumption of animal products.",
  //     img: "https://randomwordgenerator.com/img/picture-generator/52e9dc404d51b10ff3d8992cc12c30771037dbf852547940772c7fdd9149_640.jpg"
  //   },
  //   {
  //     id: 6,
  //     title: "The Impact of Remote Work on Corporate Culture",
  //     description: "Remote work arrangements have reshaped corporate culture by fostering flexibility, work-life balance, and global collaboration. Companies are adopting virtual communication tools and digital platforms to support remote teams and enhance productivity.",
  //     img: "https://randomwordgenerator.com/img/picture-generator/vuitton-lim-QjsHLCRKE-U-unsplash.jpg"
  //   },
  //   {
  //     id: 7,
  //     title: "The Role of Artificial Intelligence in E-commerce",
  //     description: "Artificial Intelligence (AI) is revolutionizing e-commerce by personalizing customer experiences, optimizing supply chain management, and predicting consumer behavior. AI-powered chatbots and recommendation systems enhance user engagement and drive sales.",
  //     img: "https://randomwordgenerator.com/img/picture-generator/5fe8d0424f5ab10ff3d8992cc12c30771037dbf85254794e732873d1924d_640.jpg"
  //   },
  //   {
  //     id: 8,
  //     title: "Innovations in Renewable Energy Technologies",
  //     description: "Advancements in renewable energy technologies such as solar power, wind turbines, and hydroelectric systems are addressing global energy demands while reducing dependence on fossil fuels. These innovations promote sustainable development and environmental conservation.",
  //     img: "https://randomwordgenerator.com/img/picture-generator/54e7dd454d5aa514f1dc8460962e33791c3ad6e04e507440742e7dd59f4dc3_640.jpg"
  //   },
  //   {
  //     id: 9,
  //     title: "The Future of Blockchain Technology",
  //     description: "Blockchain technology is revolutionizing industries by enhancing transparency, security, and efficiency in digital transactions. Decentralized networks, smart contracts, and cryptocurrency applications are reshaping financial systems and supply chain management.",
  //     img: "https://randomwordgenerator.com/img/picture-generator/55e9d14a4957b10ff3d8992cc12c30771037dbf85254794075297bdd9f45_640.jpg"
  //   },
  //   {
  //     id: 10,
  //     title: "The Impact of Social Media on Global Connectivity",
  //     description: "Social media platforms facilitate global connectivity by enabling instant communication, information sharing, and virtual communities. These platforms empower individuals, businesses, and organizations to engage with diverse audiences worldwide.",
  //     img: "https://randomwordgenerator.com/img/picture-generator/54e4d7434256a414f1dc8460962e33791c3ad6e04e5074417c2f7dd59748c3_640.jpg"
  //   }
  // ];

  return (
    <div className='home'>
      <div className='posts'>
        {posts.map(post => (
          <div className='post' key={post.id}>
            <div className='img'>
              <img src={post.img} alt={post.title} />
            </div>
            <div className='content'>
              <Link to={`/post/${post.id}`} className='link'>
                <h1>{post.title}</h1>
              </Link>
              <p>{post.description}</p>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
