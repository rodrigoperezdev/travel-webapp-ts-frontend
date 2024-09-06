import React from "react";
import styles from "./TrendingCard.module.scss";
import star from "../../assets/images/icons/star.svg";
import durationIcon from "../../assets/images/icons/duration.svg";
import checkmark from "../../assets/images/icons/checkmark.svg";
import wishlistInactive from "../../assets/images/icons/wishlist.svg";
import wishlistActive from "../../assets/images/icons/wishlist-active.svg";

interface TrendingCardProps {
  imageSrc: string;
  price: number;
  discount: number;
  title: string;
  subtitle: string;
  duration: number;
  rating: number;
  ratingCount: number;
  alt: string;
  wishlist: boolean;
}

export const TrendingCard: React.FC<TrendingCardProps> = ({
  discount,
  imageSrc,
  title,
  subtitle,
  price,
  duration,
  rating,
  ratingCount,
  alt,
  wishlist,
}) => {
  const roundedRating = Math.round(rating);

  // Crear un array de estrellas basado en el rating
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < roundedRating; i++) {
      stars.push(<img key={i} src={star} alt="Star" />);
    }
    return stars;
  };

  return (
    <article className={styles.tourCard}>
      <div className={styles.tourCard__container}>
        <div className={styles.tourCard__imageWrapper}>
          <img src={imageSrc} alt={alt} className={styles.tourCard__image} />
          {discount ? (
            <div className={styles.tourCard__discount}>{discount}%</div>
          ) : (
            ""
          )}
        </div>
        <div className={styles.tourCard__info}>
          <div className={styles.tourCard__titleWrapper}>
            <h4 className={styles.tourCard__title}>{title}</h4>
            <p className={styles.tourCard__subtitle}>{subtitle}</p>
          </div>
          <img
            src={wishlist ? wishlistActive : wishlistInactive}
            alt="Wishlist button"
            className={styles.tourCard__logo}
          />
        </div>
        <div className={styles.tourCard__price}>
          <div className={styles.tourCard__priceWrapper}>
            <div className={styles.tourCard__priceColumn}>
              <span className={styles.tourCard__priceLabel}>from</span>
              <span className={styles.tourCard__priceTitle}>${price}</span>
              <span>*Price varies</span>
            </div>
            <div className={styles.tourCard__ratingColumn}>
              <div className={styles.tourCard__ratingWrapper}>
                <div className={styles.tourCard__ratingInfo}>
                  <div className={styles.tourCard__starsContainer}>
                    {renderStars()}
                  </div>
                  <span className={styles.tourCard__ratingCount}>
                    {rating} ({ratingCount})
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.tourCard__details}>
          <div>
            <div className={styles.tourCard__duration}>
              <img
                src={durationIcon}
                alt="Duration"
                className={styles.tourCard__durationIcon}
              />
              <span>{duration} days</span>
            </div>
          </div>
          <div className={styles.tourCard__infoText}>
            <div className={styles.tourCard__cancellation}>
              <img
                src={checkmark}
                alt="Checkmark"
                className={styles.tourCard__cancellationIcon}
              />
              <span className={styles.tourCard__cancellationText}>
                Free Cancellation
              </span>
            </div>
            <div className={styles.tourCard__newEntrada}>
              <img
                src={checkmark}
                alt="Checkmark"
                className={styles.tourCard__newIcon}
              />
              <span className={styles.tourCard__newLabel}>New on Entrada</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
