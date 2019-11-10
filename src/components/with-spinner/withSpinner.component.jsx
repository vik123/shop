import React from 'react';

import './withSpinner.styles.scss';

const withSpinner = WarppedComponent => {
    const Spinner = ( {isloading, ...otherprops}) => {
        return isloading ?
            (
                <div className="SpinnerOverlay">
                    <div className="SpinnerContainer"></div>
                </div>
            )
            :
            (
                <WarppedComponent {...otherprops} />
            )
    }
    return Spinner;
}

export default withSpinner;