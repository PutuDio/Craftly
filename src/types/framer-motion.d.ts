import { Variants } from 'framer-motion'

declare module 'framer-motion' {
  interface Variants {
    fadeInUp?: Variants
    fadeInDown?: Variants
    scaleIn?: Variants
  }
}
