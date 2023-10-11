import React from "react";
import 'quill/dist/quill.snow.css'
import ReactQuill, { Quill } from 'react-quill'
import { useState } from "react";
import ImageResize from 'quill-image-resize-module-react';
Quill.register('modules/imageResize', ImageResize);

const TextEditor = () => {
  const [show,setShow] = useState(false)
  var modules = {
    toolbar: [
      [{ size: ["small", false, "large", "huge"] },{ font: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      // [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image", "video"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
        { align: [] }
      ],
      [{ "color": ["#000000", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466", 'custom-color'] },{"background": ["#000000", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466", 'custom-color']}],
    ],
    imageResize: {
      parchment: Quill.import('parchment'),
      modules: ['Resize', 'DisplaySize']
    }
  
  };
 
  var formats = [
    "header","font", "height", "bold", "italic",
    "underline", "strike", "blockquote",
    "list", "color", "bullet", "indent",
    "link", "image", "align", "background","size", "video"
  ];

  const handleProcedureContentChange = (content) => {
    console.log("content---->", content);

    var blog  = document.getElementById('blog').style.display = 'block';
    var res = document.getElementById('result').innerHTML = content
    // res.style.display = "none"
    
  };
  const handleClick = (content)=>{
 setShow(true)

    var a = document.getElementById('result')
console.log(a)
 var card = document.getElementById('card')
 card.innerHTML = a.innerHTML
  }

  // const handleClick = (e)=>{
  //   var card = document.createElement('div').innerHTML = e
  //   console.log(e)
  // }
  return (
    <>
    <div className="mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 mx-6 gap-y-10 place-content-start place-items-start">
      <div className="flex justify-center flex-wrap mx-auto md:w-[650px] w-[300px] " >
      <h1 style={{ textAlign: "center" }} className=" text-blue-900 font-bold text-2xl pb-10 uppercase" >Write your first blog here</h1>

        <ReactQuill
          theme="snow"
          modules={modules}
          // value={content}
          formats={formats}
          placeholder="Write your content ...."
          onChange={handleProcedureContentChange}
          className="rounded-sm "
          style={{height:'50vh',width:'650px'}}
        >
        </ReactQuill>
      </div>
      <div className="mb-10 hidden" id="blog">
      <h1 style={{ textAlign: "center" }} className=" text-blue-900 font-bold text-2xl uppercase " >Preview your blog here</h1>


      <div className="md:w-[650px] w-[300px] mt-10 rounded-md mx-auto p-1  border-blue-900 border-2 shadow-xl" id="result">
      </div>
      <button className="px-4 py-2 bg-blue-400 cursor-pointer mt-16 rounded-lg  hover:bg-slate-300 " onClick={handleClick}>Save</button>
      </div>
      
      </div>
      {show && (
      <div className="grid place-items-center mx-auto">
      <div id="card" className="bg-pink-300 p-4  rounded-xl shadow-xl my-2 "></div>
      </div>
      )}
    </div>
      {/* <button className="px-4 py-2 bg-slate-200 cursor-pointer mt-16 hover:bg-slate-300 " onClick={()=>setShow(true)}>Save</button> */}

      
      </>
  );

}

export default TextEditor;