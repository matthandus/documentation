import { getGuideDirectory, simpleLink } from './../helpers';

const integrations = () => {
  return {
    link: '/automate',
    // better name for this section needed
    title: 'Automate and Integrate',
    children: [

      simpleLink('/integrations'),


      getGuideDirectory('guides/pagerduty', 'PagerDuty'),
      getGuideDirectory('guides/accessibility'),
      simpleLink('/deploybot'),

      simpleLink('/email'),
      simpleLink('/sendgrid'),
      simpleLink('/rerouting-outbound-email'),


      simpleLink('/pivotal-tracker'),

      simpleLink('/lockr'),
      simpleLink('/pingdom-uptime-check'),
      simpleLink('/jenkins'),
      simpleLink('/content-staging', "Content Staging"),

      simpleLink('/behat', "Behat Testing"),
      simpleLink('/visual-studio-code', "Visual Studio Code"),

    ],
  }

};

export default integrations;
