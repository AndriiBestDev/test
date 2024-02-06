import React from "react";
import Image from "next/image";

interface ImgInterface {
    src: any;
    alt: string;
    width?: number;
    height?: number;
    className?: string;
    id?: string;
    style?: any;
}

export const Img: React.FC<ImgInterface> = ({src, alt, width, height, className, id, style}) => {
    return (
        <Image
            id={id || ""}
            src={src}
            alt={alt || ""}
            width={width || 1000}
            height={height || 1000}
            className={className}
            style={style ? style : null}
        />
    );
};
