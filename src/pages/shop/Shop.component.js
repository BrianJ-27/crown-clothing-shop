import React, { Component } from "react";
import ShopData from "./Shop.data";
import CollectionPreview from "../../components/collection-preview/Collection-preview.component";

class ShopPage extends Component {
  constructor(props) {
    super(props); // To have access to our state we use the super method

    this.state = {
      collections: ShopData,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
