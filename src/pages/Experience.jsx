import { React, useEffect } from 'react';
import anime from 'animejs';

//---- Component imports
import PageTitle from '../components/PageTitle';

export default function Experience(props) {
  let experienceList = [
    {
      key: 1,
      year: 2021,
      name: 'Stage lsr var',
      durationLocation: '3 semaines, toulon',
      tasks: 'Refonte complète du site internet',
      link: 'https://www.lsr83000.fr/',
      languageUsed: ['html', 'css', 'javascript', 'svelte'],
    },
    {
      key: 2,
      year: 2020,
      name: 'Stage Layher',
      durationLocation: ' 2 mois, paris',
      tasks: 'Création de plugins SketchUp et Revit',
      languageUsed: ['c_sharp', 'ruby'],
    },
  ];

  function loadEnterAnimation(duration) {
    let tl = anime.timeline();

    tl.add({
      targets: '.experienceCard',
      translateY: [150, 0],
      opacity: [0, 1],
      easing: 'easeOutQuint',
      duration: duration,
      delay: anime.stagger(125),
    });
  }

  useEffect(() => {
    anime({
      targets: '.container, .pageTitle',
      opacity: [0, 0],
    });

    if (props.startAnimations) {
      setTimeout(() => {
        anime({
          targets: '.container',
          opacity: [0, 1],
        });

        anime({
          targets: '.pageTitle',
          opacity: [0, 0.2],
        });
        loadEnterAnimation(1200);
      }, 800);
    }
  });

  return (
    <>
      <PageTitle title='Experience' />
      <main className='experiencePage'>
        <div className='container experienceContainer'>
          <div className='experienceList'>
            {experienceList
              .sort((a, b) => {
                return a.year > b.year ? 0 : 1;
              })
              .map((experience) => {
                return (
                  <>
                    {experience.link ? (
                      <a
                        href={experience.link}
                        className='experienceCard link'
                        rel='noreferrer'
                        target='_blank'
                      >
                        <div className='year'>{experience.year}</div>
                        <div className='name'>{experience.name}</div>
                        <div className='durationLocation'>
                          {experience.durationLocation}
                        </div>
                        <div className='tasks'>{experience.tasks}</div>
                        <p className='linkIndication'>
                          Cliquez pour visiter le site
                        </p>
                      </a>
                    ) : (
                      <div className='experienceCard'>
                        <div className='year'>{experience.year}</div>
                        <div className='name'>{experience.name}</div>
                        <div className='durationLocation'>
                          {experience.durationLocation}
                        </div>

                        <div className='tasks'>{experience.tasks}</div>
                      </div>
                    )}
                  </>
                );
              })}
          </div>
        </div>
      </main>
    </>
  );
}
