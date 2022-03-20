import NextImage from 'next/image';
import { ImageProps } from 'next/dist/client/image';

const customLoader = ({ src }: { src: string }) => {
  return src;
};

export default function Image(props: ImageProps) {
  return (
    <NextImage
      {...props}
      unoptimized={true}
      loader={customLoader}
    />
  );
}
