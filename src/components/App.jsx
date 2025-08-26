/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React, { useState, Suspense, useRef, useEffect } from 'react'
// 删除 Three 相关依赖用于该区域的视频播放
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls, useGLTF } from '@react-three/drei';
// import computerLoveUrl from '../assets/models/computer_love.glb?url';
import TechArchitecture from './TechArchitecture';
import ImprintShowcase from './ImprintShowcase';
import SuperIndividualShowcase from './SuperIndividualShowcase';
// import SplineGameGLB from './SplineGameGLB.jsx';

const CraftifyLogo = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 0C21.732 0 28 6.26801 28 14C28 21.732 21.732 28 14 28C6.26801 28 0 21.732 0 14C0 6.26801 6.26801 0 14 0Z" fill="url(#paint0_linear_1_2)"/>
    <path d="M12.8333 15.1667H7V21H12.8333V15.1667Z" fill="white" fillOpacity="0.6"/>
    <path d="M21 15.1667H15.1667V21H21V15.1667Z" fill="white"/>
    <path d="M12.8333 7H7V12.8333H12.8333V7Z" fill="white"/>
    <path d="M21 7H15.1667V12.8333H21V7Z" fill="white" fillOpacity="0.6"/>
    <defs>
      <linearGradient id="paint0_linear_1_2" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
        <stop stopColor="#6F39FF"/>
        <stop offset="1" stopColor="#9B66FF"/>
      </linearGradient>
    </defs>
  </svg>
);

const Header = () => (
  <header>
    <div className="logo-and-links">
      <div className="logo">
        <CraftifyLogo />
        <span>Craftify</span>
      </div>
      <nav>
        <ul>
          <li><a href="#">Start</a></li>
          <li><a href="#">Features</a></li>
          <li><a href="#">Resources</a></li>
          <li><a href="#">Help</a></li>
          <li><a href="#">Pricing</a></li>
        </ul>
      </nav>
    </div>
    <div className="action-buttons">
      <button className="btn btn-login">Login</button>
      <button className="btn btn-get-started">Get started</button>
    </div>
  </header>
);

const Hero = () => (
  <section className="hero">
    <div className="pre-headline">
      <span>Making Tomorrow Weirdly Wonderful</span>
    </div>
    <h1>It began with a curious wink</h1>
    <p>聚焦AI驱动的创意产品与数字化<br />一群技术极客的混杂体，用好奇心驱动工程化的创业公司</p>
    <div className="cta-buttons">
      <button className="btn btn-primary">One-Eye Tech</button>
      <button className="btn btn-secondary">Watch video</button>
    </div>
  </section>
);

// 3D 预览：computer_love.glb
// 预览区域改用视频播放
function AutoPlayVideo() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const play = () => {
      const p = el.play();
      if (p?.catch) p.catch(() => {});
    };
    el.addEventListener('canplay', play, { once: true });
    play();
    return () => el.removeEventListener('canplay', play);
  }, []);
  return (
    <video ref={ref} src={`${import.meta.env.BASE_URL}videos/computer-love.mp4`} muted autoPlay loop playsInline
      style={{width:'100%', height:'100%', objectFit:'cover', display:'block'}} />
  );
}

const MockupUI = () => (
    <div className="mockup-ui">
        <div className="mockup-sidebar-left">
            <span className="icon" style={{color: 'white', opacity: 1}}>drag_indicator</span>
            <span className="icon active">add_circle</span>
            <span className="icon">layers</span>
            <span className="icon">data_object</span>
            <span className="icon">settings</span>
            <span className="icon" style={{marginTop: 'auto'}}>help</span>
        </div>
        <div className="mockup-main">
            <div className="mockup-main-header">
                <div className="header-left">
                    <span className="icon" style={{fontSize: '20px'}}>arrow_back_ios_new</span>
                    <div>
                        <p style={{color: 'white', fontSize: '13px'}}>HR Manage</p>
                        <p style={{fontSize: '11px', opacity: 0.5}}>Awe Studio/HR Project</p>
                    </div>
                    <span className="icon" style={{fontSize: '20px'}}>visibility</span>
                </div>
                <div className="header-right">
                    <span>W 1440</span>
                    <span>H 900</span>
                    <span className="icon">desktop_windows</span>
                    <span className="icon">tablet_mac</span>
                    <span className="icon">phone_iphone</span>
                    <button className="btn" style={{background: 'rgba(255,255,255,0.1)', padding: '8px 16px', fontSize: '13px'}}>Share</button>
                    <button className="btn" style={{background: '#6F39FF', color: 'white', padding: '8px 16px', fontSize: '13px'}}>Publish</button>
                </div>
            </div>
            <div className="mockup-main-content">
                <div className="website-preview">
                  <div className="preview-canvas-root" style={{width:'100%', height:'100%', borderRadius:'8px', overflow:'hidden'}}>
                    <AutoPlayVideo />
                  </div>
                </div>
            </div>
        </div>
        <div className="mockup-sidebar-right">
            <div className="mockup-accordion">
                <div className="mockup-accordion-header">
                    <span>Selector</span>
                    <span className="icon">expand_less</span>
                </div>
                <div className="mockup-accordion-content" style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                    <span className="icon" style={{fontSize: '20px'}}>space_dashboard</span>
                    <span>Header Section</span>
                </div>
            </div>
            <div className="mockup-accordion">
                <div className="mockup-accordion-header">
                    <span>Spacing</span>
                    <span className="icon">expand_less</span>
                </div>
                <div className="mockup-accordion-content spacing-control">
                    <p>MARGIN</p>
                    <div className="spacing-box">
                       <span>0</span>
                    </div>
                    <p style={{marginTop: '8px'}}>PADDING</p>
                </div>
            </div>
        </div>
    </div>
);


const Showcase = () => (
  <section className="showcase">
    <div className="showcase-panel">
        <MockupUI />
    </div>
  </section>
);

// Features section copied from guangwang99999
const featuresData = [
  {
    title: "AI-Powered Design Assistance",
    description: "Get personalized design recommendations with AI-powered tools that helping you create a polished, professional website effortlessly.",
    visual: (<div style={{width: '80%', height: '60%', background: '#160E33', borderRadius: '6px', border: '1px solid var(--panel-border)', padding: '8px', display: 'flex', flexDirection: 'column', gap: '8px'}}>
      <div style={{height: '20px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px'}}></div>
      <div style={{height: '20px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', width: '70%'}}></div>
      <div style={{height: '30px', background: 'var(--primary-violet)', borderRadius: '4px', marginTop: 'auto', alignSelf: 'flex-end', width: '40%'}}></div>
    </div>)
  },
  {
    title: "Customizable Templates",
    description: "Choose from a wide range of professionally designed templates, and customize fonts, colors, and layouts to reflect your brand.",
    visual: (<div style={{width: '80%', height: '60%', display: 'flex', gap: '8px'}}>
      <div style={{flex: 1, background: '#160E33', borderRadius: '6px', border: '1px solid var(--panel-border)', transform: 'rotate(-5deg) translateY(5px)'}}></div>
      <div style={{flex: 1, background: '#160E33', borderRadius: '6px', border: '1px solid var(--panel-border)', transform: 'scale(1.05)', zIndex: 1}}></div>
      <div style={{flex: 1, background: '#160E33', borderRadius: '6px', border: '1px solid var(--panel-border)', transform: 'rotate(5deg) translateY(5px)'}}></div>
    </div>)
  },
  {
    title: "SEO Tools Built-In",
    description: "Boost your website visibility with integrated SEO tools.",
    visual: (<div style={{width: '80%', height: '60%', display: 'flex', alignItems: 'flex-end', gap: '8px', padding: '0 10px'}}>
      {[40, 60, 50, 75, 65, 85].map((h, i) => <div key={i} style={{width: '12%', height: `${h}%`, background: `linear-gradient(to top, var(--primary-violet), var(--light-violet))`, borderRadius: '4px 4px 0 0'}}></div>)}
    </div>)
  },
  {
    title: "APIs and Integrations",
    description: "Easily connect with your favorite apps and services for a website experience.",
    visual: (<div style={{width: '80%', height: '80%', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <div style={{width: '80px', height: '80px', border: '2px dashed var(--panel-border)', borderRadius: '50%'}}></div>
      <div style={{width: '120px', height: '120px', border: '2px dashed var(--panel-border)', borderRadius: '50%', position: 'absolute'}}></div>
      <span className="icon" style={{position: 'absolute', color: 'white', background: 'var(--primary-violet)', padding: '8px', borderRadius: '50%', fontSize: '24px'}}>hub</span>
    </div>)
  },
  {
    title: "Responsive Design",
    description: "Create websites that look great on any device.",
    visual: (<div style={{width: '80%', height: '60%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px'}}>
      <span className="icon" style={{fontSize: '48px'}}>desktop_windows</span>
      <span className="icon" style={{fontSize: '36px'}}>tablet_mac</span>
      <span className="icon" style={{fontSize: '24px'}}>phone_iphone</span>
    </div>)
  },
  {
    title: "Analytics and Reporting",
    description: "Track your website's performance and gain valuable insights.",
    visual: (<div style={{width: '80%', height: '60%', background: '#160E33', borderRadius: '6px', border: '1px solid var(--panel-border)', padding: '8px', display: 'flex', justifyContent: 'space-between'}}>
      <div style={{width: '60%', height: '100%', background: 'rgba(255,255,255,0.1)', borderRadius: '4px'}}></div>
      <div style={{width: '35%', height: '100%', background: 'rgba(255,255,255,0.1)', borderRadius: '4px'}}></div>
    </div>)
  },
];

const FeatureCard = ({ title, description, visual }) => (
  <div className="feature-card">
    <div className="feature-card-visual">{visual}</div>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

const Features = () => (
  <section className="section features">
    <div className="section-eyebrow">
      <span className="icon" style={{fontSize: '16px'}}>tune</span>
      <span>Features</span>
    </div>
    <h2 className="section-title">Powerful features to simplify your<br/>web building experience</h2>
    <p className="section-description">Craftify unites marketers, designers, and developers to create, manage, and optimize impactful web experiences</p>
    <div className="feature-grid">
      {featuresData.map((feature, index) => (
        <FeatureCard key={index} {...feature} />
      ))}
    </div>
  </section>
);



const creativeAssets = {
    models: [
        { type: 'model', src: `https://picsum.photos/seed/30/1920/1080`, title: '科幻机器人模型' },
        { type: 'model', src: `https://picsum.photos/seed/31/1920/1080`, title: '现代建筑设计' },
        { type: 'model', src: `https://picsum.photos/seed/32/1920/1080`, title: '角色原画设定' },
    ],
    videos: [
        { type: 'video', src: `https://picsum.photos/seed/40/1920/1080`, title: 'AI 动画短片' },
        { type: 'video', src: `https://picsum.photos/seed/41/1920/1080`, title: '产品演示视频' },
        { type: 'video', src: `https://picsum.photos/seed/42/1920/1080`, title: '创意广告片' },
    ],
    images: [
        { type: 'image', src: `https://picsum.photos/seed/50/1920/1080`, title: '概念艺术插画' },
        { type: 'image', src: `https://picsum.photos/seed/51/1920/1080`, title: '品牌视觉设计' },
        { type: 'image', src: `https://picsum.photos/seed/52/1920/1080`, title: '数字艺术作品' },
    ],
};

const CreativeShowcase = () => {
    const [enlargedImage, setEnlargedImage] = useState(null);

    const handleImageClick = (item) => {
        setEnlargedImage(item);
    };

    const handleCloseEnlarged = () => {
        setEnlargedImage(null);
    };

    // ESC键关闭弹窗
    React.useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape' && enlargedImage) {
                handleCloseEnlarged();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [enlargedImage]);

    const renderContent = () => {
        // 3x3 网格显示所有类型的内容
        const allAssets = [
            ...creativeAssets.models.slice(0, 3),
            ...creativeAssets.videos.slice(0, 3),
            ...creativeAssets.images.slice(0, 3)
        ];
        
        return (
            <div className="gallery-grid gallery-grid-3x3">
                {allAssets.map((item, index) => (
                    <div 
                        className="gallery-item gallery-item-with-title" 
                        key={index}
                        onClick={() => handleImageClick(item)}
                    >
                        <div className="gallery-image">
                            <img src={item.src} alt={item.title} />
                            {item.type === 'video' && (
                                <div className="video-overlay">
                                    <span className="icon">play_circle</span>
                                </div>
                            )}
                        </div>
                        <div className="gallery-title">
                            {item.title}
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <>
            <section className="section creative-showcase">
                <div className="section-eyebrow">
                    <span className="icon" style={{fontSize: '16px'}}>interests</span>
                    <span>Creative Hub</span>
                </div>
                <h2 className="section-title">Showcasing 3D Models, AI Videos & Images</h2>
                <p className="section-description">
                    Explore a curated gallery of assets generated and designed with our powerful creative tool suite.
                </p>
                <div className="macos-window-mockup" style={{marginTop: '48px'}}>
                    <div className="macos-window-header">
                        <div className="traffic-lights">
                            <div className="traffic-light red"></div>
                            <div className="traffic-light yellow"></div>
                            <div className="traffic-light green"></div>
                        </div>
                    </div>
                    <div className="showcase-content">
                        {renderContent()}
                    </div>
                </div>
            </section>

            {/* 图片放大弹窗 */}
            {enlargedImage && (
                <div className="image-modal-overlay" onClick={handleCloseEnlarged}>
                    <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
                        <div className="macos-window-mockup enlarged-image-window">
                            <div className="macos-window-header">
                                <div className="traffic-lights">
                                    <div className="traffic-light red" onClick={handleCloseEnlarged}></div>
                                    <div className="traffic-light yellow"></div>
                                    <div className="traffic-light green"></div>
                                </div>
                            </div>
                            <div className="enlarged-image-content">
                                <img src={enlargedImage.src} alt={enlargedImage.title} />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

// 页脚组件
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-copyright">
            © 2025 Xi'an Duyan Tech LLC. All rights reserved.
                </div>
                <div className="footer-company">
                    西安独眼科技有限公司
                </div>
                <div className="footer-address">
                    地址：陕西省西安市灞桥区长乐东路2999号京都国际1幢12108室
                </div>
                <div className="footer-email">
                    邮箱：oneeyetech@163.com
                </div>
            </div>
        </footer>
    );
};

export default function App() {
  return (
    <>
      <main>
        <Hero />
        <Showcase />
        <Features />
        <TechArchitecture />
        <ImprintShowcase />
        <SuperIndividualShowcase />
        <CreativeShowcase />
      </main>
      <Footer />
    </>
  )
}