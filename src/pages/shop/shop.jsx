import React from 'react';
import data from './shop.data.js'
import PreviewCollection from '../../components/preview-collection/preview-collection.jsx'

class ShopPage extends React.Component {

   constructor(props) {
      super(props);
      this.state = {
         collection: data
      };
   }

   render() {
      // console.log('SHOP Page  ', this.state.collection)
      const { collections } = this.state.collection
      return (
         <div className='shop-page'>
            {this.state.collection.map(({id, ...collection}) => {
               return <PreviewCollection key={id} {...collection}/>
                
            })
            }
         </div>
      );
   };
}

export default ShopPage;