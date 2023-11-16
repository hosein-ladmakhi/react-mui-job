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
}

const NestedList: FC<INestedListProps> = ({
   data,
   itemKey,
   itemValue,
   itemChildren,
}) => {
   const [currentParent, setCurrentParent] = useState<number>();
   const onSelectParent = (newParent: number) => {
      setCurrentParent(currentParent === newParent ? undefined : newParent);
   };

   return (
      <List dense disablePadding>
         {React.Children.toArray(
            data?.map((item) => (
               <>
                  <ListItem disableGutters disablePadding>
                     <ListItemButton
                        onClick={onSelectParent.bind(null, item?.[itemKey])}
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
                                    <ListItemButton>
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

export default NestedList;
