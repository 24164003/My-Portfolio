import { useState } from 'react'

const About = () => {

  const [aboutEducation, setAboutEducation] = useState(false);
  const [aboutExperience, setAboutExperience] = useState(false);

  return (
    <div className='aboutsection-parent'>

      <div className='about-firstchild'>
        <div className='about-description'>

          <div style={{ width: '1px', height: '100%', position: 'absolute', left: '5%', background: 'white' }}></div>
          <div style={{ width: '1px', height: '100%', position: 'absolute', left: '10%', background: 'white' }}></div>
          <div style={{ height: '1px', width: '100%', position: 'absolute', bottom: '7%', background: 'white' }}></div>

          <div className='about-description-text'>
            I’m a designer passionate about creating meaningful
            experiences, whether in physical spaces or digital
            interfaces. With a year of hands-on interior redesign
            experience, I’ve developed a strong understanding of
            how environments shape human interaction. Now, I’m
            channeling that expertise into UI/UX design, where
            functionality meets beauty. As a post-graduate student
            in Interaction and Experience Design, I’m driven to
            craft user experiences that are intuitive, impactful,
            and seamlessly blend design with technology.
          </div>
        </div>
        <div className='about-qualification'>


          {
            !aboutEducation &&
            <div className='about-qualification-edu'
              onClick={() => { setAboutEducation(true) }}
              style={{ cursor: 'pointer' }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#FFFFFF"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M9 9l5 12 1.774-5.226L21 14 9 9z" />
                <path d="M16.071 16.071l4.243 4.243" />
                <path d="M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
              </svg>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '5px' }}>
                EDUCATION
              </div>
            </div>
          }

          {
            aboutEducation &&
            <div style={{ height: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '80%', color: 'white', cursor: 'pointer' }}
              onClick={() => { setAboutEducation(false) }}
            >
              <div style={{ width: '50%', padding: '10px' }}>
                2016 – 2019
                <br />
                International Indian school Jeddah
                <br />
                <div style={{ fontSize: 'small' }}>
                  High school
                  Al Aziziah, Jeddah, Saudi Arabia
                </div>
              </div>
              <div style={{ width: '50%', padding: '10px' }}>
                2019 – 2023
                <br />
                Manipal School Of Architecture And
                Planning
                <br />
                <div style={{ fontSize: 'small' }}>
                  Bachelor in Interior Design
                  MIT gate 4, Manipal, Karnataka
                </div>
              </div>
            </div>
          }


          <div style={{ height: '1px', width: '100%', background: '#000000' }}></div>

          {
            !aboutExperience &&
            <div className='about-qualification-exp'
              onClick={() => { setAboutExperience(true) }}>
              <div style={{ display: 'flex', cursor: 'pointer', padding: '5px' }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#FFFFFF"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M9 9l5 12 1.774-5.226L21 14 9 9z" />
                  <path d="M16.071 16.071l4.243 4.243" />
                  <path d="M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                </svg>
                <div>
                  EXPERIENCE
                </div>
              </div>
            </div>
          }

          {
            aboutExperience &&
            <div style={{ height: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '80%', color: 'white' }}
              onClick={() => { setAboutExperience(false) }}
            >
              <div style={{ width: '50%', padding: '10px' }}>
                2021-2022
                <br />
                Ace Interiors, Mangalore
                <br />
                <div style={{ fontSize: 'small' }}>
                  Worked as an entry-level design intern 6 months at a
                  commercial and residential interior design firm
                </div>
              </div>
              <div style={{ width: '50%', padding: '10px' }}>
                2023-2024
                <br />
                Design Transit Pvt Ltd, Bangalore
                <br />
                <div style={{ fontSize: 'small' }}>
                  Worked as junior architect with one year of professional
                  experience specialized in co-working spaces
                </div>
              </div>
            </div>
          }
        </div>
      </div>
      <div className='aboutsection-secondchild'>
      </div>
    </div>
  )
}

export default About