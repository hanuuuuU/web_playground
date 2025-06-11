import React, { useEffect, useState } from "react";

import { Button, ConfigProvider, Flex, Avatar, List } from "antd";

export default function Board() {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPostList(data);
      });
  }, []);

  function removeItem() {}

  return (
    <div style={{ maxWidth: "960px", margin: "auto" }}>
      <List
        itemLayout="horizontal"
        dataSource={postList}
        renderItem={(item, index) => {
          console.log(item);
          return (
            <div>
              <List.Item>
                <List.Item.Meta
                  avatar={
                    <Avatar
                      src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
                    />
                  }
                  title={<a href="https://ant.design">{item.title}</a>}
                  description={item.body}
                />
                <Flex vertical gap="small" align="end">
                  <Flex gap="small" wrap>
                    <Button color="primary" variant="outlined">
                      수정
                    </Button>
                    <Button color="primary" variant="solid">
                      삭제
                    </Button>
                  </Flex>
                </Flex>
              </List.Item>
            </div>
          );
        }}
      />
    </div>
  );
}
