"use client";

import { useEffect, useState, useRef } from "react";
import { AiFillMuted, AiFillSound } from "react-icons/ai";
import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";
import { RiMailOpenFill } from "react-icons/ri";

export default function Undangan() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlay, setIsPlay] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  //ref Video
  const videoRef = useRef<HTMLVideoElement | null>(null);

  //handle buka undangan
  const handleOpen = () => {
    setIsOpen(true);
    setIsPlay(true);
    // Video diputar lewat referensi atau otomatis jika autoplay + muted
    setIsMuted(false);

    if (videoRef.current) {
      videoRef.current.muted = false;
      // Update state untuk mengubah icon

      videoRef.current.play().catch((error) => {
        // Log ini akan muncul jika browser memblokir video
        console.error("Gagal memutar video:", error);
      });
    }
  };

  //handle play
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlay) {
        videoRef.current.pause(); // Perintah pause native HTML5
      } else {
        videoRef.current.play(); // Perintah play native HTML5
      }
      setIsPlay(!isPlay); // Update status icon
    }
  };

  //handle suara
  const toggleSound = () => {
    if (videoRef.current) {
      // Balikkan status muted pada elemen video
      videoRef.current.muted = !videoRef.current.muted;
      // Update state untuk mengubah icon
      setIsMuted(!isMuted);
    }
  };

  return (
    <>
      {/* 1. LANDING PAGE (SAMPUL) */}
      <div
        className={`absolute bg-white/15 inset-0 w-dvw min-h-dvh max-h-dvh z-9999 flex flex-col items-center justify-between py-10 transition-transform duration-500 ease-in-out ${
          isOpen ? "-translate-y-full" : "translate-y-0"
        }`}>
        <div className="text-center">
          <p className="text-[0.5rem] font-normal tracking-widest uppercase text-[#2596be]">
            Tasyakuran Aqiqah
          </p>
          <h1 className="text-3xl font-extrabold text-[#2596be] font-beau">
            Ahmad Amalia Habibi
          </h1>
        </div>
        <div className="text-center">
          <p className="text-md tracking-widest  mt-5 text-[#2596be]">Dear:</p>
          <h1 className="text-sm font-sans font-bold text-[#2596be] ">
            Tamu Undangan
          </h1>
          <p className="mb-6 text-md text-[#2596be]">di Tempat</p>
          <button
            onClick={handleOpen}
            className="py-2 px-3 bg-[#2596be]/80 hover:bg-[#2596be] rounded-full font-semibold transition-all shadow-lg inline text-gray-50">
            <RiMailOpenFill className="inline-block text-gray-50 " /> Buka
            Undangan
          </button>
        </div>
      </div>

      <div
        className={`bg-[url('https://res.cloudinary.com/l57gpxko/image/upload/f_auto,q_auto:good,dpr_auto,w_800,c_limit/v1782912977/Aqiqah_Tema_Biru_1_3_urvnjw.png')] bg-cover  bg-no-repeat bg-center absolute inset-0 w-dvw min-h-dvh max-h-dvh bg-black/70 z-1 transition-transform duration-500 ease-in-out ${
          isOpen ? "-translate-y-full" : "translate-y-0"
        }`}></div>

      <div
        className={`fixed bottom-3 w-20 text-white z-1 left-1/2 -translate-x-1/2 bg-black/30 flex flex-wrap justify-center items-center mb-2 gap-2 p-2 rounded-full text-xl ${
          isOpen ? "block" : "hidden"
        }`}>
        {isPlay ? (
          <FaPlayCircle className="cursor-pointer" onClick={togglePlay} />
        ) : (
          <FaPauseCircle className="cursor-pointer" onClick={togglePlay} />
        )}
        {isMuted ? (
          <AiFillMuted className="cursor-pointer" onClick={toggleSound} />
        ) : (
          <AiFillSound className="cursor-pointer" onClick={toggleSound} />
        )}
      </div>

      {/* 2. KONTEN VIDEO */}
      <div className="absolute inset-0 w-dvw h-dvh z-0 bg-black max-w-md mx-auto">
        <video
          ref={videoRef}
          loop={true}
          autoPlay={true}
          width="auto"
          height="100%"
          muted={isMuted}
          playsInline
          preload="metadata"
          className="w-full h-full object-cover">
          <source
            src="https://res.cloudinary.com/l57gpxko/video/upload/f_auto,q_auto,w_720,dpr_auto,vc_auto/v1782913150/Undangan_Aqiqah_Ahmad_Amalia_Habibi_rhueab.mov"
            type="video/mp4"
          />
        </video>
      </div>
    </>
  );
}
