export interface SearchOption {
  value: string;
  label: string;
}

export interface LocationOption extends SearchOption {}
export interface PropertyTypeOption extends SearchOption {}
export interface BudgetOption extends SearchOption {}
export interface ConfigurationOption extends SearchOption {}
