import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SectionDivider = ({ title, urlLink, seeAll }) => {
  const url = `/${urlLink}`;
  const navigate = useNavigate();
  const moveData = () => {
    navigate("/market-list", {
      state: {
        id: 1,
        teks: "",
        kategori: "",
      },
    });
  };

  return (
    <div className="section-divider">
      <div className="section-title text-bold">{title}</div>
      <div className="section-more" onClick={moveData}>
        {seeAll}
      </div>
    </div>
  );
};

export default SectionDivider;
