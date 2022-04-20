import Image from "next/image";
import CustomLink from "./custom-link";
import ButtonLink from "./button-link";
import { useRef, useEffect } from "react";

const Footer = ({ footer }) => {
  const gmapEmbedRef = useRef();

  const ioCallback = (entries, io) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      entry.target.src = entry.target.dataset.src;
      io.unobserve(entry.target);
    });
  };

  useEffect(() => {
    const io = new IntersectionObserver(ioCallback, {
      rootMargin: "600px",
      threshold: 0,
    });

    if (gmapEmbedRef.current) {
      io.observe(gmapEmbedRef.current);
    }

    let ref = Object.assign({}, gmapEmbedRef);

    return () => {
      if (ref.current) {
        io.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <footer className="bg-black text-white md:px-4">
      <div className="my-14 flex flex-col items-center">CORP</div>
    </footer>
  );
};

export default Footer;
