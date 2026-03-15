import {useState, ImgHTMLAttributes} from 'react';

type SafeImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  fallbackSrc?: string;
};

const defaultFallback =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='800' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0%25' x2='100%25' y1='0%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%230b0b0b'/%3E%3Cstop offset='100%25' stop-color='%23141414'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='800' fill='url(%23g)'/%3E%3Ctext x='50%25' y='50%25' fill='%23c5a059' font-family='Montserrat, sans-serif' font-size='42' font-weight='400' text-anchor='middle' dominant-baseline='middle' letter-spacing='4'%3EAETHERION%3C/text%3E%3C/svg%3E";

export default function SafeImage({src, alt, fallbackSrc = defaultFallback, ...rest}: SafeImageProps) {
  const [currentSrc, setCurrentSrc] = useState(src || fallbackSrc);

  return (
    <img
      {...rest}
      src={currentSrc}
      alt={alt}
      onError={() => setCurrentSrc(fallbackSrc)}
      referrerPolicy="no-referrer"
    />
  );
}