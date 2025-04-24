
import { Star, Mail, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

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
    from: "LinkedIn",
    subject: "3 new connection requests",
    preview: "You have new connection requests waiting for your review...",
    time: "Yesterday",
    unread: false,
  },
];

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
              message.unread && "bg-indigo-50 hover:bg-indigo-100"
            )}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                {message.type === "email" ? (
                  <Mail className="w-4 h-4 text-slate-400" />
                ) : (
                  <MessageSquare className="w-4 h-4 text-indigo-400" />
                )}
                <span className="ml-2 text-sm font-medium text-slate-900">
                  {message.from}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-xs text-slate-500">{message.time}</span>
                <button className="text-slate-400 hover:text-yellow-400">
                  <Star className="w-4 h-4" />
                </button>
              </div>
            </div>
            <h3 className="text-sm font-medium text-slate-900 mb-1">
              {message.subject}
            </h3>
            <p className="text-sm text-slate-500 line-clamp-1">{message.preview}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessageList;
