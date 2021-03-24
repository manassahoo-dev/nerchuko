import { Card, Typography } from 'antd';
import { useRouter } from "next/router";

const { Title } = Typography;
const { Meta } = Card;

export default function Alphabets() {
    const router = useRouter();
    const languages = router.query.languages;
    const gridStyle = {
        width: '10%',
        textAlign: 'center',
    };
    const data = [
        {
            "Vowel": "అ",
            "Transliteration": "a",
            "IPA pronounciation": "/a/"
        },
        {
            "Vowel": "ఆ",
            "Transliteration": "aa or A",
            "IPA pronounciation": "/ɑː/"
        },
        {
            "Vowel": "ఇ",
            "Transliteration": "i",
            "IPA pronounciation": "/ɪ/"
        },
        {
            "Vowel": "ఈ",
            "Transliteration": "I or ee",
            "IPA pronounciation": "/iː/"
        },
        {
            "Vowel": "ఉ",
            "Transliteration": "u",
            "IPA pronounciation": "/u/"
        },
        {
            "Vowel": "ఊ",
            "Transliteration": "U or oo",
            "IPA pronounciation": "/uː/"
        },
        {
            "Vowel": "ఋ",
            "Transliteration": "R",
            "IPA pronounciation": "/ru/"
        },
        {
            "Vowel": "ౠ",
            "Transliteration": "Ru",
            "IPA pronounciation": "/ruː/"
        },
        {
            "Vowel": "ఌ",
            "Transliteration": "- lu",
            "IPA pronounciation": "/lu/"
        },
        {
            "Vowel": "ౡ",
            "Transliteration": "- lu",
            "IPA pronounciation": "/luː/"
        },
        {
            "Vowel": "ఎ",
            "Transliteration": "e",
            "IPA pronounciation": "/e/"
        },
        {
            "Vowel": "ఏ",
            "Transliteration": "E",
            "IPA pronounciation": "/eː/"
        },
        {
            "Vowel": "ఐ",
            "Transliteration": "ai",
            "IPA pronounciation": "/ai/"
        },
        {
            "Vowel": "ఒ",
            "Transliteration": "o",
            "IPA pronounciation": "/o/"
        },
        {
            "Vowel": "ఓ",
            "Transliteration": "O",
            "IPA pronounciation": "/oː/"
        },
        {
            "Vowel": "ఔ",
            "Transliteration": "ou",
            "IPA pronounciation": "/au/"
        },
        {
            "Vowel": "అం",
            "Transliteration": "am or aM",
            "IPA pronounciation": "/oː/"
        },
        {
            "Vowel": "అః",
            "Transliteration": "ah",
            "IPA pronounciation": "/aha/"
        }
    ]
    return <div>
        <Title>{languages?.toUpperCase()} Alphabets</Title>
        <Card>
            {data.map((item, key) =>
                <Card.Grid style={gridStyle} key={key}>
                    <Meta title={item.Vowel} description={item.Transliteration} />
                </Card.Grid>
            )}
        </Card>
    </div>
}