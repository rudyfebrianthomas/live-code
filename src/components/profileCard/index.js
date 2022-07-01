import React from "react";
import { Card, Avatar } from "antd";
import {
  EditOutlined,
  SettingOutlined,
  HeartTwoTone
} from "@ant-design/icons";

const ProfileCard = (props) => {
  const { Meta } = Card;
  return (
    <Card
      key={props.key}
      style={{ width: 300, marginTop: 16 }}
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <HeartTwoTone twoToneColor="" />
      ]}
    >
      <Meta
        avatar={<Avatar src={props.picture} />}
        title={props.name}
        description={props.email}
      />
    </Card>
  );
};

export default ProfileCard;
