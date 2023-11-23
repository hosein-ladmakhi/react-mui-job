import React, { FC, PropsWithChildren } from "react";
import { Helmet } from "react-helmet";
import { ISeoMetas } from "./index.type";

interface ISeoLayoutProps extends PropsWithChildren {
  title: string;
  contents?: ISeoMetas;
}

const SeoLayout: FC<ISeoLayoutProps> = ({ children, title, contents }) => {
  return (
    <>
      <Helmet>
        <title>{title} | Job Portal</title>
        {React.Children.toArray(contents?.map((content) => <meta name={content.key} content={content.value} />))}
      </Helmet>
      {children}
    </>
  );
};

export default SeoLayout;
