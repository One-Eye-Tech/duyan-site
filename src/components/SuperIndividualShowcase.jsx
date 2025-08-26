import React from 'react';
import Icon from './Icon';

export default function SuperIndividualShowcase() {
  return (
    <section className="product-showcase alt-layout super-individual-showcase panel" id="super-individual">
      <div className="container">
        <div className="product-showcase-grid">
          <div className="product-diorama">
            <div className="product-stage">
                <div className="orbiting-element orbiting-element-1">
                    <div className="orbiting-content"><Icon name="design" /></div>
                </div>
                <div className="orbiting-element orbiting-element-2">
                    <div className="orbiting-content"><Icon name="music" /></div>
                </div>
                <div className="orbiting-element orbiting-element-3">
                    <div className="orbiting-content"><Icon name="code" /></div>
                </div>

                <div className="phone-diorama">
                  <div className="phone-screen">
                     <div className="super-individual-screen-ui">
                        <div className="si-header">Explore Feed</div>
                        <div className="si-feed">
                          <div className="si-feed-inner">
                            {/* Feed items are duplicated for a seamless infinite scroll effect */}
                            <FeedItem type="art" name="Neon Artist" artClass="art-1" />
                            <FeedItem type="music" name="Synthwave AI" />
                            <FeedItem type="code" name="Code Weaver" />
                            <FeedItem type="art" name="Urban Lens" artClass="art-2" />
                            <FeedItem type="art" name="Neon Artist" artClass="art-1" />
                            <FeedItem type="music" name="Synthwave AI" />
                            <FeedItem type="code" name="Code Weaver" />
                            <FeedItem type="art" name="Urban Lens" artClass="art-2" />
                          </div>
                        </div>
                     </div>
                  </div>
                </div>
            </div>
          </div>
          <div className="product-content">
            <span className="section-tag">Our Core Projects</span>
            <h2>Super Individual (超级个体)</h2>
            <p>A digital product trading and customization platform for original musicians, designers, photographers, and developers. It provides a complete service for showcasing work, trading, custom commissions, and creator revenue recovery—a practical alternative to centralized platforms.</p>
            <ul className="product-features">
              <li><Icon name="check" /> Digital Product Marketplace</li>
              <li><Icon name="check" /> Custom Commissioning Tools</li>
              <li><Icon name="check" /> Decentralized Creator Economy</li>
            </ul>
            <a href="#" className="btn btn-secondary">Explore Platform</a>
          </div>
        </div>
      </div>
    </section>
  );
}

const FeedItem = ({ type, name, artClass }) => {
    return (
        <div className="si-feed-item">
            <div className="si-item-header">
                <div className="si-item-avatar"></div>
                <div className="si-item-name">{name}</div>
            </div>
            {type === 'art' && <div className={`si-item-art ${artClass}`}></div>}
            {type === 'music' && (
                <div className="si-item-music">
                    <Icon name="play" />
                    <div className="si-item-music-wave"></div>
                </div>
            )}
            {type === 'code' && (
                <div className="si-item-code">
                    <pre><code>{`function greet() {\n  console.log("Hello, Creator!");\n}`}</code></pre>
                </div>
            )}
        </div>
    )
}