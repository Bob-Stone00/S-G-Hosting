// /src/components/TrackAndTracingOrderTracking2.jsx

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import './style.css';

class Block {
  constructor(data, previousHash) {
    this.timestamp = Date.now();
    this.data = data;
    this.previousHash = previousHash;
    this.hash = this.calculateHash();
  }

  calculateHash() {
    const dataString = JSON.stringify(this);
    return dataString.split("").reduce((hash, char) => hash + char.charCodeAt(0), 0);
  }
}

function generateNewBlock(data, previousBlock) {
  const previousHash = previousBlock ? previousBlock.hash : null;
  const newBlock = new Block(data, previousHash);
  return newBlock;
}

const TrackAndTracingOrderTracking2 = () => {
  const [blockchain, setBlockchain] = useState([]);
  const [verificationResult, setVerificationResult] = useState('');
  const [productJourney, setProductJourney] = useState('');
  const [journeyProductId, setJourneyProductId] = useState('');

  useEffect(() => {
    const savedBlockchain = localStorage.getItem('blockchain');
    if (savedBlockchain) {
      setBlockchain(JSON.parse(savedBlockchain));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('blockchain', JSON.stringify(blockchain));
  }, [blockchain]);

  const addProduct = (productId, productName, description) => {
    const productData = {
      id: productId,
      name: productName,
      description: description
    };
    const previousBlock = blockchain[blockchain.length - 1];
    const newBlock = generateNewBlock(productData, previousBlock);
    setBlockchain([...blockchain, newBlock]);
  };

  const verifyProduct = (productId, verifyDetail, expectedValue) => {
    const productFound = blockchain.some(block => block.data.id === productId);
    if (!productFound) {
      setVerificationResult("Product Not Found!");
      return;
    }

    let verificationSuccess = false;
    blockchain.forEach(block => {
      if (block.data.id === productId && block.data[verifyDetail] === expectedValue) {
        verificationSuccess = true;
        return;
      }
    });

    if (verificationSuccess) {
      setVerificationResult("Verification Successful!");
    } else {
      setVerificationResult("Verification Failed! Detail does not match.");
    }
  };

  const displayProductJourney = (productId) => {
    const productBlocks = blockchain.filter(block => block.data.id === productId);
    if (productBlocks.length === 0) {
      alert("Product not found in the blockchain!");
      return;
    }

    let journey = "";
    productBlocks.forEach(block => {
      journey += `
        <b>Product ID:</b> ${block.data.id} <br>
        <b>Product Name:</b> ${block.data.name} <br>
        <b>Description:</b> ${block.data.description} <br>
        <b>Timestamp:</b> ${new Date(block.timestamp).toLocaleString()} <br>
        <b>Hash:</b> ${block.hash} <br>
        <hr>
      `;
    });

    setProductJourney(journey);
    setJourneyProductId(productId);
  };

  return (
    <div className="track-and-tracing-ordertrackin2-div">
      <h3>Blockchain History</h3>
      <ProductForm addProduct={addProduct} />
      <ProductVerification verifyProduct={verifyProduct} verificationResult={verificationResult} />
      <ProductJourneyModal journey={productJourney} journeyProductId={journeyProductId} closeModal={() => setProductJourney('')} />
      <ProductList blockchain={blockchain} displayJourney={displayProductJourney} />
    </div>
  );
};

const ProductForm = ({ addProduct }) => {
  const [productId, setProductId] = useState('');
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');

  const handleAddProduct = () => {
    if (!productId || !productName || !description) {
      alert("Please fill in all product details!");
      return;
    }
    addProduct(productId, productName, description);
    setProductId('');
    setProductName('');
    setDescription('');
  };

  return (
    <div id="product-form" className="product-form">
      <h2>Add Product</h2>
      <label htmlFor="product-id">Product ID:</label>
      <input type="text" id="product-id" value={productId} onChange={(e) => setProductId(e.target.value)} placeholder="Enter product ID" />
      <label htmlFor="product-name">Product Name:</label>
      <input type="text" id="product-name" value={productName} onChange={(e) => setProductName(e.target.value)} placeholder="Enter product name" />
      <label htmlFor="product-description">Description:</label>
      <textarea id="product-description" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter product description"></textarea>
      <button id="add-product-btn" onClick={handleAddProduct}>Add Product</button>
    </div>
  );
};

ProductForm.propTypes = {
  addProduct: PropTypes.func.isRequired,
};

const ProductVerification = ({ verifyProduct, verificationResult }) => {
  const [productId, setProductId] = useState('');
  const [verifyDetail, setVerifyDetail] = useState('');
  const [expectedValue, setExpectedValue] = useState('');

  const handleVerifyProduct = () => {
    if (!productId || !verifyDetail || !expectedValue) {
      alert("Please fill in all verification details!");
      return;
    }
    verifyProduct(productId, verifyDetail, expectedValue);
  };

  return (
    <div id="product-verification" className="product-verification">
      <h2>Product Verification</h2>
      <label htmlFor="verify-product-id">Product ID:</label>
      <input type="text" id="verify-product-id" value={productId} onChange={(e) => setProductId(e.target.value)} placeholder="Enter product ID" />
      <br />
      <label htmlFor="verify-detail">Verify Detail:</label>
      <select id="verify-detail" value={verifyDetail} onChange={(e) => setVerifyDetail(e.target.value)}>
        <option value="">Select Detail</option>
        <option value="name">Product Name</option>
        <option value="description">Description</option>
      </select>
      <input type="text" id="expected-value" value={expectedValue} onChange={(e) => setExpectedValue(e.target.value)} placeholder="Enter expected value" />
      <button id="verify-product-btn" onClick={handleVerifyProduct}>Verify Product</button>
      <p id="verification-result">{verificationResult}</p>
    </div>
  );
};

ProductVerification.propTypes = {
  verifyProduct: PropTypes.func.isRequired,
  verificationResult: PropTypes.string.isRequired,
};

const ProductJourneyModal = ({ journey, journeyProductId, closeModal }) => {
  return (
    <div id="product-journey-modal" className="product-journey-modal">
      <h2>Product Journey (ID: <span id="journey-product-id">{journeyProductId}</span>)</h2>
      <div id="product-journey-modal-content" dangerouslySetInnerHTML={{ __html: journey }}></div>
      <button id="close-modal-btn" onClick={closeModal} >Close</button>
    </div>
  );
};

ProductJourneyModal.propTypes = {
  journey: PropTypes.string.isRequired,
  journeyProductId: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};

const ProductList = ({ blockchain, displayJourney }) => {
  return (
    <div id="product-list" className="product-list">
      <h2>Product Journey</h2>
      <ul id="products">
        {blockchain.map((block, index) => (
          <li key={index}>
            <b>Product ID:</b> {block.data.id} <br />
            <b>Product Name:</b> {block.data.name} <br />
            <b>Description:</b> {block.data.description} <br />
            <b>Timestamp:</b> {new Date(block.timestamp).toLocaleString()} <br />
            <b>Hash:</b> {block.hash} <br />
            <br />
            <a href="#" onClick={() => displayJourney(block.data.id)}>View Journey</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

ProductList.propTypes = {
  blockchain: PropTypes.array.isRequired,
  displayJourney: PropTypes.func.isRequired,
};

export default TrackAndTracingOrderTracking2;
