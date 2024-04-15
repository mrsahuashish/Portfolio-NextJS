'use client';

import {
  RiYoutubeFill,
  RiLinkedinFill,
  RiGithubFill,
  RiWhatsappFill,
  RiFacebookFill,
  RiInstagramFill,
  RiStackOverflowFill
} from 'react-icons/ri';

import Link from 'next/link';

const icons = [
  {
    path: 'https://api.whatsapp.com/send/?phone=7016292802&text=Hello%2C+I+saw+your+portfolio+and+would+like+to+discuss+potential+projects.&type=phone_number&app_absent=0',
    name: <RiWhatsappFill />
  },
  {
    path: 'https://stackoverflow.com/users/23340623/mrsahuashish',
    name: <RiStackOverflowFill />
  },
  {
    path: 'https://www.linkedin.com/in/mrsahuashish/',
    name: <RiLinkedinFill />
  },
  {
    path: 'https://github.com/mrsahuashish',
    name: <RiGithubFill />
  },
  {
    path: 'https://www.facebook.com/mrsahuashish',
    name: <RiFacebookFill />
  },
  {
    path: 'https://www.instagram.com/mrsahuashish',
    name: <RiInstagramFill />
  }
]

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index} target='_blank'>
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        )
      })}
    </div>
  )
}

export default Socials