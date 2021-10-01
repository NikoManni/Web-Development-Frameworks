import React from 'react'
import styles from './SearchResult.module.css';


export default function SearchResult(props) {
    return (
        <div>
            <div> <img src = {`/images/${props.image}`} /> </div>
            <div> { props.brand } </div>
            <div> { props.type } </div>
            <div> Color: { props.color } </div>
            <div> Weight: { props.weight } </div>
            <div className = { styles.price }> { props.price }€ </div>

        </div>
    )
}
