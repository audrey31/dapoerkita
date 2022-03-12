const MenuCard = ({ gambar, makanan, funfact, harga }) => {
  return (
    <div className="menucard-wrapper">
      <img src={`${gambar}`}></img>
      <div className="menucard-item">
        <div className="nama-makanan">{makanan}</div>
        <div className="funfact">{funfact}</div>
        <div className="harga-makanan">{harga}</div>
      </div>
    </div>
  );
};

export default MenuCard;
