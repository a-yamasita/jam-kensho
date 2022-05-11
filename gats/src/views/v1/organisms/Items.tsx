import React, { useEffect } from 'react';

import Item from '../molecules/Item';
import Box from '../atoms/Box';

/*
import {
    as _
} from '@mui/material';

export default function _(props) {
    return (<_ {...props}>{props.children}</_>);
}
*/

export default function Items() {
    useEffect(() => {
        //console.log(window.gtag);
    });

    const items = [
        {
            id: 1,
            name: 'hoge',
            description: 'hogehoge'
        },
        {
            id: 2,
            name: 'fuga',
            description: 'fugafuga'
        },
        {
            id: 3,
            name: 'piyo',
            description: 'piyopiyo'
        },
    ];

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                p: 1,
                m: 1
            }}
        >
            {
                items.map((item: any, idx: number) => {
                    return (
                        <Item
                            key={item.id}
                            idx={idx}
                            title={item.name}
                            description={item.description}
                        />
                    );
                })
            }
        </Box>
        );
}