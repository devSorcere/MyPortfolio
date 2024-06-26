import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn, FaFacebookF, FaGoogle } from "react-icons/fa";
import profile_img from "../assets/img.jpg";
const profile_data = {
  first_name: "Miguel",
  last_name: "Coronel",
  typing: [
    "Full Stack Developer",
    "Mobile Developer",
    "Software Engineer",
    "Frontend Developer",
    "Backend Developer",
  ],
  address: [
    {
      domain: "github",
      url: "https://github.com/developer47",
      icon: <AiFillGithub />,
    },
    {
      domain: "linkedin",
      url: "https://github.com/developer47",
      icon: <FaLinkedinIn />,
    },
    {
      domain: "instagram",
      url: "https://github.com/developer47",
      icon: <AiFillInstagram />,
    },
    {
      domain: "facebook",
      url: "https://github.com/developer47",
      icon: <FaFacebookF />,
    },
    {
      domain: "gmail",
      url: "https://github.com/developer47",
      icon: <FaGoogle />,
    },
    {
      domain: "outlook",
      url: "https://github.com/developer47",
      icon: <FaGoogle />,
    },
  ],
  image: profile_img,
  about_me: (
    <p className="home-about-body">
      An accomplished Full Stack Developer with over eight years of extensive experience in the field.
      <br></br>
      Demonstrating expertise in object-oriented design, web development, technical project management, and back-end development. 
      <br></br>
      Proficient in a wide range of programming languages and frameworks, including HTML, CSS, JavaScript, React, Node.js, and more.
      <br></br>
      Proven track record of delivering high-quality, scalable solutions that meet client requirements and exceed expectations. Experienced in collaborating with cross-functional teams to drive successful project outcomes and effectively manage project timelines and resources.
      <br></br>
      Committed to staying updated with the latest technologies and industry trends to continuously enhance skills and deliver innovative solutions. Known for strong problem-solving abilities, attention to detail, and dedication to delivering results that drive business growth and success.

      {/* My name is <b className="purple">MD Mafujul Hasan </b>
      and I am a <b className="purple">Computer Science and Engineering </b>
      student at <b className="purple">Sonargaon University </b>
      in Dhaka, Bangladesh.
      <br />
      <br />I am proficient in various programming languages such as &nbsp;
      <b className="purple">
        {" "}
        C, C++, Java, Python, HTML, CSS, PHP, and JavaScript.{" "}
      </b>
      <br />
      <br />I also have experience working with frameworks and libraries such as
      &nbsp;
      <b className="purple"> NodeJS, ReactJS, OpenCV, Pandas, and NumPy. </b>
      <br />
      <br />
      Whenever possible, I also apply my passion for developing products with
      &nbsp;
      <b className="purple"> Modern Javascript Library and Frameworks.</b>
      <br />
      <br />
      In my free time, I enjoy learning new technologies and &nbsp;
      <b className="purple">building new web technologies and products. </b> */}
    </p>
  ),
};
export default profile_data;
