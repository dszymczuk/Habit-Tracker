import React, { Component } from 'react';
import WelcomeSectionComponent from './WelcomeSection';
import firstImage from '../../images/undraw_High_five.svg';
import secondImage from '../../images/habit_loop.png';
import thirdImage from '../../images/undraw_to_do_list.svg';
import fourthImage from '../../images/undraw_country_side.svg';

const firstSectionTitle = "Build Habits That Stick";
const firstSectionText =
  `Habit Tracker helps you learn the most effective process,
  increase self-awareness and set priorities
  so achieving your goals is easier than ever.`;

const secondSectionTitle = "Use The Proven Process";
const secondSectionText =
  `Habit Loop from "The Power of Habit" bu Charles Duhigg is a process
  of forming a habit. First, there is a cue, a trigger that tells your brain
  to go into automatic mode and which habit to use. Then there is a routine
  which can be physical or mental or emotional. Finally, there is a reward
  which helps your brain figure out if this particular loop is worth
  remembering for the future.`;

const thirdSectionTitle = "Power of Writing Down";
const thirdSectionText =
  `Journaling daily is a powerful tool which helps you evaluate your experiences
  and increase self-awareness. Habit Tracker is based on the idea of Buller Journal
  by Ridel Carroll. It is descripted as a mindfullness practice disguised
  as productivity system.`;

const fourthSectionTitle = "Calm the Chaos by Setting Priorities";
const fourthSectionText =
`When we don't set priorities, we tend to follow the path of least resistance.
Choose 3 most important habits and focus on them to get the results. We believe
that saying "no" to some things determines what you can actually do.`;

class WelcomePage extends Component {
  render() {
    return (
      <div>
        <WelcomeSectionComponent
          header={ firstSectionTitle }
          text={ firstSectionText }
          image={ firstImage }
          textPlacement="left"
          sectionNo="first"
        />
        <WelcomeSectionComponent
          header={ secondSectionTitle }
          text={ secondSectionText }
          image={ secondImage }
          textPlacement="right"
          sectionNo="second"
        />
        <WelcomeSectionComponent
          header={ thirdSectionTitle }
          text={ thirdSectionText }
          image={ thirdImage }
          textPlacement="left"
          sectionNo="third"
        />
        <WelcomeSectionComponent
          header={ fourthSectionTitle }
          text={ fourthSectionText }
          image={ fourthImage }
          textPlacement="right"
          sectionNo="fourth"
        />
      </div>
    );
  }
}

export default WelcomePage;
