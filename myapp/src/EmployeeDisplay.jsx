import React from 'react'

export const EmployeeDisplay = (props) => {

    const {location,name}= props;
  return (
    <div>{location}  {name}</div>
  )
}
