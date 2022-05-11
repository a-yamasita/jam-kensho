import React from 'react';
import Card from '../atoms/Card';
import CardHeader from '../atoms/CardHeader';
import CardContent from '../atoms/CardContent';
import CardMedia from '../atoms/CardMedia';
import Typography from '../atoms/Typography';

import { useDispatch } from 'react-redux';

import * as actions from '../../../states/models/item/actions';

/*
import {
    as _
} from '@mui/material';

export default function _(props) {
    return (<_ {...props}>{props.children}</_>);
}
*/

function sendConv(sendTo: string, value: number) {
    console.log("sendConv called");
    if ( typeof window !== 'undefined') {
        /*
        window.gtag('event', 'purchase', {
            value: value,
            currency: 'JPY',
            transaction_id: new Date(),
            items: [{
                item_id: value,
                item_name: sendTo
            }]
        });
        */
        console.log("Event sent: %s - %d", sendTo, value);
    }
}

export default function Item(props) {

    //console.log(props);
    const dispatch = useDispatch();
    const handleOnClick = () => {
        //gtag('event', 'download', { event_category: 'pdf', event_label: 'hoge', value: 100 });
        dispatch(actions.dummy());
    };
    return (
        <Card
            variant="outlined"
            sx={{
                width: 1/5,
                ml: 1,
                mr: 1
            }}
            onClick={ (e) => sendConv(props.title, (props.idx + 1) * 1000) }
        >
            <CardHeader
                title={props.title}
            />
            <CardContent
                onClick={handleOnClick}
            >
                <Typography variant="body2" paragraph>
                    { props.description ? props.description : 'Test Content' }
                </Typography>
            </CardContent>
            
        </Card>
    );
}