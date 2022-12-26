import React from "react";

import AnnouncementCommentUtil from "../../../../utils/AnnouncementCommentUtil/AnnouncementCommentUtil";

import imgC from "/images/showcase.jpg";

const AnnouncementsTabComponent = () => {
  const data = [
    {
      id: 1,
      name: "koushil",
      img: imgC,
      date: "12-12-2022",
      comment: "This is a comment!",
    },
    {
      id: 1,
      name: "nani",
      img: imgC,
      date: "03-03-2022",
      comment: "This is a comment too!",
    },
  ];
  return (
    <div>
      {data?.map((item) => {
        return <AnnouncementCommentUtil key={item.id} data={item} />;
      })}
    </div>
  );
};

export default AnnouncementsTabComponent;
