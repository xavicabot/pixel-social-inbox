
import { Mail, Inbox, Archive, Star, Trash, MessageSquare, Bell, Users } from "lucide-react";
import { cn } from "@/lib/utils";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-slate-50 border-r border-slate-200 flex flex-col">
      <div className="p-4 border-b border-slate-200">
        <h1 className="text-xl font-semibold text-slate-800">Unified Inbox</h1>
      </div>
      
      <nav className="flex-1 p-4 space-y-6">
        <div>
          <h2 className="text-sm font-semibold text-slate-500 mb-2">EMAIL</h2>
          <ul className="space-y-1">
            {[
              { icon: Inbox, label: "Inbox", count: "24" },
              { icon: Star, label: "Starred" },
              { icon: Archive, label: "Archive" },
              { icon: Trash, label: "Trash" },
            ].map((item) => (
              <li key={item.label}>
                <button className="w-full flex items-center px-3 py-2 text-slate-700 rounded-md hover:bg-slate-100 group">
                  <item.icon className="h-4 w-4 mr-3" />
                  <span className="flex-1 text-sm text-left">{item.label}</span>
                  {item.count && (
                    <span className="text-xs bg-indigo-500 text-white px-2 py-0.5 rounded-full">
                      {item.count}
                    </span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h2 className="text-sm font-semibold text-slate-500 mb-2">SOCIAL</h2>
          <ul className="space-y-1">
            {[
              { icon: MessageSquare, label: "Messages", count: "5" },
              { icon: Bell, label: "Notifications", count: "12" },
              { icon: Users, label: "Mentions" },
            ].map((item) => (
              <li key={item.label}>
                <button className="w-full flex items-center px-3 py-2 text-slate-700 rounded-md hover:bg-slate-100 group">
                  <item.icon className="h-4 w-4 mr-3" />
                  <span className="flex-1 text-sm text-left">{item.label}</span>
                  {item.count && (
                    <span className="text-xs bg-indigo-500 text-white px-2 py-0.5 rounded-full">
                      {item.count}
                    </span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      
      <div className="p-4 border-t border-slate-200">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white text-sm font-medium">
            JD
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-slate-700">John Doe</p>
            <p className="text-xs text-slate-500">john@example.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
