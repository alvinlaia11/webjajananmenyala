export default function Logo({ className }) {
  return (
    <svg 
      width="40" 
      height="40" 
      viewBox="0 0 40 40" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path 
        d="M20 5C16.5 12 18 16 20 18C22 20 24 22 24 26C24 30 21 34 17 35C23 36 29 32 31 27C33 22 31 17 28 14C25 11 23.5 8 20 5Z" 
        fill="currentColor"
      />
      <path 
        d="M10 25C10 32 14.477 35 20 35C25.523 35 30 32 30 25C30 18 25.523 15 20 15C14.477 15 10 18 10 25Z" 
        stroke="currentColor" 
        strokeWidth="2" 
        fill="none"
      />
    </svg>
  );
} 