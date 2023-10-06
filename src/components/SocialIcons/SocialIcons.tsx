import Image from "next/image";
import React from "react";

const SocialIcons = () => {
  return (
    <div
      style={{
        flex: "1",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap:"10px"
      }}
    >
      <Image
        src={"/facebook.png"}
        width={20}
        height={20}
        alt="social media icon"
      />
      <Image
        src={"/instagram.png"}
        width={20}
        height={20}
        alt="social media icon"
      />
      <Image
        src={"/twitter.png"}
        width={20}
        height={20}
        alt="social media icon"
      />
      <Image
        src={"/youtube.png"}
        width={20}
        height={20}
        alt="social media icon"
      />
    </div>
  );
};

export default SocialIcons;
