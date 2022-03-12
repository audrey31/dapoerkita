import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import SectionDivider from "../components/SectionDivider";
import MenuCard from "./MenuCard";
import MenuInfo from "./MenuInfo";
import Comments from "./Comments";
import RateUs from "./RateUs";
import ChatBar from "./ChatBar";

const MarketView = ({ toko, menu, funfact, rating, komentar, idToko }) => {
  return (
    <>
      <div className="marketview-wrapper">
        <h1>{toko}</h1>
      </div>
      <MenuInfo rating={rating} />
      <div className="marketview-wrapper">
        <Link to="/blog-list" style={{ textDecoration: "none" }}>
          <div className="marketview-mini">
            <div className="mini-wrapper">
              <img src="https://cdn.discordapp.com/attachments/807279199429197845/951788134713135154/smile-img.png" />
              <div className="marketview-mini-text">
                Lihat artikel dan video terkait
              </div>
            </div>
            <img src="https://cdn.discordapp.com/attachments/807279199429197845/951790409598775336/Arrow_Right.png"></img>
          </div>
        </Link>
        <SectionDivider title="Penawaran Hari Ini" />
        {menu.map((makanan) => (
          <MenuCard
            makanan={makanan.nama}
            harga={makanan.harga}
            funfact={funfact}
            key={makanan.id}
          />
        ))}
        <div className="best-seller">
          <SectionDivider title="Best Seller" />
          {menu.map((makanan) => (
            <MenuCard
              makanan={makanan.nama}
              harga={makanan.harga}
              funfact={funfact}
              key={makanan.id}
            />
          ))}
        </div>
        <div className="rate-us">
        <SectionDivider title="Rate us" />
        <RateUs idToko={idToko} />
        </div>
        <div className="comments">
        <SectionDivider title="Ulasan" />
        {komentar.map((komen) => (
          <Comments key={komen.id} komentar={komen.teks} />
        ))}
        <ChatBar idToko={idToko}/>
        </div>
      </div>
      <Navbar />
    </>
  );
};

export default MarketView;
