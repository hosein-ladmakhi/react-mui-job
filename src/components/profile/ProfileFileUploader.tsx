import { FC, useEffect, useState } from "react";
import { FileUploader } from "@/common/kit";
import { useViewport } from "@/hooks";

interface IProfileFileUploaderProps {
  imageRef: { current?: File };
}

const ProfileFileUploader: FC<IProfileFileUploaderProps> = ({ imageRef }) => {
  const { isDesktop } = useViewport();
  const [avatar, setAvatar] = useState<File>();
  const onChangeAvatar = (file?: File) => setAvatar(file);

  useEffect(() => {
    imageRef.current = avatar;
  }, [avatar]);

  const printInput = () => {
    return <FileUploader avatarHeight="120px" avatarWidth="120px" file={avatar} onChangeFile={onChangeAvatar} />;
  };

  return isDesktop ? printInput() : <center>{printInput()}</center>;
};

export default ProfileFileUploader;
