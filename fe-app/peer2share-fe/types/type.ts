export type SideNavItem = {
    title: string;
    path: string;
    icon?: JSX.Element;
    submenu?: boolean;
    subMenuItems?: SideNavItem[];
  };
  
  export type SideNavItemGroup = {
    title: string;
    menuList: SideNavItem[]
  }

  export type Notes = {

    count: number
    homeworks?: Homeworks[];
  }

  export type Homeworks = {
    id: number
    name: string
    university: string
    faculity: string
    numberoflikes: number
  }