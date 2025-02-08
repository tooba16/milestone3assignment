"use client";
import { useState } from "react";
import Image from "next/image"
import React from "react";
const Component2 = () => {
  // State to manage comments
    const [comments, setComments] = useState<string[]>([]); // Array for storing comments
    const [newComment, setNewComment] = useState(""); // Input for new comment
  
    const handleAddComment = () => {
      if (newComment.trim() !== "") {
        setComments([...comments, newComment]); // Add new comment
        setNewComment(""); // Clear input field
      }
    };
    return(

        <div className="bg-black">
            
                 
                      {/* Navigation Bar */}
          <nav className="flex items-center justify-between bg-pink-600 p-4">
                        
        <div className="flex space-x-8 mr-4 ml-[30px]">
    <li className="text-2xl text-green-200 flex justify-center mr-[310px]">
                            Publication: 26 December 2024
                            
                          </li>
                          <li className="text-2xl text-green-200 flex justify-center">Home</li>
                          <li className="text-2xl text-green-200 flex justify-center">About</li>
                          <li className="text-2xl text-green-200 flex justify-center">Contact</li>
                          <li className="text-2xl text-green-200 flex justify-center">Categories</li>
                        </div>
                      </nav>
            
        <div  className="flex items-between justify-between ml-[35%] mt-6 ">
            <Image src ="/images/mypic.png" alt="logo quaid e azam" width={350} height={20}/>
            </div>

        <div>
            <h1 className=" text-[28px] mt-12 text-pink-600  ml-[20%]">Quaid-e-Azam Muhammad Ali Jinnah: The Architect of Pakistan</h1>
<br/>
<p className=" text-[16px] mt-3  font-bold ml-[10%] text-white ">Quaid-e-Azam Muhammad Ali Jinnah is celebrated as one of the most prominent leaders in history and the founding father of Pakistan. His vis-</p>
<p  className=" text-[16px] mt-3  font-bold ml-[10%] text-white "> ion determination, and leadership laid the foundation for an independent Muslim state on the map of the world.</p>

<br/>

<h1 className=" text-[28px]   ml-[40%] text-pink-600">Early Life and Education</h1>
<p className=" text-[16px] mt-3   text-white font-bold ml-[10%] ">Born on December 25,1876, in Karachi, Jinnah belonged to a merchant family. He was a brilliant student and pursued higher education in law at </p>
<p className="text-[16px] mt-3   text-white font-bold ml-[10%] mr-[20px]">at Lincoln’s Inn, London. He returned to India as a barrister, ready to make his mark.</p>

<br/>

<h1 className=" text-[28px] text-pink-600  ml-[44%]">Political Career</h1>
<p className=" text-[16px] mt-3 text-white  ml-[10%]">Jinnah started his political journey as a member of the Indian National Congress, advocating for Hindu-Muslim Congress, advocating for Hindu's</p> 
<p className=" text-[16px] mt-3 text-white  ml-[10%]">Muslim unity. However, he soon realized that the rights and identity of Muslims were at risk in a predominantly Hindu-dominated political enviro-</p>
<p className=" text-[16px] mt-3 text-white  ml-[10%]"> nment join the All-India Muslim League in 1913, where he became a pivotal figure in the struggle for Muslim autonomy.</p>
 
<br/>

<h1 className=" text-[28px] text-pink-600  ml-[40%]">The Demand for Pakistan</h1>

<p className=" text-[16px] mt-3 text-white ml-[10%]">Jinnah’s leadership became 
    critical during the 1940s. Through his remarkable negotiation skills, he convinced millions of Muslims to rally behind  </p>
    <p className=" text-[16px] mt-3 text-white ml-[10%]"> the idea of a separate nation. His famous slogan, “Faith, Unity, Discipline,” became the guiding principle of the movement. The Lahore Resolution  </p>
    <p>  of 1940 was a turning   point, formally demanding the creation of Pakistan.</p>

<br/>

<h1 className=" text-[28px]  text-pink-600 ml-[40%]">The Creation of Pakistan</h1>
<p className=" text-[16px] mt-3 text-white  ml-[10%]">Jinnah’s relentless efforts bore fruit on August 14, 1947, when Pakistan emerged as an independent nation. Despite facing enormous challenges,
    </p>
    <p className=" text-[16px] mt-3 text-white  ml-[10%]"> Jinnah;s as Pakistan’s first Governor-General, worked tirelessly to lay the foundation of a democratic and progressive state.</p>

<br/>

<h1 className=" text-[28px] text-pink-600 ml-[47%]">Legacy</h1>
<p className=" text-[16px] mt-3  text-white ml-[10%]">Quaid-e-Azam passed away on September 11, 1948, leaving behind a legacy of courage, perseverance, and vision. He remains an enduring symbol  </p>
   <p className=" text-[16px] mt-3  text-white ml-[10%]">of unity and strength for the people of Pakistan. His life continues to inspire generations to strive for justice, equality, and national integrity.</p>
<br/>
<p className=" text-[16px] mt-3  text-white ml-[10%]">In the words of Jinnah himself: “With faith, discipline and selfless devotion to duty, there is nothing worthwhile that you cannot achieve.”
</p>
{/* comment section */}
<div className="flex flex-col justify-between h-200 space-x-3 mt-12">
      <h1 className="text-4xl flex justify-center mt-12 text-white">Add Comments</h1>

      {/* Input Field */}
      <div className="flex justify-center mt-12">
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write your comment here..."
          className="border px-4 py-2 rounded-md"
        />
        <button
          onClick={handleAddComment}
          className="py-2 px-4 bg-pink-800 text-white rounded-md ml-2"
        >
          Add Comment
        </button>
      </div>

      {/* Display Comments */}
      <div className="mt-12">
        <h2 className="text-2xl flex justify-center">Comments:</h2>
        <div className="flex flex-col items-center mt-4 text-white">
          {comments.length > 0 ? (
            comments.map((comment, index) => (
              <p key={index} className="text-xl border-b p-2 w-1/2 text-center text-white">
                {comment}
              </p>
            ))
          ) : (
            <p className="text-xl">No comments yet. Add your first comment!</p>
          )}
        </div>
      </div>
    </div>
  


        </div>
        </div>
    )

}
export default Component2