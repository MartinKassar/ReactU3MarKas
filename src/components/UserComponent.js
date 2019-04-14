import React from 'react'
import PropTypes from "prop-types";

// This is a functional component that renders out the user list we sent in as props and the color we send in as props.
export const UserComponent = ({ myList, userColor }) => (
    <div>
        <ul style={{ color: userColor }}>
            {myList}
        </ul>
    </div>

)


UserComponent.propTypes = {
    myList: PropTypes.array,
    userColor: PropTypes.string
}

export default UserComponent