const MenuCard = ({makanan, funfact, harga}) => {
    return ( 
        <div className="menucard-wrapper">
                <img src="https://cdn.discordapp.com/attachments/807279199429197845/951823347363233792/unknown.png"></img>
                <div className="menucard-item">
                    <div className="nama-makanan">{makanan}</div>
                    <div className="funfact">{funfact}</div>
                    <div className="harga-makanan">{harga}</div>
                </div>
        </div>
     );
}
 
export default MenuCard;