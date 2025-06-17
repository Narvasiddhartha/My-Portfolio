import React, { useState, useRef, useEffect } from 'react';
import '../styles/Chatbot.css';

interface Message {
  text: string;
  isBot: boolean;
  timestamp: Date;
  status?: 'sending' | 'sent' | 'delivered' | 'read';
  reactions?: { emoji: string; count: number }[];
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { 
      text: "Hi! I'm Narva's AI assistant. How can I help you today?", 
      isBot: true,
      timestamp: new Date(),
      status: 'read'
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState<number | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const knowledgeBase = {
    personal: {
      name: "Narva Siddhartha",
      education: "B.Tech AI & ML student at SR University with a GPA of 9.0",
      interests: [
        "Deep Learning & Neural Networks",
        "AIoT (Artificial Intelligence of Things)",
        "Intelligent Chatbots & Conversational AI",
        "Full Stack Web Development",
        "Natural Language Processing",
        "Computer Vision"
      ],
      strengths: [
        "Fast learner with a strong foundation in AI/ML concepts",
        "Excellent team player with strong communication skills",
        "Creative problem-solver with attention to detail",
        "Passionate about continuous learning and innovation",
        "Strong analytical and critical thinking abilities",
        "Adaptable to new technologies and methodologies"
      ]
    },
    experience: [
      {
        title: "AIoT Intern",
        company: "NIT Warangal",
        period: "May–July 2024",
        description: "Developed smart IoT systems with AI models."
      },
      {
        title: "AI Developer Intern",
        company: "IBM SkillsBuild",
        period: "July–Aug 2024",
        description: "Built chatbots using Watson Assistant; worked on transformers, LLMs."
      }
    ],
    skills: {
      languages: ["C", "Python", "Java", "C#"],
      web: ["HTML", "CSS", "JavaScript", "ReactJs", "NodeJs", "ExpressJs"],
      tools: ["Flask", "Django", "Git", "PowerBI", "Tableau", "Visual Studio"],
      databases: ["SQL", "MySQL", "PLSQL", "MongoDB"],
      domain: ["Machine Learning", "Data Science", "Data Analytics", "Full Stack Development"],
      cloud: ["AWS", "Azure", "Google Cloud", "Heroku"],
      networking: ["TCP/IP", "DNS", "HTTP", "REST APIs", "VPN"]
    },
    projects: [
      {
        title: "Disaster Tweet Classification",
        description: "Classifies disaster-related tweets in real-time using ML and NLP. Achieved 92% accuracy on real-world data."
      },
      {
        title: "Real-Time Facial Emotion Recognition",
        description: "Detects facial emotions in real-time using OpenCV and AI. Achieved 95% accuracy on diverse datasets."
      },
      {
        title: "Smart Wifi Door Lock Using ESP32-CAM & Telegram",
        description: "Remotely control your door lock using Telegram and ESP32-CAM with real-time photo capture and secure authentication."
      }
    ],
    contact: {
      email: "narvasiddhartha@gmail.com",
      phone: "+91 76809 04822",
      linkedin: "https://www.linkedin.com/in/narva-siddhartha-4b04bb211/",
      github: "https://github.com/Narvasiddhartha",
      leetcode: "https://leetcode.com/u/narvasiddhartha/"
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const getBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    // Personal Information
    if (input.includes("name")) {
      return `My name is ${knowledgeBase.personal.name}.`;
    }
    if (input.includes("education") || input.includes("study")) {
      return `I am a ${knowledgeBase.personal.education}.`;
    }
    if (input.includes("interest") || input.includes("interested")) {
      return `My areas of interest include: ${knowledgeBase.personal.interests.join(", ")}.`;
    }
    if (input.includes("strength") || input.includes("good at")) {
      return `My key strengths are: ${knowledgeBase.personal.strengths.join(", ")}.`;
    }

    // Experience
    if (input.includes("experience") || input.includes("work")) {
      const expList = knowledgeBase.experience.map(exp => 
        `${exp.title} at ${exp.company} (${exp.period}): ${exp.description}`
      ).join("\n");
      return `Here's my experience:\n${expList}`;
    }

    // Skills
    if (input.includes("skill") || input.includes("technology")) {
      const allSkills = [
        ...knowledgeBase.skills.languages,
        ...knowledgeBase.skills.web,
        ...knowledgeBase.skills.tools,
        ...knowledgeBase.skills.databases,
        ...knowledgeBase.skills.domain,
        ...knowledgeBase.skills.cloud,
        ...knowledgeBase.skills.networking
      ];
      return `I'm skilled in: ${allSkills.join(", ")}.`;
    }

    // Projects
    if (input.includes("project")) {
      const projectList = knowledgeBase.projects.map(proj => 
        `${proj.title}: ${proj.description}`
      ).join("\n");
      return `Here are my projects:\n${projectList}`;
    }

    // Contact
    if (input.includes("contact") || input.includes("email") || input.includes("phone")) {
      return `You can reach me at:\n\nEmail: ${knowledgeBase.contact.email}\n\nPhone: ${knowledgeBase.contact.phone}\n\nLinkedIn: ${knowledgeBase.contact.linkedin}\n\nGitHub: ${knowledgeBase.contact.github}`;
    }

    // Default response
    return "I'm not sure about that. You can ask me about my education, experience, skills, projects, or contact information.";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message with sending status
    const userMessage: Message = {
      text: input,
      isBot: false,
      timestamp: new Date(),
      status: 'sending'
    };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    
    // Show typing indicator
    setIsTyping(true);
    
    // Simulate typing delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Update user message status to sent
    setMessages(prev => prev.map((msg, idx) => 
      idx === prev.length - 1 ? { ...msg, status: 'sent' } : msg
    ));
    
    // Simulate delivery delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Update user message status to delivered
    setMessages(prev => prev.map((msg, idx) => 
      idx === prev.length - 1 ? { ...msg, status: 'delivered' } : msg
    ));
    
    // Get and add bot response
    const botResponse = getBotResponse(input);
    const botMessage: Message = {
      text: botResponse,
      isBot: true,
      timestamp: new Date(),
      status: 'sent'
    };
    setMessages(prev => [...prev, botMessage]);
    setIsTyping(false);
    
    // Simulate bot reading the message
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Update user message status to read
    setMessages(prev => prev.map((msg, idx) => 
      idx === prev.length - 2 ? { ...msg, status: 'read' } : msg
    ));
  };

  const addReaction = (messageIndex: number, emoji: string) => {
    setMessages(prev => prev.map((msg, idx) => {
      if (idx === messageIndex) {
        const reactions = msg.reactions || [];
        const existingReaction = reactions.find(r => r.emoji === emoji);
        
        if (existingReaction) {
          return {
            ...msg,
            reactions: reactions.map(r => 
              r.emoji === emoji ? { ...r, count: r.count + 1 } : r
            )
          };
        } else {
          return {
            ...msg,
            reactions: [...reactions, { emoji, count: 1 }]
          };
        }
      }
      return msg;
    }));
  };

  const renderMessage = (message: Message, index: number) => {
    const { text, isBot, timestamp, status, reactions } = message;
    
    return (
      <div 
        key={index} 
        className={`message ${isBot ? 'bot' : 'user'}`}
        onContextMenu={(e) => {
          e.preventDefault();
          setSelectedMessage(selectedMessage === index ? null : index);
        }}
      >
        <div className="message-content">
          {text.split('\n').map((line, i) => {
            const urlRegex = /(https?:\/\/[^\s]+)/g;
            const parts = line.split(urlRegex);
            
            return (
              <p key={i}>
                {parts.map((part, j) => {
                  if (part.match(urlRegex)) {
                    let label = part;
                    if (part.includes('linkedin.com')) {
                      label = 'LinkedIn Profile';
                    } else if (part.includes('github.com')) {
                      label = 'GitHub Profile';
                    }
                    
                    return (
                      <a
                        key={j}
                        href={part}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="message-link"
                      >
                        {label}
                      </a>
                    );
                  }
                  return part;
                })}
              </p>
            );
          })}
        </div>
        
        <div className="message-meta">
          <span className="message-time">
            {timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </span>
          
          {!isBot && status && (
            <span className={`message-status ${status}`}>
              {status === 'sending' && '🕒'}
              {status === 'sent' && '✓'}
              {status === 'delivered' && '✓✓'}
              {status === 'read' && '✓✓'}
            </span>
          )}
        </div>

        {reactions && reactions.length > 0 && (
          <div className="message-reactions">
            {reactions.map((reaction, idx) => (
              <span key={idx} className="reaction">
                {reaction.emoji} {reaction.count}
              </span>
            ))}
          </div>
        )}

        {selectedMessage === index && (
          <div className="message-actions">
            <button onClick={() => addReaction(index, '👍')}>👍</button>
            <button onClick={() => addReaction(index, '❤️')}>❤️</button>
            <button onClick={() => addReaction(index, '😂')}>😂</button>
            <button onClick={() => addReaction(index, '😮')}>😮</button>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className={`chatbot-container ${isOpen ? 'open' : ''}`}>
      <button className="chatbot-toggle" onClick={() => setIsOpen(!isOpen)}>
        <span>{isOpen ? '×' : '💬'}</span>
      </button>
      
      <div className="chatbot-window">
        <div className="chatbot-header">
          <h3>Chat with Narva's AI</h3>
          <span className="chatbot-status">Online</span>
        </div>
        
        <div className="chatbot-messages">
          {messages.map((message, index) => renderMessage(message, index))}
          {isTyping && (
            <div className="typing-indicator">
              <div className="typing-dot"></div>
              <div className="typing-dot"></div>
              <div className="typing-dot"></div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <form onSubmit={handleSubmit} className="chatbot-input-form">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me anything..."
            className="chatbot-input"
          />
          <button type="submit" className="chatbot-send">
            <i className="fas fa-paper-plane"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chatbot; 