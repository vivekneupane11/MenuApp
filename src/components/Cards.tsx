import Image from "next/image";
import React from "react";

export default function Cards({title,image}:{title:string,image:string}) {
  return (
    <div className="card  w-96 bg-base-100 shadow-xl m-5 overflow-hidden ">
      <div className="h-[270px] w-[100%] relative">
        <Image
          src={image}
          fill
          alt="Shoes"
          style={{objectFit:'cover'}}
        />
      </div>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
    
      </div>
    </div>
  );
}
