import React from 'react';

function Card({title, description, image, descColor, titleColor }) {
    return (
        <article className="h-60 flex flex-col justify-center p-8 relative">
          <img
            src={image}
            alt=""
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          <div className="absolute top-5 left-5">
            <p className="text-base italic text-[#454544]" style={{color: descColor}}>
              {description}
            </p>
            <h5 className="text-[28px] font-black mb-3 text-gray-800" style={{color: titleColor}}>{title}</h5>
          </div>
        </article>
    );
}

export default Card;