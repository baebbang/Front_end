export interface MenuLevel3 {
  id: string;
  label: string;
}

export interface MenuLevel2 {
  id: string;
  label: string;
  children?: MenuLevel3[];
}

export interface MenuLevel1 {
  id: string;
  label: string;
  children?: MenuLevel2[];
}
