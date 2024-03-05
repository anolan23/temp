import clsx from 'clsx';
import styles from './index.module.scss';
import { Link, To } from 'react-router-dom';

// Base interface for common properties
interface BaseButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  color?: 'transparent' | 'sky-blue' | 'red' | 'primary';
}

// Interface for default button variant
interface DefaultButtonProps extends BaseButtonProps {
  variant?: 'default';
}

// Interface for link button variant
interface LinkButtonProps extends BaseButtonProps {
  variant: 'link';
  to: To;
}

// Union type for ButtonProps
type ButtonProps = DefaultButtonProps | LinkButtonProps;

export function Button({
  variant = 'default',
  color = 'primary',
  children,
  ...props
}: ButtonProps) {
  const className = clsx(styles.root, styles[color]);

  if (variant === 'link') {
    const { to } = props as LinkButtonProps;
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
}
