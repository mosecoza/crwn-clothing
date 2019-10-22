import React from 'react';
import './preview-collection.scss';
import PreviewItem from '../preview-item/preview-item';


const PreviewCollection = ({ title, items }) => {
   return (<div className='collection-preview ' >
      <h1 >
         {title.toUpperCase()}
      </h1>
      <div className='preview' >
         {items.filter((item,idx)=>idx<4).map(({ id, ...otherItems }) => {
           
            return (<PreviewItem key={id} {...otherItems} />)

         })}
      </div>
   </div>)
}

export default PreviewCollection;