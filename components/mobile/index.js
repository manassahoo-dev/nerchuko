import React from 'react';

import Link from 'next/link'
import { List } from 'antd-mobile';

const Item = List.Item;

const MobileTopicsIndex = (props) => {
    const { data } = props

    return (
        <List renderHeader={() => 'Topics'}>
            {data.map((item, key) =>
                <Link href={`/topics/${item.name}`} key={key}>
                    <a>
                        <Item
                            arrow="horizontal"
                            thumb={item.imageUrl}
                            multipleLine
                            onClick={() => { }}
                        >
                            {item.name}
                        </Item>
                    </a>
                </Link>
            )}
        </List>
    )
}
export default MobileTopicsIndex;