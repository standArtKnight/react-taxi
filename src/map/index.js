import React from "react";
import mapboxgl from "mapbox-gl";
import UserContext from "../UserContext";

mapboxgl.accessToken =
  "pk.eyJ1Ijoic3RhbmRhcnRrbmlnaHQiLCJhIjoiY2syaXIzdXgxMGxtbTNubzBjMnp2bjlvZyJ9.qfQjstEBG5_sfTA10zITWA";

export class Map extends React.Component {
  static contextType = UserContext;

  componentDidMount() {
    if (this.context.isLoggedIn) {
      this.map = new mapboxgl.Map({
        container: this.mapContainer,
        style: "mapbox://styles/standartknight/ck2j8nrlp2lzl1cs29uacdifz",
        center: [55.97412, 54.71864],
        zoom: 12.71
      });
    }
  }

  componentWillUnmount() {
    if (this.context.isLoggedIn) {
      this.map.remove();
    }
  }

  render() {
    const style = {
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      width: "100%",
      height: "90vh"
    };

    return (
      <UserContext.Consumer>
        {user => {
          if (!user.isLoggedIn) {
            return <h1>Сначала залогиньтесь</h1>;
          }
          return <div style={style} ref={el => (this.mapContainer = el)} />;
        }}
      </UserContext.Consumer>
    );
  }
}
