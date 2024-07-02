"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { db, storage } from "@/db/firebase";
import { redirect, useRouter } from "next/navigation";

interface Image {
  img: string;
  preview: string; // add preview to the Image interface
}

interface Content {
  img: Image[];
  text: string;
}

const New: React.FC = () => {
  const [isAlert, setIsAlert] = useState<boolean>(false);

  const openAlert = () => setIsAlert(true);
  const closeAlert = () => setIsAlert(false);

  const [title, setTitle] = useState<string>("");

  const [name, setName] = useState<string>("");

  const [url, setUrl] = useState<string>("");

  // progressaaaaa
  const [percent, setPercent] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  const addData = async (e: FormEvent) => {
    e.preventDefault();
    const docRef = await addDoc(collection(db, "prakerin"), {
      title: title,
      name: name,
      url: url,
    });

    alert("success");
  };

  return (
    <div className="w-full p-5">
      <form onSubmit={addData}>
        <div className="flex flex-col justify-start gap-3 rounded-md bg-[#282828] border border-[#777777] text-[#777777] p-5 mt-20">
          <div className=" text-xl">Nama</div>
          <input
            onChange={(e) => setName(e.target.value)}
            className="w-full h-10 p-2"
            type="text"
          />
          <div className=" text-xl">Judul</div>
          <input
            onChange={(e) => setTitle(e.target.value)}
            className="w-full h-10 p-2"
            type="text"
          />

          <div className=" text-xl">Link</div>
          <input
            onChange={(e) => setUrl(e.target.value)}
            className="w-full h-10 p-2"
            type="text"
          />

          {/* <div className="flex flex-col bg-white rounded-sm p-5 gap-3">
            <TextField
              id="outlined-basic"
              label="Title"
              variant="outlined"
              sx={{ width: "100%" }}
              required
              onChange={(e) => setTitle(e.target.value)}
            />
            <TextField
              id="outlined-multiline-static"
              label="Description"
              multiline
              rows={4}
              sx={{ width: "100%" }}
              onChange={(e) => setDes(e.target.value)}
              required
            />
          </div>
        */}
        </div>
        <div className="flex flex-col justify-start gap-3 rounded-md bg-[#282828] border border-[#777777] text-[#777777] p-5">
          <button
            className="bg-blue-500 rounded-md p-3 w-full text-white"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default New;
