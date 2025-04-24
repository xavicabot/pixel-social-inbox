
import { Star, Reply, Archive, Trash } from "lucide-react";

const MessageView = () => {
  return (
    <div className="flex-1 h-screen bg-white flex flex-col">
      <div className="p-6 border-b border-slate-200">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-slate-900">Q2 Marketing Strategy</h2>
          <div className="flex items-center space-x-2">
            <button className="p-2 text-slate-400 hover:text-yellow-400 rounded-full hover:bg-slate-100">
              <Star className="w-5 h-5" />
            </button>
            <button className="p-2 text-slate-400 hover:text-indigo-500 rounded-full hover:bg-slate-100">
              <Reply className="w-5 h-5" />
            </button>
            <button className="p-2 text-slate-400 hover:text-indigo-500 rounded-full hover:bg-slate-100">
              <Archive className="w-5 h-5" />
            </button>
            <button className="p-2 text-slate-400 hover:text-red-500 rounded-full hover:bg-slate-100">
              <Trash className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-medium">
              AJ
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-slate-900">Alice Johnson</h3>
              <p className="text-sm text-slate-500">alice@company.com</p>
            </div>
          </div>
          <span className="text-sm text-slate-500">Today at 10:30 AM</span>
        </div>
      </div>
      
      <div className="flex-1 p-6 overflow-auto">
        <div className="prose prose-slate max-w-none">
          <p className="text-slate-600 mb-4">Hi Team,</p>
          <p className="text-slate-600 mb-4">
            I've prepared the marketing strategy document for Q2. Here are the key points we'll be focusing on:
          </p>
          <ul className="list-disc pl-5 mb-4 text-slate-600">
            <li>Social media campaign optimization</li>
            <li>Content marketing initiatives</li>
            <li>Email marketing automation</li>
            <li>Partner collaboration opportunities</li>
          </ul>
          <p className="text-slate-600 mb-4">
            Please review and let me know your thoughts. We can discuss this in detail during our next meeting.
          </p>
          <p className="text-slate-600 mb-4">Best regards,<br />Alice</p>
        </div>
      </div>
    </div>
  );
};

export default MessageView;
