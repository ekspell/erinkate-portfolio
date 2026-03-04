interface Review {
  stars: number;
  title: string;
  text: string;
  author: string;
  date: string;
}

export function CaseStudyReviews({ reviews }: { reviews: Review[] }) {
  return (
    <div className="cs-reviews">
      {reviews.map((review) => (
        <div key={review.author} className="cs-review-card">
          <div className="cs-review-stars">
            {"★".repeat(review.stars)}
          </div>
          <h4 className="cs-review-title">{review.title}</h4>
          <p
            className="cs-review-text"
            dangerouslySetInnerHTML={{ __html: review.text }}
          />
          <p className="cs-review-attr">
            {review.author} · {review.date}
          </p>
        </div>
      ))}
    </div>
  );
}
