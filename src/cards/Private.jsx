import React from "react";

import Config from "../data/Config";
import Currency from "../util/Currency";
import GameCompanyToken from "../tokens/GameCompanyToken";
import Hex from "../Hex";
import Icon from "../atoms/Icon";
import Svg from "../Svg";
import Tile from "../Tile";
import Token from "../tokens/Token";

import { getMapHex } from "../map/util";

import "./private.scss";

const Private = ({ name, note, price, revenue, bid, players, description, icon, hex, tile, token, company }) => {
  return (
    <div className="cutlines">
      <div className="card private">
        <div className="card__bleed">
          <div className="card__body">
            <div className="private__name">{name}</div>
            {note && <div className="private__note">{note}</div>}
            <div className="private__description">
              <Config>
                {(config, game) => {
                  if (hex) {
                    let hexData = getMapHex(game, hex);
                    return (<div className="private__hex">
                         <Svg viewBox="-80 -80 160 160">
                           <Hex hex={hexData} id={hex} border={true} map={true} />
                         </Svg>
                       </div>);
                  } else {
                    return null;
                  }
                }}
              </Config>
              {tile && <div className="private__tile">
                         <Svg viewBox="-80 -80 160 160">
                           <Tile id={tile} border={true} />
                         </Svg>
                      </div>}
              {company && <div className="private__company">
                           <Svg viewBox="-15 -15 30 30">
                             <GameCompanyToken abbrev={company} outlineWidth={2} width={15} />
                           </Svg>
                         </div>}
              {token && <div className="private__company">
                           <Svg viewBox="-15 -15 30 30">
                             <Token {...token} outlineWidth={2} width={15} />
                           </Svg>
                         </div>}
              {icon && <div className="private__icon">
                        <Svg viewBox="-15 -15 30 30">
                          <Icon type={icon} />
                        </Svg>
                      </div>}
              {description}
            </div>
            {bid && <div className="private__bid">Min Bid: {bid}</div>}
            <div className="private__price"><Currency value={price} type="private"/></div>
            {players && <div className="private__players">{players}</div>}
            {revenue !== undefined && <div className="private__revenue">Revenue: <Currency value={revenue} type="private"/></div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Private;
