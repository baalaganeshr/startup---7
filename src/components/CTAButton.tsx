import {ButtonHTMLAttributes} from 'react';

type Variant = 'solid' | 'outline' | 'ghost';
type Size = 'sm' | 'md';

type CTAButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
};

export default function CTAButton({
  variant = 'solid',
  size = 'md',
  fullWidth = false,
  className = '',
  children,
  ...rest
}: CTAButtonProps) {
  const base = 'uppercase tracking-[0.2em] font-semibold transition-all duration-400 flex items-center justify-center gap-3';
  const sizes: Record<Size, string> = {
    sm: 'px-5 py-3 text-[10px]',
    md: 'px-7 py-3.5 text-[11px] md:text-[12px]'
  };
  const variants: Record<Variant, string> = {
    solid: 'bg-[#F5F2ED] text-[#050505] hover:bg-[#C5A059] hover:text-white shadow-lg shadow-black/20',
    outline: 'border border-[#F5F2ED]/40 text-[#F5F2ED] hover:border-[#C5A059] hover:text-[#C5A059]',
    ghost: 'text-[#F5F2ED] hover:text-[#C5A059]'
  };

  const width = fullWidth ? 'w-full' : '';

  return (
    <button className={`${base} ${sizes[size]} ${variants[variant]} ${width} ${className}`} {...rest}>
      {children}
    </button>
  );
}