import { TObject } from "@/types/general";

export type TAppContext = {
  // drawer
  isOpenDrawer?: boolean;
  handleDrawerStatus: (visible: boolean) => void;

  // global modal
  isOpenModal?: boolean;
  modalSubject?: string;
  handleModalStatus: (visible: boolean) => void;
  handleModalSubject: (subject: string) => void;
  modalContent?: TObject;
  handleModalContent: (content: TObject) => void;
  handleOpenModal: (content: TObject, subject: string) => void;
};
