import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-new-activity',
  templateUrl: './new-activity.component.html',
  styleUrls: ['./new-activity.component.scss'],
})
export class NewActivityComponent implements OnInit {
  activityCards = [
    {
      title: 'Connect to your Application and Data',
      icon: 'devices',
      label: ' Deliver new content to users.',
      url: '/admin-panel/category',
    },
    {
      title: 'Edit applications and data connection',
      icon: 'edit',
      label: 'Review and edit content user already recieved.',
      url: '/',
    },
    {
      title: 'Fine Tune your connections',
      icon: 'tune',
      label: 'Customize services , data formats and tasks.',
      url: '/admin-panel/category',
    },
    {
      title: 'Organize content on your devices',
      icon: 'widgets',
      label: 'Manage device home screens and workspaces.',
      url: '/admin-panel/category',
    },
    {
      title: 'Manage users and access',
      icon: 'group',
      label: 'Manage users, users profiles and groups.',
      url: '/admin-panel/category',
    },
    {
      title: 'Manage webalo Production ORD Account',
      icon: 'list_alt',
      label: 'Manage accounts plan and content.',
      url: '/admin-panel/category',
    },
    {
      title: 'View tutorials and browse manual',
      icon: 'live_help',
      label: 'Find online help , report a problem or request support.',
      url: '/admin-panel/category',
    },
  ];

  constructor(private location: Location) {}
  backClicked() {
    this.location.back();
  }
  ngOnInit(): void {}
}
