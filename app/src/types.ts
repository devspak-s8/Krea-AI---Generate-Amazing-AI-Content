import { ReactNode } from "react";

export interface Tool {
  id: string;
  name: string;
  description: string;
  category: string;
  isNew?: boolean;
  isPro?: boolean;
  icon: ReactNode;
  color: string;
}

export interface CarouselItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  buttonText: string;
  type: string;
}
