
import React, { useState } from 'react';
import { Star, Reply, Archive, Trash, MessageSquareReply, Flag, Send, Mail, MessageSquare } from "lucide-react";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const MessageView = () => {
  const messageType = "email"; // This would come from props/context in a real app
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  return (
    <div className="flex-1 h-screen bg-white flex flex-col">
      <div className="p-6 border-b border-slate-200">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className={`p-1.5 rounded-md ${messageType === "email" ? "bg-blue-100" : "bg-purple-100"}`}>
              {messageType === "email" ? (
                <Mail className="w-5 h-5 text-blue-600" />
              ) : (
                <MessageSquare className="w-5 h-5 text-purple-600" />
              )}
            </div>
            <h2 className="text-xl font-semibold text-slate-900">Q2 Marketing Strategy</h2>
          </div>
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

      <div className="border-t border-slate-200 p-6 bg-slate-50">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-slate-900">AI Response Options</h3>
            <span className={`text-xs px-2 py-1 rounded-full ${
              messageType === "email" ? "bg-blue-100 text-blue-600" : "bg-purple-100 text-purple-600"
            }`}>
              {messageType === "email" ? "Email Message" : "Social Message"}
            </span>
          </div>
          
          <div className="flex gap-3">
            <Button 
              variant="outline" 
              className="flex items-center gap-2"
              onClick={() => console.log("Create replay clicked")}
            >
              <MessageSquareReply className="w-4 h-4" />
              Create Reply
            </Button>
            
            <Button 
              variant="outline" 
              className="flex items-center gap-2"
              onClick={() => console.log("Mark as spam clicked")}
            >
              <Flag className="w-4 h-4" />
              Mark As Spam
            </Button>
            
            <Button 
              variant="outline" 
              className="flex items-center gap-2 bg-indigo-50 hover:bg-indigo-100"
              onClick={() => console.log("Send response clicked")}
            >
              <Send className="w-4 h-4" />
              Send a Response
            </Button>
          </div>

          <div className="mt-4 space-y-4 border-t border-slate-200 pt-4">
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                placeholder="RE: Q2 Marketing Strategy"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="body">Message</Label>
              <Textarea
                id="body"
                placeholder="Type your response here..."
                className="min-h-[200px]"
                value={body}
                onChange={(e) => setBody(e.target.value)}
              />
            </div>

            <div className="flex justify-end">
              <Button
                onClick={() => {
                  console.log({ subject, body });
                  setSubject("");
                  setBody("");
                }}
              >
                Send
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageView;
