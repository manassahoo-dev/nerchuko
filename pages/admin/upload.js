import { InboxOutlined } from '@ant-design/icons';
import { Button, Card, Layout, message, Table, Typography, Upload } from 'antd';
import { useEffect, useState } from 'react';
import * as XLSX from 'xlsx';
import AuthHeader from "../../components/AuthHeader";
import privateRoute from "../../components/PrivateRoute";
import SideNavBar from "../../components/SideNavBar";
import axios from 'axios';

const { Dragger } = Upload;
const { Content } = Layout;
const { Title } = Typography;

function AdminUpload() {
    const [loading, setLoading] = useState(true);
    const [topics, setTopics] = useState([]);
    const [error, setError] = useState(null);
    const [fileList, setFileList] = useState([]);
    const [uploading, setUploading] = useState(false);
    const [dataSource, setDataSource] = useState([]);

    const columns = [
        { title: 'English', dataIndex: 'engPhrase', key: 'engPhrase' },
        { title: 'Telugu', dataIndex: 'nonEngPhrase', key: 'nonEngPhrase' },
        { title: 'Transliteration', dataIndex: 'transliteration', key: 'transliteration' },
        { title: 'Topic', dataIndex: 'topic', key: 'topic' },
    ];

    const onClick = () => {
        axios.post(`${process.env.NEXT_PUBLIC_API_URL}/phrases`, dataSource)
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                console.error(error)
            }).then(function () {
                setLoading(false)
            });
    }

    useEffect(() => {
        fileList.map(file => {
            var name = file.name;
            const reader = new FileReader();
            reader.onload = (evt) => {
                const bstr = evt.target.result;
                const wb = XLSX.read(bstr, { type: 'binary' });
                const sheets = wb.SheetNames;
                let dataSource = [];
                sheets.map(sheet => {
                    console.log(sheet);
                    const ws = wb.Sheets[sheet];
                    let data = XLSX.utils.sheet_to_json(ws);
                    data = data.map(item => {
                        item['topic'] = sheet
                        return item;
                    })
                    setDataSource(data);
                })
            };
            reader.readAsBinaryString(file);

        })
    }, [fileList]);

    const props = {
        name: 'file',
        multiple: true,
        beforeUpload: file => {
            setFileList([...fileList, file]);
            return false;
        },
        onChange(info) {
            const { status } = info.file;
            if (status === 'done') {
                message.success(`${info.file.name} file uploaded successfully.`);
            } else if (status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            } else if (status === "removed") {
                message.success('removed');
                setFileList(fileList.filter(element => info.file.name !== element.name));
            }
        },
        onDrop(e) {
            console.log('Dropped files', e.dataTransfer.files);
        },
    };

    return (
        <Layout className="min-vh-100">
            <SideNavBar />
            <Layout>
                <AuthHeader />
                <Content>
                    <Title>Upload</Title>
                    <Card>
                        <Dragger {...props}>
                            <p className="ant-upload-drag-icon">
                                <InboxOutlined />
                            </p>
                            <p className="ant-upload-text">Click or drag file to this area to upload</p>
                            <p className="ant-upload-hint">
                                Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                                band files
    </p>
                        </Dragger>
                    </Card>
                    {dataSource.length > 0 &&
                        <>
                            <Table dataSource={dataSource} columns={columns} rowKey="engPhrase" />
                            <Button type="primary" onClick={onClick}>Submit</Button>
                        </>
                    }
                </Content>
            </Layout>
        </Layout>
    )
}
export default privateRoute(AdminUpload);
