import {Injectable} from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  target?: boolean;
  name: string;
  type?: string;
  children?: ChildrenItems[];
}

export interface MainMenuItems {
  state: string;
  short_label?: string;
  main_state?: string;
  target?: boolean;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

export interface Menu {
  label: string;
  main: MainMenuItems[];
}

const MENUITEMS = [
  {
    label: 'Navigation',
    main: [
      {
        state: 'home',
        short_label: 'H',
        name: 'Home',
        type: 'link',
        icon: 'ti-home'
      },
      {
        state: 'wizard',
        short_label: 'L',
        name: 'Selling "Home Lisbon"',
        type: 'link',
        icon: 'ti-direction-alt'
      },
      {
        state: 'wizard',
        short_label: 'M',
        name: 'Buying "Home Marbella"',
        type: 'link',
        icon: 'ti-direction-alt'
      },
    ],
  },
  {
    label: 'Contact',
    main: [
      {
        state: 'Our website',
        short_label: 'O',
        external: 'http://smartdeed.io/',
        name: 'Our website',
        type: 'external',
        icon: 'ti-link',
        target: true
      }
    ]
  }
];

@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    return MENUITEMS;
  }

  /*add(menu: Menu) {
    MENUITEMS.push(menu);
  }*/
}
