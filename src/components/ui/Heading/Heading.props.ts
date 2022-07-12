import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export default interface HeadingProps
	extends DetailedHTMLProps<
		HTMLAttributes<HTMLHeadingElement>,
		HTMLHeadingElement
	> {
	children: ReactNode;
	type?: 'h1' | 'h3';
}
