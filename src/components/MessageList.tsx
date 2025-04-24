
import { Star, Mail, MessageSquare, Twitter, Linkedin, Facebook } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "./ui/badge";

const messages = [
  {
    id: 1,
    type: "email",
    from: "Alice Johnson",
    subject: "Q2 Marketing Strategy",
    preview: "I've prepared the marketing strategy document for Q2...",
    time: "10:30 AM",
    unread: true,
  },
  {
    id: 2,
    type: "social",
    platform: "twitter",
    from: "Twitter",
    subject: "New message from @techleader",
    preview: "Hey, I loved your latest article on React performance...",
    time: "9:45 AM",
    unread: true,
  },
  {
    id: 3,
    type: "email",
    from: "Product Team",
    subject: "Sprint Planning Meeting",
    preview: "Let's discuss our goals for the upcoming sprint...",
    time: "Yesterday",
    unread: false,
  },
  {
    id: 4,
    type: "social",
    platform: "linkedin",
    from: "LinkedIn",
    subject: "3 new connection requests",
    preview: "You have new connection requests waiting for your review...",
    time: "Yesterday",
    unread: false,
  },
];

const getSocialIcon = (platform: string) => {
  switch (platform) {
    case 'twitter':
      return <Twitter className="w-4 h-4 text-blue-400" />;
    case 'linkedin':
      return <Linkedin className="w-4 h-4 text-blue-700" />;
    case 'facebook':
      return <Facebook className="w-4 h-4 text-blue-600" />;
    default:
      return <MessageSquare className="w-4 h-4 text-indigo-400" />;
  }
};

const MessageList = () => {
  return (
    <div className="w-96 h-screen border-r border-slate-200 bg-white">
      <div className="p-4 border-b border-slate-200">
        <div className="relative">
          <input
            type="search"
            placeholder="Search messages..."
            className="w-full px-4 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>
      </div>
      
      <div className="overflow-auto h-[calc(100vh-73px)]">
        {messages.map((message) => (
          <div
            key={message.id}
            className={cn(
              "p-4 border-b border-slate-100 hover:bg-slate-50 cursor-pointer",
              message.unread && message.type === 'email' && "bg-blue-50 hover:bg-blue-100",
              message.unread && message.type === 'social' && "bg-purple-50 hover:bg-purple-100"
            )}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                {message.type === "email" ? (
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-blue-600" />
                    <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                      Email
                    </Badge>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    {getSocialIcon(message.platform)}
                    <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                      {message.platform?.charAt(0).toUpperCase() + message.platform?.slice(1)}
                    </Badge>
                  </div>
                )}
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-xs text-slate-500">{message.time}</span>
                <button className="text-slate-400 hover:text-yellow-400">
                  <Star className="w-4 h-4" />
                </button>
              </div>
            </div>
            <h3 className="text-sm font-medium text-slate-900 mb-1">
              {message.from}
            </h3>
            <h4 className="text-sm font-medium text-slate-700 mb-1">
              {message.subject}
            </h4>
            <p className="text-sm text-slate-500 line-clamp-1">{message.preview}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessageList;
