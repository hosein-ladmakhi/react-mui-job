import React from "react";

export const preventParentEvent = (event: React.MouseEvent) =>
   event.stopPropagation();
