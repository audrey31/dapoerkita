const MenuInfo = ({rating}) => {
    return ( 
        <div className="menu-info">
            <div className="rating-menu">
                <div className="rating-value"><img src="https://cdn.discordapp.com/attachments/769141849545506826/951866647696769054/Star.png"/> {rating}</div>
                <div className="rating-desc menu-info-text">100+ ulasan</div>
            </div>
            <div className="distance-menu">
                <div className="distance-value"><img src="https://cdn.discordapp.com/attachments/769141849545506826/951866228107018240/Location.png"/> 2.15 km</div>
                <div className="distance-desc menu-info-text">jarak</div>
            </div>
            <div className="discount-menu">
                <div className="discount-value "><img src="https://cdn.discordapp.com/attachments/769141849545506826/951866346067611749/Discount.png"/> 30% makanan</div>
                <div className="discount-desc menu-info-text">diskon tersedia</div>
            </div>
            <div className="time-menu">
                <div className="time-value "><img src="https://cdn.discordapp.com/attachments/769141849545506826/951866484659994725/Time_Circle.png"/> 25 menit</div>
                <div className="time-desc menu-info-text">waktu antar</div>
            </div>    
        </div>
     );
}
 
export default MenuInfo;