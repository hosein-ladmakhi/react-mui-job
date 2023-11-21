import {
   List,
   ListItem,
   ListItemButton,
   ListItemText,
   Collapse,
} from "@mui/material";
import React, { useState } from "react";
import { FC } from "react";
import { icons } from "../../constant/icons";

interface INestedListProps {
   data: any[];
   itemKey: string;
   itemValue: string;
   itemChildren?: string;
   handleClick?: (item: any) => void;
}

const NestedList: FC<INestedListProps> = ({
   data,
   itemKey,
   itemValue,
   itemChildren,
   handleClick,
}) => {
   const [currentParent, setCurrentParent] = useState<number>();

   const handleSelectListItem = (selectedItem: any) => {
      if (itemChildren && selectedItem?.[itemChildren]?.length > 0) {
         const newParent = selectedItem?.[itemKey];
         setCurrentParent(currentParent === newParent ? undefined : newParent);
      } else {
         handleClick!(selectedItem);
      }
   };

   return (
      <List dense disablePadding>
         {React.Children.toArray(
            data?.map((item) => (
               <>
                  <ListItem disableGutters disablePadding>
                     <ListItemButton
                        onClick={handleSelectListItem.bind(null, item)}
                     >
                        <ListItemText>{item?.[itemValue]}</ListItemText>
                        {itemChildren && item?.[itemChildren]?.length > 0 && (
                           <>
                              {item?.[itemKey] === currentParent ? (
                                 <icons.MuiExpandLess fontSize="small" />
                              ) : (
                                 <icons.MuiExpandMore fontSize="small" />
                              )}
                           </>
                        )}
                     </ListItemButton>
                  </ListItem>
                  {itemChildren && item?.[itemChildren]?.length > 0 && (
                     <Collapse in={item?.[itemKey] === currentParent}>
                        <List dense>
                           {React.Children.toArray(
                              item?.[itemChildren]?.map((subItem: any) => (
                                 <ListItem>
                                    <ListItemButton
                                       onClick={handleClick?.bind(
                                          null,
                                          subItem
                                       )}
                                    >
                                       <ListItemText>
                                          {subItem?.[itemValue]}
                                       </ListItemText>
                                    </ListItemButton>
                                 </ListItem>
                              ))
                           )}
                        </List>
                     </Collapse>
                  )}
               </>
            ))
         )}
      </List>
   );
};

NestedList.defaultProps = {
   handleClick: () => {},
};

export default NestedList;
