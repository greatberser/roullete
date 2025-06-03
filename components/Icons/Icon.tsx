import React from 'react';
import { cn } from "@/lib/utils"; 

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: string; 
}

export function Icon({ name, className, ...props }: IconProps) {
  return (
    <svg className={cn("inline-block fill-current", className)} {...props}>
      <use xlinkHref={`/icons/sprite.svg#${name}`}></use>
    </svg>
  );
}