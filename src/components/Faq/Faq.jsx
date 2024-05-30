import React from 'react';
import './Faq.css';
import pic from "../assets/pic.svg";


const Faq = () => {
  return (
    <div className="container">
      <div className="find_friends">
        <div className="text">
          <h2>Find suppliers according to</h2>
          <h2>your wishes & criteria</h2>
          <p>Effortlessly locate suppliers by tracking and tracing their products. Our platform simplifies supply management by connecting you with reliable suppliers that meet your criteria.</p>
          <a href="#">Learn More</a>
        </div>
        <div className="image">
          <img src={pic} alt="Image" />
        </div>
      </div>
      <div className="boxes">
        <div className="box">
          <h2>Guaranteed privacy</h2>
          <h2>privacy is safe</h2>
          <p>Your privacy is our priority. We ensure that your data is securely managed and protected throughout the tracking and tracing process.</p>
        </div>
        <div className="box">
          <h2>Precise and</h2>
          <h2>accurate tracking</h2>
          <p>Our advanced tracking system provides precise and accurate information about the location and status of your products at every stage of the supply chain.</p>
        </div>
        <div className="box">
          <h2>Friendly and</h2>
          <h2>fun community</h2>
          <p>Join our friendly and supportive community of suppliers and buyers. Share experiences, learn from each other, and grow together in the world of supply chain management.</p>
        </div>
      </div>
      <div className="frequently_asked_qs">
        <h2>Frequently Asked Questions</h2>
        <p>These are some questions that are mainly asked</p>
        <div className="faq_boxes">
          <div className="faq_box">
            <h4>Why Choose *Name of the system*</h4>
          </div>
          <div className="faq_box">
            <h4>What are the advantages of using *system*?</h4>
          </div>
          <div className="faq_box">
            <h4>Will our privacy be secure?</h4>
          </div>
          <div className="faq_box">
            <h4>The *system* app can be used anywhere?</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
