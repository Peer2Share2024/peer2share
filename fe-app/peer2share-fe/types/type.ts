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

  export type Courses = {
    notename: string
    coursename: string
    university: string
    faculity: string
    numberoflikes: number

  }