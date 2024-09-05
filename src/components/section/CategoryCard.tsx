import React from "react";

interface CategoryCardProps {
  rating: string;
  imgUrl: string;
  alt: string;
  title: string;
  activitiesNumber: string;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({
  rating,
  imgUrl,
  alt,
  title,
  activitiesNumber,
}) => {
  return (
    <div className="category-card">
      <div className="category-card__container">
        <div className="category-card__rating">
          <span>{rating}</span>
        </div>
        <div className="category-card__content">
          <img src={imgUrl} alt={alt} />
          <h4>{title}</h4>
          <p>{activitiesNumber} Activities</p>
        </div>
      </div>
    </div>
  );
};
