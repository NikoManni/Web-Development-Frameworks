import React from 'react';
import App from '../App';
import styles from './MainPage.module.css';
import SearchResult from './SearchResult';


export default function MainPage(props) {

    return (
        
        <div className = { styles.container }> 
            <div className ={ styles.cells }>
            { props.items.map(item => <SearchResult key={item.id} {...item} />) }
            </div>
        </div>
    )
}
