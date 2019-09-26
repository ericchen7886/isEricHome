import React from 'react'
import Paper from '@material-ui/core/Paper';

import styled from 'styled-components';

const Style = require("./PaperItem_style.module.css");

export const PaperItem = (props) => {
    const { title, content, PaperColor } = props;
    const paperColor = {
        backgroundColor: PaperColor,
      };

    return (
        <div className={Style.root}>
            <Paper className={Style.title} style={paperColor}>
                <div className={Style.content} > 
                    <h4 className={Style.textTitle}>
                    {title}
                    </h4>
                    <p className={Style.textValue}>
                        {content}
                    </p>
                </div>               
            </Paper>
        </div>
    )
}

export default PaperItem;