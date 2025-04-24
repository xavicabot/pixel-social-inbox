
import Sidebar from "@/components/Sidebar";
import MessageList from "@/components/MessageList";
import MessageView from "@/components/MessageView";

const Index = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <MessageList />
      <MessageView />
    </div>
  );
};

export default Index;
