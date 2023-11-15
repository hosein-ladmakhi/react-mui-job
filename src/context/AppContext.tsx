import { FC, PropsWithChildren, createContext, useState } from "react";
import { TAppContext } from "../types/models";
import { TObject } from "../types/general";

export const appContext = createContext<TAppContext>({
   isOpenDrawer: false,
   handleDrawerStatus: () => {},
   isOpenModal: false,
   modalSubject: "",
   handleModalSubject: () => {},
   handleModalStatus: () => {},
   modalContent: {},
   handleModalContent: (content: TObject) => {},
   handleOpenModal: (content: TObject, subject: string) => {},
});

export const AppContextProvider: FC<PropsWithChildren> = ({ children }) => {
   const [isOpenDrawer, setIsOpenDrawer] = useState<boolean>(false);
   const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
   const [modalSubject, setModalSubject] = useState<string>("");
   const [modalContent, setModalContent] = useState<TObject>({});

   const handleDrawerStatus = (visible: boolean) => {
      setIsOpenDrawer(visible);
   };

   const handleModalStatus = (visible: boolean) => {
      setIsOpenModal(visible);
      if (!visible) {
         handleModalContent({});
         handleModalSubject("");
      }
   };

   const handleModalSubject = (subject: string) => {
      setModalSubject(subject);
   };

   const handleModalContent = (content: TObject) => {
      setModalContent(content);
   };

   const handleOpenModal = (content: TObject, subject: string) => {
      setIsOpenModal(true);
      setModalSubject(subject);
      setModalContent(content);
   };

   return (
      <appContext.Provider
         value={{
            isOpenDrawer,
            handleDrawerStatus,
            isOpenModal,
            handleModalStatus,
            modalSubject,
            handleModalSubject,
            modalContent,
            handleModalContent,
            handleOpenModal,
         }}
      >
         {children}
      </appContext.Provider>
   );
};
