import React, { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState([]);

  const handleClick = e => {
    e.preventDefault();
    setContent([...content, { title: title, description: description }]);
    setTitle("");
    setDescription("");
  };

  const deleteNote = idx => {
    const updated = [...content];
    updated.splice(idx, 1);
    setContent(updated);
  };

  return (
    <div className=" bg-black text-white">
      <h1 className="font-bold  text-3xl px-10 pt-10">Add Notes</h1>

      <div className="flex flex-col md:flex-row justify-between gap-10 p-10 h-full md:h-screen">
        <div className="  flex flex-col md:w-1/2 w-full items-start gap-10">
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={title}
            className="px-5 py-2 border-2 w-full rounded"
            onChange={e => {
              setTitle(e.target.value);
              console.log(title);
            }}
          />
          <textarea
            className="px-5 h-30 py-2 border-2 w-full rounded"
            name="description"
            id=""
            placeholder="description"
            value={description}
            onChange={e => {
              setDescription(e.target.value);
            }}
          ></textarea>
          <button
            type="button"
            className="w-full border-2 bg-white text-black font-bold text-2xl rounded px-5 py-2 "
            onClick={e => handleClick(e)}
          >
            Add note
          </button>
        </div>

        <div className="md:w-1/2 justify-center w-full flex text-black flex-wrap shrink-0 overflow-y-auto">
          {content.map((conten, idx) => {
            console.log("idx = ", idx);
            return (
              <div
                key={idx}
                className=" bg-cover bg-[url('https://imgs.search.brave.com/Sy8UrNAAls611Pvu8Qi3_FVBoZyXVIsAj5GPLUEsNik/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMzcv/MTUyLzY3Ny9zbWFs/bC9zdGlja3ktbm90/ZS1wYXBlci1iYWNr/Z3JvdW5kLWZyZWUt/cG5nLnBuZw')] w-50 p-4 h-70"
              >
                <h1 className="font-bold text-2xl mt-7 overflow-hidden">
                  {conten.title}
                </h1>
                <p className="w-full h-40 break-words ">{conten.description}</p>
                <button
                  type="button"
                  onClick={() => deleteNote(idx)}
                  className="bg-red-400 w-30 ml-5 mt-2 border rounded "
                >
                  Delete note
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
