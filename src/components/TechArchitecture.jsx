import React from 'react';
import Icon from './Icon';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const techComponents = [
  {
    icon: 'brain',
    title: 'AI Design Core',
    description: 'Real-time generation and previewing of designs.',
    id: 'spoke-1'
  },
  {
    icon: 'cube',
    title: 'Decentralized Services',
    description: 'Creator identity and digital asset ownership.',
    id: 'spoke-2'
  },
  {
    icon: 'api',
    title: 'Smart Contract Engine',
    description: 'Automated, secure transaction protocols.',
    id: 'spoke-3'
  },
  {
    icon: 'database',
    title: 'Real-time Data Processing',
    description: 'Analytics, personalization, and supply chain.',
    id: 'spoke-4'
  },
]

const codeSnippet = `from oneye.core import AIEngine, Product

# Initialize the AI Engine with a foundational model
engine = AIEngine(model='vision-transformer-v2')

# Define product and user source image
t_shirt = Product(template='garment-t-shirt-front')
source_image = 's3://user-uploads/travel-photo.jpg'

# Generate a high-fidelity, production-ready preview
preview = engine.create_preview(
    source=source_image,
    product=t_shirt,
    resolution='1024x1024'
)
preview.save('local/preview.png')`;

const terminalSnippet = `# Request a new product rendering via the API
curl --request POST \\
  --url https://api.oneeye.tech/v1/jobs/render \\
  --header 'Authorization: Bearer $ONEEYE_API_KEY' \\
  --header 'Content-Type: application/json' \\
  --data '{
    "source_image_url": "...",
    "product_sku": "TSHIRT-BLK-MD",
    "output_format": "PNG"
  }'`;

const customStyle = {
  ...atomDark,
  'pre[class*="language-"]': {
    ...atomDark['pre[class*="language-"]'],
    background: 'transparent',
    margin: '0',
    padding: '0',
    fontSize: '0.8rem',
  },
};

const WindowMockup = ({ title, children, className }) => (
    <div className={`window-mockup ${className || ''}`}>
        <div className="window-header">
            <div className="window-dots">
                <span className="dot-1"></span><span className="dot-2"></span><span className="dot-3"></span>
            </div>
            {title && <div className="window-title">{title}</div>}
        </div>
        <div className="window-content">
            {children}
        </div>
    </div>
);


export default function TechArchitecture() {
  return (
    <section className="tech-architecture panel" id="tech">
      <div className="container">
        <div className="tech-architecture-layout">
          
          <div className="tech-heading heading-a">
            <p>Our entire platform is built on a flexible, Python-based core, allowing for rapid innovation and unparalleled customization.</p>
          </div>
          
          <WindowMockup className="code-editor control-a" title="core/generation_engine.py">
            <SyntaxHighlighter language="python" style={customStyle} showLineNumbers>
              {codeSnippet}
            </SyntaxHighlighter>
          </WindowMockup>

          <WindowMockup className="node-editor control-b" title="Visual Workflow">
             <div className="node-editor-ui-v2">
                <div className="node-v2">
                    <div className="node-header"><Icon name="database" /> <span>Load Source</span></div>
                    <div className="node-params-v2">
                        <div className="node-socket-wrapper"><span>Image URL</span> <div className="node-socket output"></div></div>
                        <div className="node-socket-wrapper"><span>Product SKU</span> <div className="node-socket output"></div></div>
                    </div>
                </div>
                <div className="node-v2">
                    <div className="node-header"><Icon name="brain" /> <span>AI Render Engine</span></div>
                     <div className="node-params-v2">
                        <div className="node-socket-wrapper"><div className="node-socket input"></div> <span>Source</span></div>
                        <div className="node-socket-wrapper"><div className="node-socket input"></div> <span>Product</span></div>
                        <div className="node-socket-wrapper"><span>Preview</span> <div className="node-socket output"></div></div>
                    </div>
                </div>
             </div>
          </WindowMockup>

          <div className="tech-heading hub-heading">
            <h2>Core Architecture Components</h2>
            <p>A suite of powerful, interconnected services that form the robust backbone of our platform.</p>
          </div>

          <div className="hub">
            <div className="ai-core-hub-v2">
                <div className="core-pulse-circle"></div>
                <div className="core-pulse-circle"></div>
                <div className="core-pulse-circle"></div>
                <div className="core-pulse-circle"></div>
                <Icon name="logo" />
                <h3>OneEye</h3>
            </div>
            {techComponents.map(comp => (
                <div className={`component-spoke ${comp.id}`} key={comp.id}>
                    <div className="icon-wrapper"><Icon name={comp.icon} /></div>
                    <h4>{comp.title}</h4>
                    <p>{comp.description}</p>
                </div>
            ))}
          </div>
          
          <div className="tech-heading api-heading">
            <h2>Seamless API Integration</h2>
            <p>A powerful, enterprise-grade API for programmatic control and integration with any service.</p>
          </div>

          <WindowMockup className="api-terminal api-a" title="zsh">
            <SyntaxHighlighter language="bash" style={customStyle}>
              {terminalSnippet}
            </SyntaxHighlighter>
          </WindowMockup>

          <WindowMockup className="api-b">
            <div className="sequence-diagram">
                <div className="sequence-step">
                    <div className="sequence-node">Client</div>
                </div>
                <div className="sequence-arrow"></div>
                <div className="sequence-step">
                    <div className="sequence-node">API Gateway</div>
                </div>
                <div className="sequence-arrow"></div>
                <div className="sequence-step">
                    <div className="sequence-node">Microservices</div>
                </div>
                <div className="sequence-arrow"></div>
                <div className="sequence-step">
                    <div className="sequence-node">CDN Cache</div>
                </div>
            </div>
          </WindowMockup>

        </div>
      </div>

       <svg className="architecture-svg-v3" width="100%" height="100%" viewBox="0 0 1200 1200" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0" />
                <stop offset="50%" stopColor="var(--color-primary)" stopOpacity="1" />
                <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0" />
            </linearGradient>
        </defs>
        
        <path className="connector-line-v3" d="M380 180 C 450 180, 450 100, 580 100" />
        <path className="line-flow" d="M380 180 C 450 180, 450 100, 580 100" style={{animationDelay: '0.1s'}} />
        
        <path className="connector-line-v3" d="M380 230 C 450 230, 450 280, 580 280" />
        <path className="line-flow" d="M380 230 C 450 230, 450 280, 580 280" style={{animationDelay: '0.3s'}} />

        <path className="connector-line-v3" d="M600 350 V 460" />
        <path className="line-flow" d="M600 350 V 460" style={{animationDelay: '0.5s'}} />

        <path className="connector-line-v3" d="M360 600 C 450 600, 500 600, 600 600" />
        <path className="line-flow" d="M360 600 C 450 600, 500 600, 600 600" style={{animationDelay: '0.7s'}} />

        <path className="connector-line-v3" d="M840 600 C 750 600, 700 600, 600 600" />
        <path className="line-flow" d="M840 600 C 750 600, 700 600, 600 600" style={{animationDelay: '0.9s'}} />

        <path className="connector-line-v3" d="M360 750 C 450 750, 500 750, 600 750" />
        <path className="line-flow" d="M360 750 C 450 750, 500 750, 600 750" style={{animationDelay: '1.1s'}} />

        <path className="connector-line-v3" d="M840 750 C 750 750, 700 750, 600 750" />
        <path className="line-flow" d="M840 750 C 750 750, 700 750, 600 750" style={{animationDelay: '1.3s'}} />
        
        <path className="connector-line-v3" d="M600 890 V 980" />
        <path className="line-flow" d="M600 890 V 980" style={{animationDelay: '1.5s'}} />

        <path className="connector-line-v3" d="M380 1080 H 780" />
        <path className="line-flow" d="M380 1080 H 780" style={{animationDelay: '1.7s'}} />

      </svg>
    </section>
  );
}