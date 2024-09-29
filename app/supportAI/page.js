"use client";
import React, { useState, useRef, useEffect } from 'react';
import NavbarAfterLogin from '@/components/navbarAfterLogin';

const SupportAI = () => {
  return (
    <div className="min-h-screen bg-rose-50">
      <NavbarAfterLogin />
      <div className="max-w-4xl mx-auto p-4 relative">
        <div className="absolute left-0 top-1/4 transform -translate-x-full">
          <img src="https://i.gifer.com/74y4.gif" alt="Stress Management" className="w-24 h-24 mb-4 rounded-full" />
          <img src="https://cdn.dribbble.com/users/179201/screenshots/3495753/womens-health.gif" alt="Dealing with Son" className="w-24 h-24 mb-4 rounded-full" />
          <img src="https://media4.giphy.com/media/YONOfpU88lg0RkO8MM/200w.gif?cid=82a1493b12h64qdkn5yktvvjf6uiy8jjyhlprtndzqmg9fj7&ep=v1_gifs_related&rid=200w.gif&ct=g" alt="Improve Life" className="w-24 h-24 rounded-full" />
        </div>
        <div className="absolute right-0 top-1/4 transform translate-x-full">
          <img src="https://i.pinimg.com/originals/55/ed/18/55ed1833485e5e8888e08bb6bca06ce5.gif" alt="Pursue Passion" className="w-24 h-24 mb-4 rounded-full" />
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/hd/fc4efe115102259.6047f38a4ad8a.gif" alt="Be Happy" className="w-24 h-24 mb-4 rounded-full" />
          <img src="https://i.pinimg.com/originals/95/80/84/95808493ff2040944fbb289bc647a6d1.gif" alt="Make Use of Day" className="w-24 h-24 rounded-full" />
        </div>
        <h1 className="text-3xl font-bold text-rose-600 mb-6">AI Support Assistant</h1>
        <p className="text-gray-600 mb-8">
          Welcome to your personal AI assistant. I'm here to help you deal with stress, 
          provide guidance on various topics, and offer support in your daily life. 
          Feel free to ask me anything!
        </p>
        <script src="https://widget.cxgenie.ai/widget.js" data-aid="65e61a85-67ad-4e28-9c4b-dcb5f69faa78" data-lang="en"></script>
        <div className="mt-8">

          <h2 className="text-xl font-semibold text-rose-600 mb-4">Suggested Topics:</h2>
          <ul className="list-disc list-inside text-gray-600">

            <li>How to deal with daily stress</li>
            <li>Tips for connecting with teenage children</li>
            <li>Balancing work and family life</li>
            <li>Self-care strategies for busy women</li>
            <li>Improving communication in relationships</li>
            <li>Finding time for personal hobbies and interests</li>
            <li>Dealing with financial stress and budgeting</li>
            <li>Maintaining a healthy work-life balance</li>
            <li>Coping with empty nest syndrome</li>
            <li>Strategies for staying physically active</li>
            <li>Managing household responsibilities efficiently</li>
            <li>Nurturing friendships as a busy adult</li>
            <li>Dealing with in-law relationships</li>
            <li>Self-improvement and personal growth techniques</li>
            <li>Healthy cooking tips for the family</li>
          </ul>
        </div>
      </div>
      {/* <script src="https://widget.cxgenie.ai/widget.js" data-aid="65e61a85-67ad-4e28-9c4b-dcb5f69faa78" data-lang="en"></script> */}
    </div>
  );
};




export default SupportAI;
