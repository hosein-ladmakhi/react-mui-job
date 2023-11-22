import { FC, useState } from "react";
import { FileUploader } from "@/common/kit";

const ProfileFileUploader: FC = () => {
  const [avatar, setAvatar] = useState<File>();
  const onChangeAvatar = (file?: File) => setAvatar(file);

  return <FileUploader avatarHeight="120px" avatarWidth="120px" file={avatar} onChangeFile={onChangeAvatar} />;
};

export default ProfileFileUploader;
