import Image from "next/image";
import React from "react";

const Card = ({ title, imgSrc }: { title: string; imgSrc: string }) => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center">
      <h1 className="text-lg font-bold mb-4">{title}</h1>
      <Image src={imgSrc} alt={`Image for ${title}`} width={500} height={300} className="rounded-md" />
    </div>
  );
};

const CardLayout = () => {
  return (
    <div className="p-8">
      {/* First Row */}
      <div className="flex flex-row gap-6 mb-6">
        <Card title="First Card" imgSrc="/image1.jpg" />
        <Card title="Second Card" imgSrc="/image2.jpg" />
      </div>

      {/* Second Row */}
      <div className="flex flex-row gap-6">
        <Card title="First Card" imgSrc="/image1.jpg" />
        <Card title="Second Card" imgSrc="/image2.jpg" />
        <Card title="Third Card" imgSrc="/image3.jpg" />
      </div>
    </div>
  );
};

export default CardLayout;
