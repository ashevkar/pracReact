import React from 'react'

const DessertsList = (props) => {
    const filterDessert = props.data
        .filter((dessert) => {
            return dessert.calories < 500
        })
        .sort((a ,b ) => {
            return b.calories - a.calories
        })
        .map((dessert) => {
            return (<li>${dessert.name} - ${dessert.calories}</li>)
        })




  return (
    <ul>{filterDessert}</ul>
)
}

export default DessertsList