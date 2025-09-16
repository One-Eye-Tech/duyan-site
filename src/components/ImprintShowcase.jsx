import React from 'react';
import Icon from './Icon';

export default function ImprintShowcase() {
  return (
    <section className="product-showcase imprint-showcase panel" id="imprint">
      <div className="container">
        <div className="product-showcase-grid">
          <div className="product-content">
            <span className="section-tag">Our Core Projects</span>
            <h2>teetee</h2>
            <p>The first mobile app that lets users quickly apply memorable photos—like travel pictures, family portraits, and original designs—onto apparel, phone cases, mugs, and more. It supports real-time previews and detailed customizations to achieve highly personalized physical products.</p>
            <ul className="product-features">
              <li><Icon name="check" /> AI-Powered Visualizations</li>
              <li><Icon name="check" /> Wide Range of Products</li>
              <li><Icon name="check" /> High-Quality Physical Customization</li>
            </ul>
            <a href="#" className="btn btn-secondary">Learn More</a>
          </div>
          <div className="product-diorama">
            <div className="product-stage">
              
              <div className="orbiting-element orbiting-element-1">
                <div className="orbiting-content icon-element">
                  <Icon name="shirt" />
                </div>
              </div>
              <div className="orbiting-element orbiting-element-2">
                <div className="orbiting-content icon-element">
                  <Icon name="coffee" />
                </div>
              </div>
              <div className="orbiting-element orbiting-element-3">
                 <div className="orbiting-content photo-element" style={{backgroundImage: 'linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)'}}></div>
              </div>
               <div className="orbiting-element orbiting-element-4">
                <div className="orbiting-content icon-element">
                  <Icon name="smartphone" />
                </div>
              </div>
              <div className="orbiting-element orbiting-element-5">
                 <div className="orbiting-content photo-element" style={{backgroundImage: 'linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)'}}></div>
              </div>

              <div className="phone-diorama">
                <div className="phone-screen">
                  <div className="imprint-screen-ui">
                      <h3>Select a Photo</h3>
                      <div className="photo-grid">
                          <div className="photo p-1"></div>
                          <div className="photo p-2"></div>
                          <div className="photo p-3 active"></div>
                          <div className="photo p-4"></div>
                          <div className="photo p-5"></div>
                          <div className="photo p-6"></div>
                      </div>
                      <div className="imprint-preview">
                          <h4>Live Preview</h4>
                          <div className="product-view">
                              <Icon name="shirt" className="icon-shirt" />
                              <div className="applied-design"></div>
                          </div>
                          <a href="#" className="btn btn-primary">Customize</a>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}