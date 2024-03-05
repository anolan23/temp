import { OptionDefinition } from '../option';

interface BaseSelectProps {
  items: Items;
  selectedItem?: Item;
  placeholder?: string;
  triggerVariant?: 'label' | 'option';
  error?: string;
  invalid?: boolean;
  className?: string;
  loading?: boolean;
  loadingText?: string;
  errorText?: string;
  renderWithPortal?: boolean;
  onSelectChange: (item: Item) => any;
  onBlur?: React.FocusEventHandler<HTMLButtonElement>;
}

export interface SelectProps extends BaseSelectProps {}

export type Item = OptionDefinition;
export type Items = Item[];
