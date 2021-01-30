import React from 'react';

import Link from 'next/link'
import { List } from 'antd-mobile';

const Item = List.Item;

const MobileTopicsIndex = (props) => {
    const { data } = props

    return (
        <List renderHeader={() => 'Topics'}>
            {data.map((item, key) =>
                <Item
                    arrow="horizontal"
                    thumb={item.imageUrl}
                    multipleLine
                    onClick={() => { }}
                    key={key}
                >
                    {item.name}
                </Item>
            )}
        </List>
    )
}
export default MobileTopicsIndex;