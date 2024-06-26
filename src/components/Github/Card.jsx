import React from "react";
function Card(props) {
  return (
      <div class="max-w-sm rounded overflow-hidden shadow-2xl p-5 m-6">
        <img
          class="w-full"
          src={props.imgs}
          alt={props.ProjectName}
        />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{props.ProjectName}</div>
          <p class="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
           <a className="hover:text-orange-700" href={props.Github} target="_blank">Github</a> 
          </span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          <a className="hover:text-orange-700" href={props.Url}  target="_blank">Visit</a> 
          </span>
        </div>
      </div>
  );
}

export default Card;
