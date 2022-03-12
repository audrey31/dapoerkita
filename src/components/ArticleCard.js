const ArticleCard = () => {
  return (
    <div className="food-card">
      <div className="box-shadow">
        <div className="blogger-desc">
          <img src="https://cdn.discordapp.com/attachments/807279199429197845/949903382385139722/unknown.png" alt="thumbnail"></img>
          <div className="video-desc">
            <div className="blogger-text text-small">
              {" "}
              Ramen From Hell Suhat
            </div>
            <div className="blogger-info">
              <div className="wrapper-info text-small grey">
                Aditya Ikhwan • 1.8k • 51 menit yang lalu
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
