import { useState } from "react";
import { 
  Send, 
  Mic, 
  Image, 
  Upload, 
  Copy, 
  Search,
  User,
  Bot,
  Clock,
  MessageSquare
} from "lucide-react";

export default function Doubts() {
  const [message, setMessage] = useState("");
  const [chatHistory] = useState([
    { id: 1, title: "Physics - Newton's Laws", time: "2 hours ago" },
    { id: 2, title: "Chemistry - Atomic Structure", time: "1 day ago" },
    { id: 3, title: "Math - Calculus Integration", time: "2 days ago" },
    { id: 4, title: "Biology - Cell Division", time: "3 days ago" },
  ]);

  const [currentChat] = useState([
    {
      id: 1,
      type: "user",
      message: "Can you explain Newton's third law of motion?",
      time: "10:30 AM"
    },
    {
      id: 2,
      type: "ai",
      message: "Newton's third law states that for every action, there is an equal and opposite reaction. This means that when one object exerts a force on another object, the second object exerts an equal force in the opposite direction on the first object.",
      time: "10:31 AM"
    },
    {
      id: 3,
      type: "user",
      message: "Can you give me a practical example?",
      time: "10:32 AM"
    },
    {
      id: 4,
      type: "ai",
      message: "Sure! A great example is walking. When you walk, you push backward against the ground with your foot (action), and the ground pushes forward on your foot with equal force (reaction), propelling you forward.",
      time: "10:33 AM"
    }
  ]);

  const handleSendMessage = () => {
    if (message.trim()) {
      // Handle message sending logic here
      setMessage("");
    }
  };

  const copyMessage = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="min-h-screen bg-background pl-64">
      <div className="flex h-screen">
        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col">
          {/* Top Bar */}
          <div className="h-16 border-b border-card-border bg-sidebar flex items-center justify-between px-6">
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search doubts..."
                  className="pl-10 pr-4 py-2 bg-input border border-card-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary w-80"
                />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
                <User className="h-4 w-4 text-primary" />
              </div>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {currentChat.map((chat) => (
              <div
                key={chat.id}
                className={`flex gap-3 ${chat.type === "user" ? "justify-end" : "justify-start"}`}
              >
                {chat.type === "ai" && (
                  <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Bot className="h-4 w-4 text-primary" />
                  </div>
                )}
                <div
                  className={`max-w-2xl p-4 rounded-xl glass-card ${
                    chat.type === "user" 
                      ? "bg-primary/10 border-primary/20" 
                      : "border-card-border"
                  }`}
                >
                  <p className="text-foreground mb-2">{chat.message}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{chat.time}</span>
                    <button
                      onClick={() => copyMessage(chat.message)}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Copy className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                {chat.type === "user" && (
                  <div className="h-8 w-8 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <User className="h-4 w-4 text-secondary" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="border-t border-card-border p-6">
            <div className="glass-card rounded-xl p-4">
              <div className="flex items-end gap-3">
                <div className="flex-1">
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Ask your doubt here..."
                    className="w-full bg-transparent border-0 resize-none text-foreground placeholder-muted-foreground focus:outline-none min-h-[60px] max-h-32"
                    onKeyPress={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        handleSendMessage();
                      }
                    }}
                  />
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-2 text-muted-foreground hover:text-primary transition-colors">
                    <Upload className="h-5 w-5" />
                  </button>
                  <button className="p-2 text-muted-foreground hover:text-primary transition-colors">
                    <Image className="h-5 w-5" />
                  </button>
                  <button className="p-2 text-muted-foreground hover:text-primary transition-colors">
                    <Mic className="h-5 w-5" />
                  </button>
                  <button
                    onClick={handleSendMessage}
                    className="p-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-glow transition-colors"
                  >
                    <Send className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Chat History Sidebar */}
        <div className="w-80 border-l border-card-border bg-sidebar/50">
          <div className="p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-primary" />
              Chat History
            </h3>
            <div className="space-y-3">
              {chatHistory.map((chat) => (
                <div
                  key={chat.id}
                  className="glass-card rounded-lg p-4 interactive cursor-pointer hover:border-primary/30"
                >
                  <h4 className="font-medium text-foreground text-sm mb-2">{chat.title}</h4>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    <span>{chat.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}