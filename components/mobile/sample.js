import { List } from 'antd-mobile';

const Item = List.Item;
const Brief = Item.Brief;

const MobileSample = () => {
    const data = [
        {
            "id": 1,
            "name": "Greetings",
            "imageUrl": "https://image.flaticon.com/icons/svg/1006/1006555.svg"
        },
        {
            "id": 2,
            "name": "Numbers",
            "imageUrl": "https://image.flaticon.com/icons/svg/2890/2890747.svg"
        },
        {
            "id": 3,
            "name": "Family",
            "imageUrl": "https://image.flaticon.com/icons/svg/2219/2219802.svg"
        },
        {
            "id": 4,
            "name": "Vegetables",
            "imageUrl": "https://image.flaticon.com/icons/svg/2921/2921855.svg"
        },
        {
            "id": 5,
            "name": "Fruits",
            "imageUrl": "https://image.flaticon.com/icons/svg/2224/2224249.svg"
        },
        {
            "id": 6,
            "name": "Colors",
            "imageUrl": "https://image.flaticon.com/icons/svg/1831/1831908.svg"
        },
        {
            "id": 7,
            "name": "Days",
            "imageUrl": "https://image.flaticon.com/icons/svg/2922/2922993.svg"
        }
    ];
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
};

export default MobileSample;