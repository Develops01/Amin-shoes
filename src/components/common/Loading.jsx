import React from 'react';

import loadingGif from '../../img/loading.gif';

function Loading(props) {
    return (
        <div>
            <img src={loadingGif} alt="" />
        </div>
    );
}

export default Loading;