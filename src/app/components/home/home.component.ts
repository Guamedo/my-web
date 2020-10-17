import {Component, OnInit} from '@angular/core';

import {Education} from '../../models/Edudation';
import {Work} from '../../models/Work';
import {Course} from '../../models/Course';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  activeTab: string = 'aboutMe';
  educationList: Education[] = [];
  workList: Work[] = [];
  coursesList: Course[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.educationList.push({
      title: 'Degree in Computer Engineering',
      university: 'University of the Basque Country ',
      startDate: 'September 2014',
      endDate: 'September 2018',
      description: [
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, ratione!',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet delectus doloribus magni. Autem, dolorum eos?',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aspernatur eveniet nemo optio.'
      ]
    });
    this.educationList.push({
      title: 'Master\'s Degree in Computational Engineering and Intelligent Systems',
      university: 'University of the Basque Country ',
      startDate: 'October 2018',
      endDate: 'September 2019',
      description: [
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, ratione!',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet delectus doloribus magni. Autem, dolorum eos?',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aspernatur eveniet nemo optio.'
      ]
    });

    this.workList.push({
      centre: 'Vicomtech',
      post: 'Student in Practice',
      startDate: 'January 2019',
      endDate: 'September 2019',
      activity: [
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, ratione!',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet delectus doloribus magni. Autem, dolorum eos?',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aspernatur eveniet nemo optio.'
      ]
    });

    this.workList.push({
      centre: 'Vicomtech',
      post: 'Research Assistant',
      startDate: 'October 2019',
      endDate: 'Present',
      activity: [
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, ratione!',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet delectus doloribus magni. Autem, dolorum eos?',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aspernatur eveniet nemo optio.'
      ]
    });

    this.coursesList.push({
      title: 'CS50\'s Web Programming with Python and JavaScript',
      place: 'edX',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet debitis exercitationem illum, in modi repudiandae tempore vitae. Atque dignissimos et ex laborum maiores quo saepe, tempore ullam. Et expedita fugiat perspiciatis vitae? Accusantium architecto ea eaque eius esse minima nemo qui quo sit? Aperiam consectetur doloremque facere illum odio reprehenderit?',
      technologies: [
        'HTML, CSS',
        'Git',
        'Python',
        'Django',
        'SQL',
        'JavaScript',
        'UI, React',
        'Testing, CI/CD',
        'Scalability and Security'
      ]
    });

    this.coursesList.push({
      title: 'Angular Front to Back (Brad Traversy)',
      place: 'Udemy',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet debitis exercitationem illum, in modi repudiandae tempore vitae. Atque dignissimos et ex laborum maiores quo saepe, tempore ullam. Et expedita fugiat perspiciatis vitae? Accusantium architecto ea eaque eius esse minima nemo qui quo sit? Aperiam consectetur doloremque facere illum odio reprehenderit?',
      technologies: [
        'Node.js',
        'Angular',
        'Git Bash',
        'Typscript',
        'Firebase, Firestore and AngularFire',
        'Flash Messaging'
      ]
    });
  }

}
