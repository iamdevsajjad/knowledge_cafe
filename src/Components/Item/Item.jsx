import React from "react";

const Item = ({ item }) => {
  return (
    <div className="p-5 rounded-md my-5 bg-gray-100 ">
      <div className="full-card  w-full  ">
        <img className="rounded-lg mx-auto w-full" src={item.CoverImage} alt="" />
        <div className="info">
          <div className="full-profile flex justify-between">
            <div className="profile-info flex ">
              {" "}
              <div className="main-profile flex">
                <div className="image"><img className="w-14" src={item.AuthorImage} alt="" /></div>
                <div className="profile-data">
                  <div className="name">{item.Author}</div>
                  <div className="time text-gray-600">{item.PublishedAt}</div>
                </div>
              </div>
            </div>
            <div className="bookmark-btn text-gray-600">
                <p>{item.ReadTime} min</p>
                <button></button>
            </div>
          </div>
          <div className="tittle text-2xl font-semibold">{item.Title}</div>
          <button className="text-purple-900 font-bold text-xl underline my-5">Mark as read</button>
        </div>
      </div>
    </div>
  );
};

export default Item;
