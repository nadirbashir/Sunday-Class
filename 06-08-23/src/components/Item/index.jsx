import { Button, Card } from "antd";
import { useRouter } from "next/router";

export default function Item({ item, width = 300 }) {
  const router = useRouter();

  return (
    <>
      <Card style={{ width }}>
        <h4>{item.title}</h4>
        {item.description}
        <div style={{ marginTop: "20px" }}>
          <Button type="primary" onClick={() => router.push(`/${item.id}`)}>
            View Details
          </Button>
        </div>
      </Card>
    </>
  );
}
