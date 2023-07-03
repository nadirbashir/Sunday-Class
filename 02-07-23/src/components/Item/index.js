import { Button, Card } from "antd";
import { useEffect, useState } from "react"

export default function Item({ onDelete, item }) {
    const [likes, setLikes] = useState(0);

    useEffect(() => {
        console.log('Effect Running', likes)

        return () => console.log('Effect unmount')
    }, [likes])

    return (
        <>
            <Card style={{width:300}}
                cover={
                    <img
                      alt="example"
                      src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                  } >
                {item.description}{likes}
                <Button type="primary" onClick={() => setLikes(prev => prev + 1)}>Like</Button>
                <Button type="danger" onClick={() => onDelete(item.id)}>Delete</Button>
            </Card>
        </>
    )
}