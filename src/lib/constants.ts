export const buttonClass =
  'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 focus:ring-0';

export const buttonVariants = {
  default: 'bg-primary text-primary-foreground hover:bg-primary/90',
  destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
  outline: 'border border-input bg-background hover:bg-accent/50 hover:text-accent-foreground',
  secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
  ghost: 'hover:bg-accent hover:text-accent-foreground',
  link: 'text-primary underline-offset-4 hover:underline'
};

export const buttonSizes = {
  default: 'h-10 px-4 py-2',
  sm: 'h-9 rounded-md px-3',
  lg: 'h-11 rounded-md px-8',
  icon: 'h-10 w-10'
};


export const DEFAULT_SUGGESTIONS = [
  {
    description: "New York, NY, USA",
  },
  {
    description: "London, United Kingdom",
  },
  {
    description: "Paris, France",
  },
  {
    description: "Sydney NSW, Australia",
  },
  {
    description: "Tokyo, Japan",
  },
]

export const DEFAULT_LOCATION = {
  lat: '40.0931191', lng: '-83.017962', city: 'Worthington, OH, USA'
}