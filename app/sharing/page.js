"use client";
import React, { useState } from 'react';
import NavbarAfterLogin from '@/components/navbarAfterLogin';

const Post = ({ post, isAnonymous }) => (
  <div className="bg-white rounded-lg shadow-md p-4 mb-4">
    {!isAnonymous && <p className="font-semibold text-rose-600 mb-2">{post.author}</p>}
    <p className="text-gray-700 mb-2">{post.content}</p>
    {post.comments && post.comments.map((comment, index) => (
      <div key={index} className="ml-4 mt-2 p-2 bg-gray-100 rounded">
        <p className="text-sm text-gray-600">{comment}</p>
      </div>
    ))}
    <input
      type="text"
      placeholder="Add a supportive comment..."
      className="w-full mt-2 p-2 border border-gray-300 rounded"
    />
  </div>
);

const Page = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(true);
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPost.trim()) {
      const post = {
        content: newPost,
        isAnonymous: isAnonymous,
        author: isAnonymous ? 'Anonymous' : author,
        comments: []
      };
      setPosts([post, ...posts]);
      setNewPost('');
    }
  };

  return (
    
    <div className="container mx-auto px-4 py-8">
      <NavbarAfterLogin/>

      <h1 className="text-3xl font-bold text-rose-600 mb-6">Support for Housewives</h1>
      <p className="text-gray-600 mb-8">
        Share your feelings, grievances, and daily struggles with our supportive community. 
        You can choose to post anonymously or with your identity. This is a safe space to express yourself and find relief.
      </p>

      <form onSubmit={handleSubmit} className="mb-8">
        <textarea
          className="w-full p-2 border border-gray-300 rounded-md mb-2"
          rows="4"
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          placeholder="Share your thoughts..."
        ></textarea>
        <div className="flex items-center mb-2">
          <input
            type="checkbox"
            id="anonymous"
            checked={isAnonymous}
            onChange={() => setIsAnonymous(!isAnonymous)}
            className="mr-2"
          />
          <label htmlFor="anonymous">Post anonymously</label>
        </div>
        {!isAnonymous && (
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Your name"
            className="w-full p-2 border border-gray-300 rounded-md mb-2"
          />
        )}
        <button 
          type="submit"
          className="bg-rose-500 text-white px-4 py-2 rounded-md hover:bg-rose-600 transition"
        >
          Share
        </button>
      </form>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Community Shares</h2>
        {posts.map((post, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow mb-4 relative">
            <Post post={post} isAnonymous={post.isAnonymous} />
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
              onClick={() => {
                const newPosts = posts.filter((_, i) => i !== index);
                setPosts(newPosts);
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            <div className="mt-4">
              {post.comments && post.comments.map((comment, commentIndex) => (
                <div key={commentIndex} className="pl-4 border-l-2 border-rose-300 mt-2">
                  <p className="text-gray-600 mb-1">{comment.author} replies:</p>
                  <p className="text-gray-800">{comment.text}</p>
                </div>
              ))}
              <form onSubmit={(e) => {
                e.preventDefault();
                const commentText = e.target.comment.value;
                if (commentText.trim()) {
                  const newComment = { author: 'Anonymous', text: commentText };
                  const updatedPosts = [...posts];
                  updatedPosts[index].comments = [...(updatedPosts[index].comments || []), newComment];
                  setPosts(updatedPosts);
                  e.target.comment.value = '';
                }
              }} className="mt-4">
                <input
                  type="text"
                  name="comment"
                  placeholder="Add a comment..."
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
                <button type="submit" className="mt-2 bg-rose-500 text-white px-4 py-2 rounded-md hover:bg-rose-600 transition">
                  Add Comment
                </button>
              </form>
            </div>
          </div>
        ))}
        <div className="space-y-6 mt-8">
          <div className="bg-white p-4 rounded-lg shadow relative">
            <p className="text-gray-600 mb-2">Anonymous says:</p>
            <p className="text-gray-800">I'm feeling overwhelmed with household chores and taking care of the kids. Sometimes I just want a moment for myself. Does anyone else feel this way?</p>
            <button className="absolute top-2 right-2 text-gray-500 hover:text-red-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            <div className="mt-4 pl-4 border-l-2 border-rose-300">
              <p className="text-gray-600 mb-1">Anonymous replies:</p>
              <p className="text-gray-800">I totally understand. I've been there too. What helped me was setting aside 30 minutes each day for 'me time'. I usually use it to read a book or do some light yoga. It's made a world of difference!</p>
            </div>
            <div className="mt-4 pl-4 border-l-2 border-rose-300">
              <p className="text-gray-600 mb-1">Kavita replies:</p>
              <p className="text-gray-800">You're not alone in feeling this way. I found that waking up 30 minutes before my family helps me have some quiet time to myself. It's a small change but it really helps start the day on a positive note.</p>
            </div>
            <div className="mt-4 pl-4 border-l-2 border-rose-300">
              <p className="text-gray-600 mb-1">Anonymous replies:</p>
              <p className="text-gray-800">I've started involving my kids in household chores. It not only helps me but also teaches them responsibility. We make it fun by turning it into a game. It's a win-win!</p>
            </div>
            <form onSubmit={(e) => {
              e.preventDefault();
              const commentText = e.target.comment.value;
              if (commentText.trim()) {
                // Add the new comment to the post
                // This is a placeholder. You'll need to implement the actual logic to add the comment.
                console.log("New comment:", commentText);
                e.target.comment.value = '';
              }
            }} className="mt-4">
              <input
                type="text"
                name="comment"
                placeholder="Add a comment..."
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              <button type="submit" className="mt-2 bg-rose-500 text-white px-4 py-2 rounded-md hover:bg-rose-600 transition">
                Add Comment
              </button>
            </form>
          </div>
          <div className="bg-white p-4 rounded-lg shadow relative">
            <p className="text-gray-600 mb-2">Priya says:</p>
            <p className="text-gray-800">मुझे लगता है कि मैं अपने बच्चों के लिए पर्याप्त नहीं कर रही हूं। क्या कोई और भी ऐसा महसूस करता है? मैं इस भावना से कैसे निपटूं?</p>
            <button className="absolute top-2 right-2 text-gray-500 hover:text-red-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            <div className="mt-4 pl-4 border-l-2 border-rose-300">
              <p className="text-gray-600 mb-1">Anonymous replies:</p>
              <p className="text-gray-800">प्रिया जी, आप अकेली नहीं हैं। हम सभी कभी न कभी ऐसा महसूस करते हैं। याद रखें, आप अपना सर्वश्रेष्ठ कर रही हैं और यह काफी है। अपने आप को थोड़ा समय दें और अपने प्रयासों की सराहना करें।</p>
            </div>
            <form onSubmit={(e) => {
              e.preventDefault();
              const commentText = e.target.comment.value;
              if (commentText.trim()) {
                // Add the new comment to the post
                // This is a placeholder. You'll need to implement the actual logic to add the comment.
                console.log("New comment:", commentText);
                e.target.comment.value = '';
              }
            }} className="mt-4">
              <input
                type="text"
                name="comment"
                placeholder="Add a comment..."
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              <button type="submit" className="mt-2 bg-rose-500 text-white px-4 py-2 rounded-md hover:bg-rose-600 transition">
                Add Comment
              </button>
            </form>
          </div>
          <div className="bg-white p-4 rounded-lg shadow relative">
            <p className="text-gray-600 mb-2">Anonymous says:</p>
            <p className="text-gray-800">I recently started a small kitchen garden. It's been so therapeutic! Watching the plants grow and using fresh herbs in cooking has given me a sense of accomplishment. Anyone else tried gardening?</p>
            <button className="absolute top-2 right-2 text-gray-500 hover:text-red-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            <div className="mt-4 pl-4 border-l-2 border-rose-300">
              <p className="text-gray-600 mb-1">Anjali replies:</p>
              <p className="text-gray-800">That's wonderful! I've been gardening for a year now. It's not only relaxing but also a great way to involve kids in a fun activity. Plus, nothing beats the taste of home-grown vegetables!</p>
            </div>
            <form onSubmit={(e) => {
              e.preventDefault();
              const commentText = e.target.comment.value;
              if (commentText.trim()) {
                // Add the new comment to the post
                // This is a placeholder. You'll need to implement the actual logic to add the comment.
                console.log("New comment:", commentText);
                e.target.comment.value = '';
              }
            }} className="mt-4">
              <input
                type="text"
                name="comment"
                placeholder="Add a comment..."
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              <button type="submit" className="mt-2 bg-rose-500 text-white px-4 py-2 rounded-md hover:bg-rose-600 transition">
                Add Comment
              </button>
            </form>
          </div>
          <div className="bg-white p-4 rounded-lg shadow relative">
            <p className="text-gray-600 mb-2">Anonymous says:</p>
            <p className="text-gray-800">मेरे पति काम से थके हुए घर आते हैं और मुझसे उम्मीद करते हैं कि मैं उनकी हर ज़रूरत का ख्याल रखूं। मैं भी पूरे दिन काम करती हूं और थक जाती हूं। मैं उनसे मदद कैसे मांगूं?</p>
            <button className="absolute top-2 right-2 text-gray-500 hover:text-red-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            <div className="mt-4 pl-4 border-l-2 border-rose-300">
              <p className="text-gray-600 mb-1">Anonymous replies:</p>
              <p className="text-gray-800">मैंने इसी तरह की स्थिति का सामना किया था। मैंने अपने पति के साथ एक शांत वातावरण में बात की और उन्हें अपनी भावनाओं के बारे में बताया। हमने मिलकर घर के कामों की एक सूची बनाई और उन्हें बांट लिया। धीरे-धीरे, चीजें बेहतर हो गईं। संवाद की कोशिश करें, यह मदद कर सकता है।</p>
            </div>
            <form onSubmit={(e) => {
              e.preventDefault();
              const commentText = e.target.comment.value;
              if (commentText.trim()) {
                // Add the new comment to the post
                // This is a placeholder. You'll need to implement the actual logic to add the comment.
                console.log("New comment:", commentText);
                e.target.comment.value = '';
              }
            }} className="mt-4">
              <input
                type="text"
                name="comment"
                placeholder="Add a comment..."
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              <button type="submit" className="mt-2 bg-rose-500 text-white px-4 py-2 rounded-md hover:bg-rose-600 transition">
                Add Comment
              </button>
            </form>
          </div>
          <div className="bg-white p-4 rounded-lg shadow relative">
            <p className="text-gray-600 mb-2">Meera says:</p>
            <p className="text-gray-800">I've been feeling disconnected from my friends lately. Between household responsibilities and taking care of my family, I barely have time for socializing. How do you maintain friendships as a busy housewife?</p>
            <button className="absolute top-2 right-2 text-gray-500 hover:text-red-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            <div className="mt-4 pl-4 border-l-2 border-rose-300">
              <p className="text-gray-600 mb-1">Anonymous replies:</p>
              <p className="text-gray-800">I can relate, Meera. What worked for me was scheduling regular video calls with friends, even if it's just for 15 minutes. We also have a monthly book club that meets online. It's not the same as meeting in person, but it helps maintain those connections. Remember, true friends understand your situation and will appreciate any effort you make to stay in touch.</p>
            </div>
            <div className="mt-4 pl-4 border-l-2 border-rose-300">
              <p className="text-gray-600 mb-1">Pooja replies:</p>
              <p className="text-gray-800">Meera, I've found that involving my friends in my daily routine helps. For example, I'll call a friend while folding laundry or preparing dinner. It's multitasking, but it keeps us connected!</p>
            </div>
            <div className="mt-4 pl-4 border-l-2 border-rose-300">
              <p className="text-gray-600 mb-1">Anonymous replies:</p>
              <p className="text-gray-800">I started a WhatsApp group with my close friends. We share funny memes, quick updates, and support each other daily. It's a small thing, but it helps us feel connected even when we're busy.</p>
            </div>
            <form onSubmit={(e) => {
              e.preventDefault();
              const commentText = e.target.comment.value;
              if (commentText.trim()) {
                // Add the new comment to the post
                // This is a placeholder. You'll need to implement the actual logic to add the comment.
                console.log("New comment:", commentText);
                e.target.comment.value = '';
              }
            }} className="mt-4">
              <input
                type="text"
                name="comment"
                placeholder="Add a comment..."
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              <button type="submit" className="mt-2 bg-rose-500 text-white px-4 py-2 rounded-md hover:bg-rose-600 transition">
                Add Comment
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
