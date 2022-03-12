import { useState } from "react";
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

const Comments = ({komentar}) => {
    // console.log(komentar[0].teks);

    return ( 
        <div className="comments-card">
          <div className="box-shadow">
            <div className="market-desc">
              <div className="info-desc">
                <div className="market-text text-small">User  <ChatBubbleOutlineIcon fontSize="small"/></div>
                <div className="market-info">
                  <div className="wrapper-info text-small grey">
                    {komentar}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
     );
}
 
export default Comments;