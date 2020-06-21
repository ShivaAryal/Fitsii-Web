import React from 'react';
import { ImageWrap } from "../UiComponents/Layout";

export const ImgWrap = (props) => {


	return (
		<ImageWrap height={props.height} className={props.herobannerimage}>
			<img
				src={props.src}
				alt={props.alt}
				style={{ maxHeight: props.maxHeight, height: props.height, width: props.width }}
			/>
		</ImageWrap>
	);
};